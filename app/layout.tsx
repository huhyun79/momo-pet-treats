import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOMO - \uc88b\uc740 \uac04\uc2dd, \uc88b\uc740 \ud558\ub8e8",
  description: "\ubc18\ub824\ub3d9\ubb3c\uc758 \ud558\ub8e8\ub97c \uc0dd\uac01\ud55c \uc791\uc740 \uac04\uc2dd \ube0c\ub79c\ub4dc MOMO",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}

