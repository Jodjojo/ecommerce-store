"use client";

import { useState, useEffect } from "react";
///creating a formatter that we will use for the price format in the products model
export const formatter = new Intl.NumberFormat("en-us", {
	style: "currency",
	currency: "USD",
});

///define an interface for the props of the formatter
interface CuurencyProps {
	value?: string | number;
}

const Currency: React.FC<CuurencyProps> = ({ value }) => {
	///prevent hydration error
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}
	return <div className='font-semibold'>{formatter.format(Number(value))}</div>;
};

export default Currency;
