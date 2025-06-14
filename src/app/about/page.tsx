"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import CircularText from "@/components/reactbits/TextAnimations/CircularText";
import TechStacksSlide from "@/components/TechStacksSlide";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useState } from "react";

export default function About() {
	const { elementRef: heroRef, isIntersecting: heroVisible } =
		useIntersectionObserver();

	const { elementRef: experienceRef, isIntersecting: experienceVisible } =
		useIntersectionObserver();
	const { elementRef: processRef, isIntersecting: processVisible } =
		useIntersectionObserver();
	const { elementRef: awardsRef, isIntersecting: awardsVisible } =
		useIntersectionObserver();
	const { elementRef: communityRef, isIntersecting: communityVisible } =
		useIntersectionObserver();
	const [currentStep, setCurrentStep] = useState(0);

	const experience = [
		{
			title: "Software Engineer",
			company: "@OneShield Software",
			period: "Aug 2022 — Present",
			icon: "🔹",
		},
		{
			title: "Founder",
			company: "@Design and Code",
			period: "Jan 2021 — Present",
			icon: "⚪",
		},
		{
			title: "Design Engineer",
			company: "@BlackboxAI",
			period: "Feb 2025 — Mar 2025",
			icon: "⚫",
		},
		{
			title: "UI/UX Designer",
			company: "@SocialS",
			period: "Aug 2022 — Sep 2023",
			icon: "🔷",
		},
	];

	const processSteps = [
		{
			number: "01",
			title: "Strategize",
			description:
				"To create something awesome, one must first talk about the details. Planning is essential.",
			icon: "🎯",
		},
		{
			number: "02",
			title: "Wireframe",
			description:
				"After hashing out the details of the website, it's easy to throw the ideas onto pen & paper.",
			icon: "✏️",
		},
		{
			number: "03",
			title: "Design",
			description:
				"The most fun part of all - adding pizzaz to the wireframes and bring it to life.",
			icon: "🎨",
		},
		{
			number: "04",
			title: "Development",
			description:
				"The design may be final but it needs to be functional and practical. Development is key.",
			icon: "💻",
		},
	];

	const nextStep = () => {
		setCurrentStep((prev) => (prev + 1) % processSteps.length);
	};

	const prevStep = () => {
		setCurrentStep(
			(prev) => (prev - 1 + processSteps.length) % processSteps.length,
		);
	};

	const awards = [
		{
			title: "Star Performer of the Year",
			period: "MAY 2021",
		},
		{
			title: "Best Beginner Hack",
			period: "APR 2021",
		},
		{
			title: "Sketch Webpage Contest Winner",
			period: "NOV 2020",
		},
		{
			title: "Best Space App Winner",
			period: "SEP 2021",
		},
	];

	const communityFeatures = [
		{
			title: "Mentoring",
			description:
				"Get connected with a mentor that will help you pave your career path.",
			icon: "🎯",
		},
		{
			title: "Opportunities",
			description:
				"Get Internships and Job opportunities and gain experience while you learn.",
			icon: "💼",
		},
		{
			title: "Free Resources",
			description:
				"Get Free resources related to Designing and Development from the community.",
			icon: "📚",
		},
		{
			title: "Help & Reviews",
			description:
				"Get your portfolio and projects reviewed by industry experts and mentors.",
			icon: "🔍",
		},
	];

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
				<div
					ref={heroRef}
					className={`transition-all duration-800 ease-out ${
						heroVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
						<AnimatedSection
							animation="fade-left"
							delay={1}
							className="relative"
						>
							<img
								src="/adishare.JPG"
								alt="personal"
								className="rounded-t-full w-full max-w-md mx-auto shadow-2xl"
							/>
							{/* <div className="absolute -bottom-4 -right-4 bg-white"> */}
						</AnimatedSection>

						<AnimatedSection
							animation="fade-right"
							className="relative lg:col-span-2"
						>
							<h1 className="font-clash text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
								A <span className="text-accent">creative developer</span>
								<br />& digital designer
							</h1>
							<p className="text-lg text-muted-foreground leading-relaxed mb-8">
								I collaborate with brands globally to design impactful,
								mission-focused websites that drive results and achieve business
								goals.
							</p>
							<Button
								variant="outline"
								className="px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
							>
								My Resume
							</Button>
							<div className="group absolute right-16 -top-20 grid aspect-square h-fit  place-content-center rounded-full shadow  -z-10 opacity-40">
								<div className="relative leading-none font-normal uppercase bg-white/50 dark:bg-black p-10 rounded-full">
									<CircularText
										text="• LET'S TALK • LET'S TALK"
										spinDuration={30}
										className="relative leading-none font-normal uppercase size-36 text-accent"
									/>
								</div>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</div>

			{/* Technologies Section */}
			<div className="col-span-2 overflow-hidden">
				<TechStacksSlide />
			</div>

			{/* Experience Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
				<div
					ref={experienceRef}
					className={`transition-all duration-800 ease-out flex gap-8 flex-col md:flex-row ${
						experienceVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<AnimatedSection animation="fade-left" delay={1} className="max-w-sm">
						<div className="flex items-center mb-6">
							<span className="text-accent text-sm font-medium tracking-wider">
								✦ WORK HISTORY
							</span>
						</div>
						<h2 className="font-clash text-4xl md:text-5xl font-medium mb-6">
							Experience
						</h2>
						<p className="text-muted-foreground mb-16 max-w-2xl">
							I have worked with some of the most innovative industry leaders to
							help build their top-notch products.
						</p>
					</AnimatedSection>

					<AnimatedSection animation="fade-right" className="space-y-2 w-full">
						{experience.map((item, index) => (
							<div
								key={item.title}
								className="flex items-center justify-between py-2 border-b border-border last:border-b-0"
							>
								<div className="flex items-center">
									<span className="text-2xl mr-4">{item.icon}</span>
									<div>
										<h3 className="text-lg font-medium">{item.title}</h3>
										<p className="text-muted-foreground text-xs">
											{item.company}
										</p>
									</div>
								</div>
								<span className="text-foreground text-sm">{item.period}</span>
							</div>
						))}
						<div className="mt-12 text-center">
							<Button variant="ghost" className="text-accent hover:underline">
								Show More
							</Button>
						</div>
					</AnimatedSection>
				</div>
			</section>

			{/* Design Process Section */}
			<AnimatedSection
				animation="fade-up"
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
			>
				<div
					ref={processRef}
					className={`transition-all duration-800 ease-out ${
						processVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<div className="flex items-center mb-6">
						<span className="text-accent text-sm font-medium tracking-wider">
							✦ STEPS I FOLLOW
						</span>
					</div>
					<h2 className="font-clash text-4xl md:text-5xl font-medium mb-6">
						My Design Process
					</h2>
					<p className="text-muted-foreground mb-16 max-w-2xl">
						I have worked with some of the most innovative industry leaders to
						help build their top-notch products.
					</p>

					<div className="relative">
						{/* Mobile/Tablet View - Slider */}
						<div className="lg:hidden overflow-hidden">
							<div
								className="flex transition-transform duration-300 ease-in-out"
								style={{ transform: `translateX(-${currentStep * 100}%)` }}
							>
								{processSteps.map((step, index) => (
									<div
										key={step.title}
										className="w-full flex-shrink-0 text-center px-4"
									>
										<div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mb-6 mx-auto">
											<span className="text-3xl">{step.icon}</span>
										</div>
										<h3 className="font-clash text-2xl font-semibold mb-4">
											{step.number}. {step.title}
										</h3>
										<p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
											{step.description}
										</p>
									</div>
								))}
							</div>
						</div>

						{/* Desktop View - Grid */}
						<div className="hidden lg:grid grid-cols-4 gap-8">
							{processSteps.map((step) => (
								<div key={step.title} className="text-center">
									<div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mb-6 mx-auto">
										<span className="text-3xl">{step.icon}</span>
									</div>
									<h3 className="font-clash text-2xl font-semibold mb-4">
										{step.number}. {step.title}
									</h3>
									<p className="text-muted-foreground text-lg leading-relaxed">
										{step.description}
									</p>
								</div>
							))}
						</div>

						{/* Navigation - Only show on mobile/tablet */}
						<div className="lg:hidden flex justify-center items-center mt-12 space-x-4">
							<Button
								variant="ghost"
								size="icon"
								onClick={prevStep}
								className="rounded-full border border-border hover:bg-muted"
							>
								<ChevronLeft className="h-5 w-5" />
							</Button>

							<div className="flex space-x-2">
								{processSteps.map((_, index) => (
									<button
										type="button"
										key={index}
										onClick={() => setCurrentStep(index)}
										className={`w-2 h-2 rounded-full transition-colors ${
											index === currentStep ? "bg-accent" : "bg-muted"
										}`}
									/>
								))}
							</div>

							<Button
								variant="ghost"
								size="icon"
								onClick={nextStep}
								className="rounded-full border border-border hover:bg-muted"
							>
								<ChevronRight className="h-5 w-5" />
							</Button>
						</div>
					</div>
				</div>
			</AnimatedSection>

			{/* Awards Section */}
			<AnimatedSection
				animation="fade-up"
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
			>
				<div
					ref={awardsRef}
					className={`transition-all duration-800 ease-out grid grid-cols-1 lg:grid-cols-3 gap-16 items-start ${
						awardsVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<div className="flex flex-col items-center ">
						<div className="text-accent text-sm font-medium tracking-wider mb-6 self-start">
							✦ AWARDS
						</div>
						<h2 className="font-clash text-4xl md:text-5xl font-medium mb-16">
							Awards & Recognition
						</h2>
					</div>

					<div className="space-y-4 lg:col-span-2">
						{awards.map((award, index) => (
							<div
								key={award.title}
								className="flex justify-between items-center py-1 border-b border-border last:border-b-0"
							>
								<h3 className="text-lg font-medium">{award.title}</h3>
								<span className="text-foreground text-sm">{award.period}</span>
							</div>
						))}
					</div>
				</div>
			</AnimatedSection>

			{/* Community Section */}
			<AnimatedSection
				animation="fade-up"
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
			>
				<div
					ref={communityRef}
					className={`transition-all duration-800 ease-out ${
						communityVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{communityFeatures.map((feature, index) => (
								<div key={feature.title} className="text-center">
									<div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-4 mx-auto">
										<span className="text-2xl">{feature.icon}</span>
									</div>
									<h3 className="font-semibold mb-3">{feature.title}</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{feature.description}
									</p>
								</div>
							))}
						</div>

						<div>
							<div className="flex items-center mb-6">
								<span className="text-accent text-sm font-medium tracking-wider">
									✦ COMMUNITY WORK
								</span>
							</div>
							<h2 className="font-clash text-4xl md:text-5xl font-medium mb-6">
								Building a Tech Community
							</h2>
							<p className="text-muted-foreground leading-relaxed mb-8">
								I founded Design & Code which is a global community with a
								mission to connect designers and developers to create a happy
								community eager to learn, innovate and grow together. We welcome
								all designers and developers: beginners, intermediates, and
								experts willing to learn together. We encourage sharing
								resources and learning experiences, organizing events, and
								providing feedback for our members to grow as they learn.
							</p>

							<div className="grid grid-cols-3 gap-8 mb-8">
								<div className="text-center">
									<div className="font-clash text-3xl font-bold mb-1">5k+</div>
									<p className="text-muted-foreground text-sm">
										Community Members
									</p>
								</div>
								<div className="text-center">
									<div className="font-clash text-3xl font-bold mb-1">25+</div>
									<p className="text-muted-foreground text-sm">
										Events conducted
									</p>
								</div>
								<div className="text-center">
									<div className="font-clash text-3xl font-bold mb-1">4</div>
									<p className="text-muted-foreground text-sm">Years</p>
								</div>
							</div>

							<Button
								variant="outline"
								className="px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
							>
								Join Community
							</Button>
						</div>
					</div>
				</div>
			</AnimatedSection>
		</div>
	);
}
