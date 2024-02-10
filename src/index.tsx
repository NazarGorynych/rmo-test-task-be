import { RootLayout } from "@layout/index";
import {
  ErrorPage,
  HomePage,
  AuctionPage,
  ChatPage,
  CreateAuctionPage,
  SignUpPage,
  SignInPage,
  MyAuctionPage
} from "@pages/index";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@/assets/styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "my-auction/:auctionId",
        element: <AuctionPage />
      },
      {
        path: "my-auction",
        element: <MyAuctionPage />
      },
      {
        path: "create-auction",
        element: <CreateAuctionPage />
      },
      {
        path: "login",
        element: <SignInPage />
      },
      {
        path: "sign-up",
        element: <SignUpPage />
      },
      {
        path: "chat",
        element: <ChatPage />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <GoogleOAuthProvider
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
  >
    <RouterProvider router={router} />
  </GoogleOAuthProvider>
);
