# Remix Vercel Prisma Template

Optimized for immediate deployment to Vercel.

Comes with:

* Prisma
* Tailwind
* PostCSS
* Basic UI components fropm shadcn-ui
* Typescript

## Development

1. Rename `.env.example` to `.env` and paste your local database URL
2. `npm install`
3. Edit `schema.prisma` to create a basic table
4. `npm install` can be run again to run Prisma migrations
5. `npm run dev` starts your app in development mode, rebuilding assets on file changes.

## Deployment

1. Run `vercel` to link a new or existing Vercel project and create the .vercel directory.
2. Create new Prisma Accelerate project to get DATABASE_URL - [link](https://www.prisma.io/docs/data-platform/accelerate/getting-started)
3. Configure DATABASE_URL in Vercel project settings environment variables
4. `vercel --prod` to deploy
