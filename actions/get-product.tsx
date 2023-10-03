///this actions folder contains files that will be used to source various models or informations from the admin block
import { Product } from "@/types";

///this is the URL of the categories from the admin block
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

///we create a function to get the product asynchroniously using a promise
///we use the id we get from the product type to fetch a particular product
const getProduct = async (id: string): Promise<Product> => {
	const res = await fetch(`${URL}/${id}`);

	return res.json();
};

export default getProduct;
