"use client";
import { useActionState, useEffect, useState } from "react";
import { HandelsubmitFun } from "../FormAction/HandelSubmitFn";

const SubmitNotification = () => {
  const initialstate = { success: false };
  const [state, FormAction] = useActionState(HandelsubmitFun, initialstate);
  const [ShowNotification, setShowNotification] = useState(false);
  useEffect(() => {
    if (state.success) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowNotification(true);

      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.success, state]);

  return (
    <div>
      <form
        action={FormAction}
        className="flex flex-col gap-10 justify-center items-center md:items-start md:justify-start "
      >
        <label htmlFor="Name:" className="w-full sm:w-3/4 flex flex-col gap-2">
          <strong className="text-Text-primary">Name:</strong>
          <input
            type="text"
            name="Name"
            required
            placeholder="Enter Your Name"
            className="p-4 outline-1 outline-[#BBB] text-Text-primary rounded-lg focus:outline-[#53c28b] transition-all duration-700"
          />
        </label>
        <label htmlFor="Email" className="w-3/4 flex flex-col gap-2">
          <strong className="text-Text-primary">Email:</strong>

          <input
            type="email"
            name="Email"
            required
            placeholder="Enter Your Email"
            className="p-4 outline-1 outline-[#BBB] rounded-lg text-Text-primary focus:outline-[#53c28b] transition-all duration-700"
          />
        </label>
        <label className="w-3/4 flex flex-col gap-2">
          <strong className="text-Text-primary">Message:</strong>

          <textarea
            placeholder="Your Message Here!"
            required
            name="Message"
            className="p-4  outline-1 outline-[#BBB] rounded-lg text-Text-primary focus:outline-[#53c28b] transition-all duration-700"
          />
        </label>
        <button
          type="submit"
          className=" text-[#EEE]  px-6 py-3 rounded-md w-fit cursor-pointer bg-primary hover:bg-primary-hover font-bold transition-colors duration-500"
        >
          Send Request
        </button>{" "}
      </form>

      <div
        className={`
    absolute bottom-6 right-6
    transform transition-all duration-700 ease-out
    text-Text-primary
    ${
      ShowNotification
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-20 pointer-events-none"
    }
    bg-primary-active text-white px-6 py-2 rounded-2xl
  `}
      >
        Thank you, we’ll contact you soon
      </div>
    </div>
  );
};

export default SubmitNotification;
