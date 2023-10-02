///this actions folder contains files that will be used to source various models or informations from the admin block
import { Category } from "@/types";

///this is the URL of the categories from the admin block
const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

///we create a function to get the Categories asynchroniously using a promise
const getCategories = async (): Promise<Category[]> => {
	const res = await fetch(URL);

	return res.json();
};

export default getCategories;
