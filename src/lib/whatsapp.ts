export function openWhatsApp(message: string = '') {
  const phoneNumber = '8801642775100';
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, '_blank');
}

export function createEnrollmentMessage(name: string, phone: string, email: string, message: string) {
  return `*New Enrollment Inquiry*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Message:* ${message}`;
}
