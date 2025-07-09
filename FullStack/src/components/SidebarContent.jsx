import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import {
  List,
  Star,
  CheckCircle,
  Clock,
  PlusCircle,
} from "react-bootstrap-icons";
import Directories from "./Directories";

const SidebarContent = ({ onLinkClick }) => {
  return (
    <div className="p-3">
      <h5 className="text-purple fw-bold mb-4 text-center">TO-DO LIST</h5>

      <div className="mb-4">
        <Button className="btn-add-task w-100">
          <PlusCircle className="me-2" size={18} /> Add New Task
        </Button>
      </div>

      <Nav className="flex-column sidebar-links">
        <NavLink to="/all" onClick={onLinkClick} className="link-item">
          <List className="me-2" /> All tasks
        </NavLink>
        <NavLink to="/important" onClick={onLinkClick} className="link-item">
          <Star className="me-2" /> Important tasks
        </NavLink>
        <NavLink to="/completed" onClick={onLinkClick} className="link-item">
          <CheckCircle className="me-2" /> Completed tasks
        </NavLink>
        <NavLink to="/uncompleted" onClick={onLinkClick} className="link-item">
          <Clock className="me-2" /> Uncompleted tasks
        </NavLink>

        <Directories onLinkClick={onLinkClick} />
      </Nav>
    </div>
  );
};

export default SidebarContent;