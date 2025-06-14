export const partnershipdashboard = {
	id: 2,
	slug: "partnership-dashboard",
	icon_name: "Handshake",
	title: "Partnership Management Dashboard",
	tagline:
		"Centralized Platform for Managing Partnerships, Agreements, and Stakeholder Engagement",
	description:
		"An internal tool built to streamline the process of initiating, tracking, and managing partnerships between organizations. This dashboard helps teams coordinate agreements, monitor performance indicators, and maintain transparency across legal, operational, and strategic domains.",

	categories: ["Internal Tools", "Business Operations", "CRM", "LegalTech"],
	tags: [
		"partnership",
		"agreement tracking",
		"internal tool",
		"contract lifecycle",
		"Next.js",
		"workflow",
	],

	technologies: {
		frontend: ["Next.js", "React", "Tailwind CSS", "ShadCN UI", "TypeScript"],
		backend: ["Hono", "tRPC", "Zod", "Node.js"],
		database: ["PostgreSQL", "Drizzle ORM"],
		devops: ["Docker", "Cloud Run", "Cloud SQL", "GitHub Actions"],
		collaboration_tool: ["Notion", "Figma", "Slack", "Linear"],
	},

	roles: ["Fullstack Developer", "Frontend Developer", "Backend Developer"],
	start_date: "2024-06-01",
	end_date: "2024-08-15",
	team_size: 4,
	team_compositions: [
		{ role: "Fullstack Developer", count: 2 },
		{ role: "Product Manager", count: 1 },
		{ role: "UI/UX Designer", count: 1 },
	],

	demo_link: undefined, // internal use only
	repo_link: "https://github.com/micastudio/partnership-dashboard", // private repo or limited access

	screenshots: [
		{
			// src: "/screenshots/partnership-dashboard-overview.png", // TODO: add screenshot, use unsplash for now
			src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
			alt: "Partnership overview screen",
			caption: "Overview of Active Partnerships and Status",
			tags: ["dashboard", "overview"],
		},
		{
			// src: "/screenshots/partnership-agreement-detail.png", // TODO: add screenshot, use unsplash for now
			src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
			alt: "Agreement details view",
			caption: "Detailed View of an Individual Partnership Agreement",
			tags: ["agreement", "details"],
		},
	],

	videos: [
		{
			src: "https://www.loom.com/share/internal-partnership-tool-demo",
			type: "loom",
			caption: "Internal Walkthrough for Partnership Dashboard",
			tags: ["internal demo"],
		},
	],

	testimonials: [
		{
			quote:
				"Managing dozens of external partners used to be chaotic. This dashboard gave us clarity and control over every stage of the agreement lifecycle.",
			author: "Dita Prameswari",
			role: "Partnership Manager",
		},
	],

	features: [
		{
			title: "Agreement Lifecycle Tracking",
			description:
				"Monitor progress from draft to execution, with role-based permission workflows.",
			icon: "FileText",
		},
		{
			title: "Stakeholder Assignment & Alerts",
			description:
				"Assign internal PICs per partnership and receive status update alerts.",
			icon: "BellRing",
		},
		{
			title: "Custom Contract Metadata",
			description:
				"Define and filter by contract type, duration, value, and partner type.",
			icon: "Filter",
		},
		{
			title: "Document Upload & Secure Storage",
			description:
				"Upload NDAs, MoUs, and other documents securely with version history.",
			icon: "FolderKanban",
		},
	],

	usecases: [
		{
			title: "Contract Renewal Reminders",
			description:
				"Automatically notifies responsible staff 30 days before agreement expiration.",
		},
		{
			title: "Strategic Partnership Pipeline",
			description:
				"Track incoming partnership opportunities and their progression to formal agreements.",
		},
	],

	challenges: [
		{
			title: "Custom Role-Based Access",
			description:
				"Needed to support granular permissions between legal, operations, and business development teams.",
		},
		{
			title: "Data Migration from Legacy Sheets",
			description:
				"Converted and cleaned a decade of spreadsheet-based partnership data into relational models.",
		},
		{
			title: "Maintaining Legal Compliance",
			description:
				"Integrated export logs and signature trails to meet internal audit and ISO standards.",
		},
	],

	company: {
		name: "MICA Studio",
		url: "https://mica.app",
		logo: "/logos/mica.svg",
		description:
			"We build modern internal tools and scalable SaaS platforms for government and enterprise clients.",
	},

	clients: [
		{
			name: "PT Sumber Murni (Internal Use)",
			description:
				"Used internally by the Business Development and Legal departments.",
			logo: "/clients/sumber-murni-logo.png",
		},
	],

	overview:
		"This project was born out of a need for better coordination between legal, operations, and business teams when handling external partnerships. By building an internal dashboard tailored to the company’s workflow, we cut response times by 50%, reduced missed renewals, and enhanced transparency. The tool is planned to be scaled for multi-branch usage by Q4 2025.",

	recognitions: [
		{
			title: "Featured in MICA Showcase Q3 2024",
			description: "Selected as one of the top internal tool case studies.",
			date: "2024-09-01",
			issuer: "MICA Studio",
		},
	],
};
