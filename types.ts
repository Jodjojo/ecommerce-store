///these would be used to export the various interfaces for the models of billboard and category we created in the ecommerce admin using prisma
///this is done to get our Data props straight from the model

export interface Billboard {
	id: string;
	label: string;
	imageUrl: string;
}

export interface Category {
	id: string;
	name: string;
	billboard: Billboard;
}

///importing the Product Model
export interface Product {
	id: string;
	category: Category; ///importing relation from Category model
	name: string;
	price: string;
	isFeatured: boolean;
	size: Size; ///importing the relation from  the Size model
	color: Color; ///from Color Model
	images: Image[]; ///Array from Image Model
}

export interface Image {
	id: string;
	url: string;
}

export interface Size {
	id: string;
	name: string;
	value: string;
}

export interface Color {
	id: string;
	name: string;
	value: string;
}
