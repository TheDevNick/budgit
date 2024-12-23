import cors from "cors";
import express from "express";

import { Workspace } from "@budgit/types";

const app = express();
const PORT = 4000;

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/workspaces", (_, response: any) => {
  const workspaces: Workspace[] = [
    { name: "@budgit/api", version: "1.0.0" },
    { name: "@budgit/types", version: "1.0.0" },
    { name: "@budgit/web", version: "1.0.0" },
  ];
  response.json({ data: workspaces });
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
