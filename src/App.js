import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
 // Import the Layout component

function App() {
  const appRouter = createBrowserRouter([
    {
          path: "/",
          element: <HomePage />, // Home page
        },
        {
          path: "/about", // Set path for About page
          element: <About />, // About page
        },
        {
          path: "/contact", // Set path for Contact page
          element: <Contact />, // Contact page
        },
      
        {
          path: "/service", // Set path for Contact page
          element: <Services/>, // Contact page
        },
      
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
