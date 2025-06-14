export const dmsdashboard = {
	id: 1,
	slug: "stunting-risk-management",
	icon_name: "ActivitySquare",
	title: "Stunting Risk Management System",
	tagline:
		"Empowering Communities to Prevent Childhood Stunting through Data-Driven Action",
	description:
		"A full-stack web application designed to help health officers, midwives, and government officials monitor, assess, and intervene in cases of potential stunting in children. The platform uses real-time data visualization, risk scoring models, and case management workflows to improve early detection and preventative action.",
	categories: ["HealthTech", "GovTech", "Analytics", "Public Welfare"],
	tags: [
		"stunting",
		"risk management",
		"case monitoring",
		"public health",
		"data visualization",
		"Next.js",
		"PostgreSQL",
	],

	technologies: {
		frontend: ["Next.js", "React", "Tailwind CSS", "Tremor UI", "TypeScript"],
		backend: ["Directus", "Node.js", "REST API", "Zod"],
		database: ["PostgreSQL"],
		devops: ["Google Cloud Run", "Cloud SQL", "Cloud Storage", "Terraform"],
		collaboration_tool: ["Figma", "Trello", "Slack", "Notion"],
	},

	roles: [
		"Fullstack Developer",
		"Frontend Developer",
		"Backend Developer",
		"UI/UX Designer",
	],
	start_date: "2024-10-01",
	end_date: "2025-01-15",
	team_size: 6,
	team_compositions: [
		{ role: "Frontend Developer", count: 2 },
		{ role: "Backend Developer", count: 1 },
		{ role: "UI/UX Designer", count: 1 },
		{ role: "Project Manager", count: 1 },
		{ role: "QA Engineer", count: 1 },
	],

	demo_link: "https://stunting-demo.mica.app",
	repo_link: "https://github.com/micastudio/stunting-risk-mgmt",

	screenshots: [
		{
			// src: "/screenshots/stunting-dashboard.png", // TODO: add screenshot, use unsplash for now
			src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Dashboard displaying stunting risk summary",
			caption: "Risk Overview Dashboard",
			tags: ["dashboard", "risk monitoring"],
		},
		{
			// src: "/screenshots/stunting-map.png", // TODO: add screenshot, use unsplash for now
			src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
			alt: "Map view of subdistrict-level stunting data",
			caption: "District-Based Risk Mapping",
			tags: ["map", "data visualization"],
		},
	],

	videos: [
		{
			src: "https://www.youtube.com/watch?v=stunting-risk-demo",
			type: "youtube",
			caption: "Stunting Risk Management Platform Walkthrough",
			tags: ["demo", "product tour"],
		},
	],

	testimonials: [
		{
			quote:
				"The platform significantly improved our ability to track and act on high-risk cases early.",
			author: "Dr. Lestari Utami",
			role: "Regional Health Officer",
			image: "/testimonials/lestari-utami.jpg",
		},
	],

	features: [
		{
			title: "Risk Score Calculation",
			description:
				"Automatically calculates risk levels based on child, maternal, and environmental factors.",
			icon: "BarChart",
		},
		{
			title: "Interactive District Mapping",
			description:
				"Visualizes risk across regions with subdistrict-level granularity.",
			icon: "MapPin",
		},
		{
			title: "Case Management System",
			description:
				"Allows health officers to monitor, update, and resolve individual stunting cases.",
			icon: "ClipboardList",
		},
		{
			title: "Reporting & Export Tools",
			description:
				"Generate monthly reports with risk breakdown and action summary.",
			icon: "FileBarChart",
		},
	],

	usecases: [
		{
			title: "Midwife Monitoring",
			description:
				"Midwives input periodic data to flag children at risk based on growth metrics.",
		},
		{
			title: "District Health Officer Oversight",
			description:
				"Oversees regional case trends and deploys interventions accordingly.",
		},
	],

	challenges: [
		{
			title: "Data Quality & Standardization",
			description:
				"Dealing with inconsistent data formats and missing fields from field submissions.",
		},
		{
			title: "Performance Optimization",
			description:
				"Rendering large amounts of geo-data without blocking the UI.",
		},
		{
			title: "Training Non-Tech Users",
			description:
				"Ensuring health officers and midwives could use the system effectively with minimal training.",
		},
	],

	company: {
		name: "MICA Studio",
		url: "https://mica.app",
		logo: "/logos/mica.svg",
		description:
			"A platform for building white-labeled SaaS apps in public sector innovation.",
	},

	clients: [
		{
			name: "BKKBN Boyolali",
			logo: "/clients/bkkbn-logo.png",
			description:
				"Badan Kependudukan dan Keluarga Berencana Nasional (Boyolali Branch)",
		},
	],

	overview:
		"This project was initiated in collaboration with the regional government to combat Indonesia's ongoing stunting crisis. Designed to scale across multiple districts, the platform brings modern digital tools to public health monitoring and has been praised for its usability, speed, and impact. The goal is to deploy across multiple provinces by 2026.",

	recognitions: [
		{
			title: "Top 10 GovTech Innovations of 2025",
			description:
				"Featured by GovID Awards for innovation in digital public health.",
			date: "2025-04-01",
			issuer: "GovID Awards",
		},
	],
};
