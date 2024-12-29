<script lang="ts">
	import { generateTitle } from '$lib/utils';
</script>

<svelte:head>
	<title>{generateTitle('Pay My Bill')}</title>
</svelte:head>

<div class="bg-header py-12 text-center text-white">
	<h1 class="text-3xl font-bold">Pay My Bill</h1>
</div>

<section class="mx-auto max-w-4xl px-4 py-10 leading-relaxed text-gray-700">
	<h2 class="mb-4 text-xl font-bold">Convenient Payment Options</h2>
	<p>
		We understand that your time is valuable. To make the payment process as convenient as possible,
		we offer the following methods:
	</p>

	<div class="mt-6">
		<h3 class="text-lg font-semibold">1. Pay Your Bill by Phone</h3>
		<p>
			Have your statement handy and call us at <a
				href="tel:+18666222455"
				class="text-blue-600 hover:underline">(866) 622-2455 x150</a
			>.
		</p>
	</div>

	<div class="mt-6">
		<h3 class="text-lg font-semibold">2. Pay Your Bill by Mail</h3>
		<p>Send your check or money order to:</p>
		<address class="mt-2 not-italic">
			Oregon Interventional Pain Consultants<br />
			1849 NW Kearney St #201<br />
			Portland, OR 97209
		</address>
	</div>

	<h2 class="mb-4 mt-8 text-xl font-bold">Frequently Asked Questions</h2>

	<div class="mt-6">
		<h3 class="text-lg font-semibold">Do I need to pay the entire amount due on my statement?</h3>
		<p>
			You may pay any amount toward the balance due on your account. Our financial policy allows up
			to three months to pay the balance in full. If you need more time, please call us to set up a
			payment schedule that meets your needs.
		</p>
	</div>

	<div class="mt-6">
		<h3 class="text-lg font-semibold">How long will it take for my payment to be processed?</h3>
		<p>
			Your credit card or bank account will immediately show the payment as "pending." Processing is
			usually completed overnight. Payments are typically credited to your account within two
			working days and will be reflected on your next statement.
		</p>
	</div>

	<div class="mt-6">
		<h3 class="text-lg font-semibold">What if I accidentally overpay?</h3>
		<p>
			Please call our Billing Department at <a
				href="tel:+18666222455"
				class="text-blue-600 hover:underline">(866) 622-2455 x150</a
			>. We will review your account and either apply the overpayment as a credit or provide a
			refund.
		</p>
	</div>

	<div class="mt-6">
		<h3 class="text-lg font-semibold">
			What should I do if my payment isn't reflected on my next statement?
		</h3>
		<p>
			Check the statement date; it may have been issued before your payment was processed. If the
			payment isn't reflected on subsequent statements, please call our Billing Department at <a
				href="tel:+18666222455"
				class="text-blue-600 hover:underline">(866) 622-2455 x150</a
			>.
		</p>
	</div>

	<div class="mt-6">
		<h3 class="text-lg font-semibold">What if I have questions about the amount of my bill?</h3>
		<p>
			Please call our clinic at <a href="tel:+15034775205" class="text-blue-600 hover:underline"
				>(503) 477-5205</a
			>.
		</p>
	</div>
</section>
