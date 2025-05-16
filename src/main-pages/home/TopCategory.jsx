"use client";
import SliderTopCategory from "@/components/slidercomponents/SliderTopCategory";
const TopCategory = () => {
 

  return (
    <>
      <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="title d-block" style={{ marginTop: "0px" }}>
                <h2>Browse By Categories</h2>
                <span className="title-leaf" style={{ marginLeft: "40px" }}>
                  <svg className="icon-width">
                    <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
                  </svg>
                </span>
                {/* <p>A virtual assistant collects the products from your list</p> */}
              </div>
              <div className="slider- mt-lg-4">
                <SliderTopCategory />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCategory;
