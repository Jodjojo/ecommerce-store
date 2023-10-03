///this actions folder contains files that will be used to source various models or informations from the admin block
import { Color } from "@/types";

///this is the URL of the colors from the admin block
const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

///we create a function to get the Categories asynchroniously using a promise
const getColors = async (): Promise<Color[]> => {
	const res = await fetch(URL);

	return res.json();
};

export default getColors;
