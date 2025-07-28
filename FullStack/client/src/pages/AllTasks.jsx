import { Container } from "react-bootstrap";
import Header from "../components/Header";
import ShowCards from "../components/ShowCards";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { orderingTask, sherchingTask } from "../utils/filtering";

function AllTasks() {
  const searchTerm = useSelector((state) => state.tasks.searchTerm);
  const orderBy = useSelector((state) => state.tasks.orderBy);
  const allTasks = useSelector((state) => state.tasks.taskData);
  const directories = useSelector((state) => state.directories);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const searchedTasks = sherchingTask(allTasks, searchTerm);
    setTasks(searchedTasks);
  }, [searchTerm, allTasks]);

  useEffect(() => {
    const orderedTasks = orderingTask(allTasks, orderBy);
    setTasks(orderedTasks);
  }, [orderBy, allTasks]);

  return (
    <Container fluid>
      <Header title={`All Tasks (${tasks.length} tasks)`} />
      <ShowCards tasks={tasks} directories={directories} />
    </Container>
  );
}

export default AllTasks;
