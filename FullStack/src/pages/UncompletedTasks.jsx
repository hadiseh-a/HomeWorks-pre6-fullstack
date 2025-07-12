import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { fetchData } from '../utils/fetchData';
import { filterdTasksby } from '../utils/filtering';
import ShowCards from '../components/ShowCards';

function UnCompletedTasks() {
   const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetchData("./src/assets/sample-data.json").then((data) =>
      setTasks(filterdTasksby(data, "completed", false))
    );
  }, []);

  return (
    <>
      <Header title={`Uncompleted Tasks (${tasks.length} tasks)`} />
      <ShowCards tasks={tasks} />
    </>
  );
}

export default UnCompletedTasks