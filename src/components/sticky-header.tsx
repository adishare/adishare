"use client";

import { Briefcase, Home, Mail, Moon, Sun, User } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function StickyHeader() {
	const { theme, setTheme } = useTheme();
	const pathname = usePathname();
	const [activeSection, setActiveSection] = useState("home");
	const [scrollY, setScrollY] = useState(0);
	const [mounted, setMounted] = useState(false);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setScrollY(currentScrollY);

			const sections = ["home", "about", "projects", "contact"];
			const current = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});
			if (current) {
				setActiveSection(current);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	const scrollProgress = Math.min(scrollY / 100, 1);

	return (
		<header
			className={`sticky top-2 z-50 transition-all duration-500 ease-in-out mx-auto ${
				scrollY > 0
					? "backdrop-blur-md bg-white/50 dark:border dark:border-white/15 dark:bg-black/50 rounded-full shadow-sm max-w-xl mx-auto"
					: "bg-transparent dark:bg-transparent  mx-0 max-w-7xl"
			}`}
			style={{
				transform: `scale(${1 - scrollProgress * 0.05})`,
				opacity: 0.8 + scrollProgress * 0.2,
			}}
		>
			<nav
				className={cn(
					"mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-center",
				)}
			>
				<div
					className={
						"flex justify-between items-center transition-all duration-500 ease-in-out w-full gap-4"
					}
				>
					{/* Logo */}
					<div className="flex-shrink-0">
						<h1 className="text-2xl font-thin font-clash text-accent">aD</h1>
					</div>

					{/* Navigation Links */}
					<div className="flex items-center gap-4">
						{/* Desktop Navigation */}
						<div className="hidden md:flex items-baseline space-x-8">
							<Link href="/">
								<button
									type="button"
									className={`relative transition-colors ${
										pathname === "/"
											? "text-accent font-medium"
											: "text-muted-foreground hover:text-foreground"
									}`}
								>
									Home
									{pathname === "/" && (
										<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent" />
									)}
								</button>
							</Link>
							<Link href="/about">
								<button
									type="button"
									className={`relative transition-colors ${
										pathname === "/about"
											? "text-accent font-medium"
											: "text-muted-foreground hover:text-foreground"
									}`}
								>
									About
									{pathname === "/about" && (
										<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent" />
									)}
								</button>
							</Link>
							<Link href="/projects">
								<button
									type="button"
									className={`relative transition-colors ${
										pathname === "/projects"
											? "text-accent font-medium"
											: "text-muted-foreground hover:text-foreground"
									}`}
								>
									Projects
									{pathname === "/projects" && (
										<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent" />
									)}
								</button>
							</Link>
							<Link href="/contact">
								<button
									type="button"
									className={`relative transition-colors ${
										pathname === "/contact"
											? "text-accent font-medium"
											: "text-muted-foreground hover:text-foreground"
									}`}
								>
									Contact
									{pathname === "/contact" && (
										<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent" />
									)}
								</button>
							</Link>
						</div>

						{/* Mobile Navigation */}
						<div className="flex md:hidden items-center gap-2">
							<Link href="/">
								<Button
									variant="ghost"
									size="icon"
									className={cn(
										"p-2 rounded-lg transition-colors",
										pathname === "/"
											? "bg-accent/10 text-accent"
											: "text-muted-foreground hover:text-foreground hover:bg-muted",
									)}
								>
									<Home className="h-5 w-5" />
								</Button>
							</Link>
							<Link href="/about">
								<Button
									variant="ghost"
									size="icon"
									className={cn(
										"p-2 rounded-lg transition-colors",
										pathname === "/about"
											? "bg-accent/10 text-accent"
											: "text-muted-foreground hover:text-foreground hover:bg-muted",
									)}
								>
									<User className="h-5 w-5" />
								</Button>
							</Link>
							<Link href="/projects">
								<Button
									variant="ghost"
									size="icon"
									className={cn(
										"p-2 rounded-lg transition-colors",
										pathname === "/projects"
											? "bg-accent/10 text-accent"
											: "text-muted-foreground hover:text-foreground hover:bg-muted",
									)}
								>
									<Briefcase className="h-5 w-5" />
								</Button>
							</Link>
							<Link href="/contact">
								<Button
									variant="ghost"
									size="icon"
									className={cn(
										"p-2 rounded-lg transition-colors",
										pathname === "/contact"
											? "bg-accent/10 text-accent"
											: "text-muted-foreground hover:text-foreground hover:bg-muted",
									)}
								>
									<Mail className="h-5 w-5" />
								</Button>
							</Link>
						</div>

						{/* Dark Mode Toggle */}
					</div>
					<Button
						variant="ghost"
						size="icon"
						onClick={toggleTheme}
						className="p-2 rounded-lg hover:bg-muted transition-colors"
					>
						{mounted ? (
							theme === "light" ? (
								<Sun className="h-5 w-5" />
							) : (
								<Moon className="h-5 w-5" />
							)
						) : (
							<Sun className="h-5 w-5" />
						)}
					</Button>
				</div>
			</nav>
		</header>
	);
}
