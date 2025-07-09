import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Folder, PlusCircle, Pencil, Trash } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import '../styles/sidebar.css';

const Directories = ({ onLinkClick }) => {

  return (
    <Accordion className="mt-3">
      <Accordion.Item eventKey="0" defaultChecked>
        <Accordion.Header>
          <Folder className="me-2" /> Directories
        </Accordion.Header>
        <Accordion.Body className="ps-2">
          <NavLink
            to="/directories/main"
            onClick={onLinkClick}
            className="directory-link position-relative"
          >
            Main
            <span className="dir-actions">
              <Pencil className="me-2 icon-action" />
              <Trash className="icon-action" />
            </span>
          </NavLink>

          <NavLink
            to="/directories/secondary"
            onClick={onLinkClick}
            className="directory-link position-relative"
          >
            Secondary
            <span className="dir-actions">
              <Pencil className="me-2 icon-action" />
              <Trash className="icon-action" />
            </span>
          </NavLink>

          {/* دکمه New */}
          <div className="mt-3">
            <div className="button-new">
              <PlusCircle className="me-2" size={16} /> New
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Directories;