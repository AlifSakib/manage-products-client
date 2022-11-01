import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Add from "./components/Add";
import Home from "./components/Home";
import Update from "./components/Update";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch("http://localhost:5000/products"),
    },
    {
      path: "/add",
      element: <Add></Add>,
    },
    {
      path: "/update/:id",
      element: <Update></Update>,
      loader: ({ params }) =>
        fetch(`http://localhost:5000/product/${params.id}`),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
