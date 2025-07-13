import { useState } from "react";
import { Card, Badge, Button, Modal } from "react-bootstrap";
import { StarFill, Star } from "react-bootstrap-icons";
import { IoMdMore } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { RiCalendarCheckLine } from "react-icons/ri";

function TaskCard({ title, description, deadline, important, completed }) {
  const deadLine = new Date(deadline);

  const [isStarred, setIsStarred] = useState(important);
  const [isCompleted, setIsCompleted] = useState(completed);

  const toggleStar = () => setIsStarred((prev) => !prev);
  const toggleCompleted = () => setIsCompleted((prev) => !prev);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    // حذف واقعی تسک را اینجا انجام بده
    console.log("Deleted task:", task._id);
    setShowDeleteModal(false);
  };

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
            Main
          </h6>
        </div>
      </div>
      <Card.Body>
        {/* Header with actions */}
        <div className="d-flex flex-column  align-items-around">
          <div>
            <Card.Title className=" mb-2">{title}</Card.Title>
            <Card.Text className="text-muted small " style={{ height: "5rem" }}>
              {description}
            </Card.Text>
          </div>
          <small className="text-secondary d-flex  align-items-center">
            <RiCalendarCheckLine />
            {` ${deadLine.getUTCDate()}/${
              deadLine.getUTCMonth() + 1
            }/${deadLine.getUTCFullYear()}`}
          </small>
        </div>

        {/* Footer with date and status */}
        <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top ">
          <Badge
            bg={isCompleted ? "success" : "warning"}
            color={isCompleted ? "success" : "warning"}
            className="px-2 py-1 rounded-5 "
            style={{ cursor: "pointer" }}
            onClick={toggleCompleted}
          >
            {isCompleted ? "Completed" : "Uncompleted"}
          </Badge>
          <div className="d-flex justify-content-center align-items-center align-content-center">
            <Button variant="link" className="p-0 text-black">
              {isStarred ? (
                <StarFill color="red" onClick={toggleStar} />
              ) : (
                <Star color="gray" onClick={toggleStar} />
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
            <Button variant="link" className="p-0 text-black ">
              <IoMdMore size={20} className="align-self-center" />
            </Button>
          </div>
        </div>
      </Card.Body>
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
    </Card>
  );
}

export default TaskCard;
