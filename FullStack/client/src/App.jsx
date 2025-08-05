import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import AllTasks from "./pages/AllTasks";
import ImportantTasks from "./pages/ImportantTasks";
import CompletedTasks from "./pages/CompletedTasks";
import UnCompletedTasks from "./pages/UncompletedTasks";
import DirectoryPage from "./pages/DirectoryPage";

import Login from "./components/Login";
import Signup from "./components/SignUp";
import AuthLayout from "./pages/AuthLayout";
import MainLayout from "./pages/MainLayout"; // تعریفش پایین‌تره 👇

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<AllTasks />} />
          <Route path="important" element={<ImportantTasks />} />
          <Route path="completed" element={<CompletedTasks />} />
          <Route path="uncompleted" element={<UnCompletedTasks />} />
          <Route path="dir/:name" element={<DirectoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
