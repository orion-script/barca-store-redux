import React, { useState, FormEvent, ChangeEvent } from "react";
import AuthLayout from "../Layouts/AuthLayout";
import { toast } from 'react-toastify';
import { TOAST_MESSAGES } from "../utils/toastMessages";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/formInput";
import Button from "../components/button/button.component";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase";

const defaultFormFields = {
  email: "",
  password: "",
};

enum BUTTON_TYPE_CLASSES {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
}

function Login() {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    toast.success(TOAST_MESSAGES.LOGINSUCCESS);
    navigate("/");
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      toast.success(TOAST_MESSAGES.LOGINSUCCESS);
      resetFormFields();
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          toast.error(TOAST_MESSAGES.INCORRECTPASSWORDFOREMAIL);
          break;
        case "auth/user-not-found":
          toast.error(TOAST_MESSAGES.USERNOTFOUND);
          break;
        case "auth/invalid-credential":
          toast.error(TOAST_MESSAGES.INVALIDLOGINCREDENTIALS);
          break;
        default:
          toast.error(error.messasge);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <AuthLayout>
      <div className="w-full h-full pt-20 md:pt-10">
        <h1 className="text-center text-xl">Sign-In Form</h1>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <div className="flex justify-start mt-10">
            <Button type="submit">Sign In</Button>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.google}
              type="button"
              onClick={signInWithGoogle}
            >
              Sign In With Google
            </Button>
          </div>
        </form>
        <div className="flex justify-end mt-10">
          <h2 className="mr-2">Don't have an account?</h2>
          <a href="/register" className="border-b-2 border-gray-600">
            Sign up
          </a>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Login;
