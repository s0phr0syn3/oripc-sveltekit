<script lang="ts">
	import { generateTitle } from '$lib/utils';
</script>

<svelte:head>
	<title>{generateTitle('Home')}</title>
</svelte:head>

<div class="bg-header py-16 text-center text-white">
	<h1 class="text-4xl font-bold">Oregon Interventional Pain Consultants</h1>
	<p class="mt-4 text-lg">Comprehensive Pain Management Solutions</p>
</div>

<section class="mx-auto max-w-4xl px-4 py-10">
	<p class="leading-relaxed text-gray-700">
		We are a full service pain clinic dedicated to compassionate, individualized care. Successful
		pain management includes a variety of approaches to treatment. Our goal is to match the safest,
		most effective treatment to the individual patient.
	</p>

	<p class="py-4 leading-relaxed text-gray-700">
		Our therapies include both non-pharmacologic and pharmacologic approaches. We offer specialized
		therapies such as nerve blocks, epidural injections and other diagnostic and therapeutic
		injections. We are recognized specialists in interventional pain management therapies including
		spinal cord stimulation and spinal infusion therapy for the control of both pain and spasticity.
		During a new patient evaluation we will review the spectrum of therapies available for the
		management of pain.
	</p>
</section>
