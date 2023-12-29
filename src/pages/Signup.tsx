import React, { useState, FormEvent, ChangeEvent } from "react";
import AuthLayout from "../Layouts/AuthLayout";
import { toast } from "react-toastify";
import { TOAST_MESSAGES } from "../utils/toastMessages";
import { useNavigate } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase";
import FormInput from "../components/formInput";
import Button from "../components/button/button.component";
import { UserCredential } from "firebase/auth";

interface FormFields {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultFormFields: FormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error(TOAST_MESSAGES.PASSWORDSDONOTMATCH);
      return;
    }

    try {
      const result: UserCredential | undefined =
        await createAuthUserWithEmailAndPassword(email, password);

      if (result) {
        const { user } = result;
        await createUserDocumentFromAuth(user, { displayName });
        toast.success(TOAST_MESSAGES.SIGNUPSUCCESS);
        resetFormFields();
        navigate("/login");
      }
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        toast.error(TOAST_MESSAGES.EMAILALREADYINUSE);
      } else {
        toast.error(error.message);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <AuthLayout>
      <div className="w-full h-full pt-16 md:pt-10">
        <h1 className="text-center text-xl">Sign-Up Form</h1>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Display Name"
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />

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

          <FormInput
            label="Confirm Password"
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />
          <Button type="submit">Sign Up</Button>
        </form>
        <div className="flex justify-end mt-10">
          <h2 className="mr-2">Already have an account?</h2>
          <a href="/login" className="border-b-2 border-gray-600">
            Sign In
          </a>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
