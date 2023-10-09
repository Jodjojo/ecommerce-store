"use client";
///the component to display the cart items on the cart page
import Image from "next/image";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

///interface for the card Item props
interface CartItemProps {
	data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
	const cart = useCart();

	///function to remove item from cart from cart dashboard
	const onRemove = () => {
		cart.removeItem(data.id);
	};
	return (
		///List item that is going to be used to display the content o the cart
		<li className='flex py-6 border-b'>
			{/* \Div to contain the Images of the items in the shopping cart */}
			<div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
				<Image
					fill
					src={data.images[0].url}
					alt=''
					className='object-cover object-center'
				/>
			</div>
			<div className='relative ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
				{/* Div for the icon button to close the shopping cart */}
				<div className='absolute z-10 right-0 top-0'>
					<IconButton onClick={onRemove} icon={<X size={15} />} />
				</div>
				{/* Div to contain Item description, size, color and price */}
				<div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
					<div className='flex justify-between'>
						<p className='text-lg font-semibold text-black'>{data.name}</p>
					</div>
					<div className='mt-1 flex text-sm'>
						<p className='text-gray-500'>{data.color.name}</p>
						<p className='text-gray-500 ml-4 border-l border-gray-200 pl-4'>
							{data.size.name}
						</p>
					</div>
					<Currency value={data.price} />
				</div>
			</div>
		</li>
	);
};

export default CartItem;
