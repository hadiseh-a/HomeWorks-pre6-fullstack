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

  useEffect(() => {
    const unCompletedTasks = filterdTasksby(allTasks, "completed", false);
    setTasks(unCompletedTasks);
  }, [allTasks]);

  useEffect(() => {
    const searchedTask = sherchingTask(allTasks, searchTerm);
    setTasks(searchedTask);
  }, [searchTerm, allTasks]);

  return (
    <Container>
      <Header title={`Uncompleted Tasks (${tasks.length} tasks)`} />
      <ShowCards tasks={tasks} />
    </Container>
  );
}

export default UnCompletedTasks;
