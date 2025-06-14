"use client";

import {
	ChevronDown,
	Github,
	Instagram,
	Linkedin,
	Mail,
	Twitter,
} from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function Contact() {
	const { elementRef: heroRef, isIntersecting: heroVisible } =
		useIntersectionObserver();
	const { elementRef: faqRef, isIntersecting: faqVisible } =
		useIntersectionObserver();

	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		message: "",
	});

	const [openFaq, setOpenFaq] = useState<number | null>(null);

	const faqs = [
		{
			question: "What is your current role?",
			answer:
				"I'm currently working as a Software Engineer at OneShield Software while also running my own design consultancy.",
		},
		{
			question: "How much does it cost for a high performing website?",
			answer:
				"Project costs vary depending on scope, complexity, and timeline. I provide custom quotes after understanding your specific requirements and goals.",
		},
		{
			question: "How long will the work take from start to finish?",
			answer:
				"Timeline depends on project complexity. Simple websites take 2-4 weeks, while complex applications can take 2-3 months. I'll provide a detailed timeline during our initial consultation.",
		},
		{
			question: "Are you available to join as full time?",
			answer:
				"I'm currently focused on freelance and contract work, but I'm open to discussing full-time opportunities for the right role and company culture fit.",
		},
	];

	const socialLinks = [
		{ icon: Linkedin, href: "#", label: "LinkedIn" },
		{ icon: Github, href: "#", label: "GitHub" },
		{ icon: Instagram, href: "#", label: "Instagram" },
		{ icon: Mail, href: "#", label: "Email" },
		{ icon: Twitter, href: "#", label: "Twitter" },
	];

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log("Form submitted:", formData);
	};

	const toggleFaq = (index: number) => {
		setOpenFaq(openFaq === index ? null : index);
	};

	return (
		<div className="min-h-screen">
			{/* Hero/Contact Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
				<div
					ref={heroRef}
					className={`transition-all duration-800 ease-out ${
						heroVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
						{/* Contact Form */}
						<div>
							<div className="flex items-center mb-6">
								<span className="text-accent text-sm font-medium tracking-wider">
									✦ CONNECT WITH ME
								</span>
							</div>
							<h1 className="font-clash text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-12">
								Let's start a project together
							</h1>

							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label
										htmlFor="fullName"
										className="block text-sm font-medium mb-2"
									>
										Full Name
									</label>
									<Input
										id="fullName"
										name="fullName"
										type="text"
										value={formData.fullName}
										onChange={handleInputChange}
										className="w-full p-4 rounded-lg border border-border bg-white dark:bg-gray-800"
										required
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium mb-2"
									>
										Email
									</label>
									<Input
										id="email"
										name="email"
										type="email"
										value={formData.email}
										onChange={handleInputChange}
										className="w-full p-4 rounded-lg border border-border bg-white dark:bg-gray-800"
										required
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium mb-2"
									>
										Message
									</label>
									<Textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										rows={6}
										className="w-full p-4 rounded-lg border border-border bg-white dark:bg-gray-800 resize-none"
										required
									/>
								</div>

								<Button
									type="submit"
									variant="outline"
									className="px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
								>
									Submit
								</Button>
							</form>
						</div>

						{/* Contact Info */}
						<div className="lg:pl-12">
							<div className="bg-card rounded-2xl p-8 shadow-lg border mb-8">
								<div className="flex items-center mb-6">
									<span className="text-accent text-sm font-medium tracking-wider">
										✦ Available for work
									</span>
								</div>

								<div className="mb-6">
									<img
										src="/adishare.JPG"
										alt="Fathul Qorib Alaudit"
										className="w-16 h-16 rounded-full object-cover mb-4"
									/>
								</div>

								<p className="text-muted-foreground leading-relaxed mb-6">
									My inbox is always open. Whether you have a project or just
									want to say Hi, I would love to hear from you. Feel free to
									contact me and I'll get back to you.
								</p>

								<div className="flex space-x-4">
									{socialLinks.map(({ icon: Icon, href, label }) => (
										<a
											key={label}
											href={href}
											className="text-muted-foreground hover:text-foreground transition-colors"
											aria-label={label}
										>
											<Icon className="h-5 w-5" />
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
				<div
					ref={faqRef}
					className={`transition-all duration-800 ease-out ${
						faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}
				>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
						<div>
							<div className="flex items-center mb-6">
								<span className="text-accent text-sm font-medium tracking-wider">
									✦ FAQS
								</span>
							</div>
							<h2 className="font-clash text-4xl md:text-5xl font-medium mb-8">
								Have Questions?
							</h2>
						</div>

						<div className="space-y-6">
							{faqs.map((faq, index) => {
								const isOpen = openFaq === index;

								return (
									<div
										key={index}
										className="border-b border-border pb-6 last:border-b-0"
									>
										<button
											type="button"
											onClick={() => toggleFaq(index)}
											className="w-full flex justify-between items-center text-left"
										>
											<span className="text-lg font-semibold pr-4">
												{String(index + 1).padStart(2, "0")}. {faq.question}
											</span>
											<ChevronDown
												className={`transition-transform duration-300 flex-shrink-0 ${
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
												{faq.answer}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
