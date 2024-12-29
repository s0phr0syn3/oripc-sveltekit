<script lang="ts">
  import { generateTitle } from '$lib/utils';
</script>

<svelte:head>
  <title>{generateTitle('Contact Us')}</title>
</svelte:head>

<div class="bg-header text-white py-12 text-center">
  <h1 class="text-3xl font-bold">Contact Us</h1>
</div>

<section class="max-w-4xl mx-auto py-10 px-4 text-gray-700 leading-relaxed">
  <h2 class="text-xl font-bold mb-4">We're Here to Help</h2>
  <p>
    If you have any questions or need further information about our services, please feel free to reach out to us through any of the following methods:
  </p>

  <div class="mt-6">
    <h3 class="text-lg font-semibold">General Office Information</h3>
    <p><strong>Office Hours:</strong> 9:00am - 4:00pm, Monday through Thursday</p>
    <p><strong>Phone:</strong> <a href="tel:+15034775205" class="text-blue-600 hover:underline">(503) 477-5205</a></p>
    <p><strong>Fax:</strong> <a href="fax:+18889724730" class="text-blue-600 hover:underline">(888) 972-4730</a></p>
    <p><strong>Email:</strong> <a href="mailto:painclinic@oripc.com" class="text-blue-600 hover:underline">painclinic@oripc.com</a></p>
    <p class="text-sm text-gray-600 mt-2">*Note: Email communication is not secure; please do not send sensitive information via email.</p>
  </div>

  <div class="mt-6">
    <h3 class="text-lg font-semibold">Billing Contact Information</h3>
    <p><strong>Phone:</strong> <a href="tel:+18666222455" class="text-blue-600 hover:underline">(866) 622-2455 x150</a></p>
  </div>

  <div class="mt-6">
    <h3 class="text-lg font-semibold">Office Location</h3>
    <p>1849 NW Kearney, Suite 201<br>Portland, OR 97209</p>

    <!-- Embedded Google Map -->
    <div class="mt-4">
      <iframe
        title="Oregon Interventional Pain Consultants Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.3945287728254!2d-122.6932451!3d45.5292197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a063d92649d%3A0xe1b812d03209a785!2s1849%20NW%20Kearney%20St%20%23201%2C%20Portland%2C%20OR%2097209!5e0!3m2!1sen!2sus!4v1698169485365!5m2!1sen!2sus"
        width="100%"
        height="350"
        style="border:0;"
        allow="fullscreen"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>