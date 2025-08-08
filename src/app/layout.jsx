import { SpeedInsights } from '@vercel/speed-insights/next';
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import { ToastContainer } from "react-toastify";
import Navbar from '../components/Navbar';


export const metadata = {
  title: "Fabrication, Bin Manufacturing & Welding",
  description: "A welding services website built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <title>Fabrication, Bin Manufacturing & Welding</title>
        <meta name="description" content="A welding services website built with Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        {children}
        <Navbar />
        <ToastContainer position='top-right' autoClose={3000}/>
        <SpeedInsights />
      </body>
    </html>
  );
}
