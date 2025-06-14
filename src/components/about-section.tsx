"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import ScrollFloat from "./reactbits/ScrollFloat/ScrollFloat";

export default function AboutSection() {
	return (
		<section
			id="about"
			className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24"
		>
			<AnimatedSection>
				<div className="flex items-center justify-center mb-6">
					<span className="text-accent text-sm font-medium tracking-wider">
						✦ ABOUT ME
					</span>
				</div>
				<div className="max-w-5xl mx-auto text-center">
					<ScrollFloat
						animationDuration={1}
						ease="back.inOut(2)"
						scrollStart="center bottom+=50%"
						scrollEnd="bottom bottom-=40%"
						stagger={0.03}
						textClassName="font-clash text-2xl md:text-3xl lg:text-4xl !font-normal leading-relaxed "
					>
						I'm Fathul Qorib Alaudit, with over 5+ years of experience in design
						& development with strong focus on producing high quality &
						impactful digital experiences. I have worked with some of the most
						innovative industry leaders to help build their top-notch products.
					</ScrollFloat>
				</div>
			</AnimatedSection>
		</section>
	);
}
