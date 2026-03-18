const { default: useAuthStore } = "@/store/useAuthStore";
const { Navigate } = "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
