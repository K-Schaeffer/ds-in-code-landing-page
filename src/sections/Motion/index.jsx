import RotationElement from "../../components/RotationElement";
import  { ScrollRotate } from 'react-scroll-rotate';
import 'ds-in-code-design-system/dist/components/typography';
import './style.scss';

export default function AppMotionSection () {
  return (
    <div className="motion-section">
      <div className="container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
        <div className="col-start-1 md:col-start-2 col-span-12 md:col-span-3 motion-section__text-1">
          <dsc-typography component="heading" variant="h6" size="sm">
            Falta um form, né?
          </dsc-typography>
        </div>
        <div className="col-span-12 md:col-span-4">
          <ScrollRotate method={"perc"} loops={1}>
            <RotationElement />
          </ScrollRotate>
        </div>
        <div className="col-span-12 md:col-span-3  motion-section__text-2">
          <dsc-typography component="paragraph">
            Desce mais um pouquinho!
          </dsc-typography>
        </div>
      </div>
    </div>
  )
}