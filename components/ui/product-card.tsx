"use client";
import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";

import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

///reusable component that we will use to render each product to be featured on page

interface ProductCard {
	data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
	const cart = useCart();
	const previewModal = usePreviewModal();
	///we want to add a router to redirect from the product card if it is clicked
	const router = useRouter();
	const HandleClick = () => {
		router.push(`/product/${data?.id}`);
	};

	///to handle the activation of the preview Modal using the expand button
	///This uses the html button element event
	const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation(); ///to overwride the fact that the main div where this iconButton is has an onClick

		previewModal.onOpen(data);
	};

	///on Add to cart function
	const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation(); ///to overwride the fact that the main div where this iconButton is has an onClick

		cart.addItem(data);
	};

	return (
		<div
			onClick={HandleClick}
			className='bg-white group cursor-pointer rounded-xl borderf p-3 space-y-4'
		>
			{/* Images and actions of products to be rendered */}
			<div className='aspect-square rounded-xl bg-gray-100 relative'>
				<Image
					alt='Image'
					src={data?.images?.[0]?.url}
					fill
					className='aspect-square object-cover rounded-md'
				/>
				{/* The icons for actions: preview and add to cart from lucide react */}
				<div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
					<div className='flex gap-x-6 justify-center'>
						<IconButton
							onClick={onPreview}
							icon={<Expand size={20} className='text-gray-600' />}
						/>
						<IconButton
							onClick={onAddToCart}
							icon={<ShoppingCart size={20} className='text-gray-600' />}
						/>
					</div>
				</div>
			</div>
			{/* Description of products */}
			<div>
				<p className='font-semibold text-lg'>{data.name}</p>
				<p className='text-sm text-gray-500'>{data.category?.name}</p>
			</div>
			{/* Price */}
			<div className='flex items-center justify-between'>
				{/* We will use this component to display the price  */}
				<Currency value={data?.price} />
			</div>
		</div>
	);
};

export default ProductCard;
