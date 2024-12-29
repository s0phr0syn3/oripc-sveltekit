<script lang="ts">
	export let currentPath: string;

	$: breadcrumbLinks = (() => {
		const segments: string[] = currentPath.split('/').filter(Boolean);
		const links: { label: string; href: string }[] = [];
		let fullPath: string = '';

		segments.forEach((segment) => {
			fullPath += `/${segment}`;
			links.push({
				label: segment
					.replaceAll('-', ' ')
					.replaceAll(' and ', ' & ')
					.replace(/\b\w/g, (c) => c.toUpperCase()),
				href: fullPath
			});
		});

		return [{ label: 'Home', href: '/' }, ...links];
	})();
</script>

<nav class="rounded-md bg-gray-100 p-2">
	<ul class="flex items-center whitespace-nowrap text-xs md:text-sm">
		{#each breadcrumbLinks as { label, href }, i}
			<li class="inline-flex items-center">
				<a {href} class="text-blue-600 hover:underline">{label}</a>
				{#if i < breadcrumbLinks.length - 1}
					<span class="mx-1 text-gray-400">
						<!-- Icon separator -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</span>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
