import React from "react";
import AuthForm from "../../components/authForm";
import { useAuth } from "../../context/Authcontext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validation";
import { inputOptions } from "./contant";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, isLoading },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    login(data, setError, navigate);
  };
  console.log({ isLoading });
  return (
    <AuthForm
      title="Hi, Welcome"
      intro="Please sign-up to start your experience"
      route="/"
      btmText="Don’t have an account?"
      routeText="Register"
      btnText="LOGIN"
      inputOptions={inputOptions}
      isLoading={isLoading}
      handleSubmit={handleSubmit(onSubmit)}
      control={control}
      errors={errors}
    />
  );
}
