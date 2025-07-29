import { useEffect, useState } from "react";
import Header from "../components/Header";
import { filterdTasksby, sherchingTask } from "../utils/filtering";
import ShowCards from "../components/ShowCards";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function UnCompletedTasks() {
  const [tasks, setTasks] = useState([]);

  const searchTerm = useSelector((state) => state.tasks.searchTerm);
  const allTasks = useSelector((state) => state.tasks.taskData);
  const directories = useSelector((state) => state.directories);

  useEffect(() => {
    const unCompletedTasks = filterdTasksby(allTasks, "completed", false);
    const searchedTask = sherchingTask(unCompletedTasks, searchTerm);
    setTasks(searchedTask);
  }, [searchTerm, allTasks]);

  return (
    <Container>
      <Header title={`Uncompleted Tasks (${tasks.length} tasks)`} />
      <ShowCards tasks={tasks} directories={directories} />
    </Container>
  );
}

export default UnCompletedTasks;
