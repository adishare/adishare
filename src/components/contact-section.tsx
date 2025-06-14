"use client";

import { AnimatedSection } from "./ui/animated-section";
import { Button } from "@/components/ui/button";
import Threads from "./reactbits/Threads/Threads";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ContactSection() {
	const { elementRef, isIntersecting } = useIntersectionObserver();

	return (
		<AnimatedSection
			id="contact"
			className="bg-card py-12 drop-shadow-sm rounded-3xl max-w-7xl lg:mx-auto mx-4  md:mb-16 mb-8"
		>
			<div className=" absolute opacity-20 top-0 w-full h-full">
				<Threads amplitude={5} distance={0} enableMouseInteraction={true} />
			</div>
			<div className=" mx-auto  text-center">
				<div
					ref={elementRef}
					className={`transition-all duration-800 ease-out ${
						isIntersecting
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<div className="flex items-center justify-center mb-6">
						<span className="text-accent text-sm font-medium tracking-wider">
							✦ Available for work
						</span>
					</div>
					<h2 className="font-clash text-4xl md:text-7xl font-medium mb-12 max-w-3xl mx-auto leading-tight">
						Let's create your next big idea.
					</h2>
					<Button
						variant="outline"
						className="px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 text-lg"
					>
						Contact Me
					</Button>
				</div>
			</div>
		</AnimatedSection>
	);
}
