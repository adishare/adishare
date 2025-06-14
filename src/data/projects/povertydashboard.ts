export const povertydashboard = {
	id: 6,
	slug: "depok-poverty-dashboard-006",
	icon_name: "Map",
	title: "Dashboard Sebaran Kemiskinan Kota Depok",
	tagline:
		"Spatial Poverty Mapping & Monitoring Dashboard for Local Government Use",
	description:
		"A GIS-powered data visualization dashboard designed for the City Government of Depok to track, analyze, and act on poverty indicators at the kelurahan (village) and kecamatan (district) level. The platform integrates survey data, social assistance programs, and demographic layers to inform policy decisions and program targeting.",

	categories: ["GIS", "Open Government", "Data Visualization", "Public Sector"],
	tags: [
		"poverty dashboard",
		"spatial data",
		"GIS",
		"municipal system",
		"kelurahan",
		"data-driven policy",
	],

	technologies: {
		frontend: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Mapbox GL",
			"React Query",
		],
		backend: ["Hono", "tRPC", "Zod", "Node.js"],
		database: ["PostgreSQL (PostGIS)", "Drizzle ORM"],
		devops: ["Cloud Run", "Cloudflare", "Firebase Hosting", "Github Actions"],
		collaboration_tool: ["Notion", "Figma", "Slack"],
	},

	roles: ["Frontend Developer", "GIS Developer", "Fullstack Developer"],
	start_date: "2024-03-01",
	end_date: "2024-06-15",
	team_size: 4,
	team_compositions: [
		{ role: "Frontend Developer", count: 1 },
		{ role: "GIS Specialist", count: 1 },
		{ role: "Backend Engineer", count: 1 },
		{ role: "Project Manager", count: 1 },
	],

	demo_link: "https://dashboard-sebaran-kemiskinan.depok.go.id", // placeholder
	repo_link: undefined, // government/internal

	screenshots: [
		{
			src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

			alt: "Map view of poverty distribution",
			caption: "Interactive map showing real-time poverty data by district",
			tags: ["map", "poverty", "data"],
		},
		{
			src: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

			alt: "Poverty indicators chart view",
			caption: "Dashboard showing key poverty indicators and trends",
			tags: ["indicators", "analytics"],
		},
	],

	videos: [
		{
			src: "https://www.youtube.com/watch?v=depokdashboard", // placeholder
			type: "youtube",
			caption: "Overview Video of Depok Poverty Dashboard",
			tags: ["demo", "overview"],
		},
	],

	testimonials: [
		{
			quote:
				"This dashboard is a leap forward in how we understand and respond to poverty in Depok. It lets us prioritize with precision.",
			author: "Dr. Ir. Nurlaila, M.Si",
			role: "Kepala Bappeda Kota Depok",
		},
	],

	features: [
		{
			title: "Real-time Map Visualization",
			description:
				"View poverty heatmaps by district and neighborhood based on the latest data.",
			icon: "MapPin",
		},
		{
			title: "Integrated Social Program Data",
			description:
				"Links DTKS and local assistance recipients to spatial data.",
			icon: "Database",
		},
		{
			title: "Poverty Trend Analysis",
			description:
				"Interactive charts and dashboards showing changes over time.",
			icon: "LineChart",
		},
		{
			title: "Mobile-Friendly Public View",
			description: "Responsive and simplified public access for transparency.",
			icon: "Smartphone",
		},
	],

	usecases: [
		{
			title: "Policy Prioritization",
			description:
				"Helps local officials identify poverty hotspots and allocate budget.",
		},
		{
			title: "Public Communication",
			description:
				"Increases transparency of government programs through public dashboards.",
		},
		{
			title: "Program Evaluation",
			description:
				"Compare impact of social assistance across regions over time.",
		},
	],

	challenges: [
		{
			title: "Data Standardization from Multiple Sources",
			description:
				"Merged DTKS, village survey, and programmatic data into a single schema.",
		},
		{
			title: "Spatial Query Optimization",
			description:
				"Used PostGIS spatial indexing and tile-based rendering to ensure performance.",
		},
		{
			title: "Balance Between Public and Admin Views",
			description:
				"Designed two-tiered access control for internal insights vs public transparency.",
		},
	],

	company: {
		name: "MICA Studio",
		url: "https://mica.app",
		logo: "/logos/mica.svg",
		description:
			"We empower governments and enterprises with spatial, data-driven platforms.",
	},

	clients: [
		{
			name: "Pemerintah Kota Depok",
			logo: "/clients/depok.png",
			description:
				"Local government leveraging GIS to fight poverty through data.",
		},
	],

	overview:
		"Dashboard Sebaran Kemiskinan is a spatial analysis tool that aids in targeting and monitoring poverty-related programs in Kota Depok. It brings together multiple datasets into a visual, interactive interface usable by policymakers, field officers, and the public. The tool is optimized for decision support and cross-agency collaboration.",

	recognitions: [
		{
			title: "Best Practice Innovation for Regional Poverty Data 2024",
			description:
				"Recognized at Rakorbang Regional West Java 2024 for enabling transparent and actionable poverty tracking.",
			date: "2024-06-10",
			issuer: "Bappeda Jawa Barat",
		},
	],
};
