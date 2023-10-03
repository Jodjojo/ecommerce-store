import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

///the fetched billboard container containing the products will be displayed here
const HomePage = async () => {
	///we fetch our billboards and products from our actions folder to be displayed on home page
	const products = await getProducts({ isFeatured: true });
	const billboard = await getBillboard("5cdae681-65a4-47bb-ba5b-be96f166b82b");
	return (
		<Container>
			{/* handle the Billboards rendering from fetched Model  */}
			<div className='space-y-10 pb-10'>
				<Billboard data={billboard} />

				{/* Handling the products redndering from fetched Model */}
				<div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 '>
					<ProductList title='Featured Products' items={products} />
				</div>
			</div>
		</Container>
	);
};

export default HomePage;
