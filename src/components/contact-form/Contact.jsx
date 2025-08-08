
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

  if (!accessKey || !apiUrl) {
  toast.error("Form configuration is missing. Please contact support.");
  return;
}


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


        <div className=' bg-white pt-10 pb-10' id='Contact' >

        <form className="flex flex-col items-center text-md mb-10" onSubmit={onSubmit} >
            <h1 className="text-4xl font-semibold text-slate-700 pb-4 text-center">Contact Us Today</h1>
            <p className="text-black text-md text-center">For all your residential or commercial welding needs, call the professionals at J. Fabricators today on <span className='text-blue-600 underline underline-offset-3'> (04) 3359 3903 </span> or fill out the form below</p>
            <p className='text-md text-black pb-10'>and we'll get in touch with you.</p>
            <h1 className="text-4xl font-semibold text-slate-700 pb-10 text-center">Get a quote for fabrication or welding today!</h1>
            
            <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Your Good Name</label>
                    <input className="bg-gray-100 h-12 p-2 mt-2 w-full border border-gray-800/30 rounded outline-none focus:border-2 focus:border-black" type="text" name='name' required placeholder='Enter Name' />
                </div>
                <div className="w-full">
                    <label className="text-black/70" htmlFor="email">Email</label>
                    <input className=" bg-gray-100 h-12 p-2 mt-2 w-full border border-gray-800/30 rounded outline-none focus:border-2 focus:border-black" placeholder="Enter Email Address" type="email" required name='email' />
                </div>
                <div className="w-full">
                    <label className="text-black/70" htmlFor="phone">Phone Number</label>
                    <input className=" bg-gray-100 h-12 p-2 mt-2 w-full border border-gray-800/30 rounded outline-none focus:border-2 focus:border-black" type="tel" htmlFor="phone" placeholder='Enter Phone Number' name='phone number' required />
                </div>
            </div>
        
            <div className="mt-6 w-[350px] md:w-[700px]">
                <label className="text-black/70" htmlFor="message">Message</label>
                <textarea className=" bg-gray-100 w-full mt-2 p-2 h-40 border border-gray-800/30 rounded resize-none outline-none focus:border-2 focus:border-black" placeholder='Please describe the project or job that you had like a quote for. Please let us know if the work needs to be done at a specific location, or if the work can be completed in our factory. 

' required name='message'></textarea>
            </div>
        
            <button type="submit" className="mt-5 bg-blue-600 cursor-pointer text-white h-12 w-56 px-4 rounded-md active:scale-95 transition">{result? result:"Send Message"}</button>
        </form>
        </div>
  
  )
};
