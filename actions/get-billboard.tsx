///this actions folder contains files that will be used to source various models or informations from the admin block
import { Billboard } from "@/types";

///this is the URL of the categories from the admin block
const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

///we create a function to get the billboard asynchroniously using a promise
///we use the id we get from the billboard type to fetch a particular billboard
const getBillboard = async (id: string): Promise<Billboard> => {
	const res = await fetch(`${URL}/${id}`);

	return res.json();
};

export default getBillboard;
