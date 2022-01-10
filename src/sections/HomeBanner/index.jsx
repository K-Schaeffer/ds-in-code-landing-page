import '@meiuca/dsc-design-system/dist/components/tag';
import '@meiuca/dsc-design-system/dist/components/typography';
import Arrow from '../../components/Arrow';
import OctagonBrand from '../../components/OctagonBrand';
import './home-banner.scss'

export default function AppHomeBanner () {
  return (
    <>
      <div className='home-banner'>
        <div className="container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
          <div className="col-start-1 md:col-start-2 col-span-12 md:col-span-10">
            <div className="home-banner-content">
              <dsc-tag>
                Teste do DS
              </dsc-tag>
              <dsc-typography component="heading" variant="h1" size="display">
                Bora testar esse Design System?
              </dsc-typography>
              <dsc-typography component="paragraph" size="large">
                Essa é uma landing page para simular a construção de um produto a partir de um DS, do curso Design System in Code.
              </dsc-typography>
            </div>
          </div>
        </div>
      </div>
      <div className='home-brand-bg'>
        <div className="container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
          <div className="col-start-1 md:col-start-2 col-span-12 md:col-span-10">
            <div className='home-brand-bg-content'>
              <OctagonBrand />
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}