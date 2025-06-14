export const micastudio = {
	id: 7,
	slug: "mica-studio-007",
	icon_name: "Layers3",
	title: "Mica Studio",
	tagline:
		"The Self-Service Platform for Deploying Modular, Multi-Tenant SaaS Apps",
	description:
		"Mica Studio is a self-service SaaS platform that enables developers, businesses, and institutions to create, configure, deploy, and manage white-label SaaS platforms. Built with a modular architecture, it supports launching apps like LMS, HRIS, POS, Stunting Management, and more—each with its own domain, database, resources, and integrations.",

	categories: [
		"Platform as a Service",
		"DevTools",
		"SaaS Builder",
		"Multi-Tenant",
	],
	tags: [
		"multi-tenant",
		"platform builder",
		"white-label",
		"directus",
		"next.js",
		"cloud run",
		"saas-in-a-box",
	],

	technologies: {
		frontend: [
			"Next.js 15",
			"TypeScript (strict)",
			"Tailwind CSS",
			"Tremor UI",
			"React Query",
			"Zod",
		],
		backend: [
			"Node.js",
			"Google APIs",
			"Directus",
			"Hono",
			"Drizzle ORM",
			"tRPC",
		],
		database: ["PostgreSQL (Cloud SQL / Neon)", "Redis (Google Memorystore)"],
		devops: [
			"Google Cloud Run",
			"Cloud Load Balancer",
			"Cloudflare",
			"Docker",
			"GitHub Actions",
			"Firebase Hosting",
		],
		collaboration_tool: ["Figma", "Notion", "Linear", "Slack"],
	},

	roles: ["Fullstack Developer", "Product Architect", "DevOps Engineer"],
	start_date: "2024-01-01",
	end_date: undefined, // ongoing
	team_size: 1,
	team_compositions: [{ role: "Founder / Fullstack Engineer", count: 1 }],

	demo_link: "https://studio.mica.app",
	repo_link: undefined, // private

	screenshots: [
		{
			src: "https://images.unsplash.com/photo-1726065235239-b20b88d43eea?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

			alt: "Mica Studio deployment dashboard",
			caption: "Your app studio with real-time deployment and platform control",
			tags: ["dashboard", "platform"],
		},
		{
			src: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

			alt: "List of deployed platforms",
			caption:
				"Manage multiple white-label platforms with different templates and domains",
			tags: ["multi-tenant", "management"],
		},
		{
			src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

			alt: "Template selection screen",
			caption:
				"Choose from a library of base apps like LMS, POS, HRIS, and more",
			tags: ["template", "apps"],
		},
	],

	videos: [
		{
			src: "https://www.youtube.com/watch?v=micastudio-intro", // placeholder
			type: "youtube",
			caption:
				"Introduction to Mica Studio: Deploy Modular SaaS Apps in Minutes",
			tags: ["demo", "studio", "overview"],
		},
	],

	testimonials: [
		{
			quote:
				"Mica Studio helped us deploy a custom HRIS for a local cooperative in just days. It's like Vercel for SaaS platforms.",
			author: "Rifqi Maulana",
			role: "CTO, Koperasi Adhi Sejahtera",
		},
		{
			quote:
				"We launched our branded stunting intervention platform using Mica Studio. The tenant separation and custom domains are game-changers.",
			author: "Yuni Rahmadina",
			role: "Program Manager, HealthGov ID",
		},
	],

	features: [
		{
			title: "Self-Service SaaS Deployment",
			description:
				"Users can deploy new white-label platforms with a few clicks and fill custom build variables.",
			icon: "Rocket",
		},
		{
			title: "Modular App Templates",
			description:
				"Choose from app templates like LMS, POS, HRIS, Stunting Tracker, and more.",
			icon: "LayoutTemplate",
		},
		{
			title: "Dedicated Runtime Per Tenant",
			description:
				"Each tenant has isolated Cloud Run services, databases, and storage.",
			icon: "ServerCog",
		},
		{
			title: "Custom Domains & Branding",
			description:
				"Supports tenant-level domain mapping, favicons, and theme configuration.",
			icon: "Globe",
		},
		{
			title: "Integrated Analytics & Monitoring",
			description:
				"Track platform status, health, and user metrics from a central dashboard.",
			icon: "BarChart4",
		},
		{
			title: "Billing & Subscription Management",
			description:
				"Built-in support for invoice tracking and usage-based subscription plans.",
			icon: "ReceiptText",
		},
	],

	usecases: [
		{
			title: "Digital Agencies Delivering SaaS Products",
			description:
				"Use Mica Studio to deploy client-specific versions of similar SaaS products.",
		},
		{
			title: "Government Health Interventions",
			description:
				"Roll out province-wide platforms like stunting management with custom metrics per region.",
		},
		{
			title: "Education Institutions Launching LMS",
			description:
				"Deploy LMS with campus branding and academic modules under one click.",
		},
	],

	challenges: [
		{
			title: "Dynamic Environment Configuration",
			description:
				"Built deployment scripts that inject environment variables and database settings per tenant.",
		},
		{
			title: "Infrastructure Cost Efficiency",
			description:
				"Balanced between fully isolated deployments and shared services using Cloud Run concurrency and Redis.",
		},
		{
			title: "Template Customization System",
			description:
				"Developed a templating engine that supports base apps with dynamic overrides.",
		},
	],

	company: {
		name: "Mica Studio",
		url: "https://mica.app",
		logo: "/logos/mica.svg",
		description:
			"An infrastructure layer for launching customizable SaaS platforms at scale.",
	},

	clients: [
		{
			name: "HealthGov ID",
			description:
				"National digital health program for regional stunting management",
		},
		{
			name: "Fatayat NU",
			description: "Women empowerment NGO using LMS and community app template",
		},
		{
			name: "Koperasi Adhi Sejahtera",
			description: "Multi-service cooperative running a HRIS and PPOB platform",
		},
		{
			name: "Clickpronafa",
			description: "Ecosystem platform for digital economy in Central Java",
		},
	],

	overview:
		"Mica Studio is the control panel for deploying and scaling white-label SaaS platforms. With built-in templates, custom domain support, tenant isolation, and monitoring, it reduces the time to market for launching apps from weeks to minutes. Ideal for agencies, government programs, and productized service providers.",

	recognitions: [
		{
			title: "Top 10 Developer Tools in SEA 2025",
			description:
				"Selected by StartupDev Asia as one of the most promising B2B DevTools in Southeast Asia.",
			date: "2025-04-01",
			issuer: "StartupDev Asia",
		},
	],
};
