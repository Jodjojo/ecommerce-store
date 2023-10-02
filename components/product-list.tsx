import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";

///component we will use to render the Products under
interface ProductListProps {
	title: string;
	items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
	return (
		<div className='space-y-4'>
			<h3 className='font-bold text-3xl'>{title}</h3>
			{/* ///rendering executed if no result is founf for product */}
			{items.length === 0 && <NoResults />}

			{/* grid to render our products */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
				{items.map((item) => (
					<div key={item.id}>{item.name}</div>
				))}
			</div>
		</div>
	);
};

export default ProductList;
