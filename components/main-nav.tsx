///the main navigator bar that will handle our routes
"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

import Link from "next/link";
import { usePathname } from "next/navigation";

///we want to add some props to the main nav bar
interface MainNavProps {
	data: Category[];
}
const MainNav: React.FC<MainNavProps> = ({ data }) => {
	///this data is going to be an array of our navigation routes
	///so we use pathname to define those routes
	const pathname = usePathname();
	///defining the routes that will be displayed on the navigation bar
	const routes = data.map((route) => ({
		href: `/category/${route.id}`,
		label: route.name,
		active: pathname === `/category/${route.id}`,
	}));

	return (
		<nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>
			{/* We dynamically define our classname using the tailwind merger cn */}
			{routes.map((route) => (
				<Link
					key={route.href}
					href={route.href}
					className={cn(
						"text-sm font-medium transition-colors hover:text-black",
						route.active ? "text-black" : "text-neutral-500"
					)}
				>
					{route.label}
				</Link>
			))}
		</nav>
	);
};

export default MainNav;
