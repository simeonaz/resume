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

    <div id="cv" class="bg-white w-[210mm] h-[297mm] px-[10mm] py-[12mm] flex flex-col">
      <div class="w-full flex justify-between">
        <div class="flex flex-col w-[65%]">
          <h1 class="text-[38px] text-[#1d4ed8] tracking-[-1px] leading-[100%] font-semibold">
            Siméon Azogbonon
          </h1>
          <h2 class="text-[16px] text-gray-700 font-semibold mt-2">Développeur Web Full Stack</h2>
          <p class="text-[12px] text-gray-700 w-[85%] font-normal mt-2">
            Développeur Web Full Stack spécialisé en JavaScript/TypeScript (Node.js, NestJS, Vue,
            React). <br />Etudiant en Master 1 en IA et Big Data.
          </p>
        </div>

        <div class="flex items-center w-[30%]">
          <div class="flex flex-col text-[13px] text-gray-700">
            <a
              href="mailto:simeonazogbonon@gmail.com"
              title="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              simeonazogbonon@gmail.com</a
            >
            <a
              href="tel:+2290153988208"
              title="Numéro de téléphone"
              target="_blank"
              rel="noopener noreferrer"
              >+229 01 53 98 82 08</a
            >
            <a
              href="http://github.com/simeonaz"
              title="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/simeonaz</a
            >
            <a
              href="http://simeonaz.netlify.app/"
              title="Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              simeonaz.netlify.app</a
            >
            <span>Abomey-Calavi, République du Bénin</span>
          </div>
        </div>
      </div>

      <div class="w-full flex justify-between mt-5">
        <div class="flex flex-col w-[65%]">
          <div class="flex flex-col">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
              Expériences professionnelles
            </h2>

            <div class="mt-3 flex flex-col">
              <div class="flex flex-col">
                <div class="flex justify-between text-[13px] font-semibold text-gray-800">
                  <span
                    >Développeur Frontend –
                    <span class="text-[#1d4ed8]">La Pieuvre Technologique</span></span
                  >
                  <span class="italic text-gray-600 font-normal text-[12px]"
                    >octobre 2025 – juin 2026</span
                  >
                </div>
                <div class="text-[12px] text-gray-600">Sikècodji, Cotonou, Bénin</div>
              </div>

              <div class="flex flex-col mt-2.5 space-y-1">
                <p class="text-[13px] text-gray-700">
                  Développement frontend (Vue.js 3, TypeScript) d'applications web modernes et
                  performantes.
                </p>
              </div>
            </div>

            <div class="mt-3 flex flex-col">
              <div class="flex flex-col">
                <div class="flex justify-between text-[13px] font-semibold text-gray-800">
                  <span
                    >Développeur Full Stack – <span class="text-[#1d4ed8]">TOK SERVICES</span></span
                  >
                  <span class="italic text-gray-600 font-normal text-[12px]"
                    >juin 2024 – juin 2025</span
                  >
                </div>
                <div class="text-[12px] text-gray-600">Agla, Cotonou, Bénin</div>
              </div>

              <div class="flex flex-col mt-2.5 space-y-1">
                <p class="text-[13px] text-gray-700">
                  Développement full stack (NestJS, PostgreSQL, Vue.js) d'applications SaaS, de
                  systèmes de gestion client et d'APIs de géolocalisation en temps réel.
                </p>
              </div>
            </div>

            <div class="mt-5 flex flex-col">
              <div class="flex flex-col">
                <div class="flex justify-between text-[13px] font-semibold text-gray-800">
                  <span
                    >Stagiaire Développeur Web –
                    <span class="text-[#1d4ed8]">EUPHORBIA GROUP</span></span
                  >
                  <span class="italic text-gray-600 font-normal text-[12px]"
                    >mars 2023 – mai 2024</span
                  >
                </div>
                <div class="text-[12px] text-gray-600">Scoa Gbeto, Cotonou, Bénin</div>
              </div>

              <div class="flex flex-col mt-3 space-y-1">
                <p class="text-[13px] text-gray-700">
                  Développement d'applications web d'entreprise (Vue.js, NestJS, CodeIgniter).
                </p>
              </div>
            </div>
          </div>

          <div class="mt-6 flex flex-col space-y-2">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25px] leading-[100%] font-semibold">
              Formations
            </h2>

            <div class="mt-1 flex flex-col space-y-2">
              <div class="flex justify-between">
                <div class="text-gray-700 font-semibold text-[12.5px]">
                  Master 1 en Intelligence Artificielle et Big Data
                </div>
                <div class="text-[12.5px] text-gray-500 italic">en cours</div>
              </div>
              <p class="text-[12.5px] text-gray-700 font-normal">ESGIS Bénin</p>
            </div>

            <div class="mt-1 flex flex-col space-y-2">
              <div class="flex justify-between">
                <div class="text-gray-700 font-semibold text-[12.5px]">
                  Licence Professionnelle en Systèmes Informatiques et Logiciels
                </div>
                <div class="text-[12.5px] text-gray-500 italic">2022</div>
              </div>
              <p class="text-[12.5px] text-gray-700 font-normal">
                Haute École de Management et de Commerce (HECM)
              </p>
            </div>

            <div class="mt-2 flex flex-col space-y-2">
              <div class="flex justify-between">
                <div class="text-gray-700 font-semibold text-[12.5px]">
                  Développement Back-end et APIs
                </div>
                <div class="text-[12.5px] text-gray-500 italic">2023</div>
              </div>
              <p class="text-[12.5px] text-gray-700 font-normal">
                freeCodeCamp
                <!-- – <a
                  href="https://www.freecodecamp.org/certification/simeon_azogbonon/back-end-development-and-apis"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 underline"
                  >voir</a
                > -->
              </p>
            </div>
          </div>

          <div class="mt-6 flex flex-col space-y-2">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25px] leading-[100%] font-semibold">
              Compétences techniques
            </h2>

            <div class="flex flex-col">
              <div class="mt-1 flex flex-col space-y-1.5 text-[13px] text-gray-700 font-normal">
                <p>• Langages de programmation: JavaScript/TypeScript, Python, HTML5, CSS3</p>
                <p>• Développement frontend avec Vue, Nuxt, React et TailwindCSS</p>
                <p>• Développement backend avec NestJS et FastAPI</p>
                <p>• Manipulation de bases de données PostgreSQL, MySQL, et MongoDB</p>
                <p>• Gestion de versions et collaboration avec Git, GitHub et GitLab</p>
                <p>• Outils: VS Code, Cursor, Docker, Claude AI, Antigravity</p>
                <p>• Rédaction de documentation technique</p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-[30%]">
          <div class="flex flex-col">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
              Compétences transversales
            </h2>

            <div class="flex flex-col mt-2">
              <div class="mt-1 flex flex-col space-y-1 text-[13px] text-gray-700 font-normal">
                <p>• Résolution de problèmes</p>
                <p>• Travail en équipe</p>
                <p>• Autonomie</p>
              </div>
            </div>
          </div>

          <div class="flex flex-col mt-5">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
              Langues
            </h2>
            <div class="mt-2 flex flex-col space-y-1 text-[13px] text-gray-700 font-normal">
              <p>• Français: courant (natif)</p>
              <p>• Anglais: niveau intermédiaire (B1)</p>
            </div>
          </div>

          <div class="flex flex-col mt-5">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
              Loisirs
            </h2>
            <div class="mt-2 flex flex-col space-y-1 text-[13px] text-gray-700 font-normal">
              <p>• Actualités informatiques</p>
              <p>• Production musicale</p>
              <p>• Lecture</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import html2canvas from 'html2canvas-pro'
import { jsPDF } from 'jspdf'

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
</style>
