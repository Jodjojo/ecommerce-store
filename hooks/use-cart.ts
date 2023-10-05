///the modal where we are going to be able to add products to cart on modal
import { create } from "zustand";
///to be able to create cart selections that will persists in the local storage
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";
import toast from "react-hot-toast";

///interface of props for CartModal
interface CartStore {
	items: Product[];
	addItem: (data: Product) => void;
	removeItem: (id: string) => void;
	removeAll: () => void;
}

///we are going to use the create from Zustand to handle the interface and set the data using the interface Props we created to add to carts and remove from cart
const useCart = create(
	persist<CartStore>(
		(set, get) => ({
			items: [],
			addItem: (data: Product) => {
				const currentItems = get().items;
				const existingItem = currentItems.find((item) => item.id === data.id);

				///if the current item we want to add to cart is already there
				if (existingItem) {
					return toast("Item already in cart.");
				}

				// else we set the new item in cart
				set({ items: [...get().items, data] });
				toast.success("Item added to cart.");
			},
			///to remove Item from cart
			removeItem: (id: string) => {
				set({ items: [...get().items.filter((item) => item.id !== id)] });
				toast.success("Item removed from the cart.");
			},
			///to remove all items from cart
			removeAll: () => set({ items: [] }),
		}),
		///second paramter needed for this Persist and JSON middlware which consists of the name and where we want to make the storage
		{
			name: "cart-storage",
			storage: createJSONStorage(() => localStorage),
		}
	)
);

export default useCart;
