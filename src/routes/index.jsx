import AdminTemplate from "../_pages/AdminTemplate";
import AddUserPage from "../_pages/AdminTemplate/AddUserPage";
import AuthPage from "../_pages/AdminTemplate/AuthPage";
import DashboardPage from "../_pages/AdminTemplate/DashboardPage";
import HomeTemplate from "../_pages/HomeTemplate";
import AboutPage from "../_pages/HomeTemplate/AboutPage";
import HomePage from "../_pages/HomeTemplate/HomePage";
import ListMovie from "../_pages/HomeTemplate/ListMoviePage";
import ContactPage from "../_pages/HomeTemplate/ContactPage";
import ShoppingPhonePage from "../_pages/HomeTemplate/ShoppingPhonePage";
import { Route } from "react-router-dom";

const routes = [
  {
    path: "",
    element: HomeTemplate,
    children: [
      {
        path: "",
        element: HomePage,
      },
      {
        path: "about",
        element: AboutPage,
      },
      {
        path: "list-movie",
        element: ListMovie,
      },
      {
        path: "contact",
        element: ContactPage,
      },
      {
        path: "shopping-phone",
        element: ShoppingPhonePage,
      },
    ],
  },
  {
    path: "admin",
    element: AdminTemplate,
    children: [
      {
        path: "dashboard",
        element: DashboardPage,
      },
      {
        path: "add-user",
        element: AddUserPage,
      },
    ],
  },
  {
    path: "auth",
    element: AuthPage,
  },
];

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.children) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.children.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};

export default renderRoutes;
