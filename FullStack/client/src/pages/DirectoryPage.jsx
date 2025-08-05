import { Container } from "react-bootstrap";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import ShowCards from "../components/ShowCards";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  filterdTasksby,
  orderingTask,
  sherchingTask,
} from "../utils/filtering";

function DirectoryPage() {
  const [tasks, setTasks] = useState([]);

  const { name } = useParams();

  const allTasks = useSelector((state) => state.tasks.taskData);
  const searchTerm = useSelector((state) => state.tasks.searchTerm);
  const orderBy = useSelector((state) => state.tasks.orderBy);
  const directories = useSelector((state) => state.directories);

  const findDirectory = directories.find(
    (directory) => directory.name.toLowerCase() === name?.toLowerCase()
  );

  useEffect(() => {
    if (!findDirectory) return;

    const filteredTasks = filterdTasksby(allTasks, "dirId", findDirectory._id);
    const searchedTask = sherchingTask(filteredTasks, searchTerm);
    const orderedTasks = orderingTask(searchedTask, orderBy);
    setTasks(orderedTasks);
  }, [allTasks, searchTerm, name, findDirectory,orderBy]);

  if (!findDirectory) {
    return (
      <Container className="mt-4 text-center">
        <h4 className="text-danger">Directory not found</h4>
      </Container>
    );
  }

  return (
    <Container>
      <Header title={`${findDirectory.name}'s Tasks (${tasks.length} tasks)`} />
      <ShowCards tasks={tasks} directories={directories} />
    </Container>
  );
}

export default DirectoryPage;
