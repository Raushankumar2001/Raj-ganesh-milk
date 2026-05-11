import { Mukta, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap"
});

const mukta = Mukta({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mukta",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL("https://rajganeshdairy.com"),
  title: {
    default: "Raj Ganesh Dairy | Fresh Milk Delivery in Muzaffarpur",
    template: "%s | Raj Ganesh Dairy"
  },
  description:
    "Pure, hygienic and fresh local dairy products delivered across Muzaffarpur, Bihar. Order milk, paneer, dahi and ghee from Raj Ganesh Dairy.",
  keywords: [
    "Raj Ganesh Dairy",
    "milk delivery Muzaffarpur",
    "fresh milk Bihar",
    "paneer Muzaffarpur",
    "local dairy Muzaffarpur"
  ],
  openGraph: {
    title: "Raj Ganesh Dairy",
    description: "Pure local milk, handled hygienically and delivered fresh for families in Muzaffarpur.",
    images: ["/images/raj-ganesh-hero.png"],
    locale: "en_IN",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body className={`${poppins.variable} ${mukta.variable} font-sans`}>{children}</body>
    </html>
  );
}
