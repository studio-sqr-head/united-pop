export const getClosestDateToToday = (startdates: Date[]) =>
  startdates.reduce((a, b) =>
    Math.abs(a.getTime() - new Date().getTime()) <
    Math.abs(b.getTime() - new Date().getTime())
      ? a
      : b
  );
