export type NavLink = {
	title: string;
	href: string;
	sublinks?: NavLink[];
};

export type BreadcrumbLink = {
	label: string;
	href: string;
};
