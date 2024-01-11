export function generateLocalDate(dateString) {
  const date = new Date(dateString);

  // Formatting the date in a readable format
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
}
