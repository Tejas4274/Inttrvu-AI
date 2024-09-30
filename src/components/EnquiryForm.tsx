import React, { useEffect, useState } from "react";
import "./EnquiryForm.css";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormError {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormError>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = (): FormError => {
    let error: FormError = {};

    if (!formData.name.trim()) {
      error.name = "Name is Required";
    }

    const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      error.email = "Email is Required";
    } else if (!emailRegx.test(formData.email)) {
      error.email = "Enter a valid Email";
    }

    const phoneRegx = /^[0-9]{10}$/;
    if (!formData.phone) {
      error.phone = "Phone Number is Required";
    } else if (!phoneRegx.test(formData.phone)) {
      error.phone = "Phone number must be 10 digit";
    }

    if (!formData.message.trim()) {
      error.message = "Enter Some Message";
    }

    return error;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validate());
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log("Form Submited Successfully", formData);
      Swal.fire({
        title: "Thank You",
        text: "We will get back to you",
        icon: "success",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setIsSubmitting(false);
    }
  }, [errors, isSubmitting, formData]);

  return (
    <>
      <div className="container">
        <span className="big-circle"></span>
        <img src="" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Creating a great candidate experience which starts with setting
              clear expectations from the beginning
            </p>

            <div className="info">
              <div className="information">
                <FontAwesomeIcon icon={faLocationDot} color="#1abc9c" />
                <p>Navale Icon, Near Navale Bridge,Pune</p>
              </div>
              <div className="information">
                <FontAwesomeIcon icon={faEnvelope} color="#1abc9c" />
                <p>info&#x40;intrrvu.AI</p>
              </div>
              <div className="information">
                <FontAwesomeIcon icon={faPhone} color="#1abc9c" />
                <p>+91 7756043707</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>

              <div className="social-card">
                <span>Social</span>

                <a className="social-link" href="">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 448 512"
                    xmlSpace="preserve"
                    fill="blue"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        style={{ fill: "#0077B5" }}
                        d="M100.28 448H7.4V148.9h92.88zm-46.4-341.9c-29.67 0-53.64-24.05-53.64-53.64C0 24.05 24.02 0 53.64 0 82.71 0 107 24.05 107 53.64 107 83.25 82.71 107.1 53.88 107.1h-.06zM447.9 448h-92.4V302.4c0-34.73-1.24-79.26-48.28-79.26-48.34 0-55.72 37.73-55.72 76.69V448H159.5V148.9h88.67v40.8h1.25c12.35-23.47 42.53-48.28 87.45-48.28 93.48 0 110.65 61.53 110.65 141.53V448z"
                      />
                    </g>
                  </svg>
                </a>

                <a className="social-link" href="#">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 320 512"
                    xmlSpace="preserve"
                    fill="#0077B5"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        style={{ fill: "#1877F2;" }}
                        d="M279.14 288l14.22-92.66h-88.91V144c0-25.35 12.42-50.06 52.24-50.06H295V6.26S273.6 0 248.27 0c-73.22 0-121.23 44.38-121.23 124.72V195.3H56v92.66h70.54V512h92.66V288z"
                      />
                    </g>
                  </svg>
                </a>

                <a className="social-link" href="#">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                    xmlSpace="preserve"
                    fill="black"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        style={{ fill: "#181717;" }}
                        d="M12 .5a11.5 11.5 0 0 0-3.64 22.43c.58.11.79-.25.79-.56 0-.28-.01-1.03-.01-2.01-2.94.64-3.56-1.42-3.56-1.42a2.8 2.8 0 0 0-1.17-1.55c-.96-.65.07-.63.07-.63a2.22 2.22 0 0 1 1.62 1.09 2.26 2.26 0 0 0 3.09.88 2.26 2.26 0 0 1 .67-1.42c-2.35-.27-4.82-1.18-4.82-5.26 0-1.16.42-2.1 1.1-2.85a3.86 3.86 0 0 1 .1-2.81s.88-.28 2.9 1.08a10.07 10.07 0 0 1 5.28 0c2.02-1.36 2.9-1.08 2.9-1.08.58 1.47.22 2.56.11 2.81.69.75 1.1 1.69 1.1 2.85 0 4.08-2.48 4.98-4.84 5.25.38.33.71.97.71 1.96 0 1.42-.01 2.56-.01 2.91 0 .31.21.68.79.56A11.5 11.5 0 0 0 12 .5"
                      />
                    </g>
                  </svg>
                </a>

                <a className="social-link" href="#">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    fill="red"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        style={{ fill: "#FF0000;" }}
                        d="M475.078,110.247c-5.402-20.33-21.678-36.605-42.008-42.008C392.124,64,256.002,64,256.002,64S119.88,64,79.93,68.239 c-20.33,5.402-36.605,21.678-42.008,42.008C32,150.197,32,256.002,32,256.002s0,105.805,5.922,147.754 c5.402,20.33,21.678,36.605,42.008,42.008C119.88,448,256.002,448,256.002,448s136.124,0,176.074-4.239 c20.33-5.402,36.605-21.678,42.008-42.008C480,361.807,480,256.002,480,256.002S480,150.197,475.078,110.247z M208,336V176l144,80 L208,336z"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form onSubmit={handleSubmit}>
              <h3 className="title">Have Any Query</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  className={`input ${errors.name ? "error" : ""}`}
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name">{`${formData.name ? "" : "Name"}`}</label>
                <span>Name</span>
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  className={`input ${errors.email ? "error" : ""}`}
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email">{`${
                  formData.email ? "" : "Email"
                }`}</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input
                  type="tel"
                  name="phone"
                  className={`input ${errors.phone ? "error" : ""}`}
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <label htmlFor="phone">{`${
                  formData.phone ? "" : "Phone"
                }`}</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea
                  name="message"
                  className={`input ${errors.message ? "error" : ""}`}
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="message">{`${
                  formData.message ? "" : "Message"
                }`}</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnquiryForm;
