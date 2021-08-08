import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { login } from "../../../store/auth/actions";
import * as yup from "yup";
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  password: yup
    .string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
});

export function Login() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    dispatch(login(data));
  };
  return (
    <>
      <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
        <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
          <Image className="max-h-full mt-4 mx-auto" src="/media/login-1.svg" />
        </div>
      </div>
      <div className="lg:w-1/2 xl:max-w-screen-sm bg-gray-50 h-screen">
        <div className="py-12 bg-indigo-100 lg:bg-gray-50 flex justify-center lg:justify-start lg:px-12">
          <div className="cursor-pointer flex items-center">
            <Image src="/logo.png" /> Logo
          </div>
          <div className="text-2xl text-indigo-500 tracking-wide ml-2 font-semibold">
            Some text
          </div>
        </div>
        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-100 xl:px-24 xl:max-w-2xl">
          <h2
            className="text-center text-4xl text-indigo-500 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold  "
          >
            Login
          </h2>

          <form
            className="mt-12"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Email
            </div>
            <input
              type="email"
              className={`w-full bg-gray-50 text-lg py-2 border-b border-primary focus:outline-none focus:border-indigo-500 ${
                errors.email
                  ? "border-danger focus:border-danger"
                  : "border-primary"
              }`}
              placeholder="email"
              {...register("email")}
              autoComplete="off"
            />
            <p>{errors.email?.message}</p>

            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </div>
                <Link
                  to="/auth/forgot-password"
                  className="text-xs font-display font-semibold text-indigo-500 hover:text-indigo-600
                                        cursor-pointer"
                >
                  Forgot password
                </Link>
              </div>
              <input
                type="password"
                placeholder="Password"
                className={`w-full bg-gray-50 text-lg py-2 border-b border-primary focus:outline-none focus:border-indigo-500 ${
                  errors.password
                    ? "border-danger focus:border-danger"
                    : "border-primary"
                }`}
                {...register("password")}
                autoComplete="off"
              />
              <div className="flex justify-start mt-4 items-center">
                <input type="checkbox" className="text-indigo-500 h-5 w-5" />
                <span className="ml-2 text-gray-500">Remmeber me</span>
              </div>
              <p>{errors.password?.message}</p>
              <div className="mt-10">
                <button
                  type="submit"
                  className="bg-indigo-500 text-gray-100 p-4 w-full rounded-lg tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
