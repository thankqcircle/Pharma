import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/7569881289"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7" fill="white" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring opacity-75" />
    </a>
  );
}
