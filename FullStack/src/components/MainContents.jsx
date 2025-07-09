import { Card, Button, Badge } from "react-bootstrap";
import {
  StarFill,
  Star,
  Trash,
  Pencil,
  CheckCircle,
} from "react-bootstrap-icons";
import "../styles/mainContent.css";

// ✅ کامپوننت کارت تسک
const TaskCard = ({ task }) => {
  const {
    title,
    description,
    completed,
    important,
    deadline,
  } = task;

  return (
    <Card className={`task-card shadow-sm mb-3 ${completed ? "completed" : ""}`}>
      <Card.Body className="d-flex justify-content-between align-items-start">
        {/* بخش اطلاعات تسک */}
        <div>
          <Card.Title className="d-flex align-items-center gap-2">
            {completed && <CheckCircle className="text-success" />}
            {title}
            {important && <Badge bg="danger">Important</Badge>}
          </Card.Title>
          <Card.Text className="text-muted mb-1 small">{description}</Card.Text>
          <small className="text-secondary">
            Deadline: {new Date(deadline).toLocaleDateString()}
          </small>
        </div>

        {/* آیکون‌های کنترلی */}
        <div className="d-flex flex-column align-items-end gap-2">
          <Button variant="link" size="sm" className="p-0 text-warning">
            {important ? <StarFill /> : <Star />}
          </Button>
          <Button variant="link" size="sm" className="p-0 text-primary">
            <Pencil />
          </Button>
          <Button variant="link" size="sm" className="p-0 text-danger">
            <Trash />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

// ✅ کامپوننت اصلی MainContent
const MainContent = () => {
  const tasks = [
    {
      _id: "234234232r234234234",
      title: "Complete Backend Homework",
      description: "Implement CRUD operations for directory and task collections",
      completed: false,
      important: true,
      deadline: "2024-10-20T00:00:00Z",
    },{
      _id: "234234232r234234234",
      title: "Complete Backend Homework",
      description: "Implement CRUD operations for directory and task collections",
      completed: false,
      important: true,
      deadline: "2024-10-20T00:00:00Z",
    },{
      _id: "234234232r234234234",
      title: "Complete Backend Homework",
      description: "Implement CRUD operations for directory and task collections",
      completed: false,
      important: true,
      deadline: "2024-10-20T00:00:00Z",
    },{
      _id: "234234232r234234234",
      title: "Complete Backend Homework",
      description: "Implement CRUD operations for directory and task collections",
      completed: false,
      important: true,
      deadline: "2024-10-20T00:00:00Z",
    },{
      _id: "234234232r234234234",
      title: "Complete Backend Homework",
      description: "Implement CRUD operations for directory and task collections",
      completed: false,
      important: true,
      deadline: "2024-10-20T00:00:00Z",
    },{
      _id: "234234232r234234234",
      title: "Complete Backend Homework",
      description: "Implement CRUD operations for directory and task collections",
      completed: false,
      important: true,
      deadline: "2024-10-20T00:00:00Z",
    },{
      _id: "234234232r234234234",
      title: "Complete Backend Homework",
      description: "Implement CRUD operations for directory and task collections",
      completed: false,
      important: true,
      deadline: "2024-10-20T00:00:00Z",
    },{
      _id: "234234232r234234234",
      title: "Complete Backend Homework",
      description: "Implement CRUD operations for directory and task collections",
      completed: false,
      important: true,
      deadline: "2024-10-20T00:00:00Z",
    },
    // تسک‌های دیگر را هم می‌توانی اینجا اضافه کنی
  ];

  return (
    <div className="main-content px-4 pt-4">
      <h5 className="mb-4 fw-bold">Tasks</h5>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
};

export default MainContent;
