import { Container } from "react-bootstrap";
import Header from "../components/Header";
import ShowCards from "../components/ShowCards";
import { useSelector } from "react-redux";

function AllTasks() {
  const allTasks = useSelector((state) => state.tasks.taskData);

  return (
    <Container fluid>
      <Header title={`All Tasks (${allTasks.length} tasks)`} />
      <ShowCards tasks={allTasks} />
    </Container>
  );
}

export default AllTasks;
