"use client";

import AboutSection from "@/components/about-section";
import ExpertiseSection from "@/components/expertise-section";
import HeroSection from "@/components/hero-section";
import HomeVelocity from "./HomeVelocity";
import ProjectsSection from "@/components/projects-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function Home() {
	return (
		<div className="min-h-screen ">
			<main>
				<HeroSection />
				<HomeVelocity />
				<AboutSection />
				<ProjectsSection />
				<ExpertiseSection />
				<TestimonialsSection />
			</main>
		</div>
	);
}
