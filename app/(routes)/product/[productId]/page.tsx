///the route redirected to when a product card is clicked on

import getProducts from "@/actions/get-products";
import getProduct from "@/actions/get-product";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Info from "@/components/info";

// export const revalidate = 0;

interface ProductPageProps {
	params: {
		productId: string;
	};
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
	///we define the product we want to fetch using the GetProduct function action we created
	const product = await getProduct(params.productId);
	///we then create another variable that will get suggested products that we can display under this same category
	const suggestedProducts = await getProducts({
		categordId: product?.category?.id,
	});
	return (
		<div className='bg-white'>
			<Container>
				<div className='px-4 py-10 sm:px-6 lg:px-8'>
					<div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
						{/* Gallery component we will create for product */}
						<Gallery images={product.images} />
						<div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
							{/* Info of products */}
							<Info data={product} />
						</div>
					</div>
					{/* rendering the suggested products */}
					<hr className='my-10' />
					<ProductList title='Related Items' items={suggestedProducts} />
				</div>
			</Container>
		</div>
	);
};

export default ProductPage;
