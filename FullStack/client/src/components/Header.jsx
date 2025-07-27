import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { HiOutlineViewGrid } from "react-icons/hi";
import { CiViewList } from "react-icons/ci";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { orderTasks } from "../store/tasksSlice";

function Header({ title }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <h4 className="mt-4 ">{title}</h4>
      <div className="d-flex justify-content-between mt-4">
        <div className="text-secondary">
          <CiViewList size={20} />
          <HiOutlineViewGrid size={20} />
        </div>
        <DropdownButton
          id="dropdown-basic-button"
          title="Sort by "
          variant="light"
        >
          <Dropdown.Item onClick={() => dispatch(orderTasks("Order added"))}>
            Order added
          </Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(orderTasks("Earlier first"))}>
            Earlier first
          </Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(orderTasks("Later first"))}>
            Later first
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => dispatch(orderTasks("Completed first"))}
          >
            Completed first
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => dispatch(orderTasks("Uncompleted first"))}
          >
            Uncompleted first
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </Container>
  );
}

export default Header;
