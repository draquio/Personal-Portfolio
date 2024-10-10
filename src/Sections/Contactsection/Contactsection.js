import React, { useState } from "react";
import "./contactsection.scss";
import emailjs from "@emailjs/browser";
import { Player } from "@lottiefiles/react-lottie-player";
import { Icon, Button } from "semantic-ui-react";
import "semantic-ui-css/components/button.min.css";

export function Contactsection(props) {
  const { language } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [messagealert, SetMessageAlert] = useState("");
  const [typeclass, SetTypeClass] = useState("alert error");
  const [isSent, SetIsSent] = useState(true);
  const sendContactForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.init(process.env.REACT_APP_API_KEY_emailjs);
    let templateParams = {
      user_name: e.target.email.value,
      user_email: e.target.user.value,
      message: e.target.message.value,
    };
    if (isSent) {
      SetIsSent(false);
      emailjs
        .send("service_57f4nyj", "template_my6qqr4", templateParams)
        .then(function () {
          SetTypeClass("alert success");
          SetMessageAlert("Tu correo fue enviado");
          setIsLoading(false);
        });
    } else {
      SetTypeClass("alert error");
      SetMessageAlert("Tu correo ya fue enviado");
      setIsLoading(false);
    }
  };
  return (
    <>
      <div id="contact"></div>
      <div
        // data-aos-offset="-200"
        data-aos-anchor-placement="center-bottom"
        className="contact_section"
      >
        <h4 className="title_content" data-aos-duration="1000" data-aos="fade-down">{language.title}</h4>
        <p data-aos-duration="1000" data-aos="fade-down">
          {language.info} <strong>{language.email}</strong>
        </p>
        <div className="contact_content">
          <div className="form_contact" data-aos-duration="1000" data-aos="fade-right">
            <form onSubmit={sendContactForm}>
              <input
                type="text"
                placeholder={language.name}
                className="contact_input"
                name="user"
                required
              />
              <input
                type="email"
                placeholder={language.mail}
                className="contact_input"
                name="email"
                required
              />
              <textarea
                name="message"
                className="contact_textarea"
                placeholder={language.content}
                required
              ></textarea>
              <Button loading={isLoading} type="submit" color="violet">
                <Icon name="send" />
                {language.button}
              </Button>
            </form>
            {messagealert && (
              <label>
                <input type="checkbox" className="alertCheckbox" />
                <div onClick={() => SetMessageAlert("")} className={typeclass}>
                  <span className="alertClose">X</span>
                  <span className="alertText">
                    {messagealert}
                    <br className="clear" />
                  </span>
                </div>
              </label>
            )}
          </div>
          <div className="contact_info" data-aos-duration="1000" data-aos="fade-left">
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
      </div>
    </>
  );
}