<script lang="ts">
	import { generateTitle } from '$lib/utils';
</script>

<svelte:head>
	<title>{generateTitle('Privacy Policy')}</title>
</svelte:head>

<div class="bg-header py-12 text-center text-white">
	<h1 class="text-3xl font-bold">Privacy Policy</h1>
</div>

<section class="mx-auto max-w-4xl px-4 py-10 leading-relaxed text-gray-700">
	<h2 class="mb-4 text-xl font-bold">Introduction</h2>
	<p>
		At Oregon Interventional Pain Consultants (ORIPC), we value your privacy. This Privacy Policy
		outlines how we collect, use, and protect your personal information when you interact with our
		website.
	</p>

	<h2 class="mb-4 mt-6 text-xl font-bold">Information We Collect</h2>
	<ul class="list-disc pl-5">
		<li>
			<strong>Personal Information:</strong> Name, email address, phone number, or any other information
			you provide through forms or communication.
		</li>
		<li>
			<strong>Usage Data:</strong> Information about how you access and use our website, such as your
			IP address, browser type, and operating system.
		</li>
	</ul>

	<h2 class="mb-4 mt-6 text-xl font-bold">How We Use Your Information</h2>
	<p>We use the collected information for the following purposes:</p>
	<ul class="list-disc pl-5">
		<li>To respond to your inquiries or requests.</li>
		<li>To improve our website and user experience.</li>
		<li>To comply with legal obligations.</li>
	</ul>

	<h2 class="mb-4 mt-6 text-xl font-bold">Third-Party Sharing</h2>
	<p>
		We do not sell or rent your personal information to third parties. However, we may share
		information with trusted service providers who assist us in operating our website or providing
		services.
	</p>

	<h2 class="mb-4 mt-6 text-xl font-bold">Your Rights</h2>
	<p>
		You have the right to access, update, or delete the personal information we have about you.
		Please contact us at <a href="mailto:info@oripc.com" class="text-blue-600 hover:underline"
			>info@oripc.com</a
		> for any privacy-related inquiries.
	</p>

	<h2 class="mb-4 mt-6 text-xl font-bold">Policy Updates</h2>
	<p>
		We may update this Privacy Policy periodically. Any changes will be posted on this page with the
		updated date.
	</p>

	<p class="mt-6">Last Updated: December 24, 2024</p>
</section>
