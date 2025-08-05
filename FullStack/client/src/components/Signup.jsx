import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/auth/login");
  };

  return (
    <>
      <h3 className="mb-3 text-center">Sign Up</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-2">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            {...register("username", { required: "Username is required" })}
            isInvalid={!!errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email format is invalid",
              },
            })}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            isInvalid={!!errors.confirmPassword}
          />
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="primary" className="w-100">
          Sign Up
        </Button>

        <div className="text-center mt-2">
          <small>
            Already have an account?{" "}
            <span
              className="text-purple"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/auth/login")}
            >
              Login
            </span>
          </small>
        </div>
      </Form>
    </>
  );
};

export default Signup;
