import { ReactComponent as OctagonBG } from './octagon-bg.svg'
import { ReactComponent as OctagonTitle } from './octagon-title.svg'
import { ReactComponent as OctagonSubtitle } from './octagon-subtitle.svg'
import './style.scss'

export default function OctagonBrand () {
  return (
    <div className='octagon-brand'>
      <OctagonBG className="svg-bg" />
      <OctagonTitle className="svg-title" />
      <OctagonSubtitle className="svg-subtitle" />
    </div>
  )
}