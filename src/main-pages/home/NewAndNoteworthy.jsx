"use client";
import SliderNewAndNoteworthy from "@/components/slidercomponents/SliderNewAndNoteworthy";
import React from "react";

const NewAndNoteworthy = () => {
  return (
    <>
      <section>
        <div className="container-fluid-lg" style={{ marginTrim: "" }}>
          <div className="row">
            <div className="col-12">
              {/* <div className="three-slider arrow-slider ratio_65"> */}
              <div className=" ratio_65">
                <SliderNewAndNoteworthy />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewAndNoteworthy;
