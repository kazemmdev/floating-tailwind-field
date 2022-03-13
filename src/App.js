import { useState } from "react";
import Input from "./component/input";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full h-screen flex items-center justify-center m-auto">
      <div className="max-w-md w-full m-auto mt-48 p-5 bg-white border rounded">
        <h2 className="font-medium text-xl">Login</h2>
        <form className="pt-5">
          <Input
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(v) => setEmail(v.target.value)}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={(v) => setPassword(v.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 rounded-full text-white hover:bg-blue-600 active:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
