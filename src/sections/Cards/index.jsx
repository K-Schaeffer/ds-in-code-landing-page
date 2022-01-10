import '@meiuca/dsc-design-system/dist/components/icon';
import '@meiuca/dsc-design-system/dist/components/typography';
import { CardContent } from '@meiuca/dsc-design-system-team/dist/CardContent';
import iconShapes from '@meiuca/dsc-assets/dist/assets/icons/shapes';
import './style.scss'

export default function AppCards () {

  return (
    <div className='section-cards'>
      <div className="container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
          <div className="col-start-1 md:col-start-2 col-span-10">
            <div className='cards-title'>
              <dsc-icon
                icon={iconShapes}
                size="lg"
              >
              </dsc-icon>
              <dsc-typography component="heading" variant="h2" size="xl">
                Alguns <br />bons cards
              </dsc-typography>
              <dsc-typography component="paragraph">
                Esses são o que chamamos de Team Components.
              </dsc-typography>
            </div>
          </div>

      </div>
      <div className="cards-container container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
        <div className="col-span-12 md:col-span-3">
          <CardContent
            tagContent="Tag Highlight"
            headingContent="Heading"
            paragraphContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </div>
        <div className="col-span-12 md:col-span-3">
          <CardContent
            tagContent="Tag Highlight"
            headingContent="Heading"
            paragraphContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </div>
        <div className="col-span-12 md:col-span-3">
          <CardContent
            tagContent="Tag Highlight"
            headingContent="Heading"
            paragraphContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </div>
        <div className="col-span-12 md:col-span-3">
          <CardContent
            tagContent="Tag Highlight"
            headingContent="Heading"
            paragraphContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </div>
      </div>


      {/* <Grid
        className="cards-container"
        container
        direction="row"
        justifyContent="center"
        spacing={3}
      >
        <Grid container item xs={3}>
          <CardContent
            tagContent="Tag Highlight"
            headingContent="Heading"
            paragraphContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </Grid>
        <Grid container item xs={3}>
          <CardContent
            tagContent="Tag Highlight"
            headingContent="Heading"
            paragraphContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </Grid>
        <Grid container item xs={3}>
          <CardContent
            tagContent="Tag Highlight"
            headingContent="Heading"
            paragraphContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </Grid>
        <Grid container item xs={3}>
          <CardContent
            tagContent="Tag Highlight"
            headingContent="Heading"
            paragraphContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </Grid>
      </Grid> */}
    </div>
  )
}