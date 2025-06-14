"use client";

import { ExternalLink, Hand } from "lucide-react";

import { Button } from "@/components/ui/button";
import Orb from "./reactbits/Orb/Orb";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function HeroSection() {
	const { elementRef, isIntersecting } = useIntersectionObserver();

	return (
		<section
			id="home"
			className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24"
		>
			<div className="absolute opacity-10 top-0 left-0 mx-auto h-full w-full">
				<Orb
					hoverIntensity={0.5}
					rotateOnHover={true}
					hue={0}
					forceHoverState={false}
				/>
			</div>
			<div ref={elementRef} className="space-y-8">
				{/* Greeting */}
				<div
					className={`flex items-center mb-8 transition-all duration-700 ease-out ${
						isIntersecting
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<span className="text-2xl mr-3">
						<Hand className="w-6 h-6 text-accent animate-shake-hand" />
					</span>
					<span className="text-muted-foreground">Hey! It's me Adi.</span>
				</div>

				{/* Main Headline */}
				<h1
					className={`font-clash text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8 transition-all duration-700 ease-out delay-100 ${
						isIntersecting
							? "opacity-100 translate-y-0 scale-100"
							: "opacity-0 translate-y-8 scale-95"
					}`}
				>
					Crafting <span className="text-accent">purpose driven</span>
					<br />
					<span className="text-accent">experiences</span> that inspire
					<br />& engage.
				</h1>

				{/* Description */}
				<div
					className={`max-w-2xl ml-auto mb-12 transition-all duration-700 ease-out delay-200 ${
						isIntersecting
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<p className="text-lg text-muted-foreground leading-relaxed">
						I work with brands globally to build pixel-perfect, engaging, and
						accessible digital experiences that drive results and achieve
						business goals.
					</p>
				</div>

				{/* Social Links and CTA */}
				<div
					className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 transition-all duration-700 ease-out delay-300 ${
						isIntersecting
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<div className="grid grid-cols-2 sm:grid-cols-4 justify-center items-center gap-6 w-full lg:w-fit">
						{[
							{ label: "LINKEDIN", href: "#" },
							{ label: "GITHUB", href: "#" },
							{ label: "INSTAGRAM", href: "#" },
							{ label: "GMAIL", href: "#" },
						].map(({ label, href }) => (
							<a
								key={label}
								href={href}
								className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
							>
								{label}
								<ExternalLink className="h-3 w-3" />
							</a>
						))}
					</div>
					<Button
						variant="outline"
						className="px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
					>
						Know me better
					</Button>
				</div>
			</div>
		</section>
	);
}
