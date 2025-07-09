import { useState } from "react";
import { Button, Form, InputGroup, Offcanvas } from "react-bootstrap";
import { PlusCircle, Search, List } from "react-bootstrap-icons";
import SidebarContent from "./SidebarContent";
import "../styles/navbar.css";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <>
      <div className="top-bar-container d-flex align-items-center justify-content-between px-4 py-3 shadow-sm bg-white flex-wrap gap-3 ">
        {/* دکمه منوی همبرگری فقط در موبایل */}
        <div className="d-flex align-items-center gap-2 order-sm-0 order-0 order-md-0 ">
          <Button variant=" d-lg-none" onClick={() => setShowSidebar(true)}>
            <List size={20} />
          </Button>
        </div>

        {/* Search Box */}
        <InputGroup className="search-box  order-last order-md-0 order-sm-last order-lg-first">
          <Form.Control
            placeholder="Search task"
            aria-label="Search task"
            className="search-input"
          />
          <InputGroup.Text className="search-icon">
            <Search />
          </InputGroup.Text>
        </InputGroup>

        {/* Center Date */}
        <div className=" text-center text-sm-center align-self-center align-content-center ">
          <span className="fw-bold d-lg-none">TO-DO LIST</span>
          <div className="date-text fw-semibold ">{today}</div>
        </div>

        {/* Add Task Button */}
        <Button className="btn-add-task d-none d-sm-inline-flex ">
          <PlusCircle className="me-2" size={18} /> Add New Task
        </Button>
      </div>

      {/* منوی همبرگری موبایل */}
      <Offcanvas
        show={showSidebar}
        onHide={() => setShowSidebar(false)}
        responsive="lg"
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <SidebarContent onLinkClick={() => setShowSidebar(false)} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
