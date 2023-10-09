"use client";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";

///for the info of the products to be displayed on the gallery
interface InfoProps {
	data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
	const cart = useCart();

	///on Add to cart function
	const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation(); ///to overwride the fact that the main div where this iconButton is has an onClick

		cart.addItem(data);
	};
	return (
		<div>
			<h1 className='text-3xl font-bold text-gray-900'>{data.name}</h1>
			<div className='mt-3 flex items-end justify-between'>
				<p className='text-2xl text-gray-900'>
					<Currency value={data?.price} />
				</p>
			</div>
			<hr className='my-4' />
			<div className='flex flex-col gap-y-6'>
				{/* For Size */}
				<div className='flex items-center gap-x-4'>
					<h3 className='font-semibold text-black'>Size:</h3>
					<div>{data?.size?.name}</div>
				</div>
				{/* For Color */}
				<div className='flex items-center gap-x-4'>
					<h3 className='font-semibold text-black'>Color:</h3>
					<div
						className='h-6 w-6 rounded-full border border-gray-600'
						style={{ backgroundColor: data?.color?.value }}
					/>
				</div>
			</div>
			<div className='mt-10 flex items-center gap-x-3'>
				{/* Find add to cart function and call it to onClick here */}
				<Button onClick={onAddToCart} className='flex items-center gap-x-2'>
					Add To Cart
					<ShoppingCart />
				</Button>
			</div>
		</div>
	);
};

export default Info;
