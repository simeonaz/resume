<template>
  <main class="flex justify-center body flex-col">
    <div class="flex justify-center mb-6 mt-4">
      <a
        :href="pdfUrl"
        download="Simeon-Azogbonon-Resume.pdf"
        class="px-6 py-2 bg-[#1d4ed8] text-white font-semibold rounded-lg hover:bg-[#1540b0] transition-colors duration-200 cursor-pointer"
      >
        📥 Download PDF
      </a>
    </div>

    <div
      id="cv"
      class="bg-white w-[210mm] h-[297mm] px-[10mm] py-[12mm] flex flex-col overflow-hidden"
    >
      <!-- Header -->
      <header class="w-full flex justify-between items-start pb-3 border-b-2 border-[#1d4ed8]">
        <div class="flex flex-col w-[62%]">
          <h1 class="text-[36px] text-[#1d4ed8] tracking-[-1px] leading-[100%] font-semibold">
            Siméon Azogbonon
          </h1>
          <h2 class="text-[15px] text-gray-800 font-semibold mt-2">
            Full Stack Developer · JavaScript / TypeScript
          </h2>
          <p class="text-[12.5px] text-gray-700 font-normal mt-2 leading-snug">
            3 years of experience designing web applications and APIs (Node.js, NestJS, Vue 3,
            React). Master's student in Artificial Intelligence and Big Data (ESGIS Benin).
          </p>
        </div>

        <div class="flex flex-col text-[12px] text-gray-700 w-[34%] space-y-0.5 pt-1">
          <a href="mailto:simeonazogbonon@gmail.com" title="Email">✉ simeonazogbonon@gmail.com</a>
          <a href="tel:+2290153988208" title="Phone">☎ +229 01 53 98 82 08</a>
          <a href="http://github.com/simeonaz" target="_blank" rel="noopener noreferrer">
            ⌥ github.com/simeonaz
          </a>
          <a href="http://simeonaz.netlify.app/" target="_blank" rel="noopener noreferrer">
            ◎ simeonaz.netlify.app
          </a>
          <span>⌖ Abomey-Calavi, Benin</span>
        </div>
      </header>

      <div class="w-full flex justify-between mt-4 flex-1 min-h-0">
        <!-- Main column -->
        <div class="flex flex-col w-[66%]">
          <section>
            <h3 class="section-title">Professional Experience</h3>
            <div v-for="exp in experiences" :key="exp.company" class="mt-2.5">
              <div
                class="flex justify-between items-baseline text-[12.5px] font-semibold text-gray-800"
              >
                <span>
                  {{ exp.role }} – <span class="text-[#1d4ed8]">{{ exp.company }}</span>
                </span>
                <span class="italic text-gray-500 font-normal text-[11.5px] whitespace-nowrap ml-2">
                  {{ exp.period }}
                </span>
              </div>
              <div class="text-[11.5px] text-gray-500">{{ exp.location }}</div>
              <ul class="mt-1 space-y-0.5 text-[12px] text-gray-700">
                <li v-for="b in exp.bullets" :key="b" class="bullet" v-html="b"></li>
              </ul>
            </div>
          </section>

          <section class="mt-4">
            <h3 class="section-title">Projects</h3>
            <div v-for="pr in projects" :key="pr.name" class="mt-2">
              <div
                class="flex justify-between items-baseline text-[12.5px] font-semibold text-gray-800"
              >
                <span>{{ pr.name }}</span>
                <span v-if="pr.link" class="text-[11px] text-[#1d4ed8] font-normal ml-2">{{
                  pr.link
                }}</span>
              </div>
              <p class="text-[12px] text-gray-700" v-html="pr.description"></p>
              <p class="text-[11px] text-gray-500 italic">{{ pr.stack }}</p>
            </div>
          </section>

          <section class="mt-4">
            <h3 class="section-title">Education</h3>
            <div v-for="f in education" :key="f.title" class="mt-2">
              <div class="flex justify-between items-baseline text-[12.5px]">
                <span class="text-gray-800 font-semibold">{{ f.title }}</span>
                <span class="text-[11.5px] text-gray-500 italic ml-2 whitespace-nowrap">
                  {{ f.period }}
                </span>
              </div>
              <p class="text-[12px] text-gray-600">{{ f.school }}</p>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <aside class="w-[30%] flex flex-col">
          <section>
            <h3 class="section-title">Technical Skills</h3>
            <div v-for="g in skills" :key="g.label" class="mt-2">
              <div class="text-[11.5px] font-semibold text-gray-800">
                {{ g.label }}
              </div>
              <div class="text-[12px] text-gray-700 leading-snug">{{ g.items }}</div>
            </div>
          </section>

          <section class="mt-4">
            <h3 class="section-title">Soft Skills</h3>
            <ul class="mt-2 space-y-0.5 text-[12px] text-gray-700">
              <li v-for="t in softSkills" :key="t" class="bullet">{{ t }}</li>
            </ul>
          </section>

          <section class="mt-4">
            <h3 class="section-title">Languages</h3>
            <ul class="mt-2 space-y-0.5 text-[12px] text-gray-700">
              <li class="bullet">French: proficient (C2)</li>
              <li class="bullet">English: intermediate (B1)</li>
            </ul>
          </section>

          <section class="mt-4">
            <h3 class="section-title">Hobbies</h3>
            <ul class="mt-2 space-y-0.5 text-[12px] text-gray-700">
              <li v-for="l in hobbies" :key="l" class="bullet">{{ l }}</li>
            </ul>
          </section>

          <section class="mt-4">
            <h3 class="section-title">References</h3>
            <div v-for="r in references" :key="r.name" class="mt-2 text-[11.5px] leading-snug">
              <div class="font-semibold text-gray-800">{{ r.name }}</div>
              <div class="text-gray-600">{{ r.role }}</div>
              <div class="text-gray-700">{{ r.phone }}</div>
              <div class="text-gray-700 break-all">{{ r.email }}</div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  </main>
