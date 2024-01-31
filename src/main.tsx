import "@/i18n";
import "@/index.css";
import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "@/routes/root";
import Home from "@/routes/home";
import WhoAreWe from "@/routes/who-are-we";
import Resources from "@/routes/resources";
import Contacts from "@/routes/contacts";
import ErrorPage from "@/error-page";
import Spinner from "./components/ui/spinner";

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
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "who-are-we",
        element: <WhoAreWe />,
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
], { basename: "/plantdata/" });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <Suspense fallback={<div className="flex justify-center"><Spinner /></div>}>
      <RouterProvider router={router} />
    </Suspense>
  </ThemeProvider>,
);
