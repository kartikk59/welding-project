'use client';
import React from 'react'
import styled from 'styled-components'

export default function AboutPage() {
  return (
    <>
    <div className="mt-22 pt-10 pb-20 0 flex flex-col md:flex-row justify-center items-center bg-gray-200 gap-6 px-4 py-10">
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src="/about_us_img.jpg"
      className="w-full max-w-md h-auto rounded-2xl mt-5"
      alt="about us"
    />
  </div>
  <div className="w-full md:w-1/2 text-left">
    <h1 className="font-bold text-4xl sm:text-5xl mb-4">
      We're <span className="text-blue-500">J. Fabricators!</span>
    </h1>
    <article className="my-2">
      At J. Fabricators, we take pride in being one of Melbourne’s trusted names
      in welding and metal fabrication. With years of hands-on experience, we
      specialize in a wide range of services — from precision welding and
      structural repairs to custom garbage bin manufacturing and metal
      restoration.
    </article>
    <article className="my-2">
      Whether it’s for residential, commercial, or industrial needs, our
      skilled team is committed to delivering high-quality workmanship, durable
      results, and timely service.
    </article>
    <article className="my-2">
      We believe in building long-lasting relationships through honesty,
      reliability, and attention to detail — because your project deserves
      nothing less than excellence.
    </article>
  </div>
</div>


<div className="flex justify-center py-10 px-4">
  <StyledWrapper className="w-full max-w-7xl">
    <h1 className="text-center text-3xl font-bold mb-8">
  What Sets <span className="text-blue-500">J. Fabricators</span> Apart?
</h1>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  
     <div className="group bg-gray-700 text-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer relative overflow-hidden">
  <div className="flex space-x-2 mb-3">
    <span className="w-3 h-3 rounded-full bg-red-500" />
    <span className="w-3 h-3 rounded-full bg-yellow-400" />
    <span className="w-3 h-3 rounded-full bg-green-500" />
  </div>
  <span className="block text-xl font-semibold mb-2">⭐ Proven Expertise</span>
  <p className="text-white transition-colors duration-300">
    With years of hands-on experience, our skilled team handles everything from minor metal repairs to complex fabrication jobs with precision and confidence.
  </p>
</div>



      <div className="group bg-gray-700 text-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer relative overflow-hidden">
  <div className="flex space-x-2 mb-3">
    <span className="w-3 h-3 rounded-full bg-red-500" />
    <span className="w-3 h-3 rounded-full bg-yellow-400" />
    <span className="w-3 h-3 rounded-full bg-green-500" />
  </div>
  <span className="block text-xl font-semibold mb-2">🛠 Excellent Craftsmanship</span>
  <p className="text-white transition-colors duration-300">
   Using advanced welding tools and equipment, we follow industry-leading processes to ensure every job benefits from excellent craftsmanship and high-quality finishes.
  </p>
</div>



      <div className="group bg-gray-700 text-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer relative overflow-hidden">
  <div className="flex space-x-2 mb-3">
    <span className="w-3 h-3 rounded-full bg-red-500" />
    <span className="w-3 h-3 rounded-full bg-yellow-400" />
    <span className="w-3 h-3 rounded-full bg-green-500" />
  </div>
  <span className="block text-xl font-semibold mb-2">&#129309; Locally Trusted</span>
  <p className="text-white transition-colors duration-300">
    Based in Melbourne, we proudly serve our community with personalized service that bigger companies often can’t match.
  </p>
</div>


<div className="group bg-gray-700 text-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer relative overflow-hidden">
  <div className="flex space-x-2 mb-3">
    <span className="w-3 h-3 rounded-full bg-red-500" />
    <span className="w-3 h-3 rounded-full bg-yellow-400" />
    <span className="w-3 h-3 rounded-full bg-green-500" />
  </div>
  <span className="block text-xl font-semibold mb-2">⏱ Reliable & On-Time</span>
  <p className="text-white transition-colors duration-300">
    We value your time. That’s why we’re committed to meeting deadlines without compromising on quality.
  </p>
</div>



    <div className="group bg-gray-700 text-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer relative overflow-hidden">
  <div className="flex space-x-2 mb-3">
    <span className="w-3 h-3 rounded-full bg-red-500" />
    <span className="w-3 h-3 rounded-full bg-yellow-400" />
    <span className="w-3 h-3 rounded-full bg-green-500" />
  </div>
  <span className="block text-xl font-semibold mb-2">🔧 Wide Range of Welding Services</span>
  <p className="text-white transition-colors duration-300">
    From TIG and MIG welding to aluminium welding to stainless steel welding to welding repair, we deliver a wide range of services for both residential and commercial projects.
  </p>
</div>




      
  



    </div>
  </StyledWrapper>
</div>


<div>
        <footer className="bg-gray-200 px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-black">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div className="md:max-w-96">
                   <img src="/logo2.png" alt="logo2" className='h-45' />
                      <p>
                       <span className='text-blue-600 underline underline-offset-2'>J. Fabricators</span> is a trusted welding and metal fabrication company based in Victoria, Melbourne. Specializing in high-quality, reliable welding solutions for residential, commercial, and industrial clients. With a team of certified welders and fabricators, we bring over 3 years of hands-on experience to every project—delivering strong, precise, and lasting results.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="/">Home</a></li>
                            <li><a href="/#Services">Services</a></li>
                            <li><a href="/#Work">Work</a></li>
                            <li><a href="/#Contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>(04) 3359-3903</p>
                            <p>jbinsrepairs@gamil.com</p>
                            <p>Location: We service the entire Melbourne region, please call for more details.</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-xs md:text-sm pb-5">
                Copyright 2025 © Company name. All Right Reserved.
            </p>
        </footer>
    </div>


    


    </>
  )
}




const StyledWrapper = styled.div`
  .card {
    width: 360px;
    padding: 20px;
    border: 1px solid ##062348;
    border-radius: 7px;
    background-color: black;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition:
      transform 0.2s,
      box-shadow 0.2s;
    position: relative;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  .mac-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;
  }

  .mac-header span {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .mac-header .red {
    background-color: #ff5f57;
  }

  .mac-header .yellow {
    background-color: #ffbd2e;
  }

  .mac-header .green {
    background-color: #28c941;
  }

  .card-title {
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 10px;
    color: #e6e6ef;
  }

  .card-description {
    font-size: 14px;
    color: white;
    margin-bottom: 15px;
  }

  .card .card-tag {
    display: inline-block;
    font-size: 10px;
    border-radius: 5px;
    background-color: #0d1117;
    padding: 4px;
    margin-block-end: 12px;
    color: #dcdcdc;
  }
  .code-editor {
    background-color: #0d1117;
    color: #dcdcdc;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      monospace;
    font-size: 14px;
    line-height: 1.5;
    border-radius: 5px;
    padding: 15px;
    overflow: auto;
    height: 150px;
    border: 1px solid #333;
  }

  .code-editor::-webkit-scrollbar {
    width: 8px;
  }

  .code-editor::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 4px;
  }

  .code-editor pre code {
    white-space: pre-wrap;
    display: block;
  }`;

