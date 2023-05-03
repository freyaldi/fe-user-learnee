import React, { useContext } from "react";
import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./components/templates/Layout";
import Home from "./pages/Home";
import AuthProvider, { AuthContext } from "./hooks/AuthContext";
import Login from "./pages/Login";

const ProtectedRoutes = () => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

const UnprotectedRoutes = () => {
  const { authenticated } = useContext(AuthContext);

  if (authenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

const App = (): JSX.Element => {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="courses" element={<h1>courses</h1>} />
              <Route element={<UnprotectedRoutes />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<h1>Register</h1>} />
              </Route>
              <Route element={<ProtectedRoutes />}>
                <Route path="cart" element={<h1>Cart</h1>} />
                <Route path="profile" element={<h1>Profile</h1>} />
              </Route>
            </Route>
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
