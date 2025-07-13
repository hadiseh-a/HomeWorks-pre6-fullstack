import { Container } from "react-bootstrap";
import Header from "../components/Header";
import ShowCards from "../components/ShowCards";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

function AllTasks() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetchData("./src/assets/sample-data.json").then((data) => setTasks(data));
  }, []);
  return (
    <Container fluid>
      <Header title={`All Tasks (${tasks.length} tasks)`} />
      <ShowCards tasks={tasks} />
    </Container>
  );
}

export default AllTasks;
