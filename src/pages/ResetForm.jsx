import { useState } from "react";
import { toast } from "react-toastify";
import { TOAST_MESSAGES } from "../utils/toastMessages";
import FormInput from "../components/formInput";
import Button from "../components/button/button.component";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const defaultFormFields = {
  email: "",
};

function ResetForm() {
  const auth = getAuth();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await sendPasswordResetEmail(auth, email);
    toast.success(TOAST_MESSAGES.PASSWORD_RESET_EMAIL_SENT);
    resetFormFields();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="w-full h-full pt-20 md:pt-10">
      <h1 className="text-center text-xl">Reset Password Page</h1>
      <form className="w-7/12 m-auto" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <Button type="submit">RESET MY PASSWORD</Button>
      </form>
    </div>
  );
}

export default ResetForm;
