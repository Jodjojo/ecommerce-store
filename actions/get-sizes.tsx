///this actions folder contains files that will be used to source various models or informations from the admin block
import { Size } from "@/types";

///this is the URL of the sizes from the admin block
const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

///we create a function to get the Categories asynchroniously using a promise
const getSizes = async (): Promise<Size[]> => {
	const res = await fetch(URL);

	return res.json();
};

export default getSizes;
