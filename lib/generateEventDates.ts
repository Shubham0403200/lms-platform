export function generateEventDates(startDate: Date, endDate: Date, weekdays: string[]): Date[] {
    const result: Date[] = [];
    const weekdayMap: { [key: string]: number } = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6
    };
  
    let currentDate = new Date(startDate);
    currentDate.setHours(0, 0, 0, 0);
  
    // Ensure the startDate is valid
    if (isNaN(currentDate.getTime())) return result;
  
    console.log('Start Date:', currentDate.toISOString().split('T')[0]);
    console.log('End Date:', endDate.toISOString().split('T')[0]);
    console.log('Weekdays:', weekdays);
  
    // Fix the initial setting of currentDate
    currentDate = new Date(startDate);
    
    while (currentDate <= endDate) {
      const dayName = Object.keys(weekdayMap).find(day => weekdayMap[day] === currentDate.getDay()) || '';
      
      console.log('Current Date:', currentDate.toISOString().split('T')[0], 'Day:', dayName);
  
      if (weekdays.includes(dayName)) {
        console.log('Adding Date:', currentDate.toISOString().split('T')[0]);
        result.push(new Date(currentDate));
      }
  
      // Move to the next day
      currentDate.setDate(currentDate.getDate() + 1);
    }
    console.log('Generated Dates:', result.map(date => date.toISOString().split('T')[0]));
    return result;
  }