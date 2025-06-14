export const kerjaindonesia = {
	id: 4,
	slug: "kerjaindonesia-lms-004",
	icon_name: "GraduationCap",
	title: "KerjaIndonesia.id",
	tagline:
		"White-Label Enterprise LMS for Workforce Training and Talent Development",
	description:
		"KerjaIndonesia.id is a full-featured, white-label Learning Management System (LMS) delivered as a SaaS platform for enterprises and government institutions. It enables organizations to manage onboarding, training, assessments, certifications, and reporting through a customizable portal under their own branding.",

	categories: ["SaaS", "EdTech", "Enterprise LMS", "B2B"],
	tags: [
		"LMS",
		"whitelabel",
		"SaaS",
		"talent development",
		"enterprise learning",
		"Next.js",
		"Directus",
		"multi-tenant",
	],

	technologies: {
		frontend: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"React Query",
			"ShadCN UI",
		],
		backend: ["Directus", "Node.js", "tRPC", "Zod", "Cloud Functions"],
		database: ["PostgreSQL", "Drizzle ORM"],
		devops: [
			"Cloud Run",
			"Cloud SQL",
			"Firebase",
			"Docker",
			"Cloudflare",
			"GitHub Actions",
		],
		collaboration_tool: ["Notion", "Figma", "Slack", "Linear"],
	},

	roles: ["Fullstack Developer", "Backend Engineer", "Frontend Developer"],
	start_date: "2023-05-01",
	end_date: undefined, // ongoing
	team_size: 6,
	team_compositions: [
		{ role: "Fullstack Developer", count: 3 },
		{ role: "UI/UX Designer", count: 1 },
		{ role: "Product Manager", count: 1 },
		{ role: "DevOps Engineer", count: 1 },
	],

	demo_link: "https://kerjaindonesia.id",
	repo_link: undefined, // private repo

	screenshots: [
		{
			src: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Dashboard screen",
			caption: "Custom-branded learning dashboard",
			tags: ["dashboard", "user"],
		},
		{
			src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Course detail view",
			caption: "Course detail page with modules and progress tracking",
			tags: ["course", "learning"],
		},
		{
			src: "https://images.unsplash.com/photo-1726065235239-b20b88d43eea?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

			alt: "Admin panel screen",
			caption: "Multi-tenant admin panel to manage clients and users",
			tags: ["admin", "management"],
		},
	],

	videos: [
		{
			src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // placeholder
			type: "youtube",
			caption: "KerjaIndonesia LMS Explainer Video",
			tags: ["overview", "demo"],
		},
	],

	testimonials: [
		{
			quote:
				"We’ve deployed KerjaIndonesia LMS to over 10,000 employees with full tracking, branded experience, and compliance-ready training modules.",
			author: "Rahmat Hidayat",
			role: "HR Director at Jiwasraya",
		},
		{
			quote:
				"The ability to white-label and scale learning across subsidiaries makes this a vital platform for our talent strategy.",
			author: "Agnes Marcellina",
			role: "Talent Development at FHCI",
		},
	],

	features: [
		{
			title: "Multi-Tenant Architecture",
			description:
				"Each client has a fully isolated tenant with its own branding and domain.",
			icon: "LayoutGrid",
		},
		{
			title: "Course & Module Builder",
			description:
				"Admins can create custom courses with video, PDF, quizzes, and assignments.",
			icon: "FilePlus2",
		},
		{
			title: "Certification & Progress Tracking",
			description:
				"Learners receive certificates with tracking for compliance and KPIs.",
			icon: "Certificate",
		},
		{
			title: "Whitelabel Theming",
			description:
				"Supports custom logo, color palette, domain, and layout per tenant.",
			icon: "Paintbrush",
		},
		{
			title: "Analytics Dashboard",
			description:
				"HR/Admins can view real-time stats on enrollments, completions, and quiz scores.",
			icon: "BarChart3",
		},
	],

	usecases: [
		{
			title: "Onboarding Program for New Employees",
			description:
				"Clients run structured onboarding journeys with required learning paths.",
		},
		{
			title: "Compliance Training",
			description:
				"HR mandates security or legal training with auto-generated certificates.",
		},
		{
			title: "Partner and Vendor Training",
			description:
				"External stakeholders are onboarded through partner-specific portals.",
		},
	],

	challenges: [
		{
			title: "Scalable Tenant Provisioning",
			description:
				"Designed a provisioning workflow that spins up containers and config for new clients on demand.",
		},
		{
			title: "Custom Theming per Tenant",
			description:
				"Built dynamic runtime theming logic using Tailwind and layout configs.",
		},
		{
			title: "Complex Role-Based Permissions",
			description:
				"Fine-grained access controls for learners, instructors, HR admins, and superadmins.",
		},
	],

	company: {
		name: "MICA Studio",
		url: "https://mica.app",
		logo: "/logos/mica.svg",
		description:
			"We design scalable SaaS platforms for learning, health, and enterprise automation.",
	},

	clients: [
		{
			name: "Jiwasraya",
			logo: "/clients/jiwasraya.png",
			description:
				"National insurance provider using LMS for onboarding and compliance.",
		},
		{
			name: "BPD Papua",
			logo: "/clients/bpd-papua.png",
			description:
				"Regional development bank delivering internal staff training.",
		},
		{
			name: "Alfamart",
			logo: "/clients/alfamart.png",
			description: "Retail chain training thousands of store-level employees.",
		},
		{
			name: "UNJANI Bandung",
			logo: "/clients/unjani.png",
			description: "University delivering professional certification courses.",
		},
		{
			name: "Semen Padang",
			logo: "/clients/semenpadang.png",
			description:
				"Manufacturing client using LMS for technical skill upgrading.",
		},
		{
			name: "FHCI (Forum Human Capital Indonesia)",
			logo: "/clients/fhci.png",
			description:
				"A consortium of HR leaders from BUMN leveraging the platform nationally.",
		},
	],

	overview:
		"KerjaIndonesia.id is a powerful multi-tenant LMS platform enabling enterprises to host and manage training at scale. From government institutions to retail giants, it supports varied learning needs with full customization. With MICA's robust SaaS infrastructure, each client benefits from an isolated environment, secure user management, and tailored branding.",

	recognitions: [
		{
			title: "Selected LMS Partner by FHCI Indonesia",
			description:
				"Chosen as the LMS engine for FHCI’s national talent development strategy.",
			date: "2024-12-10",
			issuer: "Forum Human Capital Indonesia",
		},
	],
};
