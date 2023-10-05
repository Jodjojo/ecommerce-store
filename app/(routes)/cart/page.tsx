"use client";
import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
///page that is rerouted to on cart section click
import { useState, useEffect } from "react";
import CartItem from "./components/card-item";
import Summary from "./components/summary";

const CartPage = () => {
	///use the cart hook
	const cart = useCart();
	///cart home page
	return (
		<div className='bg-white'>
			<Container>
				<div className='px-4 py-16 sm:px-6 lg:px-8'>
					<h1 className='text-3xl font-bold text-black'>Shopping Cart</h1>
					<div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
						<div className='lg:col-span-7'>
							{/* if cart is empty and does not contain anything we render an information paragraph */}
							{cart.items.length === 0 && (
								<p className='text-neutral-500'>No Item added to cart.</p>
								///if not we use an unordererd list to map the items
							)}
							<ul>
								{cart.items.map((item) => (
									<CartItem key={item.id} data={item} />
								))}
							</ul>
						</div>
						{/* For summary of cart or items in cart we create a new component for that */}
						<Summary />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default CartPage;
