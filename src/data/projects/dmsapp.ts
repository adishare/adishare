export const dmsapp = {
	id: 3,
	slug: "stunting-risk-survey-app-003",
	icon_name: "Smartphone",
	title: "Stunting Risk Survey App",
	tagline:
		"Mobile App for Field Agents to Collect Household Health Data in Real-Time",
	description:
		"A mobile survey application built for Android and iOS to help health volunteers (kader) and field agents gather household-level data relevant to stunting risk. The app supports offline usage, dynamic forms, photo capture, and GPS tagging. Data syncs to a central dashboard for further risk analysis and policy decisions.",

	categories: [
		"Mobile App",
		"HealthTech",
		"Field Data Collection",
		"Survey Tool",
	],
	tags: [
		"stunting",
		"survey",
		"offline first",
		"react native",
		"form builder",
		"mobile app",
	],

	technologies: {
		frontend: ["React Native", "Expo", "Zustand", "React Hook Form"],
		backend: ["Directus", "REST API", "Cloud Functions"],
		database: ["SQLite (local)", "PostgreSQL (remote)"],
		devops: ["Firebase", "Expo OTA Updates", "Sentry", "Bitrise CI/CD"],
		collaboration_tool: ["Figma", "Notion", "Discord"],
	},

	roles: ["Mobile Developer", "Fullstack Developer", "UX Researcher"],
	start_date: "2024-11-01",
	end_date: "2025-02-10",
	team_size: 5,
	team_compositions: [
		{ role: "Mobile Developer", count: 2 },
		{ role: "Backend Engineer", count: 1 },
		{ role: "UX Researcher", count: 1 },
		{ role: "Project Lead", count: 1 },
	],

	demo_link: undefined, // private field tool
	repo_link: "https://github.com/micastudio/stunting-survey-app", // private or internal

	screenshots: [
		{
			src: "https://plus.unsplash.com/premium_photo-1721955487745-a2c3aea86d1c?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Survey home screen showing available tasks",
			caption: "Kader Dashboard for Assigned Surveys",
			tags: ["home", "survey list"],
		},
		{
			src: "https://images.unsplash.com/photo-1554260570-47e791ab2fc7?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Survey form UI",
			caption: "Dynamic Survey Form with Conditional Logic",
			tags: ["form", "survey", "input"],
		},
		{
			src: "https://images.unsplash.com/photo-1560461396-ec0ef7bb29dd?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Sync and offline indicator",
			caption: "Offline Mode with Smart Data Sync",
			tags: ["offline", "sync"],
		},
	],

	videos: [
		{
			src: "https://vimeo.com/micastudio/stunting-survey-demo",
			type: "vimeo",
			caption: "Field Data Collection Demo by Kader in Boyolali",
			tags: ["field use", "demo"],
		},
	],

	testimonials: [
		{
			quote:
				"I can now easily submit household surveys even in remote areas with no signal. Syncing works flawlessly once I'm back online.",
			author: "Siti Aminah",
			role: "Health Volunteer (Kader)",
		},
		{
			quote:
				"Before this app, our paper-based system delayed stunting reporting by weeks. Now we see results daily.",
			author: "Dr. Rizky Hartono",
			role: "District Health Officer",
		},
	],

	features: [
		{
			title: "Offline Survey Capability",
			description:
				"Allows data collection without internet, syncing automatically once reconnected.",
			icon: "WifiOff",
		},
		{
			title: "GPS and Timestamp Logging",
			description:
				"Captures location and time of each household visit to ensure authenticity.",
			icon: "MapPin",
		},
		{
			title: "Multilingual Dynamic Forms",
			description:
				"Supports localized questions with skip logic based on answers.",
			icon: "Languages",
		},
		{
			title: "Household Member Profiles",
			description:
				"Allows registering multiple individuals per household and linking survey data to each.",
			icon: "Users",
		},
		{
			title: "Photo Evidence Capture",
			description:
				"Capture environmental context such as food storage or water sources during survey.",
			icon: "Camera",
		},
	],

	usecases: [
		{
			title: "Weekly Household Health Survey",
			description:
				"Kader visits homes to record children’s height, weight, and parental habits.",
		},
		{
			title: "Post-Intervention Follow-Up",
			description:
				"Track improvement after government nutrition interventions by re-surveying same families.",
		},
	],

	challenges: [
		{
			title: "Field Connectivity Constraints",
			description:
				"Ensuring survey data doesn’t get lost in low or no connectivity areas.",
		},
		{
			title: "User Onboarding and Digital Literacy",
			description:
				"Training non-technical users (volunteers) to use a digital tool for the first time.",
		},
		{
			title: "Data Conflict Resolution",
			description:
				"Handling edge cases where a survey is modified offline and synced with potential overwrites.",
		},
	],

	company: {
		name: "MICA Studio",
		url: "https://mica.app",
		logo: "/logos/mica.svg",
		description:
			"Specializing in digital tools for health and public sector transformation.",
	},

	clients: [
		{
			name: "BKKBN Boyolali",
			logo: "/clients/bkkbn-logo.png",
			description:
				"Official pilot project partner for Boyolali stunting initiative.",
		},
	],

	overview:
		"This app is part of a larger ecosystem to address stunting in Indonesia. It complements the Stunting Risk Management dashboard by feeding in real-time household-level data from the field. With offline-first support and intuitive UX, it bridges the digital gap for thousands of community volunteers. Feedback loops from this app inform district-level decisions with unprecedented speed and precision.",

	recognitions: [
		{
			title: "Field Innovation Grant Winner 2025",
			description:
				"Awarded for its impact on improving data reliability and turnaround in rural health assessments.",
			date: "2025-03-20",
			issuer: "Indonesia Health Innovation Network",
		},
	],
};
