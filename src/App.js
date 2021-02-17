import React from "react";

import ContentBlock from "./components/content-block/content-block.component";
import MainProvider from "./context/main.context";

const App = () => (
  <MainProvider>
    <ContentBlock />
  </MainProvider>
);

export default App;
