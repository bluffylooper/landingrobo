import { useEffect } from "react";

import Testimonial from "./testimonial";

export default function Testimonials({
  headline,
  testimonial: testimonials,
  scrollAnchorId,
}) {
  useEffect(() => {
    import("tiny-slider").then(({ tns }) => {
      tns({
        container: ".testimonial-active",
        autoplay: false,
        autoplayTimeout: 7000,
        autoplayButtonOutput: false,
        mouseDrag: true,
        loop: true,
        gutter: 0,
        nav: false,
        navPosition: "bottom",
        controls: true,
        controlsText: [
          '<i class="lni lni-chevron-left"></i>',
          '<i class="lni lni-chevron-right"></i>',
        ],
        items: 1,
      });
    });
  });

  return (
    <section id={scrollAnchorId} className="testimonial-section mt-50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="testimonial-active-wrapper">
              <div className="section-title text-center">
                <h2 className="mb-20">{headline}</h2>
              </div>

              <div className="testimonial-active">
                {testimonials.map((testimonial, index) => (
                  <Testimonial
                    key={index}
                    quote={testimonial.quote}
                    name={testimonial.name}
                    title={testimonial.title}
                    image={testimonial.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
