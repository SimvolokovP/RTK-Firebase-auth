import { useDispatch } from "react-redux";
import Form from "./Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { addUserToStore } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogin({ login, password }) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, login, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          addUserToStore({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  }

  return <Form handleClick={handleLogin} btnText={"login"} />;
}
