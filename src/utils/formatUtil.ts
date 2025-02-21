export function getFormattedDate(dateTime: Date) {
  return new Date(dateTime).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function getFormattedTime(dateTime: Date) {
  return new Date(dateTime).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });
}

export function getFormattedNumber(num: number) {
  return num.toString().padStart(2, '0');
}
