import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import type { HelmetServerState } from "react-helmet-async";
import { AppProviders, AppRoutes } from "./App";

interface HelmetContext {
  helmet?: HelmetServerState;
}

export async function render(url: string): Promise<{ html: string; helmet?: HelmetServerState }> {
  const helmetContext: HelmetContext = {};

  return new Promise((resolve, reject) => {
    const { pipe, abort } = renderToPipeableStream(
      <AppProviders helmetContext={helmetContext}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </AppProviders>,
      {
        onAllReady() {
          const chunks: Buffer[] = [];
          const pass = new PassThrough();
          pass.on("data", (chunk: Buffer) => chunks.push(chunk));
          pass.on("end", () => {
            resolve({
              html: Buffer.concat(chunks).toString("utf8"),
              helmet: helmetContext.helmet,
            });
          });
          pipe(pass);
        },
        onError(error) {
          abort();
          reject(error);
        },
      }
    );
  });
}
