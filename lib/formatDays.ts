export const formatEventDate = (
  startDate: Date | string,
  startTime: string
) => {
  const date = new Date(startDate);
  const day = date
    .toLocaleDateString("en-IN", { weekday: "short", timeZone: "UTC" })
    .slice(0, 3);
  const month = date
    .toLocaleDateString("en-IN", { month: "short", timeZone: "UTC" })
    .slice(0, 3);
  const dayNum = date.getUTCDate(); // Get the day in UTC
  const time = new Date(`1970-01-01T${startTime}Z`).toLocaleTimeString(
    "en-IN",
    { hour: "numeric", minute: "numeric", hour12: true, timeZone: "UTC" }
  );

  const daySuffix = (dayNum: number) => {
    if (dayNum > 3 && dayNum < 21) return "th";
    switch (dayNum % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}, ${month} ${dayNum}${daySuffix(dayNum)}, ${time}`;
};
