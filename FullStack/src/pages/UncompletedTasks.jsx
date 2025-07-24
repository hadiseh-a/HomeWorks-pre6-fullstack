import { useEffect, useState } from "react";
import Header from "../components/Header";
import { filterdTasksby } from "../utils/filtering";
import ShowCards from "../components/ShowCards";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function UnCompletedTasks() {
  const [tasks, setTasks] = useState([]);
  const allTasks = useSelector((state) => state.tasks.taskData);

  useEffect(() => {
    const unCompletedTasks = filterdTasksby(allTasks, "completed", false);
    setTasks(unCompletedTasks);
  }, [allTasks]);

  return (
    <Container>
      <Header title={`Uncompleted Tasks (${tasks.length} tasks)`} />
      <ShowCards tasks={tasks} />
    </Container>
  );
}

export default UnCompletedTasks;
