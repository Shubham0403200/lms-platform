"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import axios, { AxiosError } from "axios"
import { Input } from '@/components/ui/input';
import { EyeIcon, EyeOffIcon, Loader2 } from 'lucide-react';
import { ApiResponse } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/backend/schemas/registerSchema';
import useUserStore from '@/app/store/authStore';

const LoginPage = () => {

  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const [ visibility, setVisibility ] = useState(false);

  const login = useUserStore((state) => state.login);

  const handleClick = () => { 
    setVisibility(!visibility);
  }

  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "", 
      password: "",
    }
  });

  const onSubmit = async (data: z.infer<typeof loginSchema >) => {
    setIsSubmitting(true);

    if (data.identifier === '' || data.password === '') { 
      return toast({
        title: "Login Error", 
        description: " Please enter all the valid details first! ",
        variant: "destructive",
      })
    }

    try {
      const userAgent = navigator.userAgent;
      const response = await axios.post<ApiResponse>('/api/login', {
        identifier: data.identifier, 
        userAgent,
        password: data.password
      });

      if (response.data.success && response.data.user && response.data.token) {
        login(response.data.user, response.data.token);
        // if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
        //   sessionStorage.setItem('token', token);
        // } else {
        //   document.cookie = `token=${token}; Max-Age=${24 * 60 * 60}; HttpOnly; Path=/;`;
        // }
      }

      toast({
        title: 'Login Successful!',
        description: response.data.message,
      });

      router.push("/")
      setIsSubmitting(false);
    } catch (error) {
      console.log('Error during login:', error);
      const axiosError = error as AxiosError<ApiResponse>;

      let errorMessage = axiosError.response?.data.message;
      ('There was a problem with your login. Please try again.');

      toast({
        title: 'Login Failed!',
        description: errorMessage,
        variant: 'destructive',
      });

      setIsSubmitting(false);
    }
  };

  

  return (
    <div className=' w-full space-y-8 overflow-y-auto'>
        <div className=' mt-24 '>
            <h3 className="text-h3-clamp font-bold text-center ">
               Welcome Back, IELTS Aspirants!
            </h3>
            <h5 className="text-h5-clamp font-medium text-center ">
               Login With your Account!
            </h5>
        </div>
        <div className='px-4'>
          <Form {...form} >
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField 
                    name='identifier'
                    control={form.control}
                    render={({field}) => (
                      <FormItem>
                        <FormLabel> Email / Username </FormLabel>
                        <Input {...field} type='text' name='identifier' placeholder='Enter Email or Username' />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField 
                    name='password'
                    control={form.control}
                    render={({field}) => (
                      <FormItem>
                        <FormLabel> Password </FormLabel>
                        <div className='flex relative h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'>
                          <input {...field} type={ visibility ? 'text' : 'password'} name='password' placeholder='Please Enter a Valid Password' className='outline-0 border-0 w-full'/>
                          { visibility ?  (
                            <EyeOffIcon className='absolute right-2 top-2 w-5 h-5 text-muted-foreground cursor-pointer ' onClick={handleClick}  />
                          ) : (
                            <EyeIcon className='absolute right-2 top-2 w-5 h-5 text-muted-foreground cursor-pointer ' onClick={handleClick}  />
                          )}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type='submit' className='w-full' disabled={isSubmitting}  >
                     { isSubmitting ?  (
                      <>
                        <Loader2 className='mr-2 h-4 w-4 animate-spin '/>
                        Please Wait
                      </>
                     ) : "Sign In"}
                  </Button>
              </form>
          </Form>
        </div>
        <div className="text-center">
          <p>
            Don&apos;t have an Account?{' '}
            <Link href="/register" className="text-blue-600 hover:text-blue-800">
              Register
            </Link>
          </p>
          <div className="flex justify-center mt-2 items-center gap-x-5 ">
              <Link href='/forgot' >
                  Forgot Password? 
              </Link>
              <Link href='/' className="text-blue-600 hover:text-blue-800">
                  Home 
              </Link>
          </div>
        </div>
    </div>
  )
}

export default LoginPage