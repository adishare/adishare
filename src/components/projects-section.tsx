"use client";

import * as LucideIcons from "lucide-react";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

import { AnimatedSection } from "./ui/animated-section";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ProjectsSection() {
	const { elementRef, isIntersecting } = useIntersectionObserver();

	// Get first 3 projects
	const selectedProjects = projects.slice(0, 3);

	// Function to get Lucide icon component
	const getIcon = (iconName: string) => {
		const Icon = (LucideIcons as any)[iconName];
		return Icon ? <Icon className="w-6 h-6" /> : null;
	};

	const CItem = (project: any) => {
		return (
			<div className="group cursor-pointer h-full">
				<div
					className={`bg-muted/50 backdrop-blur-sm rounded-2xl overflow-hidden relative hover:scale-105 transition-transform duration-300 h-full`}
				>
					<img
						src={project.screenshots[0].src}
						alt={project.screenshots[0].alt}
						className="mx-auto h-full w-full object-cover rounded-xl shadow-lg hover:scale-150 transition-transform duration-300"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
					<div className="absolute bottom-4 left-4 right-4">
						<p className="text-white text-sm font-medium">
							{project.screenshots[0].caption}
						</p>
					</div>
				</div>
			</div>
		);
	};

	return (
		<AnimatedSection
			id="projects"
			className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
		>
			<div
				ref={elementRef}
				className={`transition-all duration-800 ease-out ${
					isIntersecting
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-8"
				}`}
			>
				<div className="flex items-center mb-6">
					<span className="text-accent text-sm font-medium tracking-wider">
						✦ MY WORK
					</span>
				</div>
				<div className="flex justify-between items-end mb-16">
					<div>
						<h2 className="font-clash text-4xl md:text-5xl font-medium mb-6">
							Selected Projects
						</h2>
						<p className="text-muted-foreground max-w-2xl">
							Here's a curated selection showcasing my expertise and the
							achieved results.
						</p>
					</div>
					<Link href="/projects">
						<Button
							variant="outline"
							className="px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
						>
							View All
						</Button>
					</Link>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{selectedProjects.map((project, index) => (
						<div key={project.id} className="group">
							<Carousel
								orientation={index === 1 ? "vertical" : "horizontal"}
								opts={{
									align: "center",
									loop: true,
									containScroll: "trimSnaps",
								}}
								plugins={[
									Autoplay({
										delay: 2000 + index * 500,
									}),
								]}
							>
								<CarouselContent
									className={index === 1 ? "flex-col h-[420px]" : "-ml-3"}
								>
									{project.screenshots.map((screenshot, idx) => (
										<CarouselItem
											key={idx}
											className={`basis-full h-[400px] ${
												index === 1 ? "" : "pl-3"
											}`}
										>
											<CItem {...project} />
										</CarouselItem>
									))}
								</CarouselContent>
							</Carousel>
							<div className="flex justify-between items-end mt-4">
								<div>
									<h3 className="text-xl font-medium font-clash mb-1">
										{project.title}
									</h3>
									<p className="text-muted-foreground">
										{project.categories[0]}
									</p>
								</div>
								<span className="text-muted-foreground">
									{new Date(project.start_date).getFullYear()}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</AnimatedSection>
	);
}
