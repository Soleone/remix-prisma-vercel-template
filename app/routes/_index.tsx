import { json, type LoaderFunction } from "@vercel/remix"
import { Card, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { db } from "~/lib/db.server"

export async function loader() {
  // const list = await db.modelname.findMany()
  //return json({ list })
  return json({ success: true })
}

export default function Index() {
  //const { list } = useLoaderData<typeof loader>()

  return <Card>
    <CardHeader>
      <CardTitle>Component Test</CardTitle>
      <CardDescription>Testing description</CardDescription>
    </CardHeader>
  </Card>
}