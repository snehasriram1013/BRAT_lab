export type Publication = {
	title: string;
	authors: string;
	venue: string;
	year: number;
	links?: { label: string; href: string }[];
};

export const publications: Publication[] = [
	{
		title: 'Placeholder Paper Title: Designing for Accessibility in Emerging Systems',
		authors: 'Gadiraju, V.; Student A; Student B (Placeholder)',
		venue: 'Conference / Journal Name (Placeholder)',
		year: 2025,
		links: [
			{ label: 'PDF', href: '#' },
			{ label: 'DOI', href: '#' }
		]
	},
	{
		title: 'Placeholder Paper Title: Representation and Responsible Data Workflows',
		authors: 'Student B; Collaborator C; Gadiraju, V. (Placeholder)',
		venue: 'Workshop / Symposium (Placeholder)',
		year: 2024,
		links: [{ label: 'arXiv', href: '#' }]
	},
	{
		title: 'Placeholder Paper Title: Inclusive Evaluation Protocols for HCI Studies',
		authors: 'Student A; Gadiraju, V. (Placeholder)',
		venue: 'HCI Venue (Placeholder)',
		year: 2023
	}
];
