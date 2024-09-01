import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import underline from '../assets/underline.png';


const Contact = () => {
  const { user } = useAuth();
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [userData, setUserData] = useState(true);

  useEffect(() => {
    if (userData && user) {
      setContact({
        username: user.username,
        email: user.email,
        message: "",
      });
      setUserData(false);
    }
  }, [userData, user]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);

    try {
      const response = await fetch(`${backendUrl}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact({
          username: "",
          email: "",
          message: "",
        });
        const responseData = await response.json();
        toast.success("Form submitted successfully!");
        console.log(responseData);
      } else {
        console.error("API Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Network Error:", error);
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center  bg-[#fbfbfb] pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 items-center gap-10 max-w-screen-lg w-full lg:w-5/6 md:w-4/6  ">

        {/* Image Section */}
        <div className="flex flex-col justify-between  md:block w-5/6 mx-auto">
          <div class="max-w-2xl mx-auto text-center">
            <div className="relative flex justify-center items-center flex-col text-center sm:text-left mb-10 mt-6">
              <h1 className="font-black text-4xl md:text-5xl text-black">
                Contact Us
              </h1>
              <img src={underline} alt="underline" className="absolute top-[-4rem] left-1/2 transform -translate-x-1/2 w-48 md:w-56 h-auto md:top-[-4rem]" />
            </div>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500 text-justify">We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. Your thoughts are important to us, and we're here to assist you with anything you need. Fill out the form below, and we'll get back to you as soon as possible.</p>
          </div>

          <div class="grid grid-cols-1 gap-2  text-center md:px-0 md:grid-cols-2 justify-center">
            <div class="flex flex-col items-center">
              <div class="p-6">
                <svg class="flex-shrink-0 w-10 h-10 mx-auto text-[#ed1f26]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p class="mt-6 text-base font-medium text-gray-900">+91 7837189549</p>
                <p class="mt-1 text-base font-medium text-gray-900">+91 7973117120</p>
              </div>
            </div>

            <div class="rounded-xl flex flex-col items-center">
              <div class="p-6">
                <svg class="flex-shrink-0 w-10 h-10 mx-auto text-[#ed1f26]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p class="mt-6 text-base font-medium text-gray-900">sahiljamwal2720@gmail.com</p>
                <p class="mt-1 text-base font-medium text-gray-900">bharal224@gmail.com</p>
              </div>
            </div>


          </div>
        </div>

        {/* Form Section */}
        <div className="w-5/6 justify-self-center md:w-full bg-white rounded-[40px] p-8 shadow-lg mb-10 lg:mb-0 ">
          <div className="relative flex justify-center items-center flex-col text-center sm:text-left mb-10 ">
            <h1 className="font-semibold text-2xl md:text-3xl text-black">Send us a message</h1>

          </div>
          <form onSubmit={handleSubmit} className='flex flex-col space-y-6'>
            <div className='flex flex-col'>

              <label for='username' className='font-semibold'>Username</label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                value={contact.username}
                onChange={handleInput}
                required
                className="w-full bg-white p-4 rounded-[20px]  shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                
              />
            </div>
            <div className='flex flex-col'>

              <label for='email' className='font-semibold'>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={contact.email}
                onChange={handleInput}
                required
                className="w-full bg-white p-4 rounded-[20px]  shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
              
              />
            </div>
            <div className='flex flex-col'>

              <label for='message' className='font-semibold'>Message</label>
              <textarea
                name="message"
                id="message"
                autoComplete="off"
                value={contact.message}
                onChange={handleInput}
                required
                cols="30"
                rows="3 "
                className="w-full bg-white p-4 rounded-[20px]  shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
         
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="block w-full font-bold bg-gradient-to-r from-purple-500 to-red-500 text-white py-4 mt-6 rounded-[20px] transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
