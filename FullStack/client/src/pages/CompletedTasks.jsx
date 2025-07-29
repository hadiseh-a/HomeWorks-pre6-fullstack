import { useEffect, useState } from "react";
import Header from "../components/Header";
import { filterdTasksby, sherchingTask } from "../utils/filtering.js";
import ShowCards from "../components/ShowCards";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function CompletedTasks() {
  const [tasks, setTasks] = useState([]);

  const searchTerm = useSelector((state) => state.tasks.searchTerm);
  const allTasks = useSelector((state) => state.tasks.taskData);
  const directories = useSelector((state) => state.directories);

  useEffect(() => {
    const completedTasks = filterdTasksby(allTasks, "completed", true);
    const searchedTask = sherchingTask(completedTasks, searchTerm);
    setTasks(searchedTask);
  }, [searchTerm, allTasks]);

  return (
    <Container fluid>
      <Header title={`Completed Tasks (${tasks.length} tasks)`} />
      <ShowCards tasks={tasks} directories={directories} />
    </Container>
  );
}

export default CompletedTasks;
