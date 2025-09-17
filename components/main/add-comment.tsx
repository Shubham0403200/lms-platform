// "use client";
// import commentSchema from "@/backend/schemas/commentSchema";
// import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { useToast } from "@/components/ui/use-toast";
// import { ApiResponse } from "@/types";
// import { zodResolver } from "@hookform/resolvers/zod";
// import axios, { AxiosError } from "axios";
// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { Loader2, Star } from "lucide-react";
// import { Input } from "../ui/input";
// import { Button } from "@/components/ui/button"
// import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import Image from "next/image";
// import { Comment } from "@/backend/models/blog";

// interface AddCommentsProps { 
//   id: string | null; 
//   location: string;
//   comments: Comment[]; 
//   username: string; 
//   subId?: string; 
// }

// const AddComments:React.FC<AddCommentsProps> = ({ id, location, comments, username, subId }) =>  {

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [newComment, setNewComment] = useState<Comment[]>(comments ?? []);
//   const { toast } = useToast();

//   const form = useForm<z.infer<typeof commentSchema>>({
//     defaultValues: {
//       comment: "",
//       stars: 1,
//     },
//     resolver: zodResolver(commentSchema),
//   });

//   useEffect(() => {
//     setNewComment(comments ?? []);
//   }, [comments]);

//   const onSubmit = async (data: z.infer<typeof commentSchema>) => {
//     setIsSubmitting(true);

//     if (!location || !id) { 
//       toast({
//         title: "Failed",
//         description: " Something went wrong. Please try again later!",
//         variant: "destructive",
//       });
//       return;
//     }
 
//     if (!username) {
//       toast({
//         title: "Failed",
//         description: " Please Login to continue",
//         variant: "destructive",
//       });
//       return;
//     }

//     try {
//       const response = await axios.post<ApiResponse>(`/api/dashboard/comments`, {
//           comment: data.comment,
//           username,
//           stars: data.stars, 
//           location: location, 
//           id: id, 
//           subId: subId, 
//       });

//       if (response.data.success) { 
//         toast({
//           title: "Success",
//           description: response.data.message,
//         });
//         form.reset();
//         setNewComment(response.data.comments ?? []); 
//       } else  {
//         toast({
//           title: "Something went wrong", 
//           description: response.data.message, 
//           variant: "destructive", 
//         })
//       }

//     } catch (error) {
//       console.log("Error during adding comment:", error);
//       const axiosError = error as AxiosError<ApiResponse>;

//       let errorMessage =
//         axiosError.response?.data.message ||
//         "There was a problem with adding comment. Please try again.";

//       toast({
//         title: "Commenting Failed!",
//         description: errorMessage,
//         variant: "destructive",
//       });
//     }  finally { 
//       setIsSubmitting(false); 
//     }
//   };

//   return (
//     <>    
//       <div className='flex flex-col items-start gap-2 md:flex-row md:justify-between md:items-center'>
//         <h5 className="text-h5-clamp font-bold mt-4">
//           Comments ({newComment?.length || 0})
//         </h5>
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button variant="outline">Add Comment</Button>
//           </DialogTrigger>
//           <DialogContent className="sm:max-w-[425px]">
//             <DialogHeader>
//               <DialogTitle>Add A Comment</DialogTitle>
//               <DialogDescription>
//                 This Comment will be visible to everyone. It cannot be deleted!
//               </DialogDescription>
//             </DialogHeader>
//             <Form {...form}>
//               <form
//                 onSubmit={form.handleSubmit(onSubmit)}
//                 className="mt-5 space-y-2 "
//               >
//                 <FormField
//                   name="comment"
//                   control={form.control}
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel> Comment </FormLabel>
//                       <Input {...field} type="text" placeholder="Add a comment" />
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   name="stars"
//                   control={form.control}
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel> Ratings </FormLabel>
//                       <div className="flex space-x-1">
//                         {[1, 2, 3, 4, 5].map((star) => (
//                           <Star
//                             key={star}
//                             {...field}
//                             className={`w-6 h-6 cursor-pointer ${
//                               star <= field.value ? "text-yellow-500" : "text-gray-400"
//                             }`}
//                             onClick={() => field.onChange(star)}
//                           />
//                         ))}
//                       </div>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <DialogFooter>
//                   <DialogClose asChild >

//                     <Button
//                       type="submit"
//                       className="text-xs"
//                       size="sm"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                           Please Wait!
//                         </>
//                       ) : (
//                         "Add Comment"
//                       )}
//                     </Button>
//                   </DialogClose>
//                 </DialogFooter>
//               </form>
//             </Form>
//           </DialogContent>
//         </Dialog>
//       </div>
//       <div className="flex flex-col space-y-8 mt-4">
//         {newComment?.slice().reverse().map((comment, index) => (
//           <div className="flex gap-x-4 items-start" key={index}>
//             <Image
//               src={ comment?.userImage || "https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
//               alt="comment-image"
//               width={32}
//               className="rounded-full aspect-auto"
//               height={32}
//             />
//             <div className="flex flex-col items-start ">
//               <h5 className="text-h6-clamp font-semibold">
//                 {comment.username}             
//               </h5>
//               <h6 className="text-h7-clamp font-medium">{comment.comment}</h6>
//             </div>
//           </div>
//         ))}
//         {newComment?.length === 0  && (
//           <div className='w-full flex flex-col items-center py-12 px-3 justify-center bg-blue-50 rounded-xl'>
//               <p className="text-h6-clamp font-semibold">
//                 No Comments yet!
//               </p>
//               <p className="text-h7-clamp font-medium text-muted-foreground">
//                 Be the first person to comment now!
//               </p>
//             </div>
//         )}
//       </div>
//     </>
//   )
// }

// export default AddComments;