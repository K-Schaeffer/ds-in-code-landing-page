import '@meiuca/dsc-design-system/dist/components/icon';
import '@meiuca/dsc-design-system/dist/components/link';
import iconGithub from '@meiuca/dsc-assets/dist/assets/icons/github';
import './style.scss'

export default function AppFooter () {

  return (
    <div className='section-footer'>
      <dsc-icon
        icon={iconGithub}
        size="lg"
      >
      </dsc-icon>
      <dsc-link
        href="#"
        target="_blank"
      >
        Repositório do projeto
      </dsc-link>
    </div>
  )
}