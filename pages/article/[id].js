import { contents } from "@/lib/content";
import { useRouter } from "next/router";
import React from "react";
// import PDF from "../../public/client_agreement_bz_en.en.vi.pdf";
export default function Id() {
  const router = useRouter();
  return (
    <div className=" mt-24 container">
      <div
        dangerouslySetInnerHTML={{
          __html: contents[router.query.id],
        }}
      ></div>
      {[
        "tern-of-service",
        "partner-agreement",
        "terms-of-personal-data-processing",
        "general-risk-disclosure",
      ].includes(router.query.id) ? (
        <embed
          src={`/${router.query.id}.pdf`}
          className=" w-full min-h-screen"
          // width="800px"
          // height="2100px"
          type="application/pdf"
        />
      ) : (
        ""
      )}
    </div>
  );
}
