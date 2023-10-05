"use client";

import { ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

///to show to amount of items a user has in their cart
const NavbarActions = () => {
	///prevent hydration errors |
	const [isMounted, setisMounted] = useState(false);

	useEffect(() => {
		setisMounted(true);
	}, []);

	///router to route to our cart page
	const router = useRouter();
	///using the useCart function we created
	const cart = useCart();

	if (!isMounted) {
		return null;
	}

	return (
		<div className='ml-auto flex items-center gap-x-4'>
			<Button
				onClick={() => router.push("/cart")}
				className='flex items-center rounded-full bg-black px-4 py-2'
			>
				{/* icons from 'lucide-react' */}
				<ShoppingBag size={20} color='white' />
				<span className='ml-2 text-sm font-medium text-white'>
					{cart.items.length}
				</span>
			</Button>
		</div>
	);
};

export default NavbarActions;
