import { useEffect, useState } from "react";
import Header from "../components/Header";
import { fetchData } from "../utils/fetchData";
import { filterdTasksby } from "../utils/filtering";
import ShowCards from "../components/ShowCards";
import { Container } from "react-bootstrap";

function ImportantTasks() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetchData("./src/assets/sample-data.json").then((data) =>
      setTasks(filterdTasksby(data, "important", true))
    );
  }, []);

  return (
    <Container>
      <Header title={`Important Tasks (${tasks.length} tasks)`} />
      <ShowCards tasks={tasks} />
    </Container>
  );
}

export default ImportantTasks;
