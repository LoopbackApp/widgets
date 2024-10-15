<div class="lb-flex lb-space-y-2 lb-flex-col lb-items-center lb-justify-center">
	<slot name="icon" />
	<p class="lb-animate-in lb-font-semibold lb-duration-700 lb-fade-in lb-slide-in-from-bottom-4">
		<slot name="messageTop" />
	</p>
	<p
		class="lb-animate-in lb-text-sm lb-text-neutral-600 lb-duration-700 lb-fade-in lb-slide-in-from-bottom-4"
	>
		<slot name="messageBottom" />
	</p>
</div>

<style>
	.lb-flex {
		display: flex;
	}
	.lb-flex-col {
		flex-direction: column;
	}
	.lb-items-center {
		align-items: center;
	}
	.lb-justify-center {
		justify-content: center;
	}
	.lb-space-y-2 > * + * {
		margin-top: 0.5rem;
	}
	.lb-text-sm {
		font-size: 0.875rem;
	}
	.lb-text-neutral-600 {
		color: #525252;
	}
	.lb-font-semibold {
		font-weight: 600;
	}
	.lb-slide-in-from-bottom-4 {
		transform: translateY(1rem);
		animation: slideInFromBottom 0.7s forwards;
	}
	.lb-fade-in {
		opacity: 0;
		animation: fadeIn 0.7s forwards;
	}
	@keyframes slideInFromBottom {
		to {
			transform: translateY(0);
		}
	}
	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}
	.lb-animate-in {
		animation-fill-mode: forwards;
	}
	.lb-duration-700 {
		animation-duration: 0.7s;
	}
</style>
