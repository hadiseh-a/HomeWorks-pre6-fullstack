import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = (data) => {
    console.log("ورود با اطلاعات:", data);
    navigate("/");
  };

  return (
    <>
      <h3 className="mb-3 text-center">Login</h3>
      <Form onSubmit={handleSubmit(onLogin)}>
        <Form.Group className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
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

        <Button type="submit" variant="primary" className="w-100">
          Login
        </Button>

        <div className="text-center mt-2">
          <small>
            Don’t have an account?{" "}
            <span
              className="text-purple"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/auth/signup")}
            >
              Sign up
            </span>
          </small>
        </div>
      </Form>
    </>
  );
};

export default Login;
