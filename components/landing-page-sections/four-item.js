import Link from "next/link";

export default function FourItem({
  headline,
  subheadline,
  lists,
  scrollAnchorId,
}) {
  return (
    <section id={scrollAnchorId} className="four-item pb-30">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-lg-6 col-md-10">
            <div className="section-title text-center pb-5">
              <h2>{headline}</h2>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {lists?.map((post, index) => (
            <div key={index}>
              <h4>{post.title}</h4>
              <p>{post.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
