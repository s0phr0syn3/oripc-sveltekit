<script lang="ts">
	import '../app.css'; // Import global styles
	import Navbar from '$lib/components/Navbar.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/state';
</script>

<main class="flex min-h-screen flex-col">
	<!-- Navbar -->
	<header class="bg-white shadow">
		<Navbar />
	</header>

	<!-- Breadcrumb Section -->
	<section class="bg-gray-100">
		<div class="container mx-auto px-4 py-2">
			<Breadcrumb currentPath={page.url.pathname} />
		</div>
	</section>

	<!-- Page Content -->
	<div class="flex-grow">
		<slot />
	</div>

	<!-- Footer -->
	<Footer />
</main>
