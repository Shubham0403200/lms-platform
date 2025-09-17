"use client"
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {Form,FormField,FormItem,FormLabel,FormMessage} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import axios, { AxiosError } from "axios"
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { ApiResponse } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { changePasswordSchema } from '@/backend/schemas/registerSchema';

const ChangePassword = () => {

  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const tokenFromUrl = query.get('token');
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    }
  }, []);

  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      newPassword: "", 
      confirmPassword: "",
    }
  });

  const onSubmit = async (data: z.infer<typeof changePasswordSchema >) => {
    setIsSubmitting(true);

    if (data.newPassword === '' || data.confirmPassword === '') { 
      return toast({
        title: "Login Error", 
        description: " Please enter all the valid details first! "
      })
    }

    if ( data.newPassword === data.confirmPassword ) { 

        try {
          const response = await axios.post<ApiResponse>('/api/change-password', {
            token, 
            newPassword: data.newPassword
          });

          if (response.data.success) { 
            toast({
              title: 'Success',
              description: response.data.message,
            }); 
            router.replace(`/login`);      
            setIsSubmitting(false);
          } else { 
            toast({
              title: 'Failed',
              description: response.data.message,
              variant: "destructive", 
            }); 
          }
    
        } catch (error) {
          console.log('Error during password change:', error);
          const axiosError = error as AxiosError<ApiResponse>;
    
          // Default error message
          let errorMessage = axiosError.response?.data.message;
          ('There was a problem with your password Change. Please try again.');
    
          toast({
            title: 'Password Change Failed!',
            description: errorMessage,
            variant: 'destructive',
          });
    
          setIsSubmitting(false);
        }
    } else { 
        toast({
            title: "Password Change Failed", 
            description: "The passwords does not match",
            variant: 'destructive'
        })
    }

  };

  return (
    <div className=' w-full space-y-8 overflow-y-auto'>
        <div className=' mt-24 '>
            <h3 className="text-h3-clamp font-bold text-center ">
               Hello, IELTS Aspirants!
            </h3>
            <h5 className="text-h5-clamp font-medium text-center ">
               Change your password to something new!
            </h5>
        </div>
        <div className='px-4'>
          <Form {...form} >
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField 
                    name='newPassword'
                    control={form.control}
                    render={({field}) => (
                      <FormItem>
                        <FormLabel> New Password </FormLabel>
                        <Input {...field} type='password' name='newPassword' placeholder='Enter new Password' />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField 
                    name='confirmPassword'
                    control={form.control}
                    render={({field}) => (
                      <FormItem>
                        <FormLabel> Confirm Password </FormLabel>
                        <Input {...field} type='password' name='confirmPassword' placeholder='Re-enter your new password' />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type='submit' className='w-full' disabled={isSubmitting}  >
                     { isSubmitting ?  (
                      <>
                        <Loader2 className='mr-2 h-4 w-4  animate-spin '/>
                        Please Wait
                      </>
                     ) : "Submit"}
                  </Button>
              </form>
          </Form>
        </div>
    </div>
  )
}

export default ChangePassword;