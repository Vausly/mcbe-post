export const formatFullDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).replace(',', '');
};

export const formatRelativeTime = (dateStr: string): string => {
  const now = new Date();
  const past = new Date(dateStr);
  const diffMs = now.getTime() - past.getTime();

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;

  const diffYear = Math.floor(diffMs / year);
  const diffMonth = Math.floor((diffMs % year) / month);
  const diffWeek = Math.floor((diffMs % month) / week);
  const diffDay = Math.floor(diffMs / day);
  const diffHour = Math.floor(diffMs / hour);

  if (diffDay === 1) return 'yesterday';
  if (diffDay < 1) return `${diffHour} hour${diffHour !== 1 ? 's' : ''} ago`;
  if (diffDay < 7) return `${diffDay} day${diffDay !== 1 ? 's' : ''} ago`;
  if (diffDay < 30) {
    return `${Math.floor(diffDay / 7)} week${Math.floor(diffDay / 7) !== 1 ? 's' : ''} ago`;
  }

  if (diffYear >= 1) {
    if (diffMonth >= 1) {
      return `${diffYear} year${diffYear !== 1 ? 's' : ''}, ${diffMonth} month${diffMonth !== 1 ? 's' : ''} ago`;
    } else {
      return `${diffYear} year${diffYear !== 1 ? 's' : ''} ago`;
    }
  }

  if (diffMonth >= 1) {
    if (diffWeek >= 1) {
      return `${diffMonth} month${diffMonth !== 1 ? 's' : ''}, ${diffWeek} week${diffWeek !== 1 ? 's' : ''} ago`;
    } else {
      return `${diffMonth} month${diffMonth !== 1 ? 's' : ''} ago`;
    }
  }

  return '';
};
