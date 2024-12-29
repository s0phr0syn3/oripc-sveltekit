<script lang="ts">
	import { generateTitle } from '$lib/utils';
	export let physicians = [
		{
			name: 'Stuart Rosenblum',
			title: 'M.D., Ph.D.',
			education: [
				'Oregon Health Sciences University School of Medicine',
				'Board Certified in Pain Management'
			],
			residency: 'University of Virginia School of Medicine',
			bio:
				'Dr. Rosenblum opened the first Portland based Pain Clinic at Legacy Emanuel Hospital almost 20 years ago ' +
				'after completing his Ph.D. and M.D. in Oregon and his specialty training in anesthesia and pain medicine at ' +
				'the University of Virginia. He is involved with all aspects of pain management and has recently been focused ' +
				'on the development of an algorithm for the treatment of non-cancer pain, an assessment tool for breakthrough ' +
				'pain and a new risk assessment screening tool. Dr. Rosenblum is a frequent lecturer on topics including ' +
				'cancer and non-cancer pain. Some of his recent presentations have been for the Pain Society of Oregon, the ' +
				'Physicians for Medical Excellence and the Oregon Board of Medical Examiners.',
			image: '/images/stuart.jpg'
		}
	];
</script>

<svelte:head>
	<title>{generateTitle('Our Physicians & Staff')}</title>
</svelte:head>

<div class="bg-header py-12 text-center text-white">
	<h1 class="text-3xl font-bold">Our Physicians & Staff</h1>
</div>

<section class="mx-auto grid max-w-6xl grid-cols-1 px-4 py-10">
	{#each physicians as physician}
		<div class="flex flex-col items-center rounded border p-4 shadow-md">
			<img
				src={physician.image}
				alt={`Picture of ${physician.name}`}
				class="mb-4 h-64 w-64 rounded-full"
			/>
			<h3 class="text-center text-lg font-bold">{physician.name}</h3>
			<p class="text-center text-sm text-gray-600">{physician.title}</p>
			<h4 class="mt-4 text-center text-lg font-bold">Education</h4>
			<ul class="mt-4 text-center text-gray-600">
				{#each physician.education as item}
					<li>{item}</li>
				{/each}
			</ul>
			<h4 class="mt-4 text-center text-lg font-bold">Residency</h4>
			<p class="mt-4 text-center text-gray-700">{physician.residency}</p>
			<h4 class="mt-4 text-center text-lg font-bold">Bio</h4>
			<p class="mt-2 text-center text-gray-700">{physician.bio}</p>
		</div>
	{/each}
</section>
