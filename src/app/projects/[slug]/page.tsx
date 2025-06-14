"use client";

import * as LucideIcons from "lucide-react";

import { notFound, useParams } from "next/navigation";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ProjectPage({ params }: { params: { slug: string } }) {
	const { elementRef: heroRef, isIntersecting: heroVisible } =
		useIntersectionObserver();
	const { elementRef: contentRef, isIntersecting: contentVisible } =
		useIntersectionObserver();
	const { elementRef: screenshotsRef, isIntersecting: screenshotsVisible } =
		useIntersectionObserver();

	const { slug } = useParams();

	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		notFound();
	}

	// Function to get Lucide icon component
	const getIcon = (iconName: string) => {
		const Icon = (LucideIcons as any)[iconName];
		return Icon ? <Icon className="w-6 h-6" /> : null;
	};

	return (
		<div className="min-h-screen">
			{/* Back Button */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 ">
				<Link
					href="/projects"
					className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
				>
					<ArrowLeft className="w-4 h-4" />
					<span>Back to Projects</span>
				</Link>
			</div>

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
					<div className="flex items-center gap-3 mb-6">
						<div className="bg-accent/10 p-2 rounded-lg">
							{getIcon(project.icon_name)}
						</div>
						<span className="text-accent text-sm font-medium tracking-wider">
							✦ {project.categories[0]}
						</span>
					</div>

					<div className="">
						<h1 className="font-clash text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
							{project.title}
						</h1>
						<p className="text-xl text-muted-foreground mb-8">
							{project.tagline}
						</p>

						<div className="flex flex-wrap gap-2 mb-8">
							{project.roles.map((role, idx) => (
								<span
									key={idx}
									className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
								>
									{role}
								</span>
							))}
						</div>

						<div className="flex items-center gap-4 text-sm text-muted-foreground">
							<span>{new Date(project.start_date).getFullYear()}</span>
							<span>•</span>
							<span>{project.team_size} team members</span>
						</div>
					</div>
				</div>
			</section>

			{/* Content Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
				<div
					ref={contentRef}
					className={`transition-all duration-800 ease-out ${
						contentVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<div className="grid lg:grid-cols-3 gap-12">
						{/* Main Content */}
						<div className="lg:col-span-2 space-y-12">
							{/* Overview */}
							<div>
								<h2 className="text-2xl font-semibold mb-4">Overview</h2>
								<p className="text-muted-foreground leading-relaxed">
									{project.overview}
								</p>
							</div>

							{/* Features */}
							<div>
								<h2 className="text-2xl font-semibold mb-6">Key Features</h2>
								<div className="grid sm:grid-cols-2 gap-6">
									{project.features.map((feature, idx) => (
										<div
											key={idx}
											className="bg-muted/50 rounded-xl p-6 border border-border/50"
										>
											<div className="flex items-center gap-3 mb-3">
												{getIcon(feature.icon)}
												<h3 className="font-medium">{feature.title}</h3>
											</div>
											<p className="text-sm text-muted-foreground">
												{feature.description}
											</p>
										</div>
									))}
								</div>
							</div>

							{/* Challenges */}
							<div>
								<h2 className="text-2xl font-semibold mb-6">
									Challenges & Solutions
								</h2>
								<div className="space-y-4">
									{project.challenges.map((challenge, idx) => (
										<div
											key={idx}
											className="bg-muted/50 rounded-xl p-6 border border-border/50"
										>
											<h3 className="font-medium mb-2">{challenge.title}</h3>
											<p className="text-sm text-muted-foreground">
												{challenge.description}
											</p>
										</div>
									))}
								</div>
							</div>

							{/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
							<div
								ref={screenshotsRef}
								className={`transition-all duration-800 ease-out ${
									screenshotsVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-8"
								}`}
							>
								<h2 className="text-2xl font-semibold mb-8">Screenshots</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
									{project.screenshots.map((screenshot, idx) => (
										<div key={idx} className="group relative">
											<div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
												<img
													src={screenshot.src}
													alt={screenshot.alt}
													className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
												<div className="absolute bottom-4 left-4 right-4">
													<p className="text-white text-sm font-medium">
														{screenshot.caption}
													</p>
													{screenshot.tags && (
														<div className="flex flex-wrap gap-2 mt-2">
															{screenshot.tags.map((tag, tagIdx) => (
																<span
																	key={tagIdx}
																	className="bg-white/10 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-xs"
																>
																	{tag}
																</span>
															))}
														</div>
													)}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
							{/* </section> */}
						</div>

						{/* Sidebar */}
						<div className="space-y-8">
							{/* Technologies */}
							<div>
								<h2 className="text-xl font-semibold mb-4">Technologies</h2>
								<div className="space-y-4">
									{Object.entries(project.technologies).map(
										([category, techs]) => (
											<div key={category}>
												<h3 className="text-sm font-medium text-muted-foreground mb-2 capitalize">
													{category.replace("_", " ")}
												</h3>
												<div className="flex flex-wrap gap-2">
													{techs.map((tech, idx) => (
														<span
															key={idx}
															className="bg-muted px-3 py-1 rounded-full text-xs"
														>
															{tech}
														</span>
													))}
												</div>
											</div>
										),
									)}
								</div>
							</div>

							{/* Team */}
							<div>
								<h2 className="text-xl font-semibold mb-4">Team Composition</h2>
								<div className="space-y-3">
									{project.team_compositions.map((member, idx) => (
										<div
											key={idx}
											className="flex justify-between items-center text-sm"
										>
											<span className="text-muted-foreground">
												{member.role}
											</span>
											<span className="font-medium">{member.count}</span>
										</div>
									))}
								</div>
							</div>

							{/* Links */}
							<div>
								<h2 className="text-xl font-semibold mb-4">Links</h2>
								<div className="space-y-3">
									{project.demo_link && (
										<a
											href={project.demo_link}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
										>
											<span>Live Demo</span>
										</a>
									)}
									{project.repo_link && (
										<a
											href={project.repo_link}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
										>
											<span>Source Code</span>
										</a>
									)}
								</div>
							</div>

							{/* Company */}
							<div>
								<h2 className="text-xl font-semibold mb-4">Company</h2>
								<div className="space-y-2">
									<h3 className="font-medium">{project.company.name}</h3>
									<p className="text-sm text-muted-foreground">
										{project.company.description}
									</p>
									<a
										href={project.company.url}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-accent hover:underline"
									>
										Visit Website
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Screenshots Section */}
			</section>
		</div>
	);
}
