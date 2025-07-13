import { Container } from "react-bootstrap";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import ShowCards from "../components/ShowCards";

function Directories({ dirctory }) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetchData("./src/assets/sample-data.json").then((data) => setTasks(data));
  }, []);
  return (
    <Container>
      <Header title={`${dirctory}'s Tasks (${tasks.length} tasks)`} />
      <ShowCards tasks={tasks} />
    </Container>
  );
}

export default Directories;
