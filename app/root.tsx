import { cssBundleHref } from "@remix-run/css-bundle"
import type { LinksFunction } from "@vercel/remix"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

import stylesheet from "~/tailwind.css";
export { ErrorBoundary } from "./components/error_boundary"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="p-4 mx-0 lg:mx-auto max-w-full lg:max-w-screen-lg">
          <h1 className="mb-10">
            <a href="/" className="flex flex-col items-center">
              <h1 className="text-xl">Logo here</h1>
              <span className="text-center inline-blockr">Subtitle here</span>
            </a>
          </h1>

          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
