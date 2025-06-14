import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";

import { AnimatedSection } from "./ui/animated-section";
import Autoplay from "embla-carousel-autoplay";
import { ExternalLink } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function TestimonialsSection() {
	const { elementRef, isIntersecting } = useIntersectionObserver();

	const testimonials = [
		{
			name: "Aman Tyagi",
			position: "UI/UX Designer @BrainAlive",
			image:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
			content:
				"When it comes to design, I can only think of Adi. He's a fun and knowledgeable person and it was a pleasure and honor to work with him. He is an innovative and a very creative UI/UX Designer as well as an excellent developer. I always enjoyed his creative approach and his design ideas were exceptional...",
			linkedinUrl: "#",
		},
		{
			name: "Sarah Johnson",
			position: "Product Manager @TechCorp",
			image:
				"https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
			content:
				"Adi delivered an outstanding mobile application that exceeded our expectations. His attention to detail and technical expertise made the development process smooth and efficient. The final product was both beautiful and highly functional.",
			linkedinUrl: "#",
		},
		{
			name: "Michael Chen",
			position: "CTO @StartupVenture",
			image:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
			content:
				"Working with Adi was a game-changer for our startup. He transformed our vision into a scalable web platform that has been crucial to our growth. His problem-solving skills and dedication are truly remarkable.",
			linkedinUrl: "#",
		},
	];

	return (
		<AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
						✦ TESTIMONIALS
					</span>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
					<div>
						<h2 className="font-clash text-4xl md:text-5xl font-medium mb-8">
							What others say
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							I've worked with some amazing people over the years, here is what
							they have to say about me.
						</p>
					</div>

					<div className="testimonial-container lg:col-span-2">
						<Carousel
							opts={{
								align: "center",
								loop: true,
							}}
							plugins={[
								Autoplay({
									delay: 5000,
								}),
							]}
						>
							<CarouselContent className="-ml-2">
								{testimonials.map((testimonial, index) => (
									<CarouselItem
										key={index}
										className="basis-11/12 -ml-1 flex items-center"
									>
										<div className="bg-card rounded-2xl p-8 shadow-lg m-3 border">
											<div className="flex items-center mb-6">
												<img
													src={testimonial.image}
													alt={`${testimonial.name} profile photo`}
													className="w-16 h-16 rounded-full object-cover mr-4"
												/>
												<div>
													<h4 className="font-semibold">{testimonial.name}</h4>
													<p className="text-muted-foreground text-sm">
														{testimonial.position}
													</p>
												</div>
											</div>
											<p className="text-foreground leading-relaxed mb-6">
												"{testimonial.content}"
												<button className="text-accent hover:underline ml-1">
													see more
												</button>
											</p>
											<a
												href={testimonial.linkedinUrl}
												className="text-accent hover:underline text-sm flex items-center gap-1"
											>
												Check it out on LinkedIn{" "}
												<ExternalLink className="h-3 w-3" />
											</a>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className="left-0" />
							<CarouselNext className="right-0" />
						</Carousel>
					</div>
				</div>
			</div>
		</AnimatedSection>
	);
}
