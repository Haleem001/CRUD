import React from 'react';

const Dashboard = React.lazy(() => import('./components/Dashboard'));
const MaleCustomers = React.lazy(() =>  import('./components/MaleCustomers'))

const routes =
  [
   {path: '/customers/male', name: 'Male Customers', element: MaleCustomers}

  ]


export default routes;