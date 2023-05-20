"use client";

import {BsGithub, BsGoogle} from 'react-icons/bs'
import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import {
      useForm,
      FieldValues,
      SubmitHandler,
      RegisterOptions,
      UseFormRegisterReturn,
} from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
      const [variant, setVariant] = useState<Variant>("LOGIN");
      const [isLoding, setIsLoding] = useState(false);

      /** NOTE:
       * toggelVariant function memorize the below function using useCallback react hook
       * The useCallback hook is a React hook that lets you cache a function definition between re-renders.
       * This can improve performance by preventing expensive functions from being re-created unnecessarily.
       */
      const toggelVariant = useCallback(() => {
            if (variant == "LOGIN") {
                  setVariant("REGISTER");
            } else {
                  setVariant("LOGIN");
            }
      }, [variant]);

      const {
            register,
            handleSubmit,
            formState: { errors },
      } = useForm<FieldValues>({
            defaultValues: {
                  name: "",
                  email: "",
                  passwrod: "",
            },
      });

      const onSubmit: SubmitHandler<FieldValues> = (data) => {
            setIsLoding(true);

            if (variant == "REGISTER") {
                  //call Axios to register
            }
            if (variant == "LOGIN") {
                  //call to NextAuth SignIn
            }
      };

      const socialAction = (action: string) => {
            setIsLoding(true);
            //call NextAuth social action signIn
      };

      return (
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
                  <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={handleSubmit(onSubmit)}>
                              {variant == "REGISTER" && (
                                    <Input
                                          label="name"
                                          id="name"
                                          type="text"
                                          placeholder="Enter your name"
                                          register={register}
                                          errors={errors}
                                    />
                              )}
                              <Input
                                    label="Email"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                    register={register}
                                    errors={errors}
                              />
                              <Input
                                    label="Password"
                                    id="passwrod"
                                    type="password"
                                    placeholder="Enter your password"
                                    register={register}
                                    errors={errors}
                              />
                              <Button
                                    type="submit"
                                    disabled={isLoding}
                                    fullWidth
                                    onClick={() => {}}
                              >
                                    {variant == "LOGIN"
                                          ? "Sign In"
                                          : "Register Now"}
                              </Button>
                        </form>

                        <div className="mt-6">
                              <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                          <div className="w-full border-t border-gray-300 " />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                          <span className="bg-white px-2 text-gray-500">
                                                Or Continue with
                                          </span>
                                    </div>
                              </div>
                              <div className='mt-6 flex gap-2 '>
                                    <AuthSocialButton
                                    icon={BsGithub}
                                    onClick={()=>socialAction('github')}
                                     />
                                       <AuthSocialButton
                                    icon={BsGoogle}
                                    onClick={()=>socialAction('github')}
                                     />
                              </div>
                        </div>
                        <div className="mt-6 flex gap-2  justify-center">
                              <div className="
                              text-center
                              text-sm
                              text-gray-500                             
                              ">
                                    {variant == "LOGIN" ? 'New to Messenger?':'Already have an account?'}
                              </div>
                              <div 
                              onClick={toggelVariant}
                               className='underline text-sm shadow-sm cursor-pointer'>
                                    {variant == "LOGIN" ? "Create an Account":"Login"}
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default AuthForm;
