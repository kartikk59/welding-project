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
                    <svg width="157" height="40" viewBox="0 0 157 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.904 28.28q-1.54 0-2.744-.644a5.1 5.1 0 0 1-1.904-1.82q-.672-1.148-.672-2.604v-3.864q0-1.456.7-2.604a4.9 4.9 0 0 1 1.904-1.792q1.204-.672 2.716-.672 1.82 0 3.276.952a6.44 6.44 0 0 1 2.324 2.52q.868 1.567.868 3.556 0 1.96-.868 3.556a6.5 6.5 0 0 1-2.324 2.492q-1.456.924-3.276.924m-7.196 5.32V14.56h3.08v3.612l-.532 3.276.532 3.248V33.6zm6.692-8.232q1.12 0 1.96-.504a3.6 3.6 0 0 0 1.344-1.456q.504-.924.504-2.128t-.504-2.128a3.43 3.43 0 0 0-1.344-1.428q-.84-.532-1.96-.532t-1.988.532a3.43 3.43 0 0 0-1.344 1.428q-.476.924-.476 2.128t.476 2.128a3.6 3.6 0 0 0 1.344 1.456q.868.504 1.988.504M56.95 28V14.56h3.08V28zm3.08-7.476-1.064-.532q0-2.548 1.12-4.116 1.148-1.596 3.444-1.596 1.008 0 1.82.364.812.365 1.512 1.176l-2.016 2.072a2.1 2.1 0 0 0-.812-.56 3 3 0 0 0-1.036-.168q-1.287 0-2.128.812-.84.811-.84 2.548m14.156 7.756q-2.016 0-3.64-.896a7 7 0 0 1-2.548-2.52q-.924-1.596-.924-3.584t.924-3.556a6.87 6.87 0 0 1 2.492-2.52q1.596-.924 3.528-.924 1.876 0 3.304.868a6.05 6.05 0 0 1 2.268 2.38q.84 1.512.84 3.444 0 .336-.056.7a7 7 0 0 1-.112.756H69.23v-2.52h9.436l-1.148 1.008q-.056-1.232-.476-2.072a3 3 0 0 0-1.204-1.288q-.756-.448-1.876-.448-1.176 0-2.044.504a3.43 3.43 0 0 0-1.344 1.428q-.476.896-.476 2.156t.504 2.212 1.428 1.484q.924.504 2.128.504 1.037 0 1.904-.364a4 4 0 0 0 1.512-1.064l1.96 1.988a6.3 6.3 0 0 1-2.38 1.736 7.6 7.6 0 0 1-2.968.588m15.91 0q-1.54 0-2.745-.644a5.1 5.1 0 0 1-1.904-1.82q-.672-1.148-.672-2.604v-3.864q0-1.456.7-2.604a4.9 4.9 0 0 1 1.904-1.792q1.204-.672 2.716-.672 1.821 0 3.276.952a6.44 6.44 0 0 1 2.324 2.52q.869 1.567.868 3.556 0 1.96-.868 3.556a6.5 6.5 0 0 1-2.324 2.492q-1.455.924-3.276.924M82.898 28V7.84h3.08v10.024l-.532 3.248.532 3.276V28zm6.692-2.632q1.12 0 1.96-.504a3.6 3.6 0 0 0 1.344-1.456q.504-.924.504-2.128t-.504-2.128a3.43 3.43 0 0 0-1.344-1.428q-.84-.532-1.96-.532t-1.988.532a3.43 3.43 0 0 0-1.344 1.428q-.476.924-.476 2.128.001 1.204.476 2.128a3.6 3.6 0 0 0 1.344 1.456q.87.504 1.988.504m15.067 2.912q-1.708 0-3.052-.756a5.5 5.5 0 0 1-2.072-2.072q-.728-1.344-.728-3.08V14.56h3.08v7.672q0 .98.308 1.68.336.672.952 1.036.644.364 1.512.364 1.344 0 2.044-.784.728-.812.728-2.296V14.56h3.08v7.812q0 1.764-.756 3.108a5.3 5.3 0 0 1-2.044 2.072q-1.317.728-3.052.728m8.976-.28V14.56h3.08V28zm1.54-15.904q-.783 0-1.316-.532-.504-.532-.504-1.316t.504-1.316a1.8 1.8 0 0 1 1.316-.532q.813 0 1.316.532t.504 1.316q0 .784-.504 1.316t-1.316.532M120.169 28V7.84h3.08V28zm8.552 0V8.96h3.08V28zm-3.22-10.64v-2.8h9.52v2.8zm17.274 10.92q-1.708 0-3.052-.756a5.5 5.5 0 0 1-2.072-2.072q-.728-1.344-.728-3.08V14.56h3.08v7.672q0 .98.308 1.68.336.672.952 1.036.643.364 1.512.364 1.344 0 2.044-.784.728-.812.728-2.296V14.56h3.08v7.812q0 1.764-.756 3.108a5.3 5.3 0 0 1-2.044 2.072q-1.317.728-3.052.728m8.977-.28V14.56h3.08V28zm1.54-15.904q-.785 0-1.316-.532-.504-.532-.504-1.316t.504-1.316a1.8 1.8 0 0 1 1.316-.532q.812 0 1.316.532t.504 1.316-.504 1.316-1.316.532" fill="#000"/>
                        <path d="m8.75 11.3 6.75 3.884 6.75-3.885M8.75 34.58v-7.755L2 22.939m27 0-6.75 3.885v7.754M2.405 15.408 15.5 22.954l13.095-7.546M15.5 38V22.939M29 28.915V16.962a2.98 2.98 0 0 0-1.5-2.585L17 8.4a3.01 3.01 0 0 0-3 0L3.5 14.377A3 3 0 0 0 2 16.962v11.953A2.98 2.98 0 0 0 3.5 31.5L14 37.477a3.01 3.01 0 0 0 3 0L27.5 31.5a3 3 0 0 0 1.5-2.585" stroke="#4F39F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="mt-6 text-sm">
                       <span className='text-blue-600 underline underline-offset-2'>J. Fabricators</span> is a trusted welding and metal fabrication company based in Victoria, Melbourne. Specializing in high-quality, reliable welding solutions for residential, commercial, and industrial clients. With a team of certified welders and fabricators, we bring over 3 years of hands-on experience to every project—delivering strong, precise, and lasting results.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Our Service</a></li>
                            <li><a href="#">Work</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+1-212-456-7890</p>
                            <p>contact@example.com</p>
                            <p>Bussiness Hours:</p>
                            <p>Location: We service the entire Melbourne region. Visits to our facilities are by appointment only, please call for more details.</p>
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

