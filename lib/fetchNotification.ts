// hooks/useNotifications.ts
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Notify } from '@/backend/models/Notifications';

const useNotifications = (userId?: string) => {
  const [notifications, setNotifications] = useState<Notify[]>([]);

  const fetchNotifications = async () => {
    if (!userId) return;
    
    try {
      const response = await axios.get(`/api/dashboard/notifications/${userId}`);
      if (response.data.success) {
        console.log("notifications: ", response.data.notifications);
        setNotifications(response.data.notifications);
      } else {
        console.log('Failed to fetch notifications:', response.data.message);
      }
    } catch (error) {
      console.log('Error fetching notifications:', error);
    }
  };

  useEffect(() => {
    fetchNotifications();
    // eslint-disable-next-line
  }, [userId]); 

  return notifications;
};

export default useNotifications;
