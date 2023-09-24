import type { LoaderFunction } from "@vercel/remix"

const ROOT_URL_REDIRECT = "https://my-redirect-url.com"

export const loader: LoaderFunction = () => {
  return new Response(null, { status: 302, headers: { "Location": ROOT_URL_REDIRECT } })
}