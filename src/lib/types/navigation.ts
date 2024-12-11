export type SubSection = {
	title: string;
	description: string;
};

export type Section = {
	title: string;
	description: string;
	icon: string;
	subSections: Record<string, SubSection>;
}; 