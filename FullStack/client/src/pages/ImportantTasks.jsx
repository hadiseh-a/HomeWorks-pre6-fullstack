import { useEffect, useState } from "react";
import Header from "../components/Header";
import {
  filterdTasksby,
  orderingTask,
  sherchingTask,
} from "../utils/filtering";
import ShowCards from "../components/ShowCards";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function ImportantTasks() {
  const [tasks, setTasks] = useState([]);

  const searchTerm = useSelector((state) => state.tasks.searchTerm);
  const orderBy = useSelector((state) => state.tasks.orderBy);
  const allTasks = useSelector((state) => state.tasks.taskData);
  const directories = useSelector((state) => state.directories);

  useEffect(() => {
    const importantTasks = filterdTasksby(allTasks, "important", true);
    const orderedTasks = orderingTask(importantTasks, orderBy);
    const searchedTask = sherchingTask(orderedTasks, searchTerm);
    setTasks(searchedTask);
  }, [searchTerm, allTasks, orderBy]);

  return (
    <Container>
      <Header title={`Important Tasks (${tasks.length} tasks)`} />
      <ShowCards tasks={tasks} directories={directories} />
    </Container>
  );
}

export default ImportantTasks;
