<script lang="ts">
	import { generateTitle } from '$lib/utils';
</script>

<svelte:head>
	<title>{generateTitle('Understanding My Bill')}</title>
</svelte:head>

<div class="bg-header py-12 text-center text-white">
	<h1 class="text-3xl font-bold">Understanding My Bill</h1>
</div>

<section class="mx-auto max-w-4xl px-4 py-10 leading-relaxed text-gray-700">
	<h2 class="mb-4 text-xl font-bold">Billing Inquiries</h2>
	<p>
		We understand that the billing process can be confusing, and you may have questions following an
		office visit or procedure. Our team of seasoned professionals is available to discuss any
		billing concerns you may have.
	</p>
	<p class="mt-4">
		For all questions regarding your bill, please contact our Billing staff at <a
			href="tel:+18666222455"
			class="text-blue-600 hover:underline">(866) 622-2455 ext 150</a
		>.
	</p>
	<p class="mt-4">Please be prepared to provide the following information:</p>
	<ul class="mt-2 list-disc pl-5">
		<li>Account Number</li>
		<li>Patient’s Name</li>
		<li>Guarantor’s Name</li>
		<li>Primary and/or Secondary Insurance Carrier</li>
		<li>Insured’s ID and Group Number</li>
		<li>Daytime Contact Number</li>
		<li>Date of Services</li>
	</ul>

	<h2 class="mb-4 mt-8 text-xl font-bold">Frequently Asked Questions</h2>

	<h3 class="mt-6 text-lg font-semibold">Why didn’t my insurance company cover my visit?</h3>
	<p class="mt-2">
		All insurance companies have the disclaimer: "Coverage is not a guarantee of payment." The term
		"covered" differs from "payment". "Covered" means your insurance will allow the services
		received and process your claim according to your specific plan benefits. Reasons for
		non-payment include, but are not limited to:
	</p>
	<ul class="mt-2 list-disc pl-5">
		<li>Non-covered service</li>
		<li>Deductible</li>
		<li>Co-insurance or cost share</li>
		<li>Co-pay</li>
		<li>Plan exclusion</li>
	</ul>
	<p class="mt-2">
		For example, an office visit may be allowed and paid by the insurance plan, but a procedure
		performed the same day might be applied to the deductible. Given the variety of insurance
		companies and numerous networks and benefit packages, it's not possible for us to know your
		specific benefits. Questions regarding your benefits are best directed to your health insurance
		plan.
	</p>

	<h3 class="mt-6 text-lg font-semibold">
		What is a deductible? What is co-insurance or cost share?
	</h3>
	<p class="mt-2">
		A deductible is a fixed amount you agree with your health insurance plan to pay out of pocket
		each year for covered health care costs before they begin to pay. For example, with a $1,000
		deductible, you're responsible for the first $1,000 in healthcare expenses out of pocket before
		your insurance company starts to pay.
	</p>
	<p class="mt-2">
		After satisfying the deductible, you may also owe a co-insurance or cost share amount. This
		refers to an amount you may be required to pay as your share for certain covered services,
		usually calculated as a percentage.
	</p>
</section>
