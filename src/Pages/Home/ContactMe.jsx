import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    chooseTopic: "",
    message: "",
    subject: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeForMessage = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSelectChange = (e) => {
    setFormData({
      ...formData,
      chooseTopic: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // Set loading to true on form submission

      const response = await fetch(
        "https://crypto.srninfotech.com/api/contact-app",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorBody = await response.json();
        setErrorMessage(`Error: ${response.status} - ${errorBody.message}`);
        setSuccessMessage("");
      } else {
        setSuccessMessage("Form submitted successfully!");
        setErrorMessage("");
        setFormData({
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          chooseTopic: "",
          message: "",
          subject: "",
        });
      }
    } catch (error) {
      console.error("Unexpected Error:", error);
      setErrorMessage("Unexpected error occurred. Please try again.");
      setSuccessMessage("");
    } finally {
      setLoading(false); // Set loading to false after API request completes
      setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          You can connect with me here; please fill out the form for connecting.
        </p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="fname"
              id="fname"
              value={formData.fname}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lname"
              id="lname"
              value={formData.lname}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="mobile"
              id="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label htmlFor="subject" className="contact--label">
          <span className="text-md">Subject</span>
          <input
            type="text"
            className="contact--input text-md"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={(e) => handleChangeForMessage(e, "subject")}
            required
          />
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            value={formData.message}
            onChange={(e) => handleChangeForMessage(e, "message")}
          />
        </label>

        <div>
          <button
            type="submit"
            className="btn btn-primary contact--form--btn"
            disabled={loading} // Disable the button when loading
          >
            {loading ? "Loading..." : "Submit"}
          </button>
          <br />
          <br />

          {successMessage && (
            <div className="success-message" style={{ color: "green" }}>
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="error-message" style={{ color: "red" }}>
              {errorMessage}
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
