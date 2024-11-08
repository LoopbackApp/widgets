export type EmojiProps = {
	selected: boolean;
};

const className = "lb-transition-all lb-duration-300 group-hover:lb-h-10 group-hover:lb-w-10";

export function One({ selected }: EmojiProps) {
	const fill = selected ? "#E7344F" : "#363A40";
	const size = selected ? 40 : 32;
	return (
		<svg
			className={className}
			width={size}
			height={size}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect className="group" width="32" height="32" rx="16" fill={fill} />
			<path
				d="M11.0479 21.9786C14.9908 19.1077 17.1643 19.0655 20.9526 21.9786"
				stroke="#121315"
				strokeWidth="1.52381"
				strokeLinecap="round"
			/>
			<path
				d="M25.5243 11.4285L22.0957 13.3332"
				stroke="#121315"
				strokeWidth="1.52381"
				strokeLinecap="round"
			/>
			<path
				d="M6.85756 11.4285L10.2861 13.3332"
				stroke="#121315"
				strokeWidth="1.52381"
				strokeLinecap="round"
			/>
			<circle cx="23.6195" cy="13.7142" r="1.52381" fill="#121315" />
			<circle cx="8.38123" cy="13.7142" r="1.52381" fill="#121315" />
		</svg>
	);
}

export function Two({ selected }: EmojiProps) {
	const fill = selected ? "#EC7F41" : "#363A40";
	const size = selected ? 40 : 32;
	return (
		<svg
			className={className}
			width={size}
			height={size}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="32" height="32" rx="16" fill={fill} />
			<path
				d="M11.0479 21.9786C14.9908 19.1077 17.1643 19.0655 20.9526 21.9786"
				stroke="black"
				strokeWidth="1.52381"
				strokeLinecap="round"
			/>
			<circle cx="23.6195" cy="13.7142" r="1.52381" fill="black" />
			<circle cx="8.38123" cy="13.7142" r="1.52381" fill="black" />
		</svg>
	);
}

export function Three({ selected }: EmojiProps) {
	const fill = selected ? "#9A5833" : "#363A40";
	const size = selected ? 40 : 32;
	return (
		<svg
			className={className}
			width={size}
			height={size}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="32" height="32" rx="16" fill={fill} />
			<circle cx="23.6195" cy="13.7142" r="1.52381" fill="black" />
			<circle cx="8.38123" cy="13.7142" r="1.52381" fill="black" />
			<path
				d="M11.4287 19.8096L20.8216 22.9526"
				stroke="black"
				strokeWidth="1.52381"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export function Four({ selected }: EmojiProps) {
	const fill = selected ? "#47914C" : "#363A40";
	const size = selected ? 40 : 32;
	return (
		<svg
			className={className}
			width={size}
			height={size}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="32" height="32" rx="16" fill={fill} />
			<path
				d="M11.0479 19.8095C14.9908 22.6804 17.1643 22.7226 20.9526 19.8095"
				stroke="black"
				strokeWidth="1.52381"
				strokeLinecap="round"
			/>
			<circle cx="23.6195" cy="13.7142" r="1.52381" fill="black" />
			<circle cx="8.38123" cy="13.7142" r="1.52381" fill="black" />
		</svg>
	);
}

export function Five({ selected }: EmojiProps) {
	const fill = selected ? "#5BBF5F" : "#363A40";
	const size = selected ? 40 : 32;
	return (
		<svg
			className={className}
			width={size}
			height={size}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="32" height="32" rx="16" fill={fill} />
			<circle cx="23.6195" cy="13.7142" r="1.52381" fill="black" />
			<circle cx="8.38123" cy="13.7142" r="1.52381" fill="black" />
			<path
				d="M16.5645 24.3792C20.0599 24.4861 21.3335 19.8096 21.3335 19.8096H11.4287C11.4287 19.8096 13.1492 24.2748 16.5645 24.3792Z"
				fill="black"
				stroke="black"
				strokeWidth="1.52381"
				strokeLinecap="round"
			/>
		</svg>
	);
}
