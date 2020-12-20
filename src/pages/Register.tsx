import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useRegisterMutation } from "../generated/graphql";

export const Register = () => {
  const [register] = useRegisterMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>Register Here</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(`Email: ${email} and Password: ${password}`);
          const response = await register({ variables: { email, password } });
          console.log(response);
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
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};
