import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Sidebar from "./components/Sidebar";
import AllTasks from "./pages/AllTasks";
import ImportantTasks from "./pages/ImportantTasks";
import CompletedTasks from "./pages/CompletedTasks";
import UnCompletedTasks from "./pages/UnCompletedTasks";
import Directories from "./pages/Directories";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContents";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/all" element={<AllTasks />} />
          <Route path="/important" element={<ImportantTasks />} />
          <Route path="/completed" element={<CompletedTasks />} />
          <Route path="/uncompleted" element={<UnCompletedTasks />} />
          <Route path="/dir/main" element={<Directories dirctory={"Main"} />} />
          <Route
            path="/dir/secondary"
            element={<Directories dirctory={"Secondary"} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
