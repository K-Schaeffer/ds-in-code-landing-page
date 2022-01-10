import { useEffect, useState } from 'react';
import '@meiuca/dsc-design-system/dist/components/icon';
import '@meiuca/dsc-design-system/dist/components/typography';
import '@meiuca/dsc-design-system/dist/components/input';
import '@meiuca/dsc-design-system/dist/components/select';
import '@meiuca/dsc-design-system/dist/components/textarea';
import '@meiuca/dsc-design-system/dist/components/button';
import iconShapes from '@meiuca/dsc-assets/dist/assets/icons/shapes';
import './style.scss';

import { ReactComponent as XisSVG } from './xis.svg'

export default function AppContact () {

  const [loading, setLoading] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)

  useEffect(() => {
    if(loading){
      setTimeout(() => {
        setLoading(false);
        setShowFeedback(true);
      }, 3000)
    }
  }, [loading])

  useEffect(() => {
    document.getElementById('send-button')
      .addEventListener("dscClick", () => setLoading(true))
  }, [])

  return (

    <div className="section-contact">
      <div className='section-contact__title'>
        <dsc-icon
          icon={iconShapes}
          size="lg"
        ></dsc-icon>
        <dsc-typography component="heading" variant="h2" size="lg">
          Contato
        </dsc-typography>
        <dsc-typography component="paragraph">
          Curtiu? Bora conversar.
        </dsc-typography>
      </div>

      <div className='section-contact__form'>
        <div className="container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
          <div className="col-start-1 md:col-start-4 col-span-12 md:col-span-3">
            <dsc-input-text
              label="Nome"
              placeholder="Digite seu nome aqui..."
            ></dsc-input-text>
          </div>
          <div className="col-span-12 md:col-span-3">
            <dsc-input-text
              label="Email"
              placeholder="Digite seu email aqui..."
            ></dsc-input-text>
          </div>
        </div>
        <div className="container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
          <div className="col-start-1 md:col-start-4 col-span-12 md:col-span-3">
            <dsc-input-text
              label="Empresa"
              placeholder="Digite o nome da sua empresa..."
            ></dsc-input-text>
          </div>
          <div className="col-span-12 md:col-span-3">
            <dsc-select
              label="Motivo do contato"
              placeholder="Selecione um motivo..."
            >
              <option value="1">Tenho interessa</option>
              <option value="2">Apenas um feedback</option>
              <option value="3">Outros</option>
            </dsc-select>
          </div>
        </div>
        <div className="container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
          <div className="col-start-1 md:col-start-4 col-span-12 md:col-span-6">
            <dsc-textarea
              label="Mensagem"
              placeholder="Type here..."
            >
            </dsc-textarea>
          </div>
        </div>
        <div className="container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
          <div className="col-start-7 md:col-start-4 col-span-6 section-contact__form--action">
            {loading ? (
              <dsc-button
                size="lg"
                loading
              >
                Button Primary
              </dsc-button>
            ): (
              <dsc-button
                id="send-button"
                size="lg"
              >
                Button Primary
              </dsc-button>
            )}
          </div>
        </div>
      </div>
      { showFeedback && (
        <div className='section-feedback'>
          <dsc-typography component="heading" variant="h6" size="lg">
            Boooa!
          </dsc-typography>
          <dsc-typography component="paragraph">
            Deu tudo certo. Já já chega no seu inbox. Deve demorar uns minutinhos, tá?
          </dsc-typography>
          <XisSVG />
        </div>
      )}
    </div>
  )
}