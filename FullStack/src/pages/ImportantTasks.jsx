import { useEffect, useState } from "react";
import Header from "../components/Header";
import { fetchData } from "../utils/fetchData";
import { filterdTasksby } from "../utils/filtering";
import ShowCards from "../components/ShowCards";

function ImportantTasks() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetchData("./src/assets/sample-data.json").then((data) =>
      setTasks(filterdTasksby(data, "important", true))
    );
  }, []);

  return (
    <>
      <Header title={`Important Tasks (${tasks.length} tasks)`} />
      <ShowCards tasks={tasks} />
    </>
  );
}

export default ImportantTasks;
