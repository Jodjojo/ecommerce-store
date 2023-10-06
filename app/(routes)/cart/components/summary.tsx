"use client";

///the component for the Summary of the order using the axios package

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

const Summary = () => {
	const searchParams = useSearchParams();
	///to get the items for from the cart to calculate total price
	const items = useCart((state) => state.items);
	const removeAll = useCart((state) => state.removeAll);

	///create a useeffect that will be executed after the checkout is f=done and page is returned back to cart page if checkout is succesful or render and error message otherwise using search Params nad the remove all function from the cart page
	useEffect(() => {
		if (searchParams.get("success")) {
			toast.success("Payment Completed.");
			removeAll();
		}

		if (searchParams.get("canceled")) {
			toast.error("Something went wrong.");
		}
	}, [searchParams, removeAll]);

	///calculation to get total price from items.price of each using reduce
	const totalPrice = items.reduce((total, item) => {
		return total + Number(item.price);
	}, 0);

	///On Checkout function using AXIOS and the url to our dashboard using the api route we will create for the checkout call
	const onCheckout = async () => {
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_API_URL}/checkout`,
			///api route then the data we will pass
			{
				productIds: items.map((item) => item.id),
			}
		);

		///then set the window location to the response we get from the axios call
		window.location = response.data.url;
	};

	return (
		///The divs will design the order summary and price total
		<div className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
			<h2 className='text-lg font-medium text-gray-900'>Order Summary</h2>
			<div className='mt-6 space-y-4'>
				<div className='flex items-center justify-between border-t border-gray-200 pt-4'>
					<div className='text-base font-medium text-gray-900'>Order total</div>
					<Currency value={totalPrice} />
				</div>
			</div>

			<Button onClick={onCheckout} className='w-full mt-6'>
				Checkout
			</Button>
		</div>
	);
};

export default Summary;
