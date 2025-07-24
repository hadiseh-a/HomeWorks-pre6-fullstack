import { Container } from "react-bootstrap";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import ShowCards from "../components/ShowCards";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Directories() {
  const [tasks, setTasks] = useState([]);

  const allTasks = useSelector((state) => state.tasks.taskData);

  const location = useLocation();

  useEffect(() => {
    setTasks(allTasks);
  }, [allTasks]);

  return (
    <Container>
      <Header title={`${location.state}'s Tasks (${tasks.length} tasks)`} />
      <ShowCards tasks={tasks} />
    </Container>
  );
}

export default Directories;
