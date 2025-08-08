'use client';
import React from 'react'
import Link from 'next/link';

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
  


   {/* navbar-part */}
    <div className="text-sm text-white w-full fixed top-0 left-0 z-50">

        {/* upper-bar */}
      <div className="text-center font-medium py-2 bg-blue-500 flex justify-between items-center text-white">
  {/* Left: Location */}
  <a href='https://www.google.com/maps/place/78+Colemans+Rd,+Carrum+Downs+VIC+3201,+Australia/@-38.0898818,145.1662238,19z/data=!3m1!4b1!4m6!3m5!1s0x6ad60ce3b9f28301:0xc1d66312e7ea6613!8m2!3d-38.0898829!4d145.1668675!16s%2Fg%2F11kqwx45sz?entry=ttu&g_ep=EgoyMDI1MDgwNS4wIKXMDSoASAFQAw%3D%3D' target='_blank' className="pl-2 md:pl-10 lg:pl-14 xl:pl-10 flex items-center">
    <img src="/location.png" alt="Location Icon" className="w-5 h-5" />
    <span className=" font-bold">Location: 3/90 Colemans rd, Carrum Downs, Victoria [3201]</span>
  </a>

  {/* Right: Social Media Links */}
  {/* <div className="pr-5 flex justify-between gap-4">
    <a href=""><img src="/instagram.png" alt="insta_icon" className='h-5' /></a>
  </div> */}
</div>


      <nav className="relative h-[80px] flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 bg-white text-gray-900 transition-all shadow-sm">
        {/* Logo */}
        <div className=''>
        <a href="/" >
           <img src="/logo.png" alt="" className='h-25 mt-2'/> 
            
        </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 md:pl-28">
          <li className='text-extrabold relative text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full'><Link href="/">Home</Link></li>
          <li className='relative text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full'><Link href="/#Services">Our Services</Link></li>
          <li className='relative text-black0 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full'><Link href="/about-us">About Us</Link></li>
          <li className='relative text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full'><Link href="/#Contact">Contact Us</Link></li>
        </ul>

        {/* Desktop Button */}
        <button className="md:inline hidden bg-blue-600 ml-20 px-5 py-2 rounded-md active:scale-95 transition-all text-white cursor-pointer">
          <a href="tel:+12334848">
          <div className='flex items-center justify-center'>
          <img src="/call.png" alt="phone icon" className='h-5 ' />
          <p className='ml-3 text-lg'>(04) 3359 3903</p>
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
        <div className={`mobile-menu absolute top-[80px] left-0 w-full bg-white shadow-sm p-6 ${menuOpen ? '' : 'hidden'} md:hidden`}>
          <ul className="flex flex-col space-y-4 text-lg">
            <li><Link href="/" className="text-md relative text-bold text-gray-800 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full" onClick={handleLinkClick}>Home</Link></li>
            <li><Link href="/#Services" className="text-md relative text-gray-800 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full" onClick={handleLinkClick}>Our Services</Link></li>
            <li><Link href="/about-us" className="text-md relative text-gray-800 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"  onClick={handleLinkClick}>About Us</Link></li>
            <li><Link className="text-md relative text-gray-800 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full" href="/#Contact" onClick={handleLinkClick} >Contact Us</Link></li>
          </ul>

          <button
            type="button"
            className="bg-blue-600 text-gray-600 border border-white mt-6 text-sm active:scale-95 transition-all w-50 h-11 rounded-full text-white cursor-pointer">
              <a href="tel:+1234567890">
           <div className='flex items-center justify-center'>
          <img src="/call.png" alt='call icon' className='h-5 ' />
          <p className='ml-3 text-lg'>(04) 3359 3903</p>
          </div>
          </a>
          </button>

          
        </div>
      </nav>
    </div>

    

    {/* </div> */}
    </>
  )
}



