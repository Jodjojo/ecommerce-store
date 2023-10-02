"use client";

import { ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";

import Button from "@/components/ui/button";

///to show to amount of items a user has in their cart
const NavbarActions = () => {
	///prevent hydration errors |
	const [isMounted, setisMounted] = useState(false);

	useEffect(() => {
		setisMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<div className='ml-auto flex items-center gap-x-4'>
			<Button className='flex items-center rounded-full bg-black px-4 py-2'>
				{/* icons from 'lucide-react' */}
				<ShoppingBag size={20} color='white' />
				<span className='ml-2 text-sm font-medium text-white'>0</span>
			</Button>
		</div>
	);
};

export default NavbarActions;