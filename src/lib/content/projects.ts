export type Project = {
	title: string;
	summary: string;
	status: 'Active' | 'In progress' | 'Completed' | 'Idea';
	areas: string[];
	imageSrc: string;
};

export const projects: Project[] = [
	{
		title: 'Project 1: Accessible AI Assistants (Placeholder)',
		summary:
			'Placeholder summary: Investigating how conversational agents can better support users with diverse accessibility needs.',
		status: 'Active',
		areas: ['Accessibility', 'HCI', 'Human-AI Interaction'],
		imageSrc: '/images/project-1.svg'
	},
	{
		title: 'Project 2: Representation-Aware Data Practices (Placeholder)',
		summary:
			'Placeholder summary: Developing tools and guidelines for dataset documentation, auditing, and community-driven data governance.',
		status: 'In progress',
		areas: ['Representation', 'Responsible AI', 'Data'],
		imageSrc: '/images/project-2.svg'
	},
	{
		title: 'Project 3: Inclusive Evaluation Methods (Placeholder)',
		summary:
			'Placeholder summary: Designing evaluation protocols that reflect real-world contexts and prioritize participant accessibility.',
		status: 'Idea',
		areas: ['Methods', 'Evaluation', 'Accessibility'],
		imageSrc: '/images/project-3.svg'
	}
];
