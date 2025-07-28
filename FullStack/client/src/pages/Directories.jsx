import { Container } from "react-bootstrap";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import ShowCards from "../components/ShowCards";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { sherchingTask } from "../utils/filtering";

function Directories() {
  const [tasks, setTasks] = useState([]);

  const searchTerm = useSelector((state) => state.tasks.searchTerm);
  const allTasks = useSelector((state) => state.tasks.taskData);

  const location = useLocation();

  useEffect(() => {
    setTasks(allTasks);
  }, [allTasks]);

  useEffect(() => {
    const searchedTask = sherchingTask(allTasks, searchTerm);
    setTasks(searchedTask);
  }, [searchTerm, allTasks]);

  return (
    <Container>
      <Header title={`${location.state}'s Tasks (${tasks.length} tasks)`} />
      <ShowCards tasks={tasks} />
    </Container>
  );
}

export default Directories;
