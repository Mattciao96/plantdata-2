import "@/i18n";
import "@/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "@/routes/root";
import Home from "@/routes/home";
import WhoAreWe from "@/routes/who-are-we";
import Resources from "@/routes/resources";
import ErrorPage from "@/error-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "who-are-we",
        element: <WhoAreWe />,
      },

      {
        path: "resources",
        element: <Resources />,
      },
    ],
  },

  /* {
    path: "resources",
    element: <Resources />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts",
    element: <Contacts />,
    errorElement: <ErrorPage />,
  } */
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback="...is loading">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>
);
