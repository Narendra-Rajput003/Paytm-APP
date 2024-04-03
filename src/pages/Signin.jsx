import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("All fields are required");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/api/v1/auth/signin", {
        email,
        password
      });
      localStorage.setItem("token", response.data.data.token);
      navigate("/dashboard");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Incorrect email or password");
      } else {
        console.error(error.message);
      }
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            placeholder="example@gmail.com"
            label={"Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBox
            type="password"
            placeholder="123456"
            label={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="pt-4">
            <Button label={"Sign in"} onClick={handleSubmit} />
          </div>
          <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
        </div>
      </div>
    </div>
  );
};
