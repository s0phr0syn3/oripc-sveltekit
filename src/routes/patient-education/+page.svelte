<script lang="ts">
  import { generateTitle } from '$lib/utils';
</script>

<svelte:head>
  <title>{generateTitle('Patient Education')}</title>
</svelte:head>

<div class="bg-header text-white py-12 text-center">
  <h1 class="text-3xl font-bold">Patient Education</h1>
</div>

<section class="max-w-4xl mx-auto py-10 px-4 text-gray-700 leading-relaxed">
  <h2 class="text-xl font-bold mb-4">Educational Resources</h2>
  <p>
    At Oregon Interventional Pain Consultants, we are committed to providing our patients with comprehensive information to support their health and well-being. Below are valuable resources to help you understand pain management and the safe use of medications.
  </p>

  <ul class="list-disc pl-5 mt-4">
    <li>
      <a href="http://www.agencymeddirectors.wa.gov/Files/2015AMDGOpioidGuideline.pdf" target="_blank" class="text-blue-600 hover:underline">
        Washington State Opioid Guideline
      </a>
      <p class="text-sm text-gray-600">
        Guidelines from the Washington State Agency Medical Directors on opioid prescribing for pain management.
      </p>
    </li>
    <li class="mt-2">
      <a href="http://www.cdc.gov/mmwr/volumes/65/rr/pdfs/rr6501e1.pdf" target="_blank" class="text-blue-600 hover:underline">
        CDC Guideline for Prescribing Opioids for Chronic Pain
      </a>
      <p class="text-sm text-gray-600">
        Recommendations from the Centers for Disease Control and Prevention on opioid prescribing for chronic pain.
      </p>
    </li>
    <li class="mt-2">
      <a href="/docs/aha-patient-opioid-factsheet-a.pdf" target="_blank" class="text-blue-600 hover:underline">
        Prescription Opioids: What You Need To Know
      </a>
      <p class="text-sm text-gray-600">
        A fact sheet providing essential information about prescription opioids.
      </p>
    </li>
    <li class="mt-2">
      <a href="/docs/patient-ed-alcohol-and-opioids-2017.pdf" target="_blank" class="text-blue-600 hover:underline">
        Consuming Alcohol with Opioids
      </a>
      <p class="text-sm text-gray-600">
        Information on the risks of consuming alcohol while taking opioid medications.
      </p>
    </li>
    <li class="mt-2">
      <a href="/docs/patient-ed-benzodiazepines-and-opioids-2017.pdf" target="_blank" class="text-blue-600 hover:underline">
        Using Benzodiazepines with Opioids
      </a>
      <p class="text-sm text-gray-600">
        Guidance on the concurrent use of benzodiazepines and opioids.
      </p>
    </li>
  </ul>
</section>