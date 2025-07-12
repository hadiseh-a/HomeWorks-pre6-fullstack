import { Container } from "react-bootstrap";
import Header from "../components/Header";
import ShowCards from "../components/ShowCards";
import { useEffect, useState } from "react";

function AllTasks() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("./src/assets/sample-data.json");
      const data = await response.json();
      setTasks(data);
    }
    fetchData();
  }, []);
  return (
    <Container>
      <Header title={`All Tasks (${tasks.length} tasks)`} />
      <ShowCards tasks={tasks} />
    </Container>
  );
}

export default AllTasks;
