import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Inscription from "./components/Inscription";
import VerificationOtp from "./components/VerficationOtp";
import Invitation from "./components/Invitations";
import Onboarding from "./components/Onboarding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Inscription /> },
      { path: "/verification", element: <VerificationOtp /> },
      { path: "/invitation", element: <Invitation /> },
      { path: "/onboarding", element: <Onboarding /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
