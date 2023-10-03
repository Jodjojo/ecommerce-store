"use client";

import Image from "next/image";
///we are going to use headless ui library for the gallery
import { Tab } from "@headlessui/react";

///importing the Image model we fetched from types
import { Image as ImageType } from "@/types";
import GalleryTab from "./gallery-tab";

interface GalleryProps {
	images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
	return (
		///we are using the tab feature from the headless ui to render the gallery
		<Tab.Group as='div' className='flex flex-col-reverse'>
			<div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
				<Tab.List className='grid grid-cols-4 gap-6'>
					{images.map((image) => (
						<GalleryTab key={image.id} image={image} />
					))}
				</Tab.List>
			</div>
			{/* we then use the tab component from headless again to render the panels of the image in full and give room to be selected */}
			<Tab.Panels className='aspect-square w-full'>
				{images.map((image) => (
					// Individual tab panel that will render the image of our product
					<Tab.Panel key={image.id}>
						<div className='aspect-square relative h-full w-full sm:rounded-lg overflow-hidden'>
							<Image
								fill
								src={image.url}
								alt='Image'
								className='object-cover object-center'
							/>
						</div>
					</Tab.Panel>
				))}
			</Tab.Panels>
		</Tab.Group>
	);
};

export default Gallery;
