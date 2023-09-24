import { json, type LoaderFunction } from "@vercel/remix"
import { Card, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { db } from "~/lib/db.server"

export const loader: LoaderFunction = async () => {
  // const myModels = await db.modelname.findMany()
  return json({ success: true })
}

export default function Index() {
  return <Card>
    <CardHeader>
      <CardTitle>Component Test</CardTitle>
      <CardDescription>Testing description</CardDescription>
    </CardHeader>
  </Card>
}