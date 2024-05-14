import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Root, {
  action as rootAction,
  loader as rootLoader,
} from "./routes/root";
import Contact, {
  action as contactAction,
  loader as contactLoader,
} from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";
import { action as deleteAction } from "./routes/delete";
import Index from "./routes/index";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/portfolio/react-router/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "/portfolio/react-router/contacts/:contactId",
            element: <Contact />,
            action: contactAction,
            loader: contactLoader,
          },
          {
            path: "/portfolio/react-router/contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "/portfolio/react-router/contacts/:contactId/destroy",
            action: deleteAction,
            errorElement: <div>Oh no, there was an error!</div>,
          },
        ],
      },
    ],
  },
]);

const Main = () => {
  return <RouterProvider router={router} />;
};

export default Main;
