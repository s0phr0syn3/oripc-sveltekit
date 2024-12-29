<script lang="ts">
	import { generateTitle } from '$lib/utils';
</script>

<svelte:head>
	<title>{generateTitle('Terms of Use')}</title>
</svelte:head>

<div class="bg-header py-12 text-center text-white">
	<h1 class="text-3xl font-bold">Terms of Use</h1>
</div>

<section class="mx-auto max-w-4xl px-4 py-10 leading-relaxed text-gray-700">
	<h2 class="mb-4 text-xl font-bold">Introduction</h2>
	<p>
		Welcome to the Oregon Interventional Pain Consultants (ORIPC) website. By accessing or using
		this website, you agree to comply with these Terms of Use. Please read them carefully.
	</p>

	<h2 class="mb-4 mt-6 text-xl font-bold">Use of Website</h2>
	<ul class="list-disc pl-5">
		<li>You must be at least 18 years old to use this website.</li>
		<li>Do not use this website for any unlawful or prohibited activities.</li>
		<li>
			All content on this website is for informational purposes only and should not be considered
			medical advice.
		</li>
	</ul>

	<h2 class="mb-4 mt-6 text-xl font-bold">Intellectual Property</h2>
	<p>
		All content, including text, images, and logos, is the property of ORIPC. Unauthorized use,
		reproduction, or distribution is prohibited without prior written permission.
	</p>

	<h2 class="mb-4 mt-6 text-xl font-bold">Limitation of Liability</h2>
	<p>
		ORIPC is not liable for any damages resulting from your use of this website. This includes, but
		is not limited to, technical issues, inaccuracies, or reliance on information provided.
	</p>

	<h2 class="mb-4 mt-6 text-xl font-bold">Third-Party Links</h2>
	<p>
		Our website may contain links to third-party websites. ORIPC is not responsible for the content,
		privacy policies, or practices of these external sites.
	</p>

	<h2 class="mb-4 mt-6 text-xl font-bold">Changes to Terms</h2>
	<p>
		ORIPC reserves the right to modify these Terms of Use at any time. Changes will be effective
		immediately upon posting.
	</p>

	<p class="mt-6">Last Updated: December 24, 2024</p>
</section>
