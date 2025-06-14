"use client";

import * as LucideIcons from "lucide-react";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useState } from "react";

export default function Projects() {
	const { elementRef: heroRef, isIntersecting: heroVisible } =
		useIntersectionObserver();
	const { elementRef: projectsRef, isIntersecting: projectsVisible } =
		useIntersectionObserver();

	const [activeFilter, setActiveFilter] = useState("All");

	// Get unique roles from projects
	const roles = [
		"All",
		...new Set(projects.flatMap((project) => project.roles)),
	];

	const filteredProjects =
		activeFilter === "All"
			? projects
			: projects.filter((project) => project.roles.includes(activeFilter));

	// Function to get Lucide icon component
	const getIcon = (iconName: string) => {
		const Icon = (LucideIcons as any)[iconName];
		return Icon ? <Icon className="w-6 h-6 text-white" /> : null;
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
					<div className="flex items-center mb-6">
						<span className="text-accent text-sm font-medium tracking-wider">
							✦ MY WORK
						</span>
					</div>
					<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
						<h1 className="font-clash text-4xl md:text-6xl lg:text-7xl font-medium leading-tight max-w-4xl">
							Creating next level digital products
						</h1>
					</div>
					{/* Filter Buttons */}
					<div className="flex flex-wrap gap-2  backdrop-blur-sm rounded-2xl p-2 ">
						{roles.map((role) => (
							<button
								type="button"
								key={role}
								onClick={() => setActiveFilter(role)}
								className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-background/50 ${
									activeFilter === role
										? "bg-background text-foreground shadow-sm border border-border/50"
										: "text-muted-foreground hover:text-foreground hover:bg-background/50"
								}`}
							>
								{role}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Projects Grid */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
				<div
					ref={projectsRef}
					className={`transition-all duration-800 ease-out ${
						projectsVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
						{filteredProjects.map((project, index) => (
							<Link key={project.id} href={`/projects/${project.slug}`}>
								<div className="group cursor-pointer">
									<div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden relative hover:scale-105 transition-transform duration-300">
										{/* Project Header */}
										<div className="absolute top-0 left-0 right-0 z-10 p-3 bg-gradient-to-b from-black/80 to-transparent">
											<div className="flex items-center justify-between">
												<div className="flex  gap-3">
													<div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
														{getIcon(project.icon_name)}
													</div>
													<div>
														<h3 className="text-clash font-medium text-white mb-1 flex">
															{project.title}
														</h3>
														<div className="flex flex-wrap gap-2">
															{project.roles.map((role, idx) => (
																<span
																	key={idx}
																	className="bg-white/10 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-xs font-medium"
																>
																	{role}
																</span>
															))}
														</div>
													</div>
												</div>
											</div>
										</div>

										{/* Carousel */}
										<Carousel
											// orientation={index % 2 === 0 ? "vertical" : "horizontal"}
											opts={{
												align: "center",
												loop: true,
											}}
											plugins={[
												Autoplay({
													delay: 1000 + index * 500,
												}),
											]}
										>
											<CarouselContent>
												{project.screenshots.map((screenshot, idx) => (
													<CarouselItem key={idx}>
														<div className="relative aspect-[4/3]">
															<img
																src={screenshot.src}
																alt={screenshot.alt}
																className="w-full h-full object-cover"
															/>
															<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

															{/* Tags Overlay */}
															<div className="absolute bottom-4 left-4 right-4">
																<p className="text-white text-sm font-medium mt-2">
																	{screenshot.caption}
																</p>
															</div>
														</div>
													</CarouselItem>
												))}
											</CarouselContent>
										</Carousel>
									</div>

									<div className="flex justify-between p-2 my-2">
										<div className="flex items-center gap-3">
											<div>
												<div className="flex flex-wrap gap-2 font-clash">
													{project.tagline}
												</div>
											</div>
										</div>
										<span className=" text-sm">
											{new Date(project.start_date).getFullYear()}
										</span>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
