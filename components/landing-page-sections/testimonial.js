export default function Testimonial({ quote, name, title, image }) {
  return (
    <div className="single-testimonial">
      <div className="quote">
        {/* <i className="lni lni-quotation"></i> */}
        <img
          src={image}
          loading="lazy"
          alt="Được góp vốn bởi Nextrans"
          width={400}
        />
      </div>
      <div className="content">
        <p>{quote}</p>
      </div>
      <div className="info">
        <h6>{name}</h6>
        <p>{title}</p>
      </div>
    </div>
  );
}
