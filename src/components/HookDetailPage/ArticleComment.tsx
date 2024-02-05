import Giscus from "@giscus/react";
import React from "react";

export default function MyApp() {
  return (
    <Giscus
      id="comments"
      repo="raipiot/rp-hooks"
      repoId="R_kgDOLMVXgw"
      category="Comments"
      categoryId="DIC_kwDOLMVXg84Cc8hF"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark_tritanopia"
      lang="en"
      loading="lazy"
    />
  );
}
