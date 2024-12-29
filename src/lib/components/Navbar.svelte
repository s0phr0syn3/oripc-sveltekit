<script lang="ts">
	let isMenuOpen = false;
	let openDropdown: string | null = null;

	const navLinks = [
		{ title: 'Home', href: '/' },
		{ title: 'Physicians', href: '/physicians' },
		{
			title: 'Insurance & Billing',
			href: '/insurance-and-billing',
			sublinks: [
				{
					title: 'Participating Insurance Plans',
					href: '/insurance-and-billing/participating-insurance-plans'
				},
				{ title: 'Understanding My Bill', href: '/insurance-and-billing/understanding-my-bill' },
				{ title: 'Pay My Bill', href: '/insurance-and-billing/pay-my-bill' }
			]
		},
		{ title: 'Appointments & Forms', href: '/appointments-and-forms' },
		{ title: 'Patient Education', href: '/patient-education' },
		{ title: 'Contact Us', href: '/contact-us' }
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
		openDropdown = null; // Close any open dropdowns
	}

	function toggleDropdown(title: string) {
		openDropdown = openDropdown === title ? null : title;
	}

	function closeMenu() {
		isMenuOpen = false;
		openDropdown = null;
	}
</script>

<nav class="bg-white text-black shadow-md">
	<div class="container mx-auto flex items-center justify-between p-4">
		<a href="/" class="flex-shrink-0">
			<img src="/images/logo.png" alt="Logo" class="h-24" />
		</a>

		<button
			class="rounded-md p-2 text-black lg:hidden"
			on:click={toggleMenu}
			aria-label="Toggle navigation"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16m-7 6h7"
				/>
			</svg>
		</button>

		<ul
			class={`${
				isMenuOpen ? 'block' : 'hidden'
			} mt-4 w-full flex-col items-start space-y-4 lg:mt-0 lg:flex lg:w-auto lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0`}
		>
			{#each navLinks as link}
				<li class="group relative">
					<!-- Dropdown Link -->
					{#if link.sublinks}
						<button
							on:click={() => toggleDropdown(link.title)}
							class="flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-700 focus:outline-none lg:inline-flex lg:w-auto lg:hover:bg-transparent"
							aria-expanded={openDropdown === link.title ? 'true' : 'false'}
							aria-haspopup="menu"
						>
							<span>{link.title}</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4 lg:ml-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						{#if openDropdown === link.title}
							<ul
								class="absolute left-0 top-full z-10 mt-2 w-full rounded-md bg-white py-2 shadow-lg lg:w-48"
							>
								{#each link.sublinks as sublink}
									<li>
										<a
											href={sublink.href}
											class="block px-4 py-2 text-sm hover:bg-gray-200 hover:text-gray-700"
											on:click={closeMenu}
										>
											{sublink.title}
										</a>
									</li>
								{/each}
							</ul>
						{/if}
					{:else}
						<!-- Normal Links -->
						<a
							href={link.href}
							class="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-700 focus:outline-none lg:inline-block lg:hover:bg-transparent"
							on:click={closeMenu}
						>
							{link.title}
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</nav>
