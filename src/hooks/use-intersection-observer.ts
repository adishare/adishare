"use client";

import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverProps {
	threshold?: number;
	rootMargin?: string;
}

export function useIntersectionObserver({
	threshold = 0.1,
	rootMargin = "0px 0px -50px 0px",
}: UseIntersectionObserverProps = {}) {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const elementRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				// MODIFICATION HERE:
				// Update isIntersecting based on the current entry.isIntersecting status
				setIsIntersecting(entry.isIntersecting);
			},
			{ threshold, rootMargin },
		);

		observer.observe(element);

		return () => {
			observer.unobserve(element);
		};
	}, [threshold, rootMargin]);

	return { elementRef, isIntersecting };
}
