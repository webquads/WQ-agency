// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import {
//   Eye,
//   EyeOff,
//   X,
//   User,
//   Mail,
//   Phone,
//   Calendar,
//   Building,
//   Briefcase,
//   DollarSign,
// } from "lucide-react";

// // Shadcn/ui inspired components
// const Button = ({
//   children,
//   variant = "default",
//   size = "default",
//   className = "",
//   ...props
// }) => {
//   const baseStyles =
//     "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

//   const variants = {
//     default:
//       "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
//     outline:
//       "border border-gray-600 bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white",
//     ghost: "text-gray-400 hover:bg-gray-800 hover:text-white",
//   };

//   const sizes = {
//     default: "h-10 px-4 py-2",
//     sm: "h-9 rounded-md px-3",
//     lg: "h-11 rounded-lg px-8",
//   };

//   return (
//     <button
//       className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// const Input = React.forwardRef(
//   ({ className = "", type = "text", ...props }, ref) => (
//     <input
//       type={type}
//       className={`flex h-10 w-full rounded-lg border border-gray-600 bg-gray-900 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
//       ref={ref}
//       {...props}
//     />
//   )
// );

// const Select = React.forwardRef(
//   ({ children, className = "", ...props }, ref) => (
//     <select
//       className={`flex h-10 w-full rounded-lg border border-gray-600 bg-gray-900 px-3 py-2 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
//       ref={ref}
//       {...props}
//     >
//       {children}
//     </select>
//   )
// );

// const Label = ({ children, className = "", ...props }) => (
//   <label
//     className={`text-sm font-medium text-gray-300 ${className}`}
//     {...props}
//   >
//     {children}
//   </label>
// );

// const Checkbox = React.forwardRef(({ className = "", ...props }, ref) => (
//   <input
//     type="checkbox"
//     className={`h-4 w-4 rounded border-gray-600 bg-gray-900 text-blue-600 focus:ring-2 focus:ring-blue-500 ${className}`}
//     ref={ref}
//     {...props}
//   />
// ));

// // Types
// interface SignInFormData {
//   email: string;
//   password: string;
//   rememberMe: boolean;
// }

// interface SignUpFormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   company: string;
//   role: string;
//   projectType: string;
//   budget: string;
//   password: string;
//   confirmPassword: string;
//   dateOfBirth: {
//     month: string;
//     day: string;
//     year: string;
//   };
//   agreeToTerms: boolean;
//   marketingEmails: boolean;
// }

// const AuthModal = () => {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   // Sign In Form
//   const signInForm = useForm<SignInFormData>({
//     defaultValues: {
//       email: "",
//       password: "",
//       rememberMe: false,
//     },
//   });

//   // Sign Up Form
//   const signUpForm = useForm<SignUpFormData>({
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       company: "",
//       role: "",
//       projectType: "",
//       budget: "",
//       password: "",
//       confirmPassword: "",
//       dateOfBirth: {
//         month: "",
//         day: "",
//         year: "",
//       },
//       agreeToTerms: false,
//       marketingEmails: false,
//     },
//   });

//   const onSignInSubmit = (data: SignInFormData) => {
//     console.log("Sign In Data:", data);
//     alert("Sign in successful!");
//   };

//   const onSignUpSubmit = (data: SignUpFormData) => {
//     if (data.password !== data.confirmPassword) {
//       signUpForm.setError("confirmPassword", {
//         type: "manual",
//         message: "Passwords do not match",
//       });
//       return;
//     }
//     console.log("Sign Up Data:", data);
//     alert("Account created successfully!");
//   };

//   const generateYears = () => {
//     const currentYear = new Date().getFullYear();
//     const years = [];
//     for (let year = currentYear; year >= currentYear - 100; year--) {
//       years.push(year.toString());
//     }
//     return years;
//   };

//   const generateDays = () => {
//     return Array.from({ length: 31 }, (_, i) =>
//       (i + 1).toString().padStart(2, "0")
//     );
//   };

//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   if (!isModalOpen) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//         <Button onClick={() => setIsModalOpen(true)} size="lg">
//           Open Authentication Modal
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
//       {/* Backdrop */}
//       <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

