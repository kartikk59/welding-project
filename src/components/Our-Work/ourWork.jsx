'use client';
import React from 'react'
// import { assets } from '@assets/assets'; // no .js extension needed
// import work2 from '../../assets/assets/work2.jpg';
// import work3 from '../../assets/assets/work3.jpg';
// import work4 from '../../assets/assets/work4.jpg';
// import work5 from '../../assets/assets/work5.jpg';
// import work6 from '../../assets/assets/work6.jpg';
// import work7 from '../../assets/assets/work7.jpg';
// import work8 from '../../assets/assets/work8.jpg';

export default function OurWork() {

    const [stopScroll, setStopScroll] = React.useState(false);
    // const cardData = [
    //     {
    //         image: assets.work1,
    //     },
    //     {
    //         image: assets.work2,
    //     },
    //     {
    //         image: assets.work3,
    //     },
    //     {
    //         image: assets.work4,
    //     },
    // ];

    // const cardData2 = [
    //      {
    //         image: assets.work5,
    //     },
    //     {
    //         image: assets.work6,
    //     },
    //     {
    //         image: assets.work7,
    //     },
    //     {
    //         image: assets.work8,
    //     },
    // ]
  return (
    <div className='bg-gradient-to-r from-purple-100 to-pink-100 pt-10 pb-10'>
  
        <>
            <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

            <h1 className="text-4xl font-semibold pb-4 text-slate-800 text-center mb-3 font-poppins">Our Work Speaks for Itself</h1>

            <p className="text-slate-600 mb-10 font-poppins text-center text-lg">Explore a selection of our recent projects that showcase the precision, durability, and craftsmanship we bring to every weld.</p>

{/* 
            <div className="overflow-hidden w-full relative max-w-6xl mx-auto mb-10" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#F5F7FF] to-transparent" />
                <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: 4 * 2500 + "ms" }}>
                    <div className="flex">
                        
                            <div className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300">
                                <img src="/work1.jpg" alt="card" className="w-full h-full object-cover" />
                                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20 rounded-lg">
                                    
                                </div>
                            </div>
                     

                        <div className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300">
                                <img src="/work2.jpg" alt="card" className="w-full h-full object-cover" />
                                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20 eounded-lg">
                                    
                                </div>
                            </div>


                               <div className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300">
                                <img src="/work3.jpg" alt="card" className="w-full h-full object-cover" />
                                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20 eounded-lg">
                                  
                                </div>
                            </div>


                               <div className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300">
                                <img src="/work4.jpg" alt="card" className="w-full h-full object-cover" />
                                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20 eounded-lg">
                                   
                                </div>
                            </div>
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#F5F7FF] to-transparent" />
            </div>



            <div className="overflow-hidden w-full relative max-w-6xl mx-auto" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#F5F7FF] to-transparent" />
                <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: 4 * 2500 + "ms" }}>
                    <div className="flex">
                         
                            <div className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300">
                                <img src="/work5.jpg" alt="card" className="w-full h-full object-cover" />
                                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                                   
                                </div>
                            </div>

                            <div className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300">
                                <img src="/work6.jpg" alt="card" className="w-full h-full object-cover" />
                                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                    
                                </div>
                            </div>

                            <div className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300">
                                <img src="/work7.jpg" alt="card" className="w-full h-full object-cover" />
                                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                                    
                                </div>
                            </div>

                            <div className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300">
                                <img src="/work8.jpg" alt="card" className="w-full h-full object-cover" />
                                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                                    
                                </div>
                            </div>
                        
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#F5F7FF] to-transparent" />
            </div> */}



            <div className="overflow-hidden w-full relative max-w-6xl mx-auto mb-10" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
  <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#F5F7FF] to-transparent" />
  
  <div className="marquee-inner flex w-fit"
       style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: `${10000}ms` }}>
    
    {/* Duplicated content for seamless scroll */}
    {[1, 2].map((_, repeatIndex) => (
      <div key={repeatIndex} className="flex">
        {[1, 2, 3, 4].map((i) => (
          <div key={`${repeatIndex}-${i}`} className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300">
            <img src={`/work${i}.jpg`} alt={`card-${i}`} className="w-full h-full object-cover" />
            <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20 rounded-lg">
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>

  <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#F5F7FF] to-transparent" />
</div>



<div className="overflow-hidden w-full relative max-w-6xl mx-auto" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
  <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#F5F7FF] to-transparent" />
  
  <div className="marquee-inner flex w-fit"
       style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: `${10000}ms` }}>
    
    {/* Duplicated content for seamless scroll */}
    {[1, 2].map((_, repeatIndex) => (
      <div key={repeatIndex} className="flex">
        {[5, 6, 7, 8].map((i) => (
          <div key={`${repeatIndex}-${i}`} className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300">
            <img src={`/work${i}.jpg`} alt={`card-${i}`} className="w-full h-full object-cover" />
            <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20 rounded-lg">
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>

  <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#F5F7FF] to-transparent" />
</div>

        </>


    </div>
  )
}
