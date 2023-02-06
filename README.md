# Hit the ground running!

This is my current scaffold I use in production enviroments. Stripped of branding and good to go!
This project includes

-   Next.js 13
-   Tailwind 3.x
-   Area17 Tailwind plugin suite
-   Storybook - with webpack5

## Getting Started

First, Copy a version of a `.env.local` from the `sample.env.local`

Now, you can run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

---

# Learning?!

## Next js

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Tailwind

This app uses tailwindcss `^3.2.4`, leveraging [area-17/tailwind-plugins](https://github.com/area17/tailwind-plugins). Plugins are controlled with `/app/fe-config.json` and `tailwind.config.js`

To learn more about tailwind, take a look at the following resources:

-   [Tailwind Documentation](https://tailwindcss.com/docs/installation) - learn about tailwindcss.
-   [Area 17 plugins Documentation](http://tailwind-plugins.dev.area17.com/) - learn about area 17 plugins.

## Storybook

The storybook docs, how do i say this... leave you wanting. But i have annotated the decisions and issues ive run into within the storybook implimentation. This should offer all the features you'd expect from it working with next.js.

-   The ability to have access to the `/public` folder
-   '@/path' resolution (ie `@/components/_ui/Button`)
-   Access and use of env vars, (we only use them for some 1 off storybook component enumeration)
-   The ability to place stories anywhere in the project (keep them in folders together or seperate them into component folders)
-   Tailwind working (obviously!)