//       {/* Modal */}
//       <div className="relative bg-gray-950 rounded-2xl shadow-2xl w-full max-w-md border border-gray-800 overflow-hidden">
//         {/* Close Button */}
//         <button
//           onClick={() => setIsModalOpen(false)}
//           className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
//         >
//           <X size={20} />
//         </button>

//         {/* Header */}
//         <div className="px-6 pt-8 pb-6">
//           <h2 className="text-2xl font-bold text-white text-center mb-2">
//             {isSignUp ? "Create your account" : "Welcome back"}
//           </h2>
//           <p className="text-gray-400 text-center text-sm">
//             {isSignUp
//               ? "Join our development community"
//               : "Sign in to your account"}
//           </p>
//         </div>

//         {/* Toggle Buttons */}
//         <div className="px-6 mb-6">
//           <div className="flex bg-gray-800 rounded-lg p-1">
//             <button
//               onClick={() => setIsSignUp(false)}
//               className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
//                 !isSignUp
//                   ? "bg-blue-600 text-white shadow-sm"
//                   : "text-gray-400 hover:text-white"
//               }`}
//             >
//               Sign In
//             </button>
//             <button
//               onClick={() => setIsSignUp(true)}
//               className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
//                 isSignUp
//                   ? "bg-blue-600 text-white shadow-sm"
//                   : "text-gray-400 hover:text-white"
//               }`}
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>

//         {/* Form Content */}
//         <div className="px-6 pb-8">
//           {!isSignUp ? (
//             // Sign In Form
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="signin-email">Email</Label>
//                 <div className="mt-1 relative">
//                   <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                   <Input
//                     id="signin-email"
//                     type="email"
//                     placeholder="Enter your email"
//                     className="pl-10"
//                     {...signInForm.register("email", {
//                       required: "Email is required",
//                     })}
//                   />
//                 </div>
//                 {signInForm.formState.errors.email && (
//                   <p className="mt-1 text-sm text-red-400">
//                     {signInForm.formState.errors.email.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <Label htmlFor="signin-password">Password</Label>
//                 <div className="mt-1 relative">
//                   <Input
//                     id="signin-password"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter your password"
//                     className="pr-10"
//                     {...signInForm.register("password", {
//                       required: "Password is required",
//                     })}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-3 text-gray-400 hover:text-white"
//                   >
//                     {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                   </button>
//                 </div>
//                 {signInForm.formState.errors.password && (
//                   <p className="mt-1 text-sm text-red-400">
//                     {signInForm.formState.errors.password.message}
//                   </p>
//                 )}
//               </div>

//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-2">
//                   <Checkbox
//                     id="remember-me"
//                     {...signInForm.register("rememberMe")}
//                   />
//                   <Label htmlFor="remember-me" className="text-sm">
//                     Remember me
//                   </Label>
//                 </div>
//                 <button
//                   type="button"
//                   className="text-sm text-blue-400 hover:text-blue-300"
//                 >
//                   Forgot password?
//                 </button>
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full"
//                 size="lg"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   signInForm.handleSubmit(onSignInSubmit)();
//                 }}
//               >
//                 Sign In
//               </Button>

