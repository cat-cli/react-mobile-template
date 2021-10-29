export default [
  {
    path: '/',
    component: '../layouts/BaseLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/UserLayout',
        routes: [{ path: '/', component: './home' }],
      },
    ],
  },
];
