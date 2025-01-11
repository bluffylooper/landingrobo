import { contents } from "@/lib/content";
import { useRouter } from "next/router";
import React from "react";

export default function Id() {
  const router = useRouter();
  return (
    <div className=" mt-24 container">
      <div
        dangerouslySetInnerHTML={{
          __html: contents[router.query.id],
        }}
      ></div>
    </div>
  );
}
