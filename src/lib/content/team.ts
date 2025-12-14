export type TeamMember = {
	name: string;
	role: string;
	affiliation?: string;
	pronouns?: string;
	bio: string;
	interests: string[];
	photoSrc: string;
	links?: { label: string; href: string }[];
};

export const teamMembers: TeamMember[] = [
	{
		name: 'Vinitha Gadiraju',
		role: 'Lab Director (Placeholder)',
		affiliation: 'Wellesley College',
		pronouns: 'she/her (placeholder)',
		bio:
			'Placeholder bio: Professor Gadiraju leads BRAT Lab and mentors students working on accessibility, responsible AI, and inclusive design.',
		interests: ['Accessibility', 'Human-AI Interaction', 'Inclusive Design'],
		photoSrc: '/images/team/vinitha-placeholder.svg',
		links: [
			{ label: 'Website', href: '#' },
			{ label: 'Google Scholar', href: '#' }
		]
	},
	{
		name: 'Student Researcher A',
		role: 'Undergraduate Researcher (Placeholder)',
		bio:
			'Placeholder bio: Works on a project about accessible interfaces and evaluating assistive technology prototypes.',
		interests: ['Assistive Tech', 'Usability', 'Evaluation'],
		photoSrc: '/images/team/student-a.svg',
		links: [{ label: 'Email', href: 'mailto:student-a@wellesley.edu' }]
	},
	{
		name: 'Student Researcher B',
		role: 'Undergraduate Researcher (Placeholder)',
		bio:
			'Placeholder bio: Focuses on representation in datasets and responsible ML workflows for real-world systems.',
		interests: ['Representation', 'Responsible ML', 'Data Curation'],
		photoSrc: '/images/team/student-b.svg'
	},
	{
		name: 'Collaborator C',
		role: 'Collaborator (Placeholder)',
		bio:
			'Placeholder bio: External collaborator supporting interdisciplinary projects and community partnerships.',
		interests: ['Community Partnerships', 'Co-design', 'Policy'],
		photoSrc: '/images/team/collaborator-c.svg'
	}
];
