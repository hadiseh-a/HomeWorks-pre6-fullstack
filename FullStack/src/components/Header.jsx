import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { HiOutlineViewGrid } from "react-icons/hi";
import { CiViewList } from "react-icons/ci";
import { Container } from "react-bootstrap";

function Header({ title }) {
  return (
    <Container className="px-4">
      <h3 className="mt-4">{title}</h3>
      <div className="d-flex justify-content-between mt-4">
        <div>
          <CiViewList size={25}/>
          <HiOutlineViewGrid size={25}/>
        </div>
        <DropdownButton
          id="dropdown-basic-button"
          title="Sort by"
          variant="light"
        >
          <Dropdown.Item href="#/action-1">Order added</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Earlier first</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Later first</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Completed first</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Uncompleted first</Dropdown.Item>
        </DropdownButton>
      </div>
    </Container>
  );
}

export default Header;
