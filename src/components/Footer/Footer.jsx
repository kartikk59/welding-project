'use client';
import React from 'react'


export default function Footer() {
  return (
    
<div>
        <footer className="bg-gray-200 px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-black">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div className="md:max-w-96">
                    <img src="/logo.png" alt="logo" className='h-30' />
                    <p className="mt-6 text-sm">
                       <span className='text-blue-600 underline underline-offset-2'>J. Fabricators</span> is a trusted welding and metal fabrication company based in Victoria, Melbourne. Specializing in high-quality, reliable welding solutions for residential, commercial, and industrial clients. With a team of certified welders and fabricators, we bring over 3 years of hands-on experience to every project—delivering strong, precise, and lasting results.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="/">Home</a></li>
                            <li><a href="/#Services">Our Service</a></li>
                            <li><a href="/about-us">About Us</a></li>
                            <li><a href="/#Contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>(04) 3359 3903</p>
                            <p>jbinsrepairs@gmail.com</p>
                            <p>Location: We service the entire Melbourne region. Please call for more details.</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-xs md:text-sm pb-5">
                Copyright 2025 © J Fabricators | All Right Reserved.
            </p>
        </footer>
    </div>
  )
}
