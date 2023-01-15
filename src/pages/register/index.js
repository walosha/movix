import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthForm from "../../components/authForm";
import { schema } from "./validation";
import { inputOptions } from "./contant";
import { useAuth } from "../../context/Authcontext";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    register(data, setError, navigate);
  };
  return (
    <AuthForm
      title="Hi, Welcome"
      intro="Please sign-in to your account and start your experience"
      route="/login"
      btmText="Already have an account?"
      routeText="Login"
      btnText="REGISTER"
      inputOptions={inputOptions}
      handleSubmit={handleSubmit(onSubmit)}
      control={control}
      errors={errors}
      isLoading={isSubmitSuccessful}
    />
  );
}
