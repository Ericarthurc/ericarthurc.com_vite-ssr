import { Component } from "solid-js";

import { usePageContext } from "@/PageLayout";

const Page: Component = () => {
  const pageContext = usePageContext();

  return (
    <div class="main-container">
      <h1>Series</h1>
    </div>
  );
};

export default Page;
