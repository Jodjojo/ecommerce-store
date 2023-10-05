///the modal where we are going to be able to preview products on modal
import { create } from "zustand";

import { Product } from "@/types";

interface previewModalStore {
	isOpen: boolean;
	data?: Product;
	onOpen: (data: Product) => void;
	onClose: () => void;
}

///we are going to use the create from Zustand to handle the interface and set the data using the interface Props we created
const usePreviewModal = create<previewModalStore>((set) => ({
	isOpen: false,
	data: undefined,
	onOpen: (data: Product) => set({ data, isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
