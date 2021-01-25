
import ContentBlock from "./components/content-block/content-block.component";
import MainProvider from "./context/main.context";

const App = () => {
  return (
    <MainProvider>
      <ContentBlock/>
    </MainProvider>
  );
}

export default App;
