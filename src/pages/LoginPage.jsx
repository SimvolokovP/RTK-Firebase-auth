import { Link } from "react-router-dom";
import Form from "../components/Form";
import Login from "../components/Login";

export default function LoginPage() {

  return (
    <div>
      <Login />
      <p>
        Want to create account? <Link to={"/register"}>Go to register!</Link>
      </p>
    </div>
  );
}
