export function cn(...classes: (string | undefined | null | boolean)[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date)
  }