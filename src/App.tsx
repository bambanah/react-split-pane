import SplitPane, { Pane } from "../";
import "./App.css";

function App() {
  return (
    <main>
      <SplitPane>
        <Pane>
          <h2>Left Pane</h2>
        </Pane>
        <Pane>
          <h2>Right Pane</h2>
        </Pane>
      </SplitPane>
    </main>
  );
}

export default App;
