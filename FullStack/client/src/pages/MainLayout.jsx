import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const MainLayout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <Container fluid className="flex-grow-1">
        <Topbar />
        <Container fluid className="mt-3">
          <Outlet />
        </Container>
      </Container>
    </div>
  );
};

export default MainLayout;
