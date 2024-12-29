<script lang="ts">
	import { generateTitle } from '$lib/utils';
</script>

<svelte:head>
	<title>{generateTitle('Appointments & Forms')}</title>
</svelte:head>

<div class="bg-header text-white py-12 text-center">
	<h1 class="text-3xl font-bold">Appointments & Forms</h1>
</div>

<section class="max-w-4xl mx-auto py-10 px-4 text-gray-700 leading-relaxed">
	<h2 class="text-xl font-bold mb-4">Contact Oregon IPC</h2>
	<p>
		If you would like more information about Oregon Interventional Pain Consultants, or to ask about the referral process for an appointment with a board-certified pain management physician, please call us.
	</p>
	<ul class="mt-4">
		<li><strong>Phone:</strong> <a href="tel:+15034775205" class="text-blue-600 hover:underline">(503) 477-5205</a></li>
		<li><strong>Fax:</strong> <a href="fax:+18889724730" class="text-blue-600 hover:underline">(888) 972-4730</a></li>
		<li><strong>Email:</strong> <a href="mailto:painclinic@oripc.com" class="text-blue-600 hover:underline">painclinic@oripc.com</a></li>
	</ul>

	<h2 class="text-xl font-bold mt-8 mb-4">New Patients</h2>
	<p>
		In preparing for your upcoming appointment, ease your check-in process by completing our forms ahead of time. Please bring a copy of each completed form to your appointment.
	</p>
	<ul class="list-disc pl-5 mt-4">
		<li><a href="/docs/patient_responsibility_form.pdf" class="text-blue-600 hover:underline">Patient Responsibility Form</a></li>
		<li><a href="/docs/consultation_questionnaire.pdf" class="text-blue-600 hover:underline">Consultation Questionnaire</a></li>
		<li><a href="/docs/verbal_release_for_new_patients.pdf" class="text-blue-600 hover:underline">Verbal Release for New Patients</a></li>
		<li><a href="/docs/financial_policy_form.pdf" class="text-blue-600 hover:underline">Financial Policy Form</a></li>
		<li><a href="/docs/hipaa_acknowledgement.pdf" class="text-blue-600 hover:underline">HIPAA Acknowledgement</a></li>
		<li><a href="/docs/notice_of_privacy_practices.pdf" class="text-blue-600 hover:underline">Notice of Privacy Practices</a></li>
		<li><a href="/docs/records_release_form.pdf" class="text-blue-600 hover:underline">Records Release Form</a></li>
		<li><a href="/docs/driving_directions.pdf" class="text-blue-600 hover:underline">Driving Directions</a></li>
	</ul>

	<h2 class="text-xl font-bold mt-8 mb-4">Current Patients</h2>
	<ul class="list-disc pl-5 mt-4">
		<li><a href="/docs/follow_up_form.pdf" class="text-blue-600 hover:underline">Follow Up Form for Current Patients</a></li>
	</ul>

	<h2 class="text-xl font-bold mt-8 mb-4">Providers</h2>
	<p>
		If you are a provider and want to refer a patient to Oregon IPC, please fill out the Doctor to Doctor Referral Form and fax demographics, chart notes, and imaging to the fax number listed above.
	</p>
	<ul class="list-disc pl-5 mt-4">
		<li><a href="/docs/doctor_to_doctor_referral_form.pdf" class="text-blue-600 hover:underline">Doctor to Doctor Referral Form</a></li>
	</ul>
</section>