import axios from "axios";

export const addNotification = async ({
  userId,
  notification,
  label,
  role,
}: {
  userId?: string;
  notification: string;
  label: string;
  role?: string;
}) => {
  try {
    const response = await axios.post("/api/dashboard/notifications", {
      userId,
      notification,
      label,
      role,
    });

    if (response.data.success) {
      console.log("Notification added successfully");
    } else {
      console.log("Failed to add notification:", response.data.message);
    }
  } catch (error) {
    console.log("Error adding notification:", error);
  }
};
