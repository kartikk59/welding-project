'use client';
import React from 'react'

export default function Navbar() {

  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // close menu on click
  };


  return (
    <>
    {/* bg-image-part */}
    <div className='min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden' id="Header" style={{  backgroundImage: `url("/welding_img.jpg")`}}>


   {/* navbar-part */}
    <div className="text-sm text-white w-full fixed top-0 left-0 z-50">

        {/* upper-bar */}
      <div className="text-center font-medium py-2 bg-blue-500 flex justify-between items-center text-white">
  {/* Left: Location */}
  <a href='https://www.google.com/maps/place/Unit+3%2F90+Colemans+Rd,+Carrum+Downs+VIC+3201,+Australia/@-38.0897588,145.1662496,19z/data=!3m1!4b1!4m6!3m5!1s0x6ad60ce3b7350081:0xba1379acb75f45a6!8m2!3d-38.0897599!4d145.1668933!16s%2Fg%2F11khd33ssq?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D' target='_blank' className="pl-2 md:pl-10 lg:pl-14 xl:pl-10 flex items-center">
    <img src="/location.png" alt="Location Icon" className="w-5 h-5" />
    <span className=" font-bold">Location: 3/90 Colemans rd, Carrum Downs, Victoria [3201]</span>
  </a>

  {/* Right: Social Media Links */}
  {/* <div className="pr-5 flex justify-between gap-4">
    <a href=""><img src="/instagram.png" alt="insta_icon" className='h-5' /></a>
  </div> */}
</div>


      <nav className="relative h-[60px] flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 bg-white text-gray-900 transition-all shadow-sm">
        {/* Logo */}
        {/* <div className=''>
        <a href="#" >
           <img src="" alt="" className='h-20'/> 
            
        </a>
        </div> */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 md:pl-28">
          <li className='text-extrabold relative text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full'><a href="#Header">Home</a></li>
          <li className='relative text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full'><a href="#Services">Our Services</a></li>
          <li className='relative text-black0 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full'><a href="#">Portfolio</a></li>
          <li className='relative text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full'><a href="#Contact">Contact Us</a></li>
        </ul>

        {/* Desktop Button */}
        <button className="md:inline hidden bg-blue-600 ml-20 px-5 py-2 rounded-md active:scale-95 transition-all text-white cursor-pointer">
          <a href="tel:+12334848">
          <div className='flex items-center justify-center'>
          <img src="/call.png" alt="phone icon" className='h-5 ' />
          <p className='ml-3 text-lg'>+122393939</p>
          </div>
          </a>
        </button>

        {/* Hamburger Menu Button */}
        <button
          aria-label="menu-btn"
          type="button"
          className="menu-btn inline-block md:hidden active:scale-90 transition"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu absolute top-[70px] left-0 w-full bg-white shadow-sm p-6 ${menuOpen ? '' : 'hidden'} md:hidden`}>
          <ul className="flex flex-col space-y-4 text-lg">
            <li><a href="#Header" className="text-md relative text-bold text-gray-800 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full" onClick={handleLinkClick}>Home</a></li>
            <li><a href="#Services" className="text-md relative text-gray-800 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"  onClick={handleLinkClick}>Our Services</a></li>
            <li><a href="#" className="text-md relative text-gray-800 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"  onClick={handleLinkClick}>hi</a></li>
            <li><a className="text-md relative text-gray-800 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full" href="#Contact" onClick={handleLinkClick} >Contact Us</a></li>
          </ul>

          <button
            type="button"
            className="bg-blue-600 text-gray-600 border border-white mt-6 text-sm active:scale-95 transition-all w-40 h-11 rounded-full text-white cursor-pointer">
              <a href="tel:+1234567890">
           <div className='flex items-center justify-center'>
          <img src="/call.png" alt='call icon' className='h-5 ' />
          <p className='ml-3 text-lg'>+122393939</p>
          </div>
          </a>
          </button>

          
        </div>
      </nav>
    </div>

    {/* hero-section */}

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



