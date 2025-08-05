import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const AuthLayout = () => {
  return (
    <Container
      fluid
      className="auth-box d-flex justify-content-center align-items-center vh-100"
    >
      <div style={{ width: "100%", maxWidth: "400px" }}>
        <Outlet />
      </div>
    </Container>
  );
};

export default AuthLayout;
