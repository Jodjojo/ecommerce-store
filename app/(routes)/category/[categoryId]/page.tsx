import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";

///prevent caching
export const revaldiate = 0;

///interface to add the props
interface CategoryPageProps {
	params: {
		categoryId: string;
	};
	searchParams: {
		colorId: string;
		sizeId: string;
	};
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
	params,
	searchParams,
}) => {
	///We call the available products in the category using the getProducts action we created with props we passed from the interface
	const products = await getProducts({
		categordId: params.categoryId,
		colorId: searchParams.colorId,
		sizeId: searchParams.sizeId,
	});

	///we then call all the models we want to use to render the category page using the actions we created
	const sizes = await getSizes();
	const colors = await getColors();
	const category = await getCategory(params.categoryId);

	return (
		<div className='bg-white'>
			<Container>
				<Billboard data={category.billboard} />
				<div className='px-4 sm:px-6 lg:px-8 pb-24'>
					<div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
						{/* Add Mobile Filters to help display billboard better on mobile devices*/}
						<div className='hidden lg:block'>
							<Filter valueKey='sizeId' name='Sizes' data={sizes} />
							<Filter valueKey='colorId' name='Colors' data={colors} />
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default CategoryPage;
