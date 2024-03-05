export function formatDate(date: Date) {
  const months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const persianDate = new Intl.DateTimeFormat("fa", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(date);

  return persianDate.replace(
    /(\d+) ([^\s]+) (\d{4}), (\d+:\d+)/,
    (_, day, month, year, time) =>
      `${day} ${months[months.indexOf(month)]} ${year} ${time}`
  );
}
