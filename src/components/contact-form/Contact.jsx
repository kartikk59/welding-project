
import React from 'react'
import { toast } from 'react-toastify';

export default function Contact() {

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY;
  const apiUrl = process.env.NEXT_PUBLIC_WEB3FORM_API_URL;

      const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    console.log("Access Key:", accessKey);

    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const response = await fetch(apiUrl, {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("");
      toast.error("Failed to send message. Please try again later.");
    }
}

    return (


        <div className=' bg-gradient-to-r from-purple-100 to-pink-100 pt-10 pb-10' id='Contact' >

        <form className="flex flex-col items-center text-sm mb-10" onSubmit={onSubmit} >
            <h1 className="text-4xl font-semibold text-slate-700 pb-4 text-center">Contact Us Today</h1>
            <p className="text-gray-500 text-lg text-center">For all your residential or commercial welding needs, call the professionals at Sydney Welders today on <span className='text-red-600 underline underline-offset-3'> 02 8074 3446 </span> or fill out the form below</p>
            <p className='text-lg text-gray-500 pb-10'>and we'll get in touch with you.</p>
            <h1 className="text-4xl font-semibold text-slate-700 pb-10 text-center">Get a quote for fabrication or welding today</h1>
            
            <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Your Good Name</label>
                    <input className="bg-white h-12 p-2 mt-2 w-full border border-gray-800/30 rounded outline-none focus:border-2 focus:border-black" type="text" name='name' required placeholder='Enter Name' />
                </div>
                <div className="w-full">
                    <label className="text-black/70" htmlFor="email">Email</label>
                    <input className=" bg-white h-12 p-2 mt-2 w-full border border-gray-800/30 rounded outline-none focus:border-2 focus:border-black" placeholder="Enter Email Address" type="email" required name='email' />
                </div>
                <div className="w-full">
                    <label className="text-black/70" htmlFor="phone">Phone Number</label>
                    <input className=" bg-white h-12 p-2 mt-2 w-full border border-gray-800/30 rounded outline-none focus:border-2 focus:border-black" type="tel" htmlFor="phone" placeholder='Enter Phone Number' name='phone number' required />
                </div>
            </div>
        
            <div className="mt-6 w-[350px] md:w-[700px]">
                <label className="text-black/70" htmlFor="message">Message</label>
                <textarea className=" bg-white w-full mt-2 p-2 h-40 border border-gray-800/30 rounded resize-none outline-none focus:border-2 focus:border-black" placeholder='Enter Message' required name='message'></textarea>
            </div>
        
            <button type="submit" className="mt-5 bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A] cursor-pointer text-white h-12 w-56 px-4 rounded-md active:scale-95 transition">{result? result:"Send Message"}</button>
        </form>
        </div>
  
  )
};
