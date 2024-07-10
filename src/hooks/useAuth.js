import { useSelector } from "react-redux";

export const useAuth = () => {
  const { email, token, id } = useSelector((state) => state.user);
  console.log(email);
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