</template>

<script setup>
const experiences = [
  {
    role: 'Frontend Developer',
    company: 'La pieuvre technologique',
    period: 'Oct. 2025 – present',
    location: 'Cotonou, Benin',
    bullets: [
      'Built Vue.js 3 and TypeScript interfaces for a <strong>civil registry management</strong> application (ANIP).',
      'Frontend development of <strong>Govethos</strong>, an audit and GRC (governance, risk and compliance) platform.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Agence des Systèmes d\'Information et du Numérique (ASIN)',
    period: 'June 2026 – Oct. 2026',
    location: 'Cotonou, Benin',
    bullets: [
      'Developed microservices and REST APIs in an n-tier architecture (NestJS, Vue.js) for an <strong>HR application</strong> serving government agencies.',
      'Implemented <strong>SSO</strong> (single sign-on) for civil servants through the government IdP and its LDAP directory.',
      'Integrated <strong>electronic signature through the national PKI</strong> to secure and authenticate documents.',
      '<strong>Backend</strong> code reviews and ownership of the delivery of several <strong>modules</strong>.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'TOK SERVICES',
    period: 'June 2024 – June 2025',
    location: 'Cotonou, Benin',
    bullets: [
      'Developed <strong>SaaS applications</strong> and <strong>client management systems</strong> with NestJS, PostgreSQL and Vue.js.',
      'Designed <strong>real-time geolocation</strong> APIs.',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'EUPHORBIA GROUP',
    period: 'Mar. 2023 – May 2024',
    location: 'Cotonou, Benin',
    bullets: [
      'Developed <strong>enterprise web applications</strong> with Vue.js, NestJS and CodeIgniter.',
    ],
  },
]

const projects = [
  {
    name: 'HR Application for Benin\'s Government Agencies',
    link: '',
    stack: 'Stack: NestJS, Vue.js, PostgreSQL',
  },
  {
    name: 'Civil Registry Management Platform (ANIP)',
    link: '',
    stack: 'Stack: Vue.js 3, TypeScript, TailwindCSS',
  },
  {
    name: 'Govethos',
    link: 'https://govethos.com',
    description: 'Audit and GRC (governance, risk and compliance) platform.',
    stack: 'Stack: Vue.js, TypeScript, TailwindCSS',
  },
]

const education = [
  {
    title: 'Master\'s Degree in Artificial Intelligence and Big Data',
    period: 'Nov. 2025 – present',
    school: 'École Supérieure de Gestion, d\'Informatique et des Sciences (ESGIS)',
  },
  {
    title: 'Professional Bachelor\'s Degree in Computer Systems and Software',
    period: '2022',
    school: 'Haute École de Management et de Commerce (HECM)',
  },
]

const skills = [
  { label: 'Languages', items: 'JavaScript, TypeScript, Python, HTML5, CSS3' },
  { label: 'Frontend', items: 'Vue, Nuxt, React, TailwindCSS' },
  { label: 'Backend', items: 'NestJS, FastAPI' },
  { label: 'Databases', items: 'PostgreSQL, MySQL, MongoDB, Redis' },
  { label: 'Tools', items: 'Git, GitHub, GitLab, Docker, VS Code, Claude Code' },
]

const references = [
  {
    name: 'Donald ABLO',
    role: 'Chief Executive Officer, La Pieuvre Technologique',
    phone: '+229 01 97 76 11 82',
    email: 'ablo3dv@gmail.com',
  },
  {
    name: 'Oscar GBADOU',
    role: 'Head of Software Engineering, ASIN',
    phone: '+229 01 96 50 18 87',
    email: 'ogbadou@presidence.bj',
  },
]

const softSkills = ['Problem solving', 'Teamwork', 'Autonomy']
const hobbies = ['IT news', 'Computer-assisted music production', 'Reading']

// Vector PDF generated by `npm run build:cv` (scripts/build-cv-pdf.mjs)
const pdfUrl = `${import.meta.env.BASE_URL}CV-Simeon-Azogbonon-EN.pdf`
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.body {
  font-family: 'Inter', sans-serif;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  font-size: 14px;
  line-height: 100%;
  font-weight: 600;
  color: #1d4ed8;
  letter-spacing: -0.25px;
  padding-bottom: 3px;
  border-bottom: 1px solid #dbe4fb;
}

.bullet::before {
  content: '•';
  margin-right: 5px;
  color: #1d4ed8;
}
</style>
