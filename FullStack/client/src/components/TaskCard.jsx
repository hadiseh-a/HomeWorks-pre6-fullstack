import { useState } from "react";
import { Card, Badge, Button, Modal } from "react-bootstrap";
import { StarFill, Star } from "react-bootstrap-icons";
import { IoMdMore } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { RiCalendarCheckLine } from "react-icons/ri";
import AddOrEditTaskModal from "./AddOrEditTaskModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask } from "../store/tasksSlice";

const TaskCard = ({
  id,
  title,
  description,
  deadline,
  important,
  completed,
  directory,
  index,
}) => {
  const dispatch = useDispatch();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const toggleStar = () => {
    dispatch(editTask({ id, data: { important: !important } }));
  };

  const toggleCompleted = () => {
    dispatch(editTask({ id, data: { completed: !completed } }));
  };

  const handleDelete = () => {
    dispatch(deleteTask(id));
    setShowDeleteModal(false);
  };

  const deadLine = new Date(deadline);

  const directories = useSelector((state) => state.directories);

  return (
    <Card
      className="shadow-sm  border-0 rounded-3 container  mx-0 bg-light flex-shrink-1 "
      style={{ maxWidth: "18rem", height: "16rem" }}
    >
      <div className="position-relative ">
        <div className="position-absolute  end-0  translate-middle-y">
          <h6
            className="text-danger px-3 py-1 rounded-top-3 "
            style={{ backgroundColor: "#fca7a7" }}
          >
            {directory.name}
          </h6>
        </div>
      </div>
      <Card.Body>
        <div className="d-flex flex-column  align-items-around">
          <div style={{ height: "9.5rem" }}>
            <Card.Title className=" mb-2">{title}</Card.Title>
            <Card.Text className="text-muted small ">{description}</Card.Text>
          </div>
          <small className="text-secondary d-flex  align-items-center">
            <RiCalendarCheckLine />
            {` ${deadLine.getUTCDate()}/${
              deadLine.getUTCMonth() + 1
            }/${deadLine.getUTCFullYear()}`}
          </small>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top ">
          <Badge
            bg={completed ? "success" : "warning"}
            color={completed ? "success" : "warning"}
            className="px-2 py-1 rounded-5 "
            style={{ cursor: "pointer" }}
            onClick={toggleCompleted}
          >
            {completed ? "Completed" : "Uncompleted"}
          </Badge>
          <div className="d-flex justify-content-center align-items-center align-content-center">
            <Button variant="link" className="p-0 text-black">
              {important ? (
                <StarFill color="red" onClick={toggleStar} />
              ) : (
                <Star
                  color={`${index === 0 ? "white" : "gray"}`}
                  onClick={toggleStar}
                />
              )}
            </Button>
            <Button
              variant="link"
              size="sm"
              className="p-0 text-black  mx-2"
              onClick={() => setShowDeleteModal(true)}
            >
              <FaTrash className="text-center align-self-center" />
            </Button>
            <Button
              variant="link"
              className="p-0 text-black "
              onClick={() => setShowEditModal(true)}
            >
              <IoMdMore size={20} />
            </Button>
          </div>
        </div>
      </Card.Body>

      {/* Delete confirmation */}
      <Modal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        centered
        variant="light"
      >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This task will be deleted permanently.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            style={{ backgroundColor: "#9b5de5", border: "none" }}
            onClick={handleDelete}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit / Detail modal */}
      <AddOrEditTaskModal
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
        handleSave={(data) => dispatch(editTask({ id, data }))}
        directories={directories}
        defaultTask={{
          title: title,
          description: description,
          deadline: deadline.split("T")[0],
          completed: completed,
          important: important,
          dirId: directory._id,
        }}
        title="Edit Task"
      />
    </Card>
  );
};

export default TaskCard;
