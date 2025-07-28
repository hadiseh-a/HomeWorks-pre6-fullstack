import React from "react";
import { Container } from "react-bootstrap";
import TaskCard from "./TaskCard";

const ShowCards = ({ tasks, directories }) => {
  return (
    <Container
      fluid
      className="d-flex gap-4 flex-wrap align-content-between mt-4 main-aria"
    >
      {tasks.map((task, index) => {
        const dir = directories.find((d) => d._id === task.dirId);
        return (
          <TaskCard
            key={task._id}
            id={task._id}
            title={task.title}
            description={task.description}
            deadline={task.deadline}
            important={task.important}
            completed={task.completed}
            directory={dir}
            index={index}
          />
        );
      })}
    </Container>
  );
};

export default ShowCards;
