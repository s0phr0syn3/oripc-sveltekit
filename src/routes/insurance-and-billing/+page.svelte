<script lang="ts">
	import { generateTitle } from '$lib/utils';
</script>

<svelte:head>
	<title>{generateTitle('Insurance & Billing')}</title>
</svelte:head>

<div class="bg-header py-12 text-center text-white">
	<h1 class="text-3xl font-bold">Insurance & Billing</h1>
</div>

<section class="mx-auto max-w-4xl px-4 py-10 leading-relaxed text-gray-700">
	<h2 class="mb-4 text-xl font-bold">Insurance & Billing</h2>
	<p>
		At Oregon Interventional Pain Consultants, we aim to make our billing and insurance processes as
		seamless as possible. Explore the sections below to learn more about our participating insurance
		plans, understanding your bill, and making payments.
	</p>

	<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
		<a
			href="/insurance-and-billing/participating-insurance-plans"
			class="block rounded border p-4 shadow hover:bg-gray-100 hover:shadow-md"
		>
			<h3 class="text-lg font-semibold text-blue-600">Participating Insurance Plans</h3>
			<p class="text-sm text-gray-600">Learn which insurance providers we work with.</p>
		</a>
		<a
			href="/insurance-and-billing/understanding-my-bill"
			class="block rounded border p-4 shadow hover:bg-gray-100 hover:shadow-md"
		>
			<h3 class="text-lg font-semibold text-blue-600">Understanding My Bill</h3>
			<p class="text-sm text-gray-600">Understand the details of your billing statement.</p>
		</a>
		<a
			href="/insurance-and-billing/pay-my-bill"
			class="block rounded border p-4 shadow hover:bg-gray-100 hover:shadow-md"
		>
			<h3 class="text-lg font-semibold text-blue-600">Pay My Bill</h3>
			<p class="text-sm text-gray-600">Discover your payment options.</p>
		</a>
	</div>
</section>
