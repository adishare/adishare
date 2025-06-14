"use client";

import ScrollVelocity from "@/components/reactbits/TextAnimations/ScrollVelocity";

const HomeVelocity = () => {
	return (
		<div className="relative">
			<div className="absolute left-0 top-0 bottom-0 w-24 lg:w-64 bg-gradient-to-r from-background  to-transparent z-10" />
			<ScrollVelocity
				texts={["Web  •  Mobile  •  Development  •  DevOps  • "]}
				className="opacity-30 text-6xl text-slate-500 font-clash font-light border-t border-b py-8"
			/>
			<div className="absolute right-0 top-0 bottom-0 w-24 lg:w-64 bg-gradient-to-l from-background  to-transparent z-10" />
		</div>
	);
};

export default HomeVelocity;
