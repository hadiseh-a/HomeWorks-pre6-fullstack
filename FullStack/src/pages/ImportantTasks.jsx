import { useEffect, useState } from "react";
import Header from "../components/Header";
import { filterdTasksby } from "../utils/filtering";
import ShowCards from "../components/ShowCards";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function ImportantTasks() {
  const [tasks, setTasks] = useState([]);
  const allTasks = useSelector((state) => state.tasks.taskData);

  useEffect(() => {
    const importantTasks = filterdTasksby(allTasks, "important", true);
    setTasks(importantTasks);
  }, [allTasks]);

  return (
    <Container>
      <Header title={`Important Tasks (${tasks.length} tasks)`} />
      <ShowCards tasks={tasks} />
    </Container>
  );
}

export default ImportantTasks;
