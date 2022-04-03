import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedRoute from "./layouts/ProtectedRoute";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import ConfirmAccount from "./pages/ConfirmAccount";
import HomePage from "./pages/HomePage";
import Repositories from "./pages/Repositories";

//Context
import { AuthProvider } from "./context/AuthProvider";
import { UsersProviders } from "./context/UsersProviders";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UsersProviders>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="forgot-password/:token" element={<NewPassword />} />
              <Route path="confirm/:id" element={<ConfirmAccount />} />
            </Route>

            <Route path="/home-page" element={<ProtectedRoute />}>
              <Route index element={<HomePage />} />
              <Route path="repositories" element={<Repositories />} />
            </Route>
          </Routes>
        </UsersProviders>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