//               <div className="relative my-6">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-600" />
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="bg-gray-950 px-4 text-gray-400">
//                     Or continue with
//                   </span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-3">
//                 <Button variant="outline" className="w-full">
//                   <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
//                     <path
//                       fill="currentColor"
//                       d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                     />
//                     <path
//                       fill="currentColor"
//                       d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                     />
//                     <path
//                       fill="currentColor"
//                       d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                     />
//                     <path
//                       fill="currentColor"
//                       d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                     />
//                   </svg>
//                   Google
//                 </Button>
//                 <Button variant="outline" className="w-full">
//                   <svg
//                     className="w-4 h-4 mr-2"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                   </svg>
//                   GitHub
//                 </Button>
//               </div>
//             </div>
//           ) : (
//             // Sign Up Form
//             <div className="space-y-4">
//               {/* Name Fields */}
//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <Label htmlFor="firstName">First Name</Label>
//                   <div className="mt-1 relative">
//                     <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                     <Input
//                       id="firstName"
//                       placeholder="John"
//                       className="pl-10"
//                       {...signUpForm.register("firstName", {
//                         required: "First name is required",
//                       })}
//                     />
//                   </div>
//                   {signUpForm.formState.errors.firstName && (
//                     <p className="mt-1 text-xs text-red-400">
//                       {signUpForm.formState.errors.firstName.message}
//                     </p>
//                   )}
//                 </div>
//                 <div>
//                   <Label htmlFor="lastName">Last Name</Label>
//                   <Input
//                     id="lastName"
//                     placeholder="Doe"
//                     className="mt-1"
//                     {...signUpForm.register("lastName", {
//                       required: "Last name is required",
//                     })}
//                   />
//                   {signUpForm.formState.errors.lastName && (
//                     <p className="mt-1 text-xs text-red-400">
//                       {signUpForm.formState.errors.lastName.message}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Email */}
//               <div>
//                 <Label htmlFor="signup-email">Email</Label>
//                 <div className="mt-1 relative">
//                   <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                   <Input
//                     id="signup-email"
//                     type="email"
//                     placeholder="john@example.com"
//                     className="pl-10"
//                     {...signUpForm.register("email", {
//                       required: "Email is required",
//                     })}
//                   />
//                 </div>
//                 {signUpForm.formState.errors.email && (
//                   <p className="mt-1 text-sm text-red-400">
//                     {signUpForm.formState.errors.email.message}
//                   </p>
//                 )}
//               </div>

//               {/* Phone */}
//               <div>
//                 <Label htmlFor="phone">Phone</Label>
//                 <div className="mt-1 relative">
//                   <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                   <Input
//                     id="phone"
//                     type="tel"
//                     placeholder="+1 (555) 123-4567"
//                     className="pl-10"
//                     {...signUpForm.register("phone")}
//                   />
//                 </div>
//               </div>

//               {/* Date of Birth */}
//               <div>
//                 <Label>Date of birth</Label>
//                 <p className="text-xs text-gray-400 mt-1 mb-2">
//                   This will not be shown publicly. Confirm your own age, even if
//                   this account is for a business, a pet, or something else.
//                 </p>
//                 <div className="grid grid-cols-3 gap-2">
//                   <div>
//                     <Select
//                       {...signUpForm.register("dateOfBirth.month", {
//                         required: "Month is required",
//                       })}
//                     >
//                       <option value="">Month</option>
//                       {months.map((month, index) => (
//                         <option
//                           key={month}
//                           value={(index + 1).toString().padStart(2, "0")}
//                         >
//                           {month}
//                         </option>
//                       ))}
//                     </Select>
//                   </div>
//                   <div>
//                     <Select
//                       {...signUpForm.register("dateOfBirth.day", {
//                         required: "Day is required",
//                       })}
//                     >
//                       <option value="">Day</option>
//                       {generateDays().map((day) => (
//                         <option key={day} value={day}>
//                           {day}
//                         </option>
//                       ))}
//                     </Select>
//                   </div>
//                   <div>
//                     <Select
//                       {...signUpForm.register("dateOfBirth.year", {
//                         required: "Year is required",
//                       })}
//                     >
//                       <option value="">Year</option>
//                       {generateYears().map((year) => (
//                         <option key={year} value={year}>
//                           {year}
//                         </option>
//                       ))}
//                     </Select>
//                   </div>
//                 </div>
//               </div>

//               {/* Company & Role */}
//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <Label htmlFor="company">Company</Label>
//                   <div className="mt-1 relative">
//                     <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                     <Input
//                       id="company"
//                       placeholder="Tech Corp"
//                       className="pl-10"
//                       {...signUpForm.register("company")}
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <Label htmlFor="role">Role</Label>
//                   <div className="mt-1 relative">
//                     <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
//                     <Select
//                       id="role"
//                       className="pl-10"
//                       {...signUpForm.register("role", {
//                         required: "Role is required",
//                       })}
//                     >
//                       <option value="">Select role</option>
//                       <option value="founder">Founder/CEO</option>
//                       <option value="cto">CTO/Tech Lead</option>
//                       <option value="product-manager">Product Manager</option>
//                       <option value="developer">Developer</option>
//                       <option value="designer">Designer</option>
//                       <option value="other">Other</option>
//                     </Select>
//                   </div>
//                 </div>
//               </div>

