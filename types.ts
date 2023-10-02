///these would be used to export the various interfaces for the models of billboard and category we created in the ecommerce admin using prisma
///this is done to get our Data props straight from the model

export interface Billboard {
	id: string;
	name: string;
	imageUrl: string;
}

export interface Category {
	id: string;
	name: string;
	billboard: Billboard;
}
