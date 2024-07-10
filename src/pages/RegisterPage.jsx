import { Link } from "react-router-dom";
import Register from "../components/Register";

export default function RegisterPage() {
  return (
    <div>
        <Register />
      <p>
        You have account? <Link to={"/login"}>Go to login page!</Link>
      </p>
    </div>
  );
}
