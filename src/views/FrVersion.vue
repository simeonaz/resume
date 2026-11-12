<template>
  <main class="flex justify-center body flex-col">
    <div class="flex justify-center mb-6 mt-4">
      <button
        @click="downloadPDF"
        :disabled="isGenerating"
        class="px-6 py-2 bg-[#1d4ed8] text-white font-semibold rounded-lg hover:bg-[#1540b0] transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {{ isGenerating ? 'Génération en cours…' : '📥 Télécharger en PDF' }}
      </button>
    </div>

    <div
      id="cv"
      class="bg-white w-[210mm] h-[297mm] px-[10mm] py-[12mm] flex flex-col overflow-hidden"
    >
      <!-- En-tête -->
      <header class="w-full flex justify-between items-start pb-3 border-b-2 border-[#1d4ed8]">
        <div class="flex flex-col w-[62%]">
          <h1 class="text-[36px] text-[#1d4ed8] tracking-[-1px] leading-[100%] font-semibold">
            Siméon Azogbonon
          </h1>
          <h2 class="text-[15px] text-gray-800 font-semibold mt-2">
            Développeur Full Stack · JavaScript / TypeScript
          </h2>
          <p class="text-[12.5px] text-gray-700 font-normal mt-2 leading-snug">
            3 ans d'expérience dans la conception d'applications web et d'APIs (Node.js, NestJS,
            Vue3, React). Étudiant en Master 2 Intelligence Artificielle et Big Data (ESGIS Bénin).
          </p>
        </div>

        <div class="flex flex-col text-[12px] text-gray-700 w-[34%] space-y-0.5 pt-1">
          <a href="mailto:simeonazogbonon@gmail.com" title="Email">✉ simeonazogbonon@gmail.com</a>
          <a href="tel:+2290153988208" title="Téléphone">☎ +229 01 53 98 82 08</a>
          <a href="http://github.com/simeonaz" target="_blank" rel="noopener noreferrer">
            ⌥ github.com/simeonaz
          </a>
          <a href="http://simeonaz.netlify.app/" target="_blank" rel="noopener noreferrer">
            ◎ simeonaz.netlify.app
          </a>
          <span>⌖ Abomey-Calavi, Bénin</span>
        </div>
      </header>

      <div class="w-full flex justify-between mt-4 flex-1 min-h-0">
        <!-- Colonne principale -->
        <div class="flex flex-col w-[66%]">
          <section>
            <h3 class="section-title">Expériences professionnelles</h3>
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
            <h3 class="section-title">Projets</h3>
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
            <h3 class="section-title">Formations</h3>
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

        <!-- Colonne latérale -->
        <aside class="w-[30%] flex flex-col">
          <section>
            <h3 class="section-title">Compétences techniques</h3>
            <div v-for="g in skills" :key="g.label" class="mt-2">
              <div class="text-[11.5px] font-semibold text-gray-800">
                {{ g.label }}
              </div>
              <div class="text-[12px] text-gray-700 leading-snug">{{ g.items }}</div>
            </div>
          </section>

          <section class="mt-4">
            <h3 class="section-title">Savoir-être</h3>
            <ul class="mt-2 space-y-0.5 text-[12px] text-gray-700">
              <li v-for="t in softSkills" :key="t" class="bullet">{{ t }}</li>
            </ul>
          </section>

          <section class="mt-4">
            <h3 class="section-title">Langues</h3>
            <ul class="mt-2 space-y-0.5 text-[12px] text-gray-700">
              <li class="bullet">Français : maîtrise (C2)</li>
              <li class="bullet">Anglais : intermédiaire (B1)</li>
            </ul>
          </section>

          <section class="mt-4">
            <h3 class="section-title">Loisirs</h3>
            <ul class="mt-2 space-y-0.5 text-[12px] text-gray-700">
              <li v-for="l in hobbies" :key="l" class="bullet">{{ l }}</li>
            </ul>
          </section>

          <section class="mt-4">
            <h3 class="section-title">Références</h3>
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
import { ref } from 'vue'
import html2canvas from 'html2canvas-pro'
import { jsPDF } from 'jspdf'

