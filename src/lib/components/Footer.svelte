<script lang="ts">
	export let year: number = new Date().getFullYear();
	export let companyName: string = 'Oregon Interventional Pain Consultants';
</script>

<footer class="bg-gray-900 py-4 text-white">
	<div class="container mx-auto text-center">
		<p>&copy; {year} {companyName}. All Rights Reserved.</p>
		<nav class="mt-2">
			<a href="/privacy-policy" class="text-sm text-gray-400 hover:text-white">Privacy Policy</a> |
			<a href="/terms-of-use" class="text-sm text-gray-400 hover:text-white">Terms of Use</a>
		</nav>
	</div>
</footer>
