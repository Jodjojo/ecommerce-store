"use client";

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
///the filter component that will be used in the category billboARD PAGE TO RENDER THE BILLBOARD In filtered oprions of the available sizes and colors

interface FilterProps {
	data: (Size | Color)[];
	name: string;
	valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
	///we use search params to get the details of the size and color from the id
	const searchParams = useSearchParams();
	const router = useRouter();

	///to get the selected value to display the detials dynamically on selection
	const selectedValue = searchParams.get(valueKey);

	const onClick = (id: string) => {
		///to get any current available query in the url
		const current = qs.parse(searchParams.toString());

		///then we declare the new filter to url query
		const query = {
			...current,
			[valueKey]: id,
		};

		///if user clicks on that current valuekey url means that the user want to remove the url
		if (current[valueKey] === id) {
			query[valueKey] = null;
		}

		///then we set the new url
		const url = qs.stringifyUrl(
			{ url: window.location.href, query },
			{ skipNull: true }
		);

		////then we push to new url
		router.push(url);
	};

	return (
		<div className='mb-8 '>
			<h3 className='text-lg font-semibold'>{name}</h3>
			<hr className='my-4' />
			<div className='flex flex-wrap gap-2'>
				{data.map((filter) => (
					<div key={filter.id} className='flex items-center'>
						<Button
							className={cn(
								"rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
								///if the selectedValue share the id with the filter we created
								selectedValue === filter.id && "bg-black text-white"
							)}
							onClick={() => onClick(filter.id)}
						>
							{filter.name}
						</Button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Filter;
