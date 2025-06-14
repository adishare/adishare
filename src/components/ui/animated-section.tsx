import { ReactNode, useEffect, useState } from "react";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface AnimatedSectionProps {
	id?: string;
	children: ReactNode;
	className?: string;
	delay?: number;
	animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right";
}

export function AnimatedSection({
	id,
	children,
	className = "",
	delay = 0,
	animation = "fade-up",
}: AnimatedSectionProps) {
	const { elementRef, isIntersecting } = useIntersectionObserver();
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		if (isIntersecting && !hasAnimated) {
			setHasAnimated(true);
		} else if (!isIntersecting && hasAnimated) {
			// If the element leaves the viewport and had previously animated,
			// reset hasAnimated to false so it can animate again on re-entry.
			setHasAnimated(false);
		}
	}, [isIntersecting, hasAnimated]);

	const getAnimationClasses = () => {
		const baseClasses = "transition-all duration-700 ease-out";
		// Tailwind JIT might struggle with dynamic delay values in [] unless purged.
		// For better compatibility, consider using pre-defined delay classes or inline style.
		// For this example, let's keep it as is, assuming Tailwind config handles it.
		const delayClass = `delay-[${delay}ms]`;

		const animationClasses = {
			"fade-up": hasAnimated // Use hasAnimated to control the final state
				? "opacity-100 translate-y-0"
				: "opacity-0 translate-y-8",
			"fade-down": hasAnimated
				? "opacity-100 translate-y-0"
				: "opacity-0 -translate-y-8",
			"fade-left": hasAnimated
				? "opacity-100 translate-x-0"
				: "opacity-0 -translate-x-8",
			"fade-right": hasAnimated
				? "opacity-100 translate-x-0"
				: "opacity-0 translate-x-8",
		};

		// When it's not intersecting, ensure it's in its initial "hidden" state
		// for smooth re-animation on next intersection.
		const initialHiddenClasses = {
			"fade-up": "opacity-0 translate-y-8",
			"fade-down": "opacity-0 -translate-y-8",
			"fade-left": "opacity-0 -translate-x-8",
			"fade-right": "opacity-0 translate-x-8",
		};

		return `${baseClasses} ${delayClass} ${
			isIntersecting
				? animationClasses[animation]
				: initialHiddenClasses[animation]
		}`;
	};

	return (
		<div
			id={id}
			ref={elementRef}
			// Apply the classes directly, as getAnimationClasses now handles the logic
			className={`${getAnimationClasses()} ${className}`}
		>
			{children}
		</div>
	);
}
