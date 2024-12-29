<script lang="ts">
  export let physicians = [
    {
      name: 'Stuart Rosenblum',
      title: 'M.D., Ph.D.',
      education: [
        'Oregon Health Sciences University School of Medicine',
        'Board Certified in Pain Management',
      ],
      residency: 'University of Virginia School of Medicine',
      bio: 'Dr. Rosenblum opened the first Portland based Pain Clinic at Legacy Emanuel Hospital almost 20 years ago ' +
        'after completing his Ph.D. and M.D. in Oregon and his specialty training in anesthesia and pain medicine at ' +
        'the University of Virginia. He is involved with all aspects of pain management and has recently been focused ' +
        'on the development of an algorithm for the treatment of non-cancer pain, an assessment tool for breakthrough ' +
        'pain and a new risk assessment screening tool. Dr. Rosenblum is a frequent lecturer on topics including ' +
        'cancer and non-cancer pain. Some of his recent presentations have been for the Pain Society of Oregon, the ' +
        'Physicians for Medical Excellence and the Oregon Board of Medical Examiners.',
      image: '/images/stuart.jpg',
    },
  ];
</script>

<div class="bg-header text-white py-12 text-center">
  <h1 class="text-3xl font-bold">Our Physicians & Staff</h1>
</div>

<section class="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1">
  {#each physicians as physician}
    <div class="border p-4 rounded shadow-md flex flex-col items-center">
      <img
        src={physician.image}
        alt={`Picture of ${physician.name}`}
        class="w-64 h-64 rounded-full mb-4"
      />
      <h3 class="font-bold text-lg text-center">{physician.name}</h3>
      <p class="text-sm text-gray-600 text-center">{physician.title}</p>
      <h4 class="font-bold text-lg mt-4 text-center">Education</h4>
      <ul class="mt-4 text-gray-600 text-center">
        {#each physician.education as item}
          <li>{item}</li>
        {/each}
      </ul>
      <h4 class="font-bold text-lg mt-4 text-center">Residency</h4>
      <p class="mt-4 text-gray-700 text-center">{physician.residency}</p>
      <h4 class="font-bold text-lg mt-4 text-center">Bio</h4>
      <p class="mt-2 text-gray-700 text-center">{physician.bio}</p>
    </div>
  {/each}
</section>