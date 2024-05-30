import SplitPane from "../lib/SplitPane";
import "./App.css";
import Pane from "../lib/Pane";

function App() {
  return (
    <main>
      <SplitPane split="horizontal">
        <Pane minSize={"20rem"}>
          <h2>Left Pane</h2>
        </Pane>
        <Pane minSize="200">
          <h2>Right Pane</h2>
        </Pane>
      </SplitPane>
    </main>
  );
}

export default App;
