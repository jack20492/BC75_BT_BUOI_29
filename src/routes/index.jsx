import HomeTemplate from "../_pages/HomeTemplate";
import HomePage from "../_pages/HomeTemplate/HomePage";
import { Route } from "react-router-dom";

const routes = [
  {
    path: "",
    element: <HomeTemplate />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
];

const renderRoutes = () =>
  routes.map(({ path, element, children }) => (
    <Route key={path} path={path} element={element}>
      {children?.map(({ path: childPath, element: childElement }) => (
        <Route key={childPath} path={childPath} element={childElement} />
      ))}
    </Route>
  ));

export default renderRoutes;
