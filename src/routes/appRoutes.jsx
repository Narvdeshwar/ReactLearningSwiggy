import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../components/views/users/about/About";
import Contact from "../components/views/users/contact/Contact";
import Product from "../components/views/users/home/Product";
import Login from "../components/views/auth/Login";
import Signup from "../components/views/auth/Signup";
import Error from "../components/views/users/404/Error";
import RestaurantMenu from "../components/views/users/home/RestaurantMenu";
const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Product /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/signin", element: <Signup /> },
      { path: "/rest/:restId", element: <RestaurantMenu /> }
    ],
    errorElement: <Error />
  },
]);

export default AppRoutes;
