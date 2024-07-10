import { useDispatch } from "react-redux";
import Form from "./Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addUserToStore } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleRegister({ login, password }) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, login, password)
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

  return <Form handleClick={handleRegister} btnText={"register"} />;
}
