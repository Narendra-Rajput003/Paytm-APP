import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!firstName || !lastName || !email || !password) {
      toast.error("All fields are required");
      return;
    }
    if (!email.endsWith("@gmail.com")) {
      toast.error("Please enter a valid Gmail address");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/api/v1/auth/signup", {
        email,
        firstName,
        lastName,
        password
      });
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        console.error(error.response.data);
      } else {
        console.error(error.message);
      }
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Doe"
            label={"Last Name"}
          />
          <InputBox
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            label={"Email"}
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder="123456"
            label={"Password"}
            type="password"
          />
          <div className="pt-4">
            <Button onClick={handleSignup} label={"Sign up"} />
          </div>
          <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
        </div>
      </div>
    </div>
  );
};
