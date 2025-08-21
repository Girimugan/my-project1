
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        onLogin();
        navigate("/admin");
    };

  return (
    <div style={{ padding: "20px" }}>
      <p>You must log in to view the page at /admin</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
