import "./sign-in-form.styles.scss";
import { useState } from "react";
import { createAuthuserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    try {
      const response = await createAuthuserWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      console.error("User create error:", error);
    }
  };

  const handlechange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h2>Sign in with email and password</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handlechange}
          name="email"
          value={email}
        />
        <formInput
          label="Password"
          required
          type="password"
          onChange={handlechange}
          name="password"
          value={password}
        />
        <Button type="submit">Sign in</Button>
      </form>
    </div>
  );
};
export default SignInForm;
