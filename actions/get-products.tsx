///install a package called Query String that helps assign values to specified parameters
import qs from "query-string";
///this actions folder contains files that will be used to source various models or informations from the admin block
import { Product } from "@/types";

///this is the URL of the products from the admin block
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

///we create an interface that will accept those filters we are passing as relations from other models
interface Query {
	categordId?: string;
	colorId?: string;
	sizeId?: string;
	isFeatured?: boolean;
}

///we create a function to get the products asynchroniously using a promise
const getProducts = async (query: Query): Promise<Product[]> => {
	///create our URL route for getting these products using these filters
	const url = qs.stringifyUrl({
		url: URL,
		query: {
			colorId: query.colorId,
			sizeId: query.sizeId,
			categoryId: query.categordId,
			isFeatured: query.isFeatured,
		},
	});

	const res = await fetch(URL);

	return res.json();
};

export default getProducts;
