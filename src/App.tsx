import { Routes, Route } from "react-router-dom";
import SigninForm from "./pages/auth/forms/SigninForm";
import Home from "./pages/Home";
import SignupForm from "./pages/auth/forms/SignupForm";
import AuthLayout from "./pages/auth/AuthLayout";
import RootLayout from "./pages/RootLayout";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" Component={SigninForm} />
          <Route path="/sign-up" Component={SignupForm} />
        </Route>
        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
