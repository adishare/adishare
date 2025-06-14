import { AnimatedSection } from "./ui/animated-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ProjectsSection() {
	const { elementRef, isIntersecting } = useIntersectionObserver();

	const projects = [
		{
			title: "Aora",
			category: "Development",
			year: "2024",
			bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
			image:
				"https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
		},
		{
			title: "Code Screenshot",
			category: "Development & Design",
			year: "2024",
			bgColor: "bg-pink-100 dark:bg-pink-900/20",
			image:
				"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
		},
		{
			title: "Commerce App",
			category: "UI/UX Design",
			year: "2023",
			bgColor: "bg-gray-100 dark:bg-gray-800",
			image:
				"https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
		},
		{
			title: "Analytics Platform",
			category: "Full Stack Development",
			year: "2023",
			bgColor: "bg-blue-100 dark:bg-blue-900/20",
			image:
				"https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
		},
	];

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

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<div key={index} className="group cursor-pointer">
							<div
								className={`${project.bgColor} rounded-2xl p-8 mb-6 overflow-hidden relative hover:scale-105 transition-transform duration-300`}
							>
								<img
									src={project.image}
									alt={`${project.title} project showcase`}
									className="mx-auto h-96 object-cover rounded-xl shadow-2xl"
								/>
							</div>
							<div className="flex justify-between items-end">
								<div>
									<h3 className="text-xl font-semibold mb-1">
										{project.title}
									</h3>
									<p className="text-muted-foreground">{project.category}</p>
								</div>
								<span className="text-muted-foreground">{project.year}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</AnimatedSection>
	);
}