// ⚠️ Les valeurs entre [crochets] sont des placeholders à remplacer.
const experiences = [
  {
    role: 'Développeur Frontend',
    company: 'La pieuvre technologique',
    period: "oct. 2025 – aujourd'hui",
    location: 'Cotonou, Bénin',
    bullets: [
      "Développement d'interfaces en Vue.js 3 et TypeScript pour une application de <strong>gestion de l'état civil</strong> (ANIP).",
      "Développement frontend de <strong>Govethos</strong>, plateforme d'audit et de GRC (gouvernance, risques et conformité).",
    ],
  },
  {
    role: 'Développeur Full Stack',
    company: "Agence des Systèmes d'Information et du Numérique (ASIN)",
    period: 'juin 2026 – oct. 2026',
    location: 'Cotonou, Bénin',
    bullets: [
      "Développement de microservices et d'APIs REST en architecture n-tiers (NestJS, Vue.js) pour une <strong>application RH</strong> destinée aux agences gouvernementales, aux workflows adaptables.",
      "Mise en place du <strong>SSO</strong> (authentification unique) des agents via l'IdP gouvernemental et son annuaire LDAP.",
      'Intégration de la <strong>signature électronique via la PKI nationale</strong> pour sécuriser et authentifier les documents.',
      'Revue de code <strong>backend</strong> et responsabilité de la livraison de plusieurs <strong>modules développés</strong>.',
    ],
  },
  {
    role: 'Développeur Full Stack',
    company: 'TOK SERVICES',
    period: 'juin 2024 – juin 2025',
    location: 'Cotonou, Bénin',
    bullets: [
      "Développement d'<strong>applications SaaS</strong> et de <strong>systèmes de gestion client</strong> avec NestJS, PostgreSQL et Vue.js.",
      "Conception d'APIs de <strong>géolocalisation en temps réel</strong>.",
    ],
  },
  {
    role: 'Stagiaire Développeur Web',
    company: 'EUPHORBIA GROUP',
    period: 'mars 2023 – mai 2024',
    location: 'Cotonou, Bénin',
    bullets: [
      "Développement d'<strong>applications web d'entreprise</strong> avec Vue.js, NestJS et CodeIgniter.",
    ],
  },
]

const projects = [
  {
    name: 'Application RH des agences du Bénin',
    link: '',
    // description:
    //   'Application RH pour les agences gouvernementales.',
    stack: 'Stack : NestJS, Vue.js, PostgreSQL',
  },
  {
    name: "Plateforme de gestion de l'état civil (ANIP)",
    link: '',
    // description:
    //   "Application de gestion de l'état civil. Développement de l'interface utilisateur.",
    stack: 'Stack : Vue.js 3, TypeScript, TailwindCSS',
  },
  {
    name: 'Govethos',
    link: 'https://govethos.com',
    description: "Plateforme d'audit et de GRC (gouvernance, risques et conformité).",
    stack: 'Stack : Vue.js, TypeScript, TailwindCSS',
  },
]

const education = [
  {
    title: 'Master en Intelligence Artificielle et Big Data',
    period: "nov. 2025 – aujourd'hui",
    school: "École Supérieure de Gestion, d'Informatique et des Sciences (ESGIS)",
  },
  {
    title: 'Licence Pro. en Systèmes Informatiques et Logiciels',
    period: '2022',
    school: 'Haute École de Management et de Commerce (HECM)',
  },
  // {
  //   title: 'Certification Développement Back-end et APIs',
  //   period: '2023',
  //   school: 'freeCodeCamp',
  // },
]

const skills = [
  { label: 'Langages', items: 'JavaScript, TypeScript, Python, HTML5, CSS3' },
  { label: 'Frontend', items: 'Vue, Nuxt, React, TailwindCSS' },
  { label: 'Backend', items: 'NestJS, FastAPI' },
  // {
  //   label: 'IA & Big Data (Master)',
  //   items: '[Machine Learning, Deep Learning, scikit-learn, pandas, Spark]',
  // },
  { label: 'Bases de données', items: 'PostgreSQL, MySQL, MongoDB, Redis' },
  { label: 'Outils', items: 'Git, GitHub, GitLab, Docker, VS Code, Claude Code' },
]

const references = [
  {
    name: 'Donald ABLO',
    role: 'Directeur Général, La Pieuvre Technologique',
    phone: '+229 01 97 76 11 82',
    email: 'ablo3dv@gmail.com',
  },
  {
    name: 'Oscar GBADOU',
    role: 'Chef Service Ingénierie Logicielle, ASIN',
    phone: '+229 01 96 50 18 87',
    email: 'ogbadou@presidence.bj',
  },
]

const softSkills = ['Résolution de problèmes', 'Travail en équipe', 'Autonomie']
const hobbies = ['Actualités informatiques', 'Musique Assistée par Ordinateur', 'Lecture']

const isGenerating = ref(false)

const downloadPDF = async () => {
  const element = document.getElementById('cv')
  if (!element || isGenerating.value) return

  isGenerating.value = true

  try {
    await document.fonts.ready

    const scale = Math.min(4, Math.max(3, window.devicePixelRatio * 2))

    const canvas = await html2canvas(element, {
      scale,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      width: element.scrollWidth,
      height: element.scrollHeight,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
      scrollX: 0,
      scrollY: -window.scrollY,
    })

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    })

    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()

    pdf.addImage(canvas.toDataURL('image/png', 1), 'PNG', 0, 0, pageWidth, pageHeight)

    pdf.save('Simeon-Azogbonon-CV.pdf')
  } catch (error) {
    console.error('Erreur lors de la génération du PDF:', error)
    alert('Erreur lors de la génération du PDF')
  } finally {
    isGenerating.value = false
  }
}
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
