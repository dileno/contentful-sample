A [Next.js](https://nextjs.org/) sample project that integrates with [Contentful](https://www.contentful.com/) to display dynamic content.
For Tre Sverige.

Key features:

- Fetch data from a sample Contentful space
- TypeScript used, including automatically generated types with cf-content-types-generator
- Tailwind CSS used

## Required Environment Variables

This project requires the following environment variables to be set:

```
CONTENTFUL_SPACE_ID=<Replace with your Contentful Space ID>
CONTENTFUL_ACCESS_TOKEN=<Replace with your Contentful access token>
CONTENTFUL_PREVIEW_ACCESS_TOKEN=<Replace with your Contentful preview access token>
CONTENTFUL_REVALIDATE_SECRET=<Replace with a secret string to be set in Contentful's webhook settings>
CONTENTFUL_PREVIEW_SECRET=<Replace with a secret string to be set in Contentful's Content Preview settings>
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.