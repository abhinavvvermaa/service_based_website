import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi Navni ElectroTech Team, I am interested in your services."
  );

  return (
    <a
      href={`https://wa.me/919634624084?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-[9999]
        w-16
        h-16
        bg-[#25D366]
        rounded-full
        flex
        items-center
        justify-center
        shadow-[0_8px_24px_rgba(37,211,102,0.6)]
        hover:scale-110
        transition
        duration-300
      "
    >
      <FaWhatsapp className="text-white text-[2.6rem]" />
    </a>
  );
}
