import React, { useState, useRef } from "react";
import "./contactsection.scss";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { Player } from "@lottiefiles/react-lottie-player";
import { Icon } from "semantic-ui-react";

export function Contactsection() {
  const captcha = useRef(null);
  const [messagealert, SetMessageAlert] = useState("");
  const [typeclass, SetTypeClass] = useState("alert error");
  const [isVerified, setIsVerified] = useState(false);
  const [isSent, SetIsSent] = useState(true);
  const handleCaptchaChange = () => {
    if (captcha.current.getValue()) {
      SetMessageAlert("");
      setIsVerified(true);
      captcha.reset();
    }
  };
  const sendContactForm = (e) => {
    e.preventDefault();
    emailjs.init("w_AaTYYpc9CxEFaVP");
    let templateParams = {
      user_name: e.target.email.value,
      user_email: e.target.user.value,
      message: e.target.message.value,
    };
    if (isVerified) {
      if (isSent) {
        SetIsSent(false);
        emailjs
          .send("service_57f4nyj", "template_my6qqr4", templateParams)
          .then(function () {
            SetTypeClass("alert success");
            SetMessageAlert("Tu correo fue enviado");
          });
      } else {
        SetTypeClass("alert error");
        SetMessageAlert("Tu correo ya fue enviado");
      }
    } else {
      SetTypeClass("alert error");
      SetMessageAlert("Completa el captcha por favor");
    }
  };
  return (
    <div id="contact" className="contact_section">
      <h4 className="title_content">Formulario de contacto</h4>
      {/* <div className="contact_content"> */}
      <div className="contact_content">
        <form onSubmit={sendContactForm}>
          <input
            type="text"
            placeholder="Tu nombre"
            className="contact_input"
            name="user"
            required
          />
          <input
            type="email"
            placeholder="correo@mail.com"
            className="contact_input"
            name="email"
            required
          />
          <textarea
            name="message"
            className="contact_textarea"
            placeholder="Quiero hablar contigo"
            required
          ></textarea>
          <ReCAPTCHA
            ref={captcha}
            className="recaptcha_class"
            sitekey="6Lf4VrMnAAAAAAAUSnB9M0LyysUrpRDu_c5QdA_8"
            onChange={handleCaptchaChange}
          />

          <button type="submit" className="btn btn_purple">
            <Icon name="send"/>
            Enviar
          </button>
        </form>
        <div className="contact_info">
          {/* <h4>¿Hablamos?</h4> */}
          <Player
            className="contact_player"
            src="https://lottie.host/1d4a413a-a510-4b26-a63f-0aeeb8e0f561/MPkHLJM8qN.json"
            background="transparent"
            speed="1"
            loop
            controls
            autoplay
            direction="1"
            mode="normal"
          ></Player>
        </div>
      </div>
      {messagealert && (
        <label>
          <input type="checkbox" className="alertCheckbox" />
          <div className={typeclass}>
            <span className="alertClose">X</span>
            <span className="alertText">
              {messagealert}
              <br className="clear" />
            </span>
          </div>
        </label>
      )}
      {/* </div> */}
    </div>
  );
}
