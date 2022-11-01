import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Add from "./components/Add";
import Home from "./components/Home";

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
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
