// checks dates and returns the closest future date to today
export const getClosestFutureDateToToday = (startdates: Date[]) => {
  const today = new Date()
  const futureDates = startdates.filter((date) => date > today)
  return futureDates.sort((a, b) => a.getTime() - b.getTime())[0]
}

export const formatDate = ({
  date,
  lang = "en",
}: {
  date?: Date | string
  lang?: "en" | "nl"
}) => {
  if (date == null) return "Coming Soon"
  if (typeof date === "string") date = new Date(date)
  return date?.toLocaleDateString(lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
