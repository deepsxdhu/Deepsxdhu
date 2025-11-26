// src/components/ContactForm.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current
    ).then(
      (result) => {
        setStatus("sent");
        form.current.reset();
      },
      (error) => {
        setStatus("error");
        console.error(error);
      }
    );
  };

  return (
    <>
      <h1 className="pt-[100px] text-4xl font-bold font-[bricolage] relative">
        Contact form
      </h1>


      <div className="flex pt-[20px] justify-center">
        <form ref={form} onSubmit={sendEmail} className="">
          <div className="text-start pt-[10px] relative" >
            <label htmlFor="Name" className="font-medium">Your Name</label><br />
            <input type="text" name="from_name" placeholder="Your name" id="Name" required className="dark:bg-black border border-[2px] rounded-lg w-[740px] py-[10px] px-[10px] mt-[10px] " />
          </div>

          <div className="text-start pt-[10px] relative" >
            <label htmlFor="Name" className="font-medium">Your Email</label><br />
            <input type="email" name="from_email" placeholder="Your email" id="Your Email" required className="dark:bg-black border border-[2px] rounded-lg w-[740px] py-[10px] px-[10px] mt-[10px]" />
          </div>

          <div className="text-start pt-[10px] relative">
            <label htmlFor="Name" className="font-medium">Your Message</label><br />
            <textarea name="message" placeholder="Message" id="Your Message" required className="dark:bg-black border border-[2px] rounded-lg w-[740px] py-[10px] px-[10px] mt-[10px]" />
          </div>

          <button type="submit" className="mt-4 w-[740px] relative px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black">
            Send
          </button>

          {status === "sending" && <p className="pt-[10px]">Sending…</p>}
          {status === "sent" && <p  className="pt-[10px]">Message sent ✓</p>}
          {status === "error" && <p className="pt-[10px]">Something went wrong.</p>}
        </form>
      </div>


    </>

  );
}
