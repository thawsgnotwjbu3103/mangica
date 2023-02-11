import { createBrowserRouter } from "react-router-dom"
// import 
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import Title from '../pages/Title';
import Read from '../pages/Read';

const router = createBrowserRouter([
    {
        path: "/",
        element:
            <Layout>
                <Home />
            </Layout>,
    },
    {
        path: "/title/:id/:slug",
        element:
            <Layout>
                <Title />
            </Layout>
    },
    {
        path: "/read/:id/:slug",
        element:
            <Layout>
                <Read />
            </Layout>
    }
])

export default router