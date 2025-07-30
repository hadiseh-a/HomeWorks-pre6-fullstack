import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { Folder, PlusCircle, Pencil, Trash } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addDirectory,
  deleteDirectory,
  editDirectory,
} from "../store/directoriesSlice";
import { Modal, Button, Form } from "react-bootstrap";

const Directories = ({ onLinkClick }) => {
  const directories = useSelector((s) => s.directories);
  const dispatch = useDispatch();

  const [modalType, setModalType] = useState(null);
  const [index, setIndex] = useState(-1);
  const [directory, setDirectory] = useState({ _id: "", type: "" });

  const open = (type, idx = -1) => {
    setModalType(type);
    setIndex(idx);
    setDirectory(type === "edit" ? directories[idx] : "");
  };
  const close = () => setModalType(null);

  const handleSave = () => {
    if (modalType === "create") dispatch(addDirectory(directory.name));
    if (modalType === "edit") dispatch(editDirectory(directory));
    close();
  };
  const handleDelete = () => {
    dispatch(deleteDirectory(directories[index]._id));
    close();
  };

  return (
    <>
      <Accordion className="mt-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Folder className="me-2" /> Directories
          </Accordion.Header>
          <Accordion.Body className="ps-2">
            {directories.map((dir, idx) => (
              <NavLink
                key={dir._id}
                to={`/dir/${dir.name.toLowerCase()}`}
                onClick={onLinkClick}
                className="directory-link position-relative"
                state={dir}
              >
                {dir.name}
                {dir.name !== "Main" && (
                  <span className="dir-actions">
                    <Pencil
                      className="me-2 icon-action"
                      onClick={(e) => {
                        e.preventDefault();
                        open("edit", idx);
                      }}
                    />
                    <Trash
                      className="icon-action"
                      onClick={(e) => {
                        e.preventDefault();
                        open("delete", idx);
                      }}
                    />
                  </span>
                )}
              </NavLink>
            ))}
            <div className="mt-3">
              <div className="button-new" onClick={() => open("create")}>
                <PlusCircle size={16} /> New
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Modal
        show={modalType === "create" || modalType === "edit"}
        onHide={close}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === "create"
              ? "Create new directory"
              : "Edit directory name"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Enter a directory name"
            value={directory.name}
            onChange={(e) =>
              setDirectory({ _id: directory._id, type: e.target.value })
            }
            className="rounded-3"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleSave}
            className="w-25 rounded-3 fw-semibold"
            style={{ backgroundColor: "#9b5de5", border: "none" }}
          >
            {modalType === "create" ? "Create" : "Edit"}
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalType === "delete"} onHide={close} centered>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This directory will be deleted.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleDelete}
            style={{ backgroundColor: "#9b5de5", border: "none" }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Directories;
