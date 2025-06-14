import { ChevronDown, Code, Megaphone, Palette } from "lucide-react";

import { AnimatedSection } from "./ui/animated-section";
import TechStacksSlide from "./TechStacksSlide";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useState } from "react";

export default function ExpertiseSection() {
	const { elementRef, isIntersecting } = useIntersectionObserver();
	const [openExpertise, setOpenExpertise] = useState<string | null>(null);

	const expertiseItems = [
		{
			id: "development",
			icon: Code,
			title: "Development",
			description:
				"Full-stack development with modern frameworks including React, Next.js, Node.js, and TypeScript. Specialized in building scalable, performant web applications with clean, maintainable code.",
		},
		{
			id: "design",
			icon: Palette,
			title: "UI/UX Design",
			description:
				"User-centered design approach focusing on creating intuitive, accessible, and visually compelling interfaces. Expertise in design systems, prototyping, and user research methodologies.",
		},
		{
			id: "branding",
			icon: Megaphone,
			title: "Branding",
			description:
				"Strategic brand development including visual identity, logo design, and brand guidelines. Creating cohesive brand experiences across digital and print mediums.",
		},
	];

	const toggleExpertise = (id: string) => {
		setOpenExpertise(openExpertise === id ? null : id);
	};

	return (
		<AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
			<div
				ref={elementRef}
				className={`transition-all duration-800 ease-out ${
					isIntersecting
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-8"
				}`}
			>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
					<div>
						<div className="flex items-center mb-6">
							<span className="text-accent text-sm font-medium tracking-wider">
								✦ SPECIALITY
							</span>
						</div>
						<h2 className="font-clash text-4xl md:text-5xl font-medium mb-12">
							Areas of Expertise
						</h2>

						<div className="space-y-6">
							{expertiseItems.map((item) => {
								const IconComponent = item.icon;
								const isOpen = openExpertise === item.id;

								return (
									<div
										key={item.id}
										className="border-b border-border pb-6 last:border-b-0"
									>
										<button
											type="button"
											onClick={() => toggleExpertise(item.id)}
											className="w-full flex justify-between items-center text-left"
										>
											<div className="flex items-center">
												<IconComponent className="mr-3 text-accent h-5 w-5" />
												<span className="text-xl font-semibold">
													{item.title}
												</span>
											</div>
											<ChevronDown
												className={`transition-transform duration-300 ${
													isOpen ? "rotate-180" : "rotate-0"
												}`}
											/>
										</button>
										<div
											className={`overflow-hidden transition-all duration-300 ${
												isOpen ? "max-h-96 mt-4" : "max-h-0"
											}`}
										>
											<p className="text-muted-foreground leading-relaxed">
												{item.description}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					<div className="lg:pl-12">
						<img
							src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
							alt="Modern developer workspace with laptop showing code"
							className="rounded-2xl shadow-2xl w-full h-auto mb-12"
						/>
					</div>
				</div>
				<div className="col-span-2 overflow-hidden">
					<TechStacksSlide />
				</div>
			</div>
		</AnimatedSection>
	);
}
