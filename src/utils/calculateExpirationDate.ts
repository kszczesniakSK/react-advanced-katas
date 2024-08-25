export function calculateExpirationDate(): Date {
    const currentDate = new Date();
    const expirationDate = new Date(currentDate);
    expirationDate.setDate(currentDate.getDate() + 7); // 7 days from today
    return expirationDate;
  }