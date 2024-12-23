import type { Workspace } from "@budgit/types";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";

function App(): ReactElement {
  const [data, setData] = useState<Workspace[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/workspaces")
      .then((response) => response.json())
      .then(({ data }) => setData(data));
  }, []);

  return (
    <div>
      <h1>Testing Turborepo project</h1>
      <h2>Existing Workspaces</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
