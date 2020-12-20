import { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useLoginMutation } from "../generated/graphql";

export const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [login] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>Login Here</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(`Email: ${email} and Password: ${password}`);
          const { data } = await login({ variables: { email, password } });
          localStorage.setItem("token", data?.login.accessToken!);
          history.push("/");
        }}
      >
        <div>
          <input
            type="text"
            value={email}
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
