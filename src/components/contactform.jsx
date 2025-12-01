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
    <div id="contactform" className="">
      <h1 className="pt-24 md:pt-28 lg:pt-32 text-3xl sm:text-4xl  font-bold font-[bricolage] text-center">
        Contact Form
      </h1>

      <div className="flex justify-center mt-6 px-6 sm:px-8 md:px-10 lg:px-16">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-xl space-y-5"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="Name" className="font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="from_name"
              placeholder="Your name"
              id="Name"
              required
              className="dark:bg-black border border-2 rounded-lg w-full py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="YourEmail" className="font-medium mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="from_email"
              placeholder="Your email"
              id="YourEmail"
              required
              className="dark:bg-black border border-2 rounded-lg w-full py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="YourMessage" className="font-medium mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              placeholder="Message"
              id="YourMessage"
              required
              rows={5}
              className="dark:bg-black border border-2 rounded-lg w-full py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className=" relative w-auto sm:w-auto px-6 py-2 rounded-lg text-black dark:text-white  transition\
            backdrop-blur-sm bg-white/10 shadow-md"
          >
            Send
          </button>

          {/* Status messages */}
          {status === "sending" && <p className="pt-2 text-center">Sending…</p>}
          {status === "sent" && <p className="pt-2 text-center text-green-500">Message sent ✓</p>}
          {status === "error" && <p className="pt-2 text-center text-red-500">Something went wrong.</p>}
        </form>
      </div>
    </div>
  );
}
