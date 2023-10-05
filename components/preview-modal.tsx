"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import Modal from "@/components/ui/modal";
import Gallery from "@/components/gallery";
import Info from "./info";

const PreviewModal = () => {
	///we will use the preview moddal and product from the hooks we created
	const PreviewModal = usePreviewModal();
	const product = usePreviewModal((state) => state.data);

	if (!product) {
		return null;
	}
	return (
		<Modal open={PreviewModal.isOpen} onClose={PreviewModal.onClose}>
			<div className='grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8'>
				{/* Div to handle our gallery */}
				<div className='sm:col-span-4 lg:col-span-5 '>
					<Gallery images={product.images} />
				</div>
				{/*  to render info of product*/}
				<div className='sm:col-span-8 lg:col-span-7'>
					<Info data={product} />
				</div>
			</div>
		</Modal>
	);
};

export default PreviewModal;
