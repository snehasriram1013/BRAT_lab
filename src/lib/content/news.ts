export type NewsItem = {
	title: string;
	date: string;
	excerpt: string;
	tags: string[];
};

export const newsItems: NewsItem[] = [
	{
		title: 'Placeholder News: BRAT Lab Launches New Project',
		date: '2025-01-15',
		excerpt:
			'Placeholder excerpt: A short summary of the announcement or blog post goes here. Replace with real content later.',
		tags: ['Announcement', 'Project']
	},
	{
		title: 'Placeholder News: Student Spotlight',
		date: '2024-11-03',
		excerpt:
			'Placeholder excerpt: Highlight a student achievement, internship, or conference experience.',
		tags: ['People', 'Spotlight']
	},
	{
		title: 'Placeholder Blog: Notes from a Conference',
		date: '2024-08-21',
		excerpt:
			'Placeholder excerpt: Use this space for a longer-form update about research, events, or community work.',
		tags: ['Blog', 'Conference']
	}
];
