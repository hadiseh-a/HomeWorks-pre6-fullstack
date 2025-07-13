import { useEffect, useState } from "react";
import Header from "../components/Header";
import { fetchData } from "../utils/fetchData";
import { filterdTasksby } from "../utils/filtering.js";
import ShowCards from "../components/ShowCards";
import { Container } from "react-bootstrap";

function CompletedTasks() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetchData("./src/assets/sample-data.json").then((data) =>
      setTasks(filterdTasksby(data, "completed", true))
    );
  }, []);

  return (
    <Container fluid>
      <Header title={`Completed Tasks (${tasks.length} tasks)`} />
      <ShowCards tasks={tasks} />
    </Container>
  );
}

export default CompletedTasks;
