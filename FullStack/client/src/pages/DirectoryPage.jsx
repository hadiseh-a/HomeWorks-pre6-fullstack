import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowCards from "../components/ShowCards";
import Header from "../components/Header";
import { sherchingTask } from "../utils/filtering";

export default function DirectoryPage() {
  const { type } = useParams();
  const dirs = useSelector((s) => s.directories);
  const allTasks = useSelector((s) => s.tasks.taskData);
  const searchTerm = useSelector((s) => s.tasks.searchTerm);

  const [tasks, setTasks] = useState([]);
  const dir = dirs.find((d) => d.type.toLowerCase() === type);

  useEffect(() => {
    if (!dir) return;
    let filtered = allTasks.filter((t) => t.dirId === dir._id);
    filtered = sherchingTask(filtered, searchTerm);
    setTasks(filtered);
  }, [allTasks, searchTerm, dir]);

  return (
    <div>
      <Header title={`${dir?.type}'s Tasks (${tasks.length} tasks)`} />
      <ShowCards tasks={tasks} />
    </div>
  );
}
