import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  variable: '--font-poppins',
  subsets: ["latin"],
  weight: ['100', '300', '500', '700', '900']
});

export const metadata = {
  title: "Construtora Marceline",
  description: "Materializando sonhos há 10 anos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
