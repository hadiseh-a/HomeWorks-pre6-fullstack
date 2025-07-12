import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import AllTasks from "./pages/AllTasks";
import ImportantTasks from "./pages/ImportantTasks";
import CompletedTasks from "./pages/CompletedTasks";
import UnCompletedTasks from "./pages/UnCompletedTasks";
import Directories from "./pages/Directories";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className=" d-flex ">
      <BrowserRouter>
        <Sidebar />
        <Container fluid className="flex-grow-1">
          <Topbar className="d-lg-inline" />

          <Container className="main-aria">
            <Routes>
              <Route path="/" element={<AllTasks />} />
              <Route path="/important" element={<ImportantTasks />} />
              <Route path="/completed" element={<CompletedTasks />} />
              <Route path="/uncompleted" element={<UnCompletedTasks />} />
              <Route
                path="/dir/main"
                element={<Directories dirctory="Main" />}
              />
              <Route
                path="/dir/secondary"
                element={<Directories dirctory="Secondary" />}
              />
            </Routes>
          </Container>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
