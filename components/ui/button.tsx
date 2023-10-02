import { forwardRef } from "react";

import { cn } from "@/lib/utils";

///we are then going to decalre an interface that will extend the props this button component will use using the HTML Button element
export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

///we are creating our Button component instead of just using a tempklate from Shadcn because we want more freedom in button requirements
///forward ref is a technique of automatically passing a ref through a component to one of its children

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, children, disabled, type = "button", ...props }, ref) => {
		return (
			<button
				className={cn(
					`
				w-auto 
				rounded-full 
				bg-black
				border-transparent 
				px-5 
				py-3
				disabled:cursor-not-allowed
				disabled:opacity-50
				text-white
				font-semibold
				hover:opacity-75
				transition
				`,
					className
				)}
				ref={ref}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = "Button";

export default Button;
