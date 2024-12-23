import cors from "cors";
import express from "express";

import { Workspace } from "@budgit/types";

const app = express();
const PORT = 3001;

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/workspaces", (_, response: any) => {
  const workspaces: Workspace[] = [
    { name: "@budget/api", version: "1.0.0" },
    { name: "@budget/types", version: "1.0.0" },
    { name: "@budget/web", version: "1.0.0" },
  ];
  response.json({ data: workspaces });
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