//               {/* Project Type & Budget */}
//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <Label htmlFor="projectType">Project Type</Label>
//                   <Select
//                     id="projectType"
//                     className="mt-1"
//                     {...signUpForm.register("projectType")}
//                   >
//                     <option value="">Select type</option>
//                     <option value="web-app">Web App</option>
//                     <option value="mobile-app">Mobile App</option>
//                     <option value="ecommerce">E-commerce</option>
//                     <option value="saas">SaaS</option>
//                     <option value="mvp">MVP</option>
//                   </Select>
//                 </div>
//                 <div>
//                   <Label htmlFor="budget">Budget</Label>
//                   <div className="mt-1 relative">
//                     <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
//                     <Select
//                       id="budget"
//                       className="pl-10"
//                       {...signUpForm.register("budget")}
//                     >
//                       <option value="">Select budget</option>
//                       <option value="under-10k">Under $10K</option>
//                       <option value="10k-25k">$10K - $25K</option>
//                       <option value="25k-50k">$25K - $50K</option>
//                       <option value="50k-100k">$50K - $100K</option>
//                       <option value="100k-plus">$100K+</option>
//                     </Select>
//                   </div>
//                 </div>
//               </div>

//               {/* Password Fields */}
//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <Label htmlFor="signup-password">Password</Label>
//                   <div className="mt-1 relative">
//                     <Input
//                       id="signup-password"
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Password"
//                       className="pr-10"
//                       {...signUpForm.register("password", {
//                         required: "Password is required",
//                         minLength: {
//                           value: 8,
//                           message: "Password must be at least 8 characters",
//                         },
//                       })}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-3 text-gray-400 hover:text-white"
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                   {signUpForm.formState.errors.password && (
//                     <p className="mt-1 text-xs text-red-400">
//                       {signUpForm.formState.errors.password.message}
//                     </p>
//                   )}
//                 </div>
//                 <div>
//                   <Label htmlFor="confirmPassword">Confirm</Label>
//                   <div className="mt-1 relative">
//                     <Input
//                       id="confirmPassword"
//                       type={showConfirmPassword ? "text" : "password"}
//                       placeholder="Confirm"
//                       className="pr-10"
//                       {...signUpForm.register("confirmPassword", {
//                         required: "Please confirm password",
//                       })}
//                     />
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowConfirmPassword(!showConfirmPassword)
//                       }
//                       className="absolute right-3 top-3 text-gray-400 hover:text-white"
//                     >
//                       {showConfirmPassword ? (
//                         <EyeOff size={16} />
//                       ) : (
//                         <Eye size={16} />
//                       )}
//                     </button>
//                   </div>
//                   {signUpForm.formState.errors.confirmPassword && (
//                     <p className="mt-1 text-xs text-red-400">
//                       {signUpForm.formState.errors.confirmPassword.message}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Checkboxes */}
//               <div className="space-y-3">
//                 <div className="flex items-start space-x-2">
//                   <Checkbox
//                     id="agreeToTerms"
//                     {...signUpForm.register("agreeToTerms", {
//                       required: "You must agree to the terms",
//                     })}
//                   />
//                   <Label
//                     htmlFor="agreeToTerms"
//                     className="text-xs leading-relaxed"
//                   >
//                     I agree to the{" "}
//                     <button
//                       type="button"
//                       className="text-blue-400 hover:text-blue-300"
//                     >
//                       Terms of Service
//                     </button>{" "}
//                     and{" "}
//                     <button
//                       type="button"
//                       className="text-blue-400 hover:text-blue-300"
//                     >
//                       Privacy Policy
//                     </button>
//                   </Label>
//                 </div>
//                 {signUpForm.formState.errors.agreeToTerms && (
//                   <p className="text-xs text-red-400">
//                     {signUpForm.formState.errors.agreeToTerms.message}
//                   </p>
//                 )}

//                 <div className="flex items-start space-x-2">
//                   <Checkbox
//                     id="marketingEmails"
//                     {...signUpForm.register("marketingEmails")}
//                   />
//                   <Label htmlFor="marketingEmails" className="text-xs">
//                     Send me marketing emails about new services and updates
//                   </Label>
//                 </div>
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full"
//                 size="lg"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   signUpForm.handleSubmit(onSignUpSubmit)();
//                 }}
//               >
//                 Create Account
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthModal;
