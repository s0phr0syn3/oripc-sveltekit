<script lang="ts">
	export let year: number = new Date().getFullYear();
	export let companyName: string = 'Oregon Interventional Pain Consultants';
</script>

<footer class="bg-gray-900 text-white py-4">
	<div class="container mx-auto text-center">
		<p>&copy; {year} {companyName}. All Rights Reserved.</p>
		<nav class="mt-2">
			<a href="/privacy" class="text-gray-400 hover:text-white text-sm">Privacy Policy</a> |
			<a href="/terms" class="text-gray-400 hover:text-white text-sm">Terms of Service</a>
		</nav>
	</div>
</footer>