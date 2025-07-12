import { Container } from "react-bootstrap";
import TaskCard from "./TaskCard";

function ShowCards({tasks}) {
  return (
    <Container className="d-flex gap-4 flex-wrap align-content-between mt-5">
      {tasks.map((task) => (
        <TaskCard
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          important={task.important}
          completed={task.completed}
          key={task._id}
        />
      ))}
    </Container>
  );
}

export default ShowCards;
