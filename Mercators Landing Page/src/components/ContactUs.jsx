
import React from "react";
import { useGlobalContext } from "../context";

// The API URL is intentionally not defined here because it is already
// managed in context.jsx, where the API request is actually made.

const ContactUs = () => {
  const {
    email,
    name,
    message,
    changeEmail,
    changeName,
    changeMessage,
    sendEmail,
    isSubmitting,
    submitError,
  } = useGlobalContext();

  // isSubmitting tracks whether the request is in progress.
  // submitError contains an error message if the request fails.
  // These values come from the updated context.jsx.

  return (
    <div className="hero">
      {/* Contact section container */}
      <div
        className="text-center py-28"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {/* Contact section heading */}
        <h1 className="uppercase text-2xl sms:text-3xl text-white font-700 contact">
          contact us
        </h1>

        <p className="text-white mt-4 p-5 max-w-[28rem] sms:max-w-[33rem] mx-auto">
          We are available anyday, anytime, feel free to reach out to us. You
          can drop a message, we will respond as soon as possible. Fill the form
          to drop a message with us.
        </p>

        {/* The context handles submission, API requests, and error handling. */}
        <form className="mt-5" onSubmit={sendEmail}>
          {/* Email input: controlled by the shared context state */}
          <div>
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={changeEmail}
              placeholder="Email address"
              autoComplete="email"
              required
              className="w-[80%] max-w-[600px] p-[.35rem] pl-5 rounded-md focus:outline-none"
            />
          </div>

          {/* Full name input */}
          <div className="mt-2">
            <input
              type="text"
              name="from_name"
              value={name}
              onChange={changeName}
              placeholder="Full Name"
              autoComplete="name"
              required
              className="w-[80%] max-w-[600px] p-[.35rem] pl-5 rounded-md focus:outline-none"
            />
          </div>

          {/* Textarea supports longer, multiline messages. */}
          <div className="mt-2">
            <textarea
              name="message"
              value={message}
              onChange={changeMessage}
              placeholder="Message"
              required
              rows={6}
              className="w-[80%] max-w-[600px] p-[.35rem] pl-5 rounded-md focus:outline-none"
            />
          </div>

          {/* Display an error if sending fails.
              The context preserves the entered values so the visitor can retry. */}
          {submitError && (
            <p role="alert" className="mt-4 text-red-300">
              {submitError}
            </p>
          )}

          {/* Prevent duplicate submissions and show the current status. */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 bg-btnColor rounded-md px-6 py-2 disabled:opacity-60"
          >
            <p className="text-white">
              {isSubmitting ? "Sending..." : "Submit"}
            </p>
          </button>
        </form>

        {/* End of contact form */}
      </div>
    </div>
  );
};

export default ContactUs;
