import React from 'react'

export default function HeroSection() {
  return (
    <>
     <div className='min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden' id="Header" style={{  backgroundImage: `url("/welding_img.jpg")`}}>

<div className="text-left mt-20 px-6 md:px-12 py-20 max-w-2xl">
  <h1 className="text-white text-5xl sm:text-5xl md:text-5xl font-bold leading-tight">
    Certified Fabrication,<br /> Bin Manufacturing and <br /> Welding in Melbourne
  </h1>
  
  <button className="mt-8 bg-blue-600 text-white  px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 cursor-pointer shadow-[0px_0px_30px_7px_rgba(0,0,0,0.2)]">

<a href="tel:+133444444">
     <div className='flex items-center justify-center'>
          <img src="/call.png" className='h-5 ' />
          <p className='ml-3 text-lg'> +122393939</p>
          </div>  
          </a>
  </button>

  {/* <button type="button" className="w-45 my-6 py-3 active:scale-95 transition border-2 border-white from-violet-500 via-[#9938CA] to-[#E0724A] rounded-md bg-transparent flex items-center justify-center gap-1 cursor-pointer">
    <a href="#Contact" className='flex'>
                <img src="/edit.png" alt="" className='h-5 mt-1' />
                <p className="mb-0.5 text-lg text-white ml-1">Get a Free Quote!</p>
                </a>
            </button> */}



         
             <style>{`
            .button-wrapper::before {
                animation: spin-gradient 4s linear infinite;
            }
        
            @keyframes spin-gradient {
                from {
                    transform: rotate(0deg);
                }
        
                to {
                    transform: rotate(360deg);
                }
            }
        `}</style>
        <div className="mt-4 relative inline-block p-0.5 rounded-full overflow-hidden hover:scale-105 transition duration-300 active:scale-100 before:content-[''] before:absolute before:inset-0 before:bg-blue-500 button-wrapper cursor-pointer">
          <a href="#Contact">
            <button className="relative z-10 bg-gray-800 text-white rounded-full px-8 py-4 font-medium text-sm">Get a Free Quote!</button></a>
        </div>

            {/* <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
   Your Next Project Deserves Precision. Let’s Get Started Today!
  </h1> */}
</div>
</div>
</>
  )
}
