// checks dates and returns the closest future date to today
export const getClosestFutureDateToToday = (startdates: Date[]) => {
  const today = new Date();
  const futureDates = startdates.filter((date) => date > today);
  return futureDates.sort((a, b) => a.getTime() - b.getTime())[0];
};
