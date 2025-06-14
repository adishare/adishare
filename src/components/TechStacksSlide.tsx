import { AnimatedSection } from "./ui/animated-section";

const defaultTechnologies = [
	{
		name: "React.js",
		color: "bg-blue-100 dark:bg-blue-900/20",
		textColor: "text-blue-600",
	},
	{
		name: "JavaScript",
		color: "bg-yellow-100 dark:bg-yellow-900/20",
		textColor: "text-yellow-600",
	},
	{
		name: "CSS",
		color: "bg-blue-100 dark:bg-blue-900/20",
		textColor: "text-blue-600",
	},
	{
		name: "HTML",
		color: "bg-orange-100 dark:bg-orange-900/20",
		textColor: "text-orange-600",
	},
	{
		name: "Node.js",
		color: "bg-green-100 dark:bg-green-900/20",
		textColor: "text-green-600",
	},
	{
		name: "TypeScript",
		color: "bg-cyan-100 dark:bg-cyan-900/20",
		textColor: "text-cyan-600",
	},
	{
		name: "Angular",
		color: "bg-red-100 dark:bg-red-900/20",
		textColor: "text-red-600",
	},
	{
		name: "Git",
		color: "bg-gray-100 dark:bg-gray-700",
		textColor: "text-gray-600",
	},
	{
		name: "Tailwind CSS",
		color: "bg-cyan-100 dark:bg-cyan-900/20",
		textColor: "text-cyan-600",
	},
	{
		name: "Next.js",
		color: "bg-gray-100 dark:bg-gray-700",
		textColor: "text-gray-600",
	},
];

const TechStacksSlide = ({ technologies = defaultTechnologies }) => {
	return (
		<AnimatedSection>
			<div className="relative w-full">
				<div className="absolute left-0 top-0 bottom-0 w-24 lg:w-64 bg-gradient-to-r from-background  to-transparent z-10" />
				<div className="flex animate-scroll">
					{technologies.map((tech, index) => (
						<div key={index} className="flex-shrink-0 mx-2 p-1">
							<div
								className={`w-fit gap-1 px-4 h-10 bg-white dark:bg-neutral-800 drop-shadow-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}
							>
								<div className={`${tech.textColor} text-xs font-bold`}>
									{tech.name.slice(0, 2).toUpperCase()}
								</div>
								<div className="text-xs text-muted-foreground dark:text-neutral-200">
									{tech.name}
								</div>
							</div>
						</div>
					))}
					{technologies.map((tech, index) => (
						<div key={`duplicate-${index}`} className="flex-shrink-0 mx-2 p-1">
							<div
								className={`w-fit gap-1 px-4 h-10 bg-white dark:bg-neutral-800 drop-shadow-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}
							>
								<div className={`${tech.textColor} text-xs font-bold`}>
									{tech.name.slice(0, 2).toUpperCase()}
								</div>
								<div className="text-xs text-muted-foreground dark:text-neutral-200">
									{tech.name}
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="absolute right-0 top-0 bottom-0 w-24 lg:w-64 bg-gradient-to-l from-background  to-transparent z-10" />
			</div>
		</AnimatedSection>
	);
};

export default TechStacksSlide;
