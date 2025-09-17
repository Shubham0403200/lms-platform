"use client"
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import axios, { AxiosError } from "axios"
import { Input } from '@/components/ui/input';
import { EyeIcon, EyeOffIcon, Loader2 } from 'lucide-react';
import { registerSchema } from '@/backend/schemas/registerSchema';
import { ApiResponse } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const RegisterPage = () => {

  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const [ terms, setTerms ] = useState([]); 
  const [ policy, setPolicy ] = useState([]); 
  const [ visibility, setVisibility ] = useState(false);

  const handleClick = () => {setVisibility(!visibility)};

  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "", 
      email: "", 
      password: "",
      isAccepted: false, 
    }
  });

  const onSubmit = async (data: z.infer<typeof registerSchema >) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post<ApiResponse>('/api/register', data);

      toast({
        title: 'Success',
        description: response.data.message,
      });
      router.replace(`/verify/${data.username}`);
      setIsSubmitting(false);
    } catch (error) {
      console.log('Error during sign-up:', error);
      const axiosError = error as AxiosError<ApiResponse>;
      let errorMessage = axiosError.response?.data.message;
      ('There was a problem with your sign-up. Please try again.');

      toast({
        title: 'Sign Up Failed',
        description: errorMessage,
        variant: 'destructive',
      });

      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const currentTime = new Date().toISOString()
    const fetchTerms = async () => {
      try {
        const response = await axios.get(`/api/admin/terms/register?time=${encodeURIComponent(currentTime)}`);
        if (response.data.success) {
          setTerms(response.data.terms.termForWebsite || []);  
          setPolicy(response.data.terms.privacyForWebsite || []);  
        } 
      } catch (error) {
        console.log("Error fetching terms and conditions:", error);
      }
    };

    fetchTerms();
  }, []);

  return (
    <div className=' w-full space-y-4 overflow-y-auto'>
        <div className='mt-16'>
            <h3 className="text-h3-clamp font-bold text-center ">
               Welcome, IELTS Aspirants!
            </h3>
            <h5 className="text-h5-clamp font-medium text-center ">
               Register With your Account!
            </h5>
        </div>
        <div className='px-4'>
          <Form {...form} >
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField 
                    name='username'
                    control={form.control}
                    render={({field}) => (
                      <FormItem>
                        <FormLabel> Username </FormLabel>
                        <Input 
                            {...field} type='text' name='username' placeholder='johnDoe' 
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField 
                    name='email'
                    control={form.control}
                    render={({field}) => (
                      <FormItem>
                        <FormLabel> Email </FormLabel>
                        <Input {...field} type='email' name='email' placeholder='johnDoe@gmail.com' />
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
                  <FormField
                    control={form.control}
                    name="isAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel> 
                            Accept terms and conditions
                          </FormLabel>
                          <FormDescription>
                            You agree to our {" "}
                            <Dialog>
                              <DialogTrigger asChild >
                                <span className="text-slate-950 font-medium cursor-pointer hover:underline ">
                                  Terms of Service 
                                </span>
                              </DialogTrigger>
                              <DialogContent className="p-3 md:p-4 sm:mx-4 w-[90vw] rounded-md sm:max-w-[425px] max-h-[85vh] md:max-w-xl overflow-y-auto">
                                <DialogHeader className='items-start' >
                                  <DialogTitle className='text-h4-clamp' > Terms and Conditions </DialogTitle>
                                </DialogHeader>
                                <div className="text-h6-clamp flex flex-col space-y-2 mt-4">
                                  {terms.map((term: any, index: any) => (
                                    <span key={index} > {index + 1}. {term.term} </span>
                                  ))}
                                </div>
                              </DialogContent>
                            </Dialog>
                             {" "}and{" "} 
                             <Dialog>
                              <DialogTrigger asChild >
                                <span className="text-slate-950 font-medium cursor-pointer hover:underline ">
                                  Privacy Policy 
                                </span>
                              </DialogTrigger>
                              <DialogContent className="p-3 md:p-4 sm:mx-4 w-[90vw] rounded-md sm:max-w-[425px] max-h-[85vh] md:max-w-xl overflow-y-auto">
                                <DialogHeader className='items-start' >
                                  <DialogTitle className='text-h4-clamp' > Privacy Policy </DialogTitle>
                                </DialogHeader>
                                <div className="text-h6-clamp flex flex-col space-y-2 mt-4">
                                  {policy.map((pole: any, index: any) => (
                                    <span key={index} > {index + 1}. {pole.term} </span>
                                  ))}
                                </div>
                              </DialogContent>
                            </Dialog>
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button type='submit' className='w-full' disabled={isSubmitting}  >
                     { isSubmitting ?  (
                      <>
                        <Loader2 className='mr-2 h-4 w-4  animate-spin '/>
                        Please Wait
                      </>
                     ) : "Register"}
                  </Button>
              </form>
          </Form>
        </div>
        <div className="text-center">
          <p>
            Already a member?{' '}
            <Link href="/login" className="text-blue-600 hover:text-blue-800">
               Login
            </Link>
          </p>
        </div>
    </div>
  )
}

export default RegisterPage