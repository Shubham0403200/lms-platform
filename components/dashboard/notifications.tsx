"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Notify } from "@/backend/models/Notifications";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useToast } from "../ui/use-toast";
import axios from "axios";
import DeleteAlert from "./delete-alert";

export function Notifications({ isOpen, onClose, notifications, userId, refreshNotifications }: {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
  notifications: Notify[];
  refreshNotifications: () => void; 
}) {
  const [activeTab, setActiveTab] = useState<string>("UnRead");
  const { toast } = useToast();

  const filteredNotifications = notifications.filter((notification) => {
    if (activeTab === "All") return true;
    return activeTab === "Read" ? notification.status === "Read" : notification.status === "UnRead";
  });

  if (!isOpen) return null;

  const handleStatusUpdate = async (userId: String) => { 
    try { 
      const response = await axios.patch(`/api/dashboard/notifications/${userId}`); 
      if (response.data.success) { 
        toast({
          title: "Task Completed!", 
          description: response.data.message, 
        })
        refreshNotifications(); 
      } else { 
        toast({
          title: "notification status update failed", 
          description: response.data.message, 
          variant: "destructive"
        })  
      }
    } catch (error) { 
      console.log("notification status update error: ", error); 
      toast({
        title: "notification status update failed", 
        description: "notification status update error. Please try again later!", 
        variant: "destructive"
      })
    }
  }

  const handleDelete = async (userId: String) => { 
    try { 
      const response = await axios.delete(`/api/dashboard/notifications/${userId}`); 
      if (response.data.success) { 
        toast({
          title: "Task Completed!", 
          description: response.data.message, 
        })
        refreshNotifications(); 
      } else { 
        toast({
          title: "Notification deletion failed", 
          description: response.data.message, 
          variant: "destructive"
        })  
      }
    } catch (error) { 
      console.log("notification deletion error: ", error); 
      toast({
        title: "notification deletion failed", 
        description: "notification status update error. Please try again later!", 
        variant: "destructive"
      })
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end">
      <motion.div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      ></motion.div>
      <motion.div
        className="relative bg-white dark:bg-black w-[80vw] sm:w-[65vw] md:w-[37rem] p-2 md:p-4 shadow-lg rounded-md mt-8 mr-4"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex justify-between items-center pb-1 overflow-x-hidden border-b">
          <h3 className="text-h5-clamp font-semibold">Notifications</h3>
          <Button variant="outline" size="sm" className="p-2 rounded-full" onClick={onClose}>
            <X className="w-4 h-4 cursor-pointer" />
          </Button>
        </div>
        <Tabs defaultValue="UnRead" onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="mt-2">
            <TabsTrigger value="UnRead">Unread</TabsTrigger>
            <TabsTrigger value="Read">Read</TabsTrigger>
            <TabsTrigger value="All">All</TabsTrigger>
          </TabsList>
          <TabsContent value={activeTab} className='h-[40vh] overflow-y-auto'>
            {filteredNotifications.slice().reverse().map((notification) => (
              <div key={notification._id} className="flex items-start hover:bg-black/10 justify-between space-x-3 border-b py-2">
                <div className="flex items-start space-x-2">
                  <Avatar className="h-7 w-7">
                    <AvatarFallback>{notification.label.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className=" text-xs md:text-sm text-black font-medium dark:text-white">{notification.notification}</p>
                    <p className="text-xs text-slate-500 dark:text-gray-400">
                      {notification.createdAt 
                        ? new Date(notification.createdAt).toLocaleString('en-IN', { 
                            dateStyle: 'short', 
                            timeStyle: 'short' 
                          }) 
                        : 'Date not available'}
                    </p>
                  </div>
                </div>
                <div className={`flex-shrink-0 mt-2 w-2 h-2 rounded-full ${notification.status === "Read" ? "bg-green-500" : "bg-red-500"}`} />
              </div>
            ))}
          </TabsContent>
            <div className="flex items-center justify-between mt-2">
                <span onClick={() => handleStatusUpdate(userId)} className="text-xs mt-2 underline font-medium cursor-pointer ">
                    Mark All as Read!
                </span>
                <DeleteAlert onClick={() => handleDelete(userId)} />
            </div>
        </Tabs>
      </motion.div>
    </div>
  );
}
