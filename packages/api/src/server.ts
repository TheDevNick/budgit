import type { Workspace } from "@budgit/types";
import cors from "cors";
import type { Express, Request, Response } from "express";
import express, { json, urlencoded } from "express";
import morgan from "morgan";

export const createServer = (): Express => {
  const app = express();

  app.disable("x-powered-by");
  app.use(morgan("dev"));
  app.use(cors({ origin: "http://localhost:3000" }));
  app.use(json());
  app.use(urlencoded({ extended: true }));

  app.get("/message/:name", (req: Request, res: Response) => {
    res.json({ message: `hello ${req.params.name}` });
  });

  app.get("/status", (_, res: Response) => {
    res.json({ ok: true });
  });

  app.get("/workspaces", (_, response: Response) => {
    const workspaces: Workspace[] = [
      { name: "@budgit/api", version: "1.0.0" },
      { name: "@budgit/types", version: "1.0.0" },
      { name: "@budgit/web", version: "1.0.0" },
    ];
    response.json({ data: workspaces });
  });

  return app;
};
