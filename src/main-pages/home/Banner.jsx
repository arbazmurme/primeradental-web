import SliderBanner from '@/components/slidercomponents/SliderBanner'
import React from 'react'


const Banner = () => {
  return (
    <>
      <section style={{ overflow: "hidden", paddingTop: "0px" }}>
        <div
          id="carouselExampleControls"
          className=""
          data-bs-ride="carousel"
        >
          <div className="" style={{ overflow: "hidden" }}>
            <SliderBanner />
          </div>

        </div>
      </section>
    </>
  )
}

export default Banner