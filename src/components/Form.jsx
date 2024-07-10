import { useState } from "react";

export default function Form({ btnText, handleClick }) {
  const [user, setUser] = useState({ login: "", password: "" });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleClick(user);
      }}
    >
      <input required
        value={user.login}
        onChange={(e) => setUser({ ...user, login: e.target.value })}
        placeholder="login"
        type="text"
      />
      <input required
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        type="password"
      />
      <button>{btnText}</button>
    </form>
  );
}
