export const cazboxapp = {
	id: 5,
	slug: "cazbox-superapp-005",
	icon_name: "AppWindow",
	title: "Cazbox.id",
	tagline:
		"White-Label Community SuperApp with PPOB, Digital Wallets, Forums & Commerce",
	description:
		"Cazbox.id is a customizable, white-label SuperApp for community-based organizations. It combines essential digital services such as PPOB, internal loans, digital wallets, e-commerce, and community forums into a single mobile and web-based platform. Designed as a SaaS offering, each client receives a branded deployment with role-based modules tailored to their needs.",

	categories: ["SaaS", "Fintech", "SuperApp", "Community Platform"],
	tags: [
		"superapp",
		"whitelabel",
		"wallet",
		"ppob",
		"koperasi",
		"community commerce",
		"forum",
		"digital finance",
	],

	technologies: {
		frontend: [
			"Next.js",
			"React Native",
			"TypeScript",
			"Tailwind CSS",
			"TanStack Query",
		],
		backend: ["Directus", "Node.js", "tRPC", "Cloud Functions"],
		database: ["PostgreSQL", "Redis", "Cloud SQL"],
		devops: ["Cloud Run", "Firebase", "Docker", "Cloudflare", "Github Actions"],
		collaboration_tool: ["Figma", "Notion", "Slack", "Jira"],
	},

	roles: ["Fullstack Developer", "Mobile Developer", "Backend Engineer"],
	start_date: "2023-03-01",
	end_date: undefined, // ongoing project
	team_size: 8,
	team_compositions: [
		{ role: "Fullstack Developer", count: 3 },
		{ role: "Mobile Developer", count: 2 },
		{ role: "DevOps Engineer", count: 1 },
		{ role: "Product Manager", count: 1 },
		{ role: "UI/UX Designer", count: 1 },
	],

	demo_link: "https://cazbox.id",
	repo_link: undefined, // private

	screenshots: [
		{
			src: "https://images.unsplash.com/photo-1726065235239-b20b88d43eea?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Cazbox home screen UI",
			caption: "Branded Community Dashboard with Quick Access Services",
			tags: ["home", "dashboard"],
		},
		{
			src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Digital wallet screen",
			caption: "Saldo Digital & Transaction History View",
			tags: ["wallet", "saldo"],
		},
		{
			src: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Minicommerce marketplace",
			caption: "Integrated Marketplace for Local Sellers",
			tags: ["commerce", "marketplace"],
		},
	],

	videos: [
		{
			src: "https://vimeo.com/cazbox/demo", // placeholder
			type: "vimeo",
			caption: "Cazbox SuperApp Overview for Community Clients",
			tags: ["overview", "features"],
		},
	],

	testimonials: [
		{
			quote:
				"Cazbox has empowered our members with access to digital wallets and mini-commerce, all in a single branded app.",
			author: "Sulastri Widodo",
			role: "Chairwoman, Fatayat NU",
		},
		{
			quote:
				"We were looking for a modular superapp that could serve financial and social needs—Cazbox delivered both.",
			author: "Randy Ahmad",
			role: "CEO, Klik Pronafa",
		},
	],

	features: [
		{
			title: "PPOB Integration",
			description:
				"Enable users to pay for electricity, water, BPJS, and more directly from the app.",
			icon: "CreditCard",
		},
		{
			title: "Internal Loan Management",
			description:
				"Facilitate cooperative-style lending and repayment workflows between members.",
			icon: "HandCoins",
		},
		{
			title: "Saldo Digital & Wallet",
			description:
				"Multi-wallet system with top-up, withdraw, and transfer features.",
			icon: "Wallet",
		},
		{
			title: "MiniCommerce",
			description:
				"Community marketplace for local sellers with order and stock management.",
			icon: "ShoppingCart",
		},
		{
			title: "Community Forum",
			description:
				"User-driven discussions, announcements, and polls for internal engagement.",
			icon: "MessagesSquare",
		},
		{
			title: "Modular Tenant Branding",
			description:
				"Every deployment supports unique themes, domains, and content settings.",
			icon: "PaintBucket",
		},
	],

	usecases: [
		{
			title: "Digital Cooperative for Small Communities",
			description:
				"Empower member-based organizations with loans, savings, and e-commerce.",
		},
		{
			title: "Private SuperApp for Universities",
			description:
				"Universities offer PPOB, digital wallets, and announcements to students under a unified platform.",
		},
		{
			title: "Grassroots Community Engagement",
			description:
				"Enable neighborhood-scale financial literacy and engagement using wallet and forums.",
		},
	],

	challenges: [
		{
			title: "Modular Service Orchestration",
			description:
				"Built dynamic module toggles and per-tenant feature flags to reduce technical debt.",
		},
		{
			title: "Compliance with Digital Wallet & Financial Regulations",
			description:
				"Ensured integrations with third-party payment and wallet providers comply with Indonesian standards.",
		},
		{
			title: "Scalable Deployment for Dozens of Tenants",
			description:
				"Automated tenant provisioning and branding to deploy new apps under 5 minutes.",
		},
	],

	company: {
		name: "MICA Studio",
		url: "https://mica.app",
		logo: "/logos/mica.svg",
		description:
			"We build modular SaaS platforms tailored to communities, cooperatives, and SMEs across Southeast Asia.",
	},

	clients: [
		{
			name: "PT. Metranet",
			logo: "/clients/metranet.png",
			description: "Enterprise digital solutions provider under Telkom Group",
		},
		{
			name: "Klik Pronafa",
			logo: "/clients/klik-pronafa.png",
			description: "Social commerce and cooperative ecosystem in Central Java",
		},
		{
			name: "Wiranesia",
			logo: "/clients/wiranesia.png",
			description:
				"Entrepreneurial community using Cazbox to power their internal digital economy",
		},
		{
			name: "RORI",
			logo: "/clients/rori.png",
			description: "Rukun Warga digitalization movement",
		},
		{
			name: "PT. MEI",
			logo: "/clients/mei.png",
			description: "Micro-enterprise enabler for rural Indonesia",
		},
		{
			name: "IT Telkom Surabaya",
			logo: "/clients/ittelkom.png",
			description: "Campus community platform with PPOB and forum integration",
		},
		{
			name: "Koperasi Jasa Adhi Sejahtera",
			logo: "/clients/kjas.png",
			description:
				"Multi-service cooperative managing internal loans and sales",
		},
		{
			name: "Fatayat NU",
			logo: "/clients/fatayat-nu.png",
			description: "Nationwide women’s movement under Nahdlatul Ulama",
		},
	],

	overview:
		"Cazbox.id is a multi-service superapp designed for grassroots communities, cooperatives, and institutional networks. Delivered as a SaaS, it offers wallet services, digital transactions, commerce, and engagement tools under a flexible, white-label system. Each deployment can serve a unique identity and purpose—empowering digital financial inclusion at scale.",

	recognitions: [
		{
			title: "Community SuperApp Innovation Grant",
			description:
				"Recognized for digitalizing over 50,000 cooperative members across Indonesia.",
			date: "2024-10-01",
			issuer: "Indonesian Digital Transformation Fund",
		},
	],
};
