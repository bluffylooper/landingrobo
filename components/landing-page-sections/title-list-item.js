import Link from "next/link";

export default function TitleListItem({
  headline,
  subheadline,
  lists,
  scrollAnchorId,
}) {
  return (
    <section id={scrollAnchorId} className="title-list-item-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-title text-center">
              <h2>{headline}</h2>
              <p>{subheadline}</p>
            </div>
          </div>
        </div>
        <div className="w-layout-grid fund-grid logos">
          {lists.map((post, index) => (
            <a
              key={index}
              href="#"
              // target="_blank"
              class="vc-link w-inline-block"
            >
              <img
                src={post.image}
                loading="lazy"
                alt="Được góp vốn bởi Nextrans"
                class="fund-logo"
                style={{
                  border: "1px solid rgba(0, 0, 255, .15)",
                  borderRadius: "12px",
                }}
                width={200}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
