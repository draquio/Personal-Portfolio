import React, { useRef } from "react";
import "./contactsection.scss";
import { Form } from "semantic-ui-react";
import emailjs from "@emailjs/browser";

export function Contactsection() {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_57f4nyj','template_my6qqr4',form.current,'w_AaTYYpc9CxEFaVP')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="contact_section">
      <h4 className="title_content">Formulario de contacto</h4>
      <div className="contact_content">
        <Form ref={form} onSubmit={sendEmail}>
            <label>Nombre</label>
            <Form.Input type="text" className="contact_input" name="user_name" />
            <label>Email</label>
            <Form.Input type="email" className="contact_input" name="user_email" />
            <label>Mensaje</label>
            <Form.TextArea name="message" className="contact_textarea"></Form.TextArea>
            <Form.Input type="submit" value="Enviar" />
        </Form>
      </div>
    </div>
  );
}
