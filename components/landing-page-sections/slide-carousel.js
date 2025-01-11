import Image from "next/image";
import Link from "next/link";

export default function SlideCarousel({
  headline,
  subheadline,
  lists,
  scrollAnchorId,
}) {
  return (
    <section id={scrollAnchorId} className="carousel">
      <div>
        <div className="row">
          <div className="section-title text-center">
            <h2>{headline}</h2>
            <p>{subheadline}</p>
          </div>
          <div className="carousel-container">
            <div className="carousel-track">
              {lists?.map((item, index) => (
                <div className="carousel-card" key={`${index}`}>
                  <Image
                    src={item.image}
                    loading="lazy"
                    alt="Được góp vốn bởi Nextrans"
                    height="100"
                    width="100"
                  />
                </div>
              ))}

              {lists?.map((item, index) => (
                <div className="carousel-card" key={`${index}`}>
                  <Image
                    src={item.image}
                    loading="lazy"
                    alt="Được góp vốn bởi Nextrans"
                    height="100"
                    width="100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
