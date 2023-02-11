import { RouterProvider } from 'react-router-dom';
import router from './browserRouter';

export default () => {
    return (<RouterProvider router={router} />)
}