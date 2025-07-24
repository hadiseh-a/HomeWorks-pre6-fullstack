import { useEffect, useState } from "react";
import Header from "../components/Header";
import { filterdTasksby } from "../utils/filtering.js";
import ShowCards from "../components/ShowCards";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function CompletedTasks() {
  const [tasks, setTasks] = useState([]);
  const allTasks = useSelector((state) => state.tasks.taskData);

  useEffect(() => {
    const completedTasks = filterdTasksby(allTasks, "completed", true);
    setTasks(completedTasks);
  }, [allTasks]);

  return (
    <Container fluid>
      <Header title={`Completed Tasks (${tasks.length} tasks)`} />
      <ShowCards tasks={tasks} />
    </Container>
  );
}

export default CompletedTasks;
