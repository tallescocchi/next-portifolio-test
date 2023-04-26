import { FormEvent, useState } from "react";
import { sendContactMail } from "@/services/sendMail";

import { FormContainer, Input, TextArea } from "./styles";

export default function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    try {
      await sendContactMail(name, email, message)
      setName('')
      setEmail('')
      setMessage('')

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FormContainer data-aos="fade-up">
        <Input 
          placeholder="Nome"
          value={name}
          onChange={({target}) => setName(target.value)}
        />
        <Input 
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={({target}) => setEmail(target.value)}
          required
        />
        <TextArea 
          placeholder="Mensagem"
          value={message}
          onChange={({target}) => setMessage(target.value)}
          required
        />
        <button type="submit">Enviar</button>      
    </FormContainer>
  )
}