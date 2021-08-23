import axios from "axios";
import React, { useState } from "react";
import { useCssHandles } from 'vtex.css-handles'



const CSS_HANDLES = ['formContainer', 'form', 'formButton', 'formTitle', 'formInput', 'formLabel']




const Formulario = () => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const changeName = (event: any) => {
    setName(event.target.value)
  }

  const changeEmail = (event: any) => {
    setEmail(event.target.value)
  }
  let id = Math.random()
  let data = { id, name, email }
  const handleSubmit = (event: any) => {
    event.preventDefault();
    axios.put('https://qj3nggde3c.execute-api.us-east-2.amazonaws.com/items',
      console.log(data));
  }


  const handles = useCssHandles(CSS_HANDLES)
  return (
    <div className={`${handles.formContainer}`}>
      <form className={`${handles.form}`}>
        <h2 className={`${handles.formTitle}`}>Cadastra-se para receber as promoções</h2>
        <div>
          <label className={`${handles.formLabel}`} htmlFor="nome">Nome:</label>
          <input
            value={name}
            onChange={changeName}
            className={`${handles.formInput}`}
            type="text"
            id="nome"
            placeholder="Jackson Almeida" />
        </div>
        <div>
          <label className={`${handles.formLabel}`} htmlFor="email">E-mail:</label>
          <input

            value={email}
            onChange={changeEmail}
            className={`${handles.formInput}`}
            type="email"
            id="email"
            placeholder="jackson@email.com" />
        </div>
        <div className={`${handles.containerButton}`}>
          <button
            onClick={handleSubmit}
            className={`${handles.formButton}`}
            type="button"
          >Cadastrar</button>
        </div>
      </form>
    </div>
  )
}
export default Formulario;