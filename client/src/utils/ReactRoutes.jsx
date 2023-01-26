import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])


export default () => {
  return (
    <Layout>
      <RouterProvider router={router}/>
    </Layout>
  )
}