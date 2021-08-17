This is my personal static website/resume/blog, implemented as a [Next.js](https://nextjs.org/) project.

## Running it

First we need to install all dependencies

```bash
npm install
# or
yarn
```

After that, we just need to run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tips and Tweaks

- This webapp uses [Chakra-ui](http://chakra-ui.com) to provide styles, so I recommend to have a look on it
- I implement state management using react states, reducers and contexts, no redux needed. Although, I use `@redux-toolkit` to have its handy helper functions to deal with reducers
