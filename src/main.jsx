import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// 1. استبدال createBrowserRouter بـ createHashRouter
import { createHashRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductsList from "./pages/ProductsList";
import NotFound404 from "./pages/NotFound404";
import ProductDetails from "./pages/ProductDetails";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { LanguageProvider } from "./context/LanguageContext";
import ProtectedRoute from "./components/common/ProtectedRoute";

// 2. استخدام createHashRouter لضمان عمل الروابط على GitHub Pages
const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ProductsList />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound404 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </Provider>
  </StrictMode>,
);
