"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import axios, { AxiosError } from "axios"
import { Loader2 } from 'lucide-react';
import { ApiResponse } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { verifySchema } from '@/backend/schemas/registerSchema';

const VerifyCode = () => {

  const [ isSubmitting, setIsSubmitting ] = useState(false);

  const { toast } = useToast();
  const router = useRouter();
  const params = useParams<{ username: string }>();


  const form = useForm<z.infer<typeof verifySchema>>({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      verifyCode: "", 
    }
  });

  const onSubmit = async (data: z.infer<typeof verifySchema >) => {

    if (data.verifyCode === '' || data.verifyCode.length < 6) { 
      return toast({
        title: "Verification Error", 
        description: " Please enter the valid OTP first! "
      })
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post<ApiResponse>('/api/verify', {
        username: params.username,
        code: data.verifyCode,
      });
      
      if ( response.data.success) { 
        toast({
          title: 'Success',
          description: response.data.message,
        });
        router.push("/login");
      } else { 
        toast({
          title: 'Failed',
          description: response.data.message,
        });        
      }
      setIsSubmitting(false);        

    } catch (error) {
      console.log('Error during otp verification:', error);
      const axiosError = error as AxiosError<ApiResponse>;

      // Default error message
      let errorMessage = axiosError.response?.data.message;
      ('There was a problem with your forgot password. Please try again.');

      toast({
        title: 'OTP Verification Failed!',
        description: errorMessage,
        variant: 'destructive',
      });

      setIsSubmitting(false);
    }
  };

  return (
    <div className=' w-full space-y-8 overflow-y-auto'>
        <div className='mt-24 '>
            <h2 className="text-h3-clamp font-bold text-center ">
               OTP Verification 
            </h2>
        </div>
        <div className='px-4 overflow-hidden'>
          <Form {...form} >
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField 
                    name='verifyCode'
                    control={form.control}
                    render={({field}) => (
                      <FormItem>
                        <FormLabel> Enter OTP </FormLabel>
                        <InputOTP
                          {...field}
                          maxLength={6}
                        >
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                        <FormDescription>
                          Please enter the one-time password sent to your registered Email Id.
                        </FormDescription>
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

export default VerifyCode;