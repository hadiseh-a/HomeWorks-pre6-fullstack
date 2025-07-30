import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddOrEditTaskModal = ({
  show,
  handleClose,
  handleSave,
  directories,
  title,
  defaultTask = null,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: defaultTask?.title || "",
      description: defaultTask?.description || "",
      completed: defaultTask?.completed ?? false,
      important: defaultTask?.important ?? false,
      deadline: defaultTask?.deadline || new Date().toISOString().split("T")[0],
      dirId: defaultTask?.dirId || directories[0]?._id || "",
    },
  });

  const onSubmit = (data) => {
    handleSave(data);
    reset();
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. study for the test"
              {...register("title", {
                required: "Title is required",
                maxLength: {
                  value: 50,
                  message: "can't be maore than 50 characters",
                },
                minLength: {
                  value: 3,
                  message: "can;t be less than 3 characters",
                },
              })}
              isInvalid={errors.title}
            />
            <Form.Control.Feedback type="invalid">
              {errors.title?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>Deadline</Form.Label>
            <Form.Control
              type="date"
              {...register("deadline", { required: "Date is required" })}
              isInvalid={errors.deadline}
            />
            <Form.Control.Feedback type="invalid">
              {errors.deadline?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>Description (optional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="e.g. read chapter 4"
              {...register("description")}
            />
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>Select a directory</Form.Label>
            <Form.Select {...register("dirId", { required: true })}>
              {directories.map((dir) => (
                <option key={dir._id} value={dir._id}>
                  {dir.type}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-1">
            <div className="custom-checkbox d-flex align-items-center mb-2">
              <input
                type="checkbox"
                id="important"
                {...register("important")}
              />
              <label htmlFor="important" className="mb-0 ms-2">
                Mark as important
              </label>
            </div>

            <div className="custom-checkbox d-flex align-items-center mb-2">
              <input
                type="checkbox"
                id="completed"
                {...register("completed")}
              />
              <label htmlFor="completed" className="mb-0 ms-2">
                Mark as completed
              </label>
            </div>
          </Form.Group>

          <Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="w-100 rounded-3 fw-semibold"
              style={{ backgroundColor: "#9b5de5", border: "none" }}
            >
              {title}
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddOrEditTaskModal;
