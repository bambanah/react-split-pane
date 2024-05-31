import SplitPane, { Pane } from "../";
import "./App.css";

function App() {
  return (
    <main>
      <SplitPane split="vertical">
        <Pane minSize={"20rem"}>
          <div>
            <h2>First Pane</h2>
          </div>
        </Pane>
        <Pane minSize="200">
          <h2>Second Pane</h2>
        </Pane>
        <Pane minSize="200">
          <h2>Third Pane</h2>
        </Pane>
      </SplitPane>
    </main>
  );
}

export default App;
