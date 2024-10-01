<div class="flex space-y-2 flex-col items-center justify-center">
	<slot name="icon" />
	<p class="animate-in font-semibold duration-700 fade-in slide-in-from-bottom-4">
		<slot name="messageTop" />
	</p>
	<p class="animate-in text-sm text-neutral-600 duration-700 fade-in slide-in-from-bottom-4">
		<slot name="messageBottom" />
	</p>
</div>

<style>
	.flex {
		display: flex;
	}
	.flex-col {
		flex-direction: column;
	}
	.items-center {
		align-items: center;
	}
	.justify-center {
		justify-content: center;
	}
	.space-y-2 > * + * {
		margin-top: 0.5rem;
	}
	.text-sm {
		font-size: 0.875rem;
	}
	.text-neutral-600 {
		color: #525252;
	}
	.font-semibold {
		font-weight: 600;
	}
	.slide-in-from-bottom-4 {
		transform: translateY(1rem);
		animation: slideInFromBottom 0.7s forwards;
	}
	.fade-in {
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
	.animate-in {
		animation-fill-mode: forwards;
	}
	.duration-700 {
		animation-duration: 0.7s;
	}
</style>
