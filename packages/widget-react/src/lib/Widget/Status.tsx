import { IconHeart, IconHeartBroken } from "@tabler/icons-react";

export function SuccessMessage() {
	return (
		<div className="lb-flex lb-space-y-2 lb-flex-col lb-items-center lb-justify-center">
			<IconHeart
				className="lb-text-red-700 lb-slide-in-from-bottom-4 lb-duration-700 lb-fade-in-0 lb-animate-in"
				size={36}
			/>
			<p className="lb-animate-in lb-font-semibold lb-duration-700 lb-fade-in lb-slide-in-from-bottom-4">
				Your feedback has been received
			</p>
			<p className="lb-animate-in lb-text-sm lb-text-neutral-700 lb-duration-700 lb-fade-in lb-slide-in-from-bottom-4">
				Thanks for submitting your feedback
			</p>
		</div>
	);
}

export function FailedMessage() {
	return (
		<div className="lb-flex lb-space-y-2 lb-flex-col lb-items-center lb-justify-center">
			<IconHeartBroken
				className="lb-text-red-700 lb-slide-in-from-bottom-4 lb-duration-700 lb-fade-in-0 lb-animate-in"
				size={36}
			/>
			<p className="lb-animate-in lb-font-semibold lb-duration-700 lb-fade-in lb-slide-in-from-bottom-4">
				Something went wrong...
			</p>
			<p className="lb-animate-in lb-text-sm lb-text-neutral-700 lb-duration-700 lb-fade-in lb-slide-in-from-bottom-4">
				Please try again later
			</p>
		</div>
	);
}
