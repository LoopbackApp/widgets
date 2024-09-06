import { IconMoodEmpty, IconMoodHappy, IconMoodSad } from "@tabler/icons-react";

export const emotions = [
	{
		value: 1,
		icon: IconMoodSad,
		className: "lb-bg-red-100 lb-text-red-900",
		hover: "hover:lb-bg-red-100 hover:lb-text-red-900",
	},
	{
		value: 2,
		icon: IconMoodEmpty,
		className: "lb-bg-amber-100 lb-text-amber-900",
		hover: "hover:lb-bg-amber-100 hover:lb-text-amber-900",
	},
	{
		value: 3,
		icon: IconMoodHappy,
		className: "lb-bg-green-100 lb-text-green-900",
		hover: "hover:lb-bg-green-100 hover:lb-text-green-900",
	},
];
