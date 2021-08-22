import React from 'react';
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['formContainer', 'form', 'formButton', 'formTitle', 'formInput', 'formLabel'] as const

export default function Formulario() {
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <div className={`${handles.formContainer}`}>
      <form className={`${handles.form}`} method="post">
        <h2 className={`${handles.formTitle}`}>Cadastra-se para receber as promoções</h2>
        <div>
          <label className={`${handles.formLabel}`} htmlFor="nome">Nome:</label>
          <input className={`${handles.formInput}`} type="text" id="nome" />
        </div>
        <div>
          <label className={`${handles.formLabel}`} htmlFor="email">E-mail:</label>
          <input className={`${handles.formInput}`} type="email" id="email" />
        </div>
        <div className={`${handles.containerButton}`}>
          <button className={`${handles.formButton}`} type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  )
}