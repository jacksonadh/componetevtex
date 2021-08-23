import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

interface footerupmedalProps { }

const CSS_HANDLES = ['footerupmedal', 'upmedal', 'listItem', 'linkItem'] as const

const Countdown: StorefrontFunctionComponent<footerupmedalProps> = ({ }) => {
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <div className={`${handles.footerupmedal}`}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
      </head>

      <footer className={`${handles.upmedal}`}>
        <ul className={`${handles.listItem}`}>
          <li>
            <a className={`${handles.linkItem} c-link hover-c-link active-c-link no-underline underline-hover`} href="../cadastro"> <i className="bi bi-people-fill"></i> </a>
          </li>
          <li>
            <a className={`${handles.linkItem} c-link hover-c-link active-c-link no-underline underline-hover`} href="https://jacksondesafio3--hiringcoders2021.myvtex.com/"><i className="bi bi-shop"></i> </a>
          </li>
          <li>
            <a className={`${handles.linkItem} c-link hover-c-link active-c-link no-underline underline-hover`} target="_blank" href="https://api.whatsapp.com/send?l=pt-BR&phone=5511964335064&text=Para%20falar%20com%20a%20Gabi%F0%9F%91%B1%F0%9F%8F%BB%E2%80%8D%E2%99%80%EF%B8%8F%0A%0AClique%20enviar%F0%9F%91%89%0A%0A------------%0A*D%C3%BAvida%20sobre%3A*%20Wood%20Sport%20Festival%20-%20Trof%C3%A9u%0A*ID%3A*%2052292"> <i className="bi bi-whatsapp"></i> </a>
          </li>

        </ul>

      </footer>
    </div>
  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {},
}

export default Countdown
