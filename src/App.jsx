import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Root from "./Pages/Root/Root";
import MainError from "./Pages/Errors/MainError";
import NotFound from "./Pages/Errors/NotFound";
import Login from "./Pages/Auth/Login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <MainError />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "login", element: <Login /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
