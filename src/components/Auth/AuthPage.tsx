"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, Phone, User, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface SignInFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface SignUpFormData {
  name: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone: string;
  country?: string;
  password: string;
  confirmPassword?: string;
  agreeToTerms: boolean;
}

export function SignupForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const signInForm = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const signUpForm = useForm<SignUpFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  const onSignInSubmit = (data: SignInFormData) => {
    console.log("Sign In Data:", data);
    alert("Sign in successful!");
  };

  const onSignUpSubmit = (data: SignUpFormData) => {
    if (data.password !== data.confirmPassword) {
      signUpForm.setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }
    console.log("Sign Up Data:", data);
    alert("Account created successfully!");
  };

  if (!isModalOpen) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <Button onClick={() => setIsModalOpen(true)} size="lg">
          Open Authentication Modal
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      {/* <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" /> */}
      <Card className="relative bg-gray-950 w-full max-w-md border-gray-800 overflow-hidden">
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X size={20} />
        </button>

        <CardHeader className="px-6 pt-8 pb-6">
          <CardTitle className="text-2xl font-bold text-white text-center mb-2">
            {isSignUp ? "Create your account" : "Welcome back"}
          </CardTitle>
          <CardDescription className="text-gray-400 text-center text-sm">
            {isSignUp
              ? "Join our development community"
              : "Sign in to your account"}
          </CardDescription>
        </CardHeader>

        <div className="px-6 mb-6">
          <div className="flex bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setIsSignUp(false)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                !isSignUp
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                isSignUp
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        <CardContent className="px-6 pb-8">
          {!isSignUp ? (
            <div className="space-y-4">
              <div>
                <Label htmlFor="signin-email" className="text-gray-300">
                  Email
                </Label>
                <div className="mt-1 relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 bg-gray-900 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    {...signInForm.register("email", {
                      required: "Email is required",
                    })}
                  />
                </div>
                {signInForm.formState.errors.email && (
                  <p className="mt-1 text-sm text-red-400">
                    {signInForm.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="signin-password" className="text-gray-300">
                  Password
                </Label>
                <div className="mt-1 relative">
                  <Input
                    id="signin-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pr-10 bg-gray-900 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    {...signInForm.register("password", {
                      required: "Password is required",
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {signInForm.formState.errors.password && (
                  <p className="mt-1 text-sm text-red-400">
                    {signInForm.formState.errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember-me"
                    {...signInForm.register("rememberMe")}
                  />
                  <Label
                    htmlFor="remember-me"
                    className="text-sm text-gray-300"
                  >
                    Remember me
                  </Label>
                </div>
                <button
                  type="button"
                  className="text-sm text-blue-400 hover:text-blue-300"
                >
                  Forgot password?
                </button>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  signInForm.handleSubmit(onSignInSubmit)();
                }}
              >
                Sign In
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-gray-950 px-4 text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="w-full border-gray-600 bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-600 bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="firstName" className="text-gray-300">
                    Name
                  </Label>
                  <div className="mt-1 relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="name"
                      placeholder="John"
                      className="pl-10 bg-gray-900 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                      {...signUpForm.register("name", {
                        required: "Name is required",
                      })}
                    />
                  </div>
                  {signUpForm.formState.errors.name && (
                    <p className="mt-1 text-xs text-red-400">
                      {signUpForm.formState.errors.name.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="signup-email" className="text-gray-300">
                  Email
                </Label>
                <div className="mt-1 relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="john@example.com"
                    className="pl-10 bg-gray-900 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    {...signUpForm.register("email", {
                      required: "Email is required",
                    })}
                  />
                </div>
                {signUpForm.formState.errors.email && (
                  <p className="mt-1 text-sm text-red-400">
                    {signUpForm.formState.errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-gray-300">
                  Phone
                </Label>
                <div className="mt-1 relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="pl-10 bg-gray-900 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    {...signUpForm.register("phone")}
                  />
                </div>
              </div>

              {/* Date of Birth */}

              {/* Password Fields */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="signup-password" className="text-gray-300">
                    Password
                  </Label>
                  <div className="mt-1 relative">
                    <Input
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="pr-10 bg-gray-900 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                      {...signUpForm.register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                      })}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {signUpForm.formState.errors.password && (
                    <p className="mt-1 text-xs text-red-400">
                      {signUpForm.formState.errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    {...signUpForm.register("agreeToTerms", {
                      required: "You must agree to the terms",
                    })}
                  />
                  <Label
                    htmlFor="agreeToTerms"
                    className="text-xs leading-relaxed text-gray-300"
                  >
                    I agree to the{" "}
                    <button
                      type="button"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button
                      type="button"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      Privacy Policy
                    </button>
                  </Label>
                </div>
                {signUpForm.formState.errors.agreeToTerms && (
                  <p className="text-xs text-red-400">
                    {signUpForm.formState.errors.agreeToTerms.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  signUpForm.handleSubmit(onSignUpSubmit)();
                }}
              >
                Create Account
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
