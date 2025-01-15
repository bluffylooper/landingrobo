import { contents } from "@/lib/content";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const PdfViewer = dynamic(() => import("../../components/PdfViewer"), {
  ssr: false,
});

export default function Id() {
  const router = useRouter();

  return (
    <div className=" mt-24 container">
      <div
        dangerouslySetInnerHTML={{
          __html: contents[`${router.query.id}-${router.locale}`],
        }}
      ></div>
      {[
        "client-agreement",
        "partner-agreement",
        "terms-of-personal-data-processing",
        "general-risk-disclosure",
      ].includes(router.query.id) ? (
        <div className=" w-full min-h-[80vh]">
          <PdfViewer
            file={`/${router.query.id}.pdf`}
            // width="800px"
            // height="2100px"
            type="application/pdf"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export async function getStaticPaths() {
  return {
    paths: [
      "legal-statement",
      "integrity-violation",
      "money-laundering",
      "law-enforcement",
      "client-agreement",
      "partner-agreement",
      "terms-of-personal-data-processing",
      "general-risk-disclosure",
    ].map((item) => ({
      params: {
        id: item,
      },
    })),
    fallback: true, // false or "blocking"
  };
}
export async function getStaticProps({ locale }) {
  try {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
      revalidate: 10,
    };
  } catch (e) {
    console.log("Could not get posts", e);

    return {
      props: {},
    };
  }
}
