"use client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import type { ComponentPropsWithoutRef } from "react";
import * as React from "react";

/* -------------------------------------------------------------------------- */
/*                                   Button                                   */
/* -------------------------------------------------------------------------- */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const SignInButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        // base
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "disabled:pointer-events-none disabled:opacity-50",
        // variants
        {
          "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500":
            variant === "default",
          "border border-slate-600 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white":
            variant === "outline",
          "text-slate-400 hover:bg-slate-800 hover:text-white":
            variant === "ghost",
        },
        // sizes
        {
          "h-10 px-4 py-2": size === "default",
          "h-9 rounded-md px-3": size === "sm",
          "h-11 rounded-lg px-8": size === "lg",
        },
        className
      )}
      {...props}
    />
  )
);
SignInButton.displayName = "Button";

/* -------------------------------------------------------------------------- */
/*                                    Input                                   */
/* -------------------------------------------------------------------------- */

type InputProps = ComponentPropsWithoutRef<"input">;

const SignInInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2",
        "text-sm text-slate-100 placeholder:text-slate-400",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
SignInInput.displayName = "Input";

/* -------------------------------------------------------------------------- */
/*                                   Select                                   */
/* -------------------------------------------------------------------------- */

type SelectProps = ComponentPropsWithoutRef<"select">;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2",
        "text-sm text-slate-100",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
);
Select.displayName = "Select";

/* -------------------------------------------------------------------------- */
/*                                   Label                                    */
/* -------------------------------------------------------------------------- */

type LabelProps = ComponentPropsWithoutRef<"label">;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn("text-sm font-medium text-slate-300", className)}
      {...props}
    />
  )
);
Label.displayName = "Label";

/* -------------------------------------------------------------------------- */
/*                                  Checkbox                                  */
/* -------------------------------------------------------------------------- */

type CheckboxProps = ComponentPropsWithoutRef<"input">;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <input
      type="checkbox"
      ref={ref}
      className={cn(
        "h-4 w-4 rounded border-slate-600 bg-slate-900",
        "text-blue-600 focus:ring-2 focus:ring-blue-500",
        className
      )}
      {...props}
    />
  )
);
Checkbox.displayName = "Checkbox";

/* -------------------------------------------------------------------------- */
/*                               Export aliases                               */
/* -------------------------------------------------------------------------- */

export { SignInButton as Button, Checkbox, SignInInput as Input, Label, Select };
