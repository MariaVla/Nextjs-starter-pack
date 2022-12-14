This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Next.js started pack:

- React Query - fetching library
- React Hook Forms - forms library
- JSON Server for API mock

### TODO

- Add post example with React Query
- Make login functional

## Dependencies

- nvm -v → 0.39.1

- node -v → v18.7.0

- npm -v → 8.15.1

- yarn -v → 1.22.17

## Setup

1. Clone repository.
2. `$ yarn install`
3. `$ yarn dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## To run JSON server locally (our mock database) - Or use https://my-fake-json-server.herokuapp.com if working

`$ yarn serve-json`

This will create some endpoints define in the `db.json` where you can fetch data.

`http://localhost:4000/superheroes`
`http://localhost:4000/superheroes/:id`
`http://localhost:4000/friends`
`http://localhost:4000/friends/:id`

You can also make `post/put/delete` requests. Example:

```javascript
const createUser = () => {
  axios
    .post('http://localhost:4000/superheroes', {
      id: 4,
      name: 'The Flash',
      alterEgo: 'Barry Allen',
    })
    .then((resp) => {
      console.log(resp.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateUser = () => {
  axios
    .put('http://localhost:4000/superheroes/4', {
      name: 'Flash',
      alterEgo: 'Barry Allen',
    })
    .then((resp) => {
      console.log(resp.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteUser = () => {
  axios
    .delete('http://localhost:4000/superheroes/4')
    .then((resp) => {
      console.log(resp.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
```

---

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
