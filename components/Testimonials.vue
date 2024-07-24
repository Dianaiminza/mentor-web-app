<template>
  <section class="bg-white">
 <div class="container">
  <div class="flex justify-center">
    <div class="tag ">Testimonials</div>
  </div>
<p>Transform Your Career: Join Our Cutting-Edge Mentorship Platform Today</p>
<p>Discover what sets our mentorship platform apart! With intuitive design and powerful features, it's the essential tool for experienced professionals and aspiring engineers worldwide. 
  See why thousands trust us to propel their careers forward. Start your journey today</p>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-1 mt-2">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="card">
          <p class="mt-4">{{ testimonial.text }}</p>
          <div class="flex items-center gap-2 mt-3">
            <img :src="testimonial.profilePic" alt="" class="rounded-full w-8 h-8"/>
<div class="flex flex-col">
  <h3 class="font-medium tracking-tight leading-5">{{ testimonial.name }}</h3>
  <p class=" leading-5 tracking-tight">@{{ testimonial.username }}</p>
</div>
</div>
 </div>
      </div>
<div>

</div>
 </div>   
  </section>
</template>

<script lang="ts" setup>

const testimonials = [
{
    profilePic: "/logo.svg",
    name: "Purity Lee",
    username: "purity201",
    text: "As a seasoned designer, I'm always on the lookout for innovative tools. This platform has truly elevated my skillset!"
  },
  {
    profilePic: "/logo.svg",
    name: "John Doe",
    username: "johndoe94",
    text: "Our team's productivity has skyrocketed since joining this mentorship platform. The guidance and insights are invaluable!"
  },
  {
    profilePic: "/logo.svg",
    name: "kamau kamau",
    username: "kamau94",
    text: "I was amazed at how quickly I progressed in my engineering skills after joining this mentorship platform. The personalized guidance and expert advice helped me tackle complex challenges with confidence."
  }
  ,
  {
    profilePic: "/logo.svg",
    name: "man weta",
    username: "manweta94",
    text: "As a software engineer, I found this mentorship platform instrumental in refining my coding skills. The personalized guidance on agile methodologies and software architecture boosted my productivity and code quality."
  },
  {
    profilePic: "/logo.svg",
    name: "kibet ",
    username: "kibetkibe",
    text: "Joining this mentorship platform was pivotal in my understanding of blockchain technology. The mentors' deep dives into decentralized applications and smart contracts gave me a competitive edge in this emerging field."
  },
  {
    profilePic: "/logo.svg",
    name: "mwangi ",
    username: "mwangi",
    text: "This platform provided invaluable mentorship in artificial intelligence. From neural networks to natural language processing, I received expert guidance that prepared me for cutting-edge AI projects."
  },
  {
    profilePic: "/logo.svg",
    name: "theuri ",
    username: "theuri",
    text: "The mentorship on cloud computing transformed my approach to infrastructure management. Learning from industry leaders, I gained practical skills in deploying scalable solutions on AWS and Azure."
  }
  ,
  {
    profilePic: "/logo.svg",
    name: "museveni ",
    username: "museveni",
    text: "Navigating the complexities of cybersecurity became clearer with the support I received here. The mentors' insights into threat detection and ethical hacking empowered me to secure critical systems effectively"
  },
  {
    profilePic: "/logo.svg",
    name: "ola ",
    username: "olajide1234",
    text: "This mentorship platform accelerated my journey in data science. The mentors' guidance in machine learning algorithms and data visualization techniques helped me land my dream job in analytics."
  },
  {
    profilePic: "/logo.svg",
    name: "ola ",
    username: "olajide1234",
    text: "This mentorship platform accelerated my journey in data science. The mentors' guidance in machine learning algorithms and data visualization techniques helped me land my dream job in analytics."
  }
]



</script>

<style>

</style>