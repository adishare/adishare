"use client";

import { ArrowLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useParams } from "next/navigation";

export default function ProjectDetails() {
	const params = useParams<{ projectId: string }>();
	const projectId = params.projectId;

	const { elementRef: heroRef, isIntersecting: heroVisible } =
		useIntersectionObserver();
	const { elementRef: overviewRef, isIntersecting: overviewVisible } =
		useIntersectionObserver();
	const { elementRef: screensRef, isIntersecting: screensVisible } =
		useIntersectionObserver();
	const { elementRef: techRef, isIntersecting: techVisible } =
		useIntersectionObserver();
	const { elementRef: featuresRef, isIntersecting: featuresVisible } =
		useIntersectionObserver();
	const { elementRef: ctaRef, isIntersecting: ctaVisible } =
		useIntersectionObserver();

	// Mock project data - in a real app this would come from an API or state management
	const project = {
		id: "aora",
		title: "Aora",
		subtitle: "A Video Sharing App",
		year: "2024",
		description:
			"The Video Sharing App is an engaging platform that empowers users to connect through video content. It allows users to seamlessly upload, view, and share videos with others in the app's community, fostering creativity and interaction.",
		roles: "App Developer",
		client: "Personal Project",
		heroImage:
			"https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
		technologies: [
			"React Native",
			"Expo",
			"AppWrite",
			"NativeWind",
			"Animatable",
		],
		techStack: [
			{
				name: "React Native",
				description: "Cross-platform mobile development framework",
			},
			{
				name: "Expo",
				description: "Platform for universal React applications",
			},
			{
				name: "Nativewind",
				description: "Tailwind CSS for React Native",
			},
			{
				name: "Animatable",
				description: "Animation library for smooth interactions",
			},
			{
				name: "Appwrite",
				description: "Backend-as-a-Service platform",
			},
		],
		designScreens: [
			{
				title: "Onboarding",
				image:
					"https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=600",
			},
			{
				title: "Signup",
				image:
					"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=600",
			},
			{
				title: "Login",
				image:
					"https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=600",
			},
		],
		features: [
			{
				title: "Onboarding Screen",
				description:
					"Engaging graphics and clear instructions welcome users to the app.",
			},
			{
				title: "Robust Authentication & Authorization System",
				description: "Secure email login safeguards user accounts.",
			},
			{
				title: "Dynamic Home Screen with Animated Flat List",
				description:
					"Smoothly animated flat list showcases the latest videos for seamless browsing.",
			},
			{
				title: "Pull-to-Refresh Functionality",
				description:
					"Users can refresh content with a simple pull gesture for up-to-date information.",
			},
			{
				title: "Full-Text Search Capability",
				description:
					"Efficiently search through videos with real-time suggestions and instant results.",
			},
			{
				title: "Tab Navigation",
				description:
					"Navigate between sections like Home, Search, and Profile with ease using tab navigation.",
			},
			{
				title: "Post Creation Screen for Uploading Media",
				description:
					"Upload video and image posts directly from the app with integrated media selection.",
			},
			{
				title: "Profile Screen with Detailed Insights",
				description:
					"View account details and activity, including uploaded videos and follower count, for a personalized experience.",
			},
			{
				title: "Responsiveness",
				description:
					"Smooth performance and adaptability across various devices and screen sizes for a consistent user experience.",
			},
			{
				title: "Animations",
				description:
					"Dynamic animations using the Animatable library to enhance user interaction and engagement throughout the app's UI.",
			},
		],
		overview:
			"Built using React Native, this app delivers a fast, responsive, and platform-agnostic experience, making it accessible across Android and iOS devices. By leveraging the power of modern video streaming technologies, the app ensures smooth playback and minimal buffering, even on low-bandwidth networks.",
	};

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
				<div
					ref={heroRef}
					className={`transition-all duration-800 ease-out ${
						heroVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					{/* Back to Projects */}
					<div className="flex items-center justify-between mb-8">
						<Link href="/projects">
							<button
								type="button"
								className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
							>
								<ArrowLeft className="h-4 w-4 mr-2" />
								Back to Projects
							</button>
						</Link>
						<div className="bg-muted px-4 py-2 rounded-lg">
							<span className="text-sm font-medium">{project.year}</span>
						</div>
					</div>

					{/* Hero Image */}
					<div className="bg-gray-900 rounded-2xl p-12 mb-12 relative overflow-hidden">
						<div className="flex items-center justify-between text-white">
							<div>
								<div className="flex items-center mb-4">
									<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-yellow-500 rounded-xl mr-4" />
									<div>
										<h1 className="font-clash text-4xl font-medium">
											{project.title}
										</h1>
										<p className="text-gray-300">{project.subtitle}</p>
									</div>
								</div>
							</div>
							<div className="flex space-x-4">
								<img
									src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=400"
									alt="Aora app screenshot 1"
									className="w-32 h-64 object-cover rounded-xl"
								/>
								<img
									src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=400"
									alt="Aora app screenshot 2"
									className="w-32 h-64 object-cover rounded-xl"
								/>
							</div>
						</div>
					</div>

					{/* Project Info */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
						<div className="md:col-span-2">
							<h2 className="font-clash text-3xl font-medium mb-4">
								{project.title}
							</h2>
							<p className="text-muted-foreground leading-relaxed mb-6">
								{project.description}
							</p>
							<div className="flex flex-wrap gap-2 mb-6">
								{project.technologies.map((tech, index) => (
									<span
										key={index}
										className="bg-muted px-3 py-1 rounded-full text-sm"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
						<div className="space-y-6">
							<Button
								variant="outline"
								className="w-full px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
							>
								Check it out
							</Button>
							<div className="space-y-4">
								<div>
									<div className="font-semibold mb-1">Roles:</div>
									<div className="text-muted-foreground">{project.roles}</div>
								</div>
								<div>
									<div className="font-semibold mb-1">Client:</div>
									<div className="text-muted-foreground">{project.client}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Overview Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div
					ref={overviewRef}
					className={`transition-all duration-800 ease-out ${
						overviewVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<h2 className="font-clash text-3xl font-medium mb-6">Overview</h2>
					<p className="text-muted-foreground leading-relaxed max-w-4xl">
						{project.overview}
					</p>
				</div>
			</section>

			{/* Design Screens Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div
					ref={screensRef}
					className={`transition-all duration-800 ease-out ${
						screensVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<h2 className="font-clash text-3xl font-medium mb-12">
						Design Screens
					</h2>
					<div className="bg-gray-900 rounded-2xl p-12">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
							{project.designScreens.map((screen, index) => (
								<div key={index} className="text-center">
									<h3 className="text-xl font-semibold mb-6">{screen.title}</h3>
									<div className="bg-gray-800 rounded-2xl p-4">
										<img
											src={screen.image}
											alt={`${screen.title} screen`}
											className="w-full h-96 object-cover rounded-xl"
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Tech Stack Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div
					ref={techRef}
					className={`transition-all duration-800 ease-out ${
						techVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<h2 className="font-clash text-3xl font-medium mb-8">Tech Stack</h2>
					<div className="space-y-4">
						{project.techStack.map((tech, index) => (
							<div key={index} className="flex items-center">
								<div className="w-2 h-2 bg-accent rounded-full mr-4" />
								<div>
									<span className="font-semibold">{tech.name}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div
					ref={featuresRef}
					className={`transition-all duration-800 ease-out ${
						featuresVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<h2 className="font-clash text-3xl font-medium mb-8">Features</h2>
					<div className="space-y-6">
						{project.features.map((feature, index) => (
							<div key={index} className="flex items-start">
								<div className="w-2 h-2 bg-accent rounded-full mr-4 mt-2 flex-shrink-0" />
								<div>
									<h3 className="font-semibold mb-2">{feature.title}:</h3>
									<p className="text-muted-foreground leading-relaxed">
										{feature.description}
									</p>
								</div>
							</div>
						))}
					</div>
					<p className="text-muted-foreground mt-8">
						and many more, including code architecture and reusability
					</p>

					{/* Next Project Navigation */}
					<div className="flex justify-end mt-16">
						<Link href="/projects/code-screenshot">
							<button
								type="button"
								className="flex items-center text-muted-foreground hover:text-foreground transition-colors group"
							>
								<div className="text-right mr-4">
									<div className="text-sm text-muted-foreground">Next</div>
									<div className="font-semibold">Code Screenshot</div>
								</div>
								<ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</button>
						</Link>
					</div>
				</div>
			</section>

			{/* CTA Section */}
		</div>
	);
}
