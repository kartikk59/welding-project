import { SpeedInsights } from '@vercel/speed-insights/next';
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import { ToastContainer } from "react-toastify";
import Navbar from '../components/Navbar';


export const metadata = {
  title: "Welding-Website",
  description: "A welding services website built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
        <Navbar />
        <ToastContainer position='top-right' autoClose={3000}/>
        <SpeedInsights />
      </body>
    </html>
  );
}
