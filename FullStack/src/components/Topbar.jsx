import { Button, Form, InputGroup } from "react-bootstrap";
import { PlusCircle, Search, List } from "react-bootstrap-icons";
import "../styles/navbar.css";
import Navbar from "react-bootstrap/Navbar";

const Topbar = () => {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <>
      <Navbar className="top-bar-container d-flex align-items-center justify-content-between px-4 py-3  flex-wrap gap-3 ">
        {/* Search Box */}
        <InputGroup className="search-box  order-last order-md-0 order-sm-last order-lg-first ">
          <Form.Control
            placeholder="Search task"
            aria-label="Search task"
            className="search-input bg-light"
          />
          <InputGroup.Text className="search-icon bg-light">
            <Search />
          </InputGroup.Text>
        </InputGroup>

        {/* Center Date */}
        <div className=" text-center text-sm-center align-self-center align-content-center little">
          <span className="fw-bold d-lg-none">TO-DO LIST</span>
          <div className="date-text fw-semibold ">{today}</div>
        </div>

        {/* Add Task Button */}
        <Button className="btn-add-task d-none d-sm-inline-flex ">
          <PlusCircle className="me-2" size={18} /> Add New Task
        </Button>
      </Navbar>
    </>
  );
};

export default Topbar;
