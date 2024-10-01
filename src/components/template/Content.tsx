import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export interface ContentProps {
  children: ReactNode;
  className?: string;
  header?: boolean;
  footer?: boolean;
}

export default function Content({
  children,
  className,
  footer = true,
  header = true,
}: ContentProps) {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #2d0064 0%, #0d001c 100%)",
      }}
    >
      <div
        className="flex-1 flex flex-col w-full"
        style={{ background: 'url("/background.png")' }}
      >
        {header && <Header />}
        <main className={`flex-1 flex flex-col ${className ?? ""}`}>
          {children}
        </main>
        {footer && <Footer />}
      </div>
    </div>
  );
}
