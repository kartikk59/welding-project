'use client';
import React from 'react'


export default function Services() {
  return (
    <>
    
        <div className='pt-10 pb-10 bg-gradient-to-r from-purple-100 to-pink-100' id='Services'>
        <h1 className="text-4xl font-semibold text-slate-800 pb-2 text-center mb-2 font-poppins">Our Services</h1>
        <p className="text-slate-600 mb-10 font-poppins text-center">We provide top-quality welding and metal fabrication services tailored to meet the needs of residential, commercial, and industrial clients across Australia.</p>
        <section className="flex flex-wrap items-center justify-center gap-6">


            {/* cards start */}
<div className="rounded-md w-90 mx-auto bg-white shadow-md group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
  <img 
    className="rounded-md w-full h-70 object-cover object-top transition-all duration-300" 
    src="/fabrication_img.jpg" 
    alt="Customized Fabrications" 
  />
  <div className="py-4 px-2">
    <p className="text-lg font-extrabold text-center text-gray-800 group-h transition-colors duration-300">
      Customized Fabrications
    </p>
  </div>
</div>



<div className="rounded-md  w-90 mx-auto bg-white shadow-md group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
             <a  className='group w-56'>
                <img className=' rounded-md w-full h-72 object-cover object-top transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1'src="/bin.jpg" alt="image" />
                 <div className="py-4 px-2">
                <p className='text-lg font-extrabold text-center text-gray-800 group-h transition-colors duration-300'>New Bin Making</p>
                </div>
                
            </a>
</div>
        
            <div className="rounded-md w-90 mx-auto bg-white shadow-md group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
             <a className='group w-56'>
                <img className=' rounded-md w-full h-72 object-cover object-top transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1'src="metal_reparing.jpg" alt="image" />
                 <div className="py-4 px-2">
                <p className='text-lg font-extrabold text-center text-gray-800  group-h transition-colors duration-300'>All Types Of Metal Repairing</p>
                </div>
                
            </a>
</div>


      <div className="rounded-md w-90 mx-auto bg-white shadow-md group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
             <a className='group w-56'>
                <img className='rounded-md w-full h-72 object-cover object-top transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1'src="/aluminium_welding.jpg" alt="image" />
                 <div className="py-4 px-2">
                <p className='text-lg font-extrabold text-center text-gray-800 group-h transition-colors duration-300'>Aluminium Welding</p>
                </div>
                
            </a>
</div>


         <div className="rounded-md w-90 mx-auto bg-white shadow-md group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
             <a className='group w-56'>
                <img className='rounded-md w-full h-72 object-cover object-top transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1'src="/steel_welding.webp" alt="image" />
                 <div className="py-4 px-2">
                <p className='text-lg font-extrabold text-center text-gray-800 group-h transition-colors duration-300'>Stainless-Steel Welding</p>
                </div>
                
            </a>
</div>


   <div className="rounded-md w-90 mx-auto bg-white shadow-md group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
             <a  className='group w-56'>
                <img className=' rounded-md w-full h-72 object-cover object-top transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1'src="/arc_welding.jpg" alt="image" />
                 <div className="py-4 px-2">
                <p className='text-lg font-extrabold text-center text-gray-800  group-h transition-colors duration-300'>Electric Arc Welding</p>
                </div>
                
            </a>
</div>


       <div className="rounded-md w-90 mx-auto bg-white shadow-md group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
             <a  className='group w-56'>
                <img className='rounded-md w-full h-72 object-cover object-top transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1'src="/mig_weldin.avif" alt="image" />
                 <div className="py-4 px-2">
                <p className='text-lg font-extrabold text-center text-gray-800  group-h transition-colors duration-300'>MIG Welding</p>
                </div>
                
            </a>
</div>


        </section>
        </div>
    
    </>
  )
}
