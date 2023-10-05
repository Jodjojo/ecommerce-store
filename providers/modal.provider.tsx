"use client";
///this will handle the product Modal. It is the container of the react spectrum applications
import { useEffect, useState } from "react";

import PreviewModal from "@/components/preview-modal";

const ModalProvider = () => {
	/// we use the usestate to prevent hydration error
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<PreviewModal />
		</>
	);
};

export default ModalProvider;
