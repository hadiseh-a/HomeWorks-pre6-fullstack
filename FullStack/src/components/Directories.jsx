import { Folder, PlusCircle, Pencil, Trash } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Accordion, Button, Modal, Form } from "react-bootstrap";
import "../styles/sidebar.css";

const Directories = ({ onLinkClick }) => {
  const [activeModal, setActiveModal] = useState(null); // 'edit', 'create', 'delete'
  const [dirName, setDirName] = useState("secondary");
  const [newDirName, setNewDirName] = useState("");
  const [selectedDirectory, setSelectedDirectory] = useState(null);

  const directories = ["Main", "Secondary"]; // فرضی

  // --- Modal Handlers ---
  const openModal = (type, dir = null) => {
    setActiveModal(type);
    if (type === "edit") setDirName(dir || "");
    if (type === "delete") setSelectedDirectory(dir);
  };

  const closeModal = () => {
    setActiveModal(null);
    setDirName("");
    setNewDirName("");
    setSelectedDirectory(null);
  };

  const handleCreateDirectory = () => {
    console.log("New directory:", newDirName);
    closeModal();
  };

  const confirmDelete = () => {
    console.log("Directory deleted:", selectedDirectory);
    closeModal();
  };

  const handleSave = () => {
    console.log("Edited directory name:", dirName);
    closeModal();
  };

  return (
    <>
      <Accordion className="mt-3">
        <Accordion.Item eventKey="0" className="directories">
          <Accordion.Header>
            <Folder className="me-2" /> Directories
          </Accordion.Header>
          <Accordion.Body className="ps-2">
            {directories.map((dir) => (
              <NavLink
                key={dir}
                to={`/dir/${dir.toLowerCase()}`}
                onClick={onLinkClick}
                className="directory-link position-relative"
              >
                {dir}

                {dir !== "Main" && (
                  <span className="dir-actions">
                    <Pencil
                      className="me-2 icon-action"
                      onClick={(e) => {
                        e.preventDefault();
                        openModal("edit", dir);
                      }}
                    />
                    <Trash
                      className="icon-action"
                      onClick={(e) => {
                        e.preventDefault();
                        openModal("delete", dir);
                      }}
                    />
                  </span>
                )}
              </NavLink>
            ))}

            <div className="mt-3">
              <div className="button-new" onClick={() => openModal("create")}>
                <PlusCircle size={16} /> New
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Edit Modal */}
      <Modal show={activeModal === "edit"} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit directory name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formDirectoryTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={dirName}
                onChange={(e) => setDirName(e.target.value)}
                className="rounded-3"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleSave}
            className="w-25 rounded-3 fw-semibold"
            style={{ backgroundColor: "#9b5de5", border: "none" }}
          >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Create Modal */}
      <Modal show={activeModal === "create"} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create new directory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNewDirectoryTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a directory name"
                value={newDirName}
                onChange={(e) => setNewDirName(e.target.value)}
                className="rounded-3"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleCreateDirectory}
            className="w-25 rounded-3 fw-semibold"
            style={{ backgroundColor: "#9b5de5", border: "none" }}
          >
            Create
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Modal */}
      <Modal show={activeModal === "delete"} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This directory will be deleted permanently.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button
            variant="primary"
            style={{ backgroundColor: "#9b5de5", border: "none" }}
            onClick={confirmDelete}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Directories;
