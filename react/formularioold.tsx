import React, { useCallback, useEffect, useState } from "react";
import { useCssHandles } from 'vtex.css-handles'
import api from "./services/api";

type clientProps = {
  name: string,
  email: string,
}

const CSS_HANDLES = ['formContainer', 'form', 'formButton', 'formTitle', 'formInput', 'formLabel'] as const

export default function Formulario() {

  const clientStart: clientProps = {
    name: "",
    email: "",
  };

  const [cliente, setCliente] = useState(clientStart);
  var listaCliente = [];


  const handleChangeClient = useCallback(
    (e) => {
      setCliente({
        ...cliente,
        [e.target.name]: e.target.value,
      });
    },
    [cliente]
  );
  const handleSubmitClient =
    (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      listaCliente.push(cliente);
      let clientes: clientProps[] = [];
      if (
        cliente.name &&
        cliente.email
      ) {
        clientes.push(cliente);
        useEffect(() => {
          api.put("https://qj3nggde3c.execute-api.us-east-2.amazonaws.com", JSON.stringify(clientes))
            .then((response) => setCliente(response.data))
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
            });
        }, []);


        return true;
      }

      return false;
    }


  const handles = useCssHandles(CSS_HANDLES)
  return (
    <div className={`${handles.formContainer}`}>
      <form className={`${handles.form}`} onSubmit={handleSubmitClient}>
        <h2 className={`${handles.formTitle}`}>Cadastra-se para receber as promoções</h2>
        <div>
          <label className={`${handles.formLabel}`} htmlFor="nome">Nome:</label>
          <input
            value={cliente.name}
            onChange={handleChangeClient}
            className={`${handles.formInput}`}
            type="text"
            id="nome"
            placeholder="Jackson Almeida" />
        </div>
        <div>
          <label className={`${handles.formLabel}`} htmlFor="email">E-mail:</label>
          <input
            value={cliente.email}
            onChange={handleChangeClient}
            className={`${handles.formInput}`}
            type="email"
            id="email"
            placeholder="jackson@email.com" />
        </div>
        <div className={`${handles.containerButton}`}>
          <button className={`${handles.formButton}`} type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  )
}