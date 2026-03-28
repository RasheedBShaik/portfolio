import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-12 text-[var(--text)] bg-[var(--bg)]">
      <div className="flex justify-center">
        <a href="/#top">
          <div className="flex flex-col gap-3 group cursor-pointer">
            <div className="flex justify-center">
              {/* Inline SVG Replacement */}
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-white group-hover:-translate-y-1 transition-transform duration-300"
              >
                <path d="m18 15-6-6-6 6" />
                <path d="m18 9-6-6-6 6" />
              </svg>
            </div>
            <div className="text-white font-bold tracking-widest text-xs">
              BACK TO TOP
            </div>
          </div>
        </a>
      </div>

      <div className="text-center text-lg md:text-2xl pb-20 opacity-50">
        © 2024 @Rasheed Basha All Rights Reserved.
      </div>
    </footer>
  );
};