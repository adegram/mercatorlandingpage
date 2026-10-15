
import React, { useState, useContext } from "react";
import axios from "axios";

const url = "https://mercatorapiservices.com/api/Message/Send";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const changeName = (e) => setName(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);
  const changeMessage = (e) => setMessage(e.target.value);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const menuClick = () => setModalOpen(false);
  const messageClose = () => setOpenMessage(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitError("Please complete all fields before submitting.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      await axios.post(url, {
        to: ["Connect@mercator.ng"],
        subject: "Message From Mercator Website",
        message: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
        from: "noreply@mercator.ng",
        senderName: "Mercator",
      });

      // Only clear the form and show success after the API succeeds.
      setName("");
      setEmail("");
      setMessage("");
      setOpenMessage(true);
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setSubmitError(
        "We couldn't send your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        modalOpen,
        openModal,
        closeModal,
        menuClick,
        openMessage,
        messageClose,
        name,
        email,
        message,
        changeEmail,
        changeMessage,
        changeName,
        sendEmail,
        isSubmitting,
        submitError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
