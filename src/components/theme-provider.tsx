"use client";

import Aurora from "./reactbits/Aurora/Aurora";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import React from "react";

export function ThemeProvider({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider>) {
	return (
		<NextThemesProvider {...props}>
			<NextTopLoader color="#30af5b" showSpinner={false} />
			{/*  set as background */}
			<div className="absolute -z-10 opacity-20 top-0 hidden dark:lg:block w-full h-full">
				<Aurora
					colorStops={["#5277ff", "#7CFF67", "#52fff9"]}
					blend={0.5}
					amplitude={1.0}
					speed={3}
				/>
			</div>
			{children}
		</NextThemesProvider>
	);
}
