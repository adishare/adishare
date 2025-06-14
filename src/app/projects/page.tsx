"use client";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useState } from "react";

export default function Projects() {
	const { elementRef: heroRef, isIntersecting: heroVisible } =
		useIntersectionObserver();
	const { elementRef: projectsRef, isIntersecting: projectsVisible } =
		useIntersectionObserver();
	const { elementRef: ctaRef, isIntersecting: ctaVisible } =
		useIntersectionObserver();

	const [activeFilter, setActiveFilter] = useState("All");

	const projects = [
		{
			id: "aora",
			title: "Aora",
			category: "Development",
			year: "2024",
			bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
			image:
				"https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
			tags: ["Development"],
		},
		{
			id: "code-screenshot",
			title: "Code Screenshot",
			category: "Development & Design",
			year: "2024",
			bgColor: "bg-pink-100 dark:bg-pink-900/20",
			image:
				"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
			tags: ["Development", "Design"],
		},
		{
			id: "girlscript-goa",
			title: "GirlScript Goa",
			category: "Development & Design",
			year: "2021",
			bgColor: "bg-blue-100 dark:bg-blue-900/20",
			image:
				"https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
			tags: ["Development", "Design"],
		},
		{
			id: "indicov",
			title: "IndiCov",
			category: "Development & Design",
			year: "2021",
			bgColor: "bg-purple-100 dark:bg-purple-900/20",
			image:
				"https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
			tags: ["Development", "Design"],
		},
		{
			id: "instagram-redesign",
			title: "Instagram Redesign",
			category: "Design",
			year: "2021",
			bgColor: "bg-gray-900",
			image:
				"https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
			tags: ["Design"],
		},
		{
			id: "ontrack",
			title: "OnTrack",
			category: "Development & Design",
			year: "2020",
			bgColor: "bg-indigo-100 dark:bg-indigo-900/20",
			image:
				"https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
			tags: ["Development", "Design"],
		},
	];

	const filters = ["All", "Development", "Design"];

	const filteredProjects =
		activeFilter === "All"
			? projects
			: projects.filter((project) => project.tags.includes(activeFilter));

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
					<h1 className="font-clash text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8 max-w-4xl">
						Creating next level digital products
					</h1>

					{/* Filter Buttons */}
					<div className="flex justify-end mb-16">
						<div className="flex bg-muted rounded-full p-1">
							{filters.map((filter) => (
								<button
									type="button"
									key={filter}
									onClick={() => setActiveFilter(filter)}
									className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
										activeFilter === filter
											? "bg-background text-foreground shadow-sm"
											: "text-muted-foreground hover:text-foreground"
									}`}
								>
									{filter}
								</button>
							))}
						</div>
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
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{filteredProjects.map((project, index) => (
							<Link key={index} href={`/projects/${project.id}`}>
								<div className="group cursor-pointer">
									<div
										className={`${project.bgColor} rounded-2xl p-8 mb-6 overflow-hidden relative hover:scale-105 transition-transform duration-300`}
									>
										<img
											src={project.image}
											alt={`${project.title} project showcase`}
											className="mx-auto h-96 w-full object-cover rounded-xl shadow-2xl"
										/>
									</div>
									<div className="flex justify-between items-end">
										<div>
											<h3 className="text-2xl font-semibold mb-1">
												{project.title}
											</h3>
											<p className="text-muted-foreground">
												{project.category}
											</p>
										</div>
										<span className="text-muted-foreground">
											{project.year}
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
