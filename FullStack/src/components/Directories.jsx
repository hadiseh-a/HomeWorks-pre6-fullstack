import { Accordion } from "react-bootstrap";
import { Folder, PlusCircle, Pencil, Trash } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const Directories = ({ onLinkClick }) => {
  return (
    <Accordion className="mt-3">
      <Accordion.Item eventKey="0" className="directories">
        <Accordion.Header>
          <Folder className="me-2" /> Directories
        </Accordion.Header>
        <Accordion.Body className="ps-2">
          <NavLink to="/dir/main" className="directory-link" onClick={onLinkClick}>
            Main
          </NavLink>

          <NavLink to="/dir/secondary" className="directory-link" onClick={onLinkClick}>
            Secondary
            <span className="dir-actions">
              <Pencil className="me-2 icon-action" />
              <Trash className="icon-action" />
            </span>
          </NavLink>

          <div className="mt-3">
            <div className="button-new">
              <PlusCircle size={16} /> New
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Directories;
