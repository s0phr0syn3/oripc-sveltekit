<script lang="ts">
	import { generateTitle } from '$lib/utils';

	const contractedProviders = [
		{ name: 'AETNA', url: 'https://www.aetna.com' },
		{ name: 'CAREMARK PPO', url: 'https://www.mhn.com' },
		{ name: 'CAREMARK COMP', url: 'https://www.mhn.com' },
		{ name: 'CIGNA', url: 'https://www.cigna.com' },
		{ name: 'FAMILYCARE MEDICARE', url: 'https://www.familycareinc.org' },
		{ name: 'FIRST CHOICE HEALTH', url: 'https://www.fchn.com' },
		{ name: 'HEALTHNET', url: 'https://www.healthnet.com' },
		{ name: 'KAISER (FOR INTRATHECAL PUMP PATIENTS ONLY)', url: 'https://www.kp.org' },
		{ name: 'KAISER MEDICARE (FOR INTRATHECAL PUMP PATIENTS ONLY)', url: 'https://www.kp.org' },
		{ name: 'KAISER OHP (HEALTHSHARE OF OREGON)', url: 'https://www.kp.org' },
		{ name: 'MEDICARE', url: 'https://www.medicare.gov' },
		{ name: 'MHN PPO', url: 'https://www.mhn.com' },
		{ name: 'MODA', url: 'https://www.modahealth.com' },
		{ name: 'PROVIDENCE PREFERRED PPO', url: 'https://healthplans.providence.org' },
		{ name: 'PROVIDENCE EPO- OPEN OPTION', url: 'https://healthplans.providence.org' },
		{ name: 'PROVIDENCE MEDICARE', url: 'https://healthplans.providence.org' },
		{ name: 'REGENCE BCBS PPP/PAR/ACCESS/BLUE CHOICES/PCARE', url: 'https://www.regence.com' },
		{ name: 'REGENCE BCBS MEDICARE ADVANTAGE', url: 'https://www.regence.com' },
		{ name: 'REGENCE BCBS PREFERRED PROVIDER NETWORK FEP', url: 'https://www.regence.com' },
		{ name: 'MULTIPLAN', url: 'https://www.multiplan.com' },
		{ name: 'PACIFICSOURCE', url: 'https://www.pacificsource.com' },
		{ name: 'UNITED HEALTHCARE', url: 'https://www.uhc.com' },
	];

	const nonContractedProviders = [
		{ name: 'COVENTRY', url: 'https://coventrynational.coventryhealthcare.com' },
		{ name: 'FIRST HEALTH/COVENTRY', url: 'https://firsthealth.coventryhealthcare.com' },
		{ name: 'HEALTHNET MEDICARE ADVANTAGE', url: 'https://www.healthnet.com' },
		{ name: 'LIFEWISE/PREMERA', url: 'https://www.lifewiseor.com' },
		{ name: 'MODA BEACON', url: 'https://www.modahealth.com' },
		{ name: 'WA DEPT OF SOCIAL AND HEALTH SERVICES (MEDICAID)', url: 'https://www.dshs.wa.gov/altsa/home-and-community-services/medicaid' },
		{ name: 'WA DOLI', url: 'https://lni.wa.gov/insurance/' },
	];
</script>

<svelte:head>
	<title>{generateTitle('Participating Insurance Plans')}</title>
</svelte:head>


<div class="bg-header text-white py-12 text-center">
	<h1 class="text-3xl font-bold">Participating Insurance Plans</h1>
</div>

<section class="max-w-4xl mx-auto py-10 px-4 text-gray-700 leading-relaxed">
	<h2 class="text-xl font-bold mb-4">Our Accepted Insurance Plans</h2>
	<p>
		At Oregon Interventional Pain Consultants, we accept a variety of insurance plans and are Medicare participating providers. To ensure a seamless experience, we recommend contacting your insurance carrier before your first visit. If your plan requires a referral, please obtain one from your physician prior to your appointment.
	</p>
	<p class="mt-4">
		For assistance or questions, contact us at <a href="tel:+15034775205" class="text-blue-600 hover:underline">(503) 477-5205</a>.
	</p>

	<h3 class="text-lg font-semibold mt-6">Contracted Insurance Providers</h3>
	<p class="text-sm text-gray-600">*Note: This list is current as of December 24, 2024. At this time, we are closed to new Oregon Health Plan patients except for those requiring management of their intrathecal pumps.</p>
	<ul class="list-disc pl-5 mt-4">
		{#each contractedProviders as provider}
			<li>
				<a href={provider.url} target="_blank" class="text-blue-600 hover:underline">
					{provider.name}
				</a>
			</li>
		{/each}
	</ul>

	<h3 class="text-lg font-semibold mt-6">Non-Contracted Insurance Providers</h3>
	<ul class="list-disc pl-5 mt-4">
		{#each nonContractedProviders as provider}
			<li>
				<a href={provider.url} target="_blank" class="text-blue-600 hover:underline">
					{provider.name}
				</a>
			</li>
		{/each}
	</ul>
</section>