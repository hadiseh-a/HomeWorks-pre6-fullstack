import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  List,
  Star,
  CheckCircle,
  Clock,
  PlusCircle,
} from "react-bootstrap-icons";
import Directories from "./Directories";
import { useState } from "react";
import AddOrEditTaskModal from "./AddOrEditTaskModal";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/tasksSlice";

const SidebarContent = ({ onLinkClick }) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const directories = useSelector((state) => state.directories);
  return (
    <div className="p-3">
      <h5 className="text-purple fw-bold mb-4 text-center">TO-DO LIST</h5>

      <div className="mb-4">
        <Button
          className="btn-add-task w-100"
          onClick={() => setShowModal(true)}
        >
          <PlusCircle className="me-2" size={18} /> Add New Task
        </Button>
      </div>

      <Nav className="flex-column sidebar-links">
        <NavLink to="/" onClick={onLinkClick} className="link-item">
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
      <AddOrEditTaskModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSave={(data) => dispatch(addTask(data))}
        directories={directories}
        title="Add a task"
      />
    </div>
  );
};

export default SidebarContent;
