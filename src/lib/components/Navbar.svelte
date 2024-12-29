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
				{ title: 'Participating Insurance Plans', href: '/insurance-and-billing/participating-insurance-plans' },
				{ title: 'Understanding My Bill', href: '/insurance-and-billing/understanding-my-bill' },
				{ title: 'Pay My Bill', href: '/insurance-and-billing/pay-my-bill' },
			],
		},
		{ title: 'Appointments & Forms', href: '/appointments-and-forms' },
		{ title: 'Patient Education', href: '/patient-education' },
		{ title: 'Contact Us', href: '/contact-us' },
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
	<div class="container mx-auto flex justify-between items-center p-4">
		<a href="/" class="flex-shrink-0">
			<img src="/images/logo.png" alt="Logo" class="h-24" />
		</a>

		<button
			class="lg:hidden text-black p-2 rounded-md"
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
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
			</svg>
		</button>

		<ul
			class={`${
        isMenuOpen ? 'block' : 'hidden'
      } lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-start lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}
		>
			{#each navLinks as link}
				<li class="relative group">
					<!-- Dropdown Link -->
					{#if link.sublinks}
						<button
							on:click={() => toggleDropdown(link.title)}
							class="lg:inline-flex px-4 py-2 text-sm hover:text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent focus:outline-none w-full lg:w-auto flex justify-between items-center"
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
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
							</svg>
						</button>
						{#if openDropdown === link.title}
							<ul
								class="absolute left-0 top-full bg-white shadow-lg mt-2 rounded-md w-full lg:w-48 py-2 z-10"
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
							class="block lg:inline-block px-4 py-2 text-sm hover:text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent focus:outline-none"
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