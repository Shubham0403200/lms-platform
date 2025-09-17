"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {Form,FormField,FormItem,FormLabel,FormMessage} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useToast } from '@/components/ui/use-toast';
import axios, { AxiosError } from "axios"
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { ApiResponse } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotSchema } from '@/backend/schemas/registerSchema';

const ForgotPassword = () => {

  const [ isSubmitting, setIsSubmitting ] = useState(false);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof forgotSchema>>({
    resolver: zodResolver(forgotSchema),
    defaultValues: {
      email: "", 
    }
  });

  const onSubmit = async (data: z.infer<typeof forgotSchema >) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post<ApiResponse>('/api/forgot-password', data);

      if (response.data.success){
          toast({
            title: 'Success',
            description: response.data.message,
          });
          setIsSubmitting(false);
          form.reset();
      } else { 
        toast({
          title: 'Email Submission Failed',
          description: response.data.message,
          variant: "destructive"
        });
      }
    } catch (error) {
      console.log('Error during forget password:', error);
      const axiosError = error as AxiosError<ApiResponse>;
      let errorMessage = axiosError.response?.data.message;
      ('There was a problem with your forgot password. Please try again.');

      toast({
        title: 'Email ID submission Failed!',
        description: errorMessage,
        variant: 'destructive',
      });

      setIsSubmitting(false);
    }
  };

  return (
    <div className=' w-full space-y-8 overflow-y-auto'>
        <div className=' mt-24 '>
            <h2 className="text-h2-clamp font-bold text-center ">
               Forgot Password? 
            </h2>
            <h5 className="text-h5-clamp font-medium text-center ">
               Please enter your verified email Id 
            </h5>
        </div>
        <div className='px-4'>
          <Form {...form} >
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField 
                    name='email'
                    control={form.control}
                    render={({field}) => (
                      <FormItem>
                        <FormLabel> Email </FormLabel>
                        <Input {...field} type='email' name='email' placeholder='johndoe@gmail.com' />
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
                     ) : " Send Link "}
                  </Button>
              </form>
          </Form>
        </div>
        <div className="text-center">
          <p>
             Go back to {' '}
            <Link href="/login" className="text-blue-600 hover:text-blue-800">
               Login
            </Link>
            {' '} page
          </p>
        </div>

    </div>
  )
}

export default ForgotPassword;