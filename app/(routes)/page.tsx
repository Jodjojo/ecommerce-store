import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

///the fetched billboard container containing the products will be displayed here
const HomePage = async () => {
	const billboard = await getBillboard("5cdae681-65a4-47bb-ba5b-be96f166b82b");
	return (
		<Container>
			<div className='space-y-10 pb-10'>
				<Billboard data={billboard} />
			</div>
		</Container>
	);
};

export default HomePage;
