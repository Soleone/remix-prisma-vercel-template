# Remix Vercel Prisma Template

Optimized for immediate deployment to Vercel.

Comes with:

* Prisma
* Tailwind
* PostCSS
* Basic UI components fropm shadcn-ui
* Typescript

## Development

Requirements: Have Postgres installed

1. Rename `.env.example` to `.env` and adjust your local database URL.
2. Edit `schema.prisma` to create a basic table.
3. `npm run migrate` to create new migrations file.
4. `npm install` will also run Prisma migrations and create client which is meant for the production environment, it's fine if this fails locally.
5. `npm run dev` starts your app in development mode, rebuilding assets on file changes.

### Troubleshooting

* If locally Prisma is complaining that it needs a prisma:// URL then you need to run `npx prisma generate` to ensure it's not using the accelerated client locally

## Deployment

1. Run `vercel` to link a new or existing Vercel project and create the .vercel directory.
2. Create new Prisma Accelerate project to get DATABASE_URL - [link](https://www.prisma.io/docs/data-platform/accelerate/getting-started)
3. In Vercel project settings environment variables configure DATABASE_URL to full prisma schema from Prisma Accelerate.
4. Also configure DIRECT_DATABASE_URL to direct postgresql URL for running migrations during deploy.
5. `npm run deploy` to deploy to Vercel which will run migrations there via postinstall from package.json.