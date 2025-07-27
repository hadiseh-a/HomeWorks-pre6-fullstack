import { Container } from "react-bootstrap";
import TaskCard from "./TaskCard";

function ShowCards({ tasks }) {
  return (
    <Container
      fluid
      className="d-flex gap-4 flex-wrap align-content-between mt-4 main-aria"
    >
      {tasks.map((task, index) => (
        <TaskCard
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          important={task.important}
          completed={task.completed}
          id={task._id}
          index={index}
          key={task._id}
        />
      ))}
    </Container>
  );
}

export default ShowCards;
