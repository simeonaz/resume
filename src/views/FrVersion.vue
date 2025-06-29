<template>
  <main class="flex justify-center body">
    <div class="bg-white w-[210mm] h-[297mm] p-[10mm] flex flex-col">
      <div class="w-full flex justify-between">
        <div class="flex flex-col w-[60%]">
          <h1 class="text-[40px] text-[#1d4ed8] tracking-[-1px] leading-[100%] font-semibold">
            Siméon Azogbonon
          </h1>
          <p class="text-[12px] text-gray-700 w-[85%] font-normal mt-1">
            Développeur Full Stack (Node.js, Vue.js, Nuxt, NestJS, TailwindCSS) avec 2 ans
            d'expérience professionnelle.
          </p>
        </div>

        <div class="flex items-center w-[30%]">
          <div class="flex flex-col text-[11px] text-gray-700">
            <a
              href="mailto:simeonazogbonon@gmail.com"
              title="Email"
              target="_blank"
              rel="noopener noreferrer"
              >simeonazogbonon@gmail.com</a
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
              >github.com/simeonaz</a
            >
            <a
              href="http://simeonaz.netlify.app/"
              title="Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              >simeonaz.netlify.app</a
            >
            <span>Abomey-Calavi, Républque du Bénin</span>
          </div>
        </div>
      </div>

      <div class="w-full flex justify-between mt-5">
        <div class="flex flex-col w-[65%]">
          <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
            Expérience professionnelle
          </h2>

          <!-- TOK Services -->
          <div class="mt-3 flex flex-col">
            <div class="flex items-end space-x-1">
              <h4 class="text-[14px] text-gray-700 font-normal">Développeur Full Stack</h4>
              <span class="text-[10px] text-gray-700 mb-1">•</span>
              <a
                href="https://tok-services.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                title="Site web de Tok Services"
                class="text-[13px] text-gray-700 font-bold"
                >TOK SERVICES</a
              >
            </div>
            <div>
              <span class="text-[12px] text-gray-700 font-semibold">Agla, Cotonou, Bénin </span>
              <span class="text-[10px] text-gray-700 ml-2">juin 2024 - juin 2025</span>
            </div>

            <div class="flex flex-col mt-3">
              <h5 class="text-[13px] text-gray-700 font-bold">Projets clés</h5>
              <!-- Iryka -->
              <div class="flex flex-col mt-1">
                <div class="text-gray-700 font-normal text-[12.5px]">
                  Application
                  <a
                    href="http://app.iryka.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Iryka"
                    >Iryka</a
                  >
                  : Générateur de sites web à partir de templates, e-commerce et gestion de
                  rendez-vous
                </div>

                <div class="flex flex-col space-y-1 mt-2 pl-3">
                  <p class="text-[12px] text-gray-700">
                    • Conception et développement complet du backend de l'application Iryka
                    (architecture, sécurité) avec NestJS, TypeORM et PostgreSQL
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Implémentation de la logique métier pour la personnalisation automatique des
                    sites web
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Intégration des fonctionnalités e-commerce : gestion de catalogue, panier,
                    paiement en ligne
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Mise en place du système de gestion de rendez-vous : planification, prise et
                    notification
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Développement de la majeur partie du front-end avec intégration responsive
                    avec Vue.js 3 et TailwindCSS
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Encadrement d'une équipe de stagiaires et de designers (gestion des tâches,
                    validation UI/UX, revue de code)
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Participation à l'architecture globale et aux choix techniques
                  </p>
                </div>
              </div>
              <!-- Panneau mobile -->
              <div class="flex flex-col mt-3">
                <div class="text-gray-700 font-normal text-[12.5px]">
                  Application de gestion et espace client de
                  <a
                    href="http://panneaumobile.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Site web de Panneau Mobile"
                    >Panneau Mobile</a
                  >
                </div>

                <div class="flex flex-col space-y-1 mt-2 pl-3">
                  <p class="text-[12px] text-gray-700">
                    • Mise à jour du système de gestion des services clients
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Mise à jour du site vitrine de Panneau Mobile
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Développement d'interfaces utilisateurs avec Vue.js
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Création de l'API de gestion pour la géolocalisation en temps réel des
                    dispositifs publicitaires mobiles avec NestJS, TypeORM et PostgreSQL
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Développement du site vitrine de TOK SERVICES
                  </p>
                </div>
              </div>

              <!-- <div class="mt-2 flex items-start space-x-1.5 text-[12px] text-gray-700 font-normal">
                <span class="font-semibold mr-1">Référence:</span>
                <p class="font-medium text-gray-700">
                  M. Cédric TOKPONSI • DG TOK SERVICES & Panneau Mobile (<a
                    href="tel:+2290167790998"
                    >+229 01 67 79 09 98</a
                  >)
                </p>
              </div> -->
            </div>
          </div>

          <!-- Euphorbia Group -->
          <div class="mt-5 flex flex-col">
            <div class="flex items-end space-x-1">
              <h4 class="text-[14px] text-gray-700 font-normal">Stagiaire Développeur web</h4>
              <span class="text-[10px] text-gray-700 mb-1">•</span>
              <a
                href="https://euphorbiagroup.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Site web de Euphorbia Group"
                class="text-[13px] text-gray-700 font-bold"
                >Euphorbia Group</a
              >
            </div>
            <div>
              <span class="text-[12px] text-gray-700 font-semibold"
                >Scoa Gbeto, Cotonou, Bénin
              </span>
              <span class="text-[10px] text-gray-700 ml-2">mars 2023 - mars 2024</span>
            </div>

            <div class="flex flex-col mt-3">
              <h5 class="text-[13px] text-gray-700 font-bold">Projets clés</h5>
              <!-- AEP Parakou -->
              <div class="flex flex-col mt-1">
                <div class="text-gray-700 font-normal text-[12.5px]">
                  Application de gestion des ouvrages d'approvisionnement en eau potable de la
                  commune de Parakou
                </div>
                <div class="text-gray-700 font-normal text-[12.5px] mt-2">
                  Application de gestion d'une école privée
                </div>
                <div class="text-gray-700 font-normal text-[12.5px] mt-2">
                  Application de gestion de la mutuelle de Euphorbia Group
                </div>
                <div class="flex flex-col space-y-1 mt-2 pl-3">
                  <p class="text-[12px] text-gray-700">
                    • Intégration de templates Vue.js pour construire l'interface utilisateur de la
                    plateforme
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Consommation d'APIs externes pour la gestion des données
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Création d'APIs avec NestJS et CodeIgniter, MySQL, MongoDB
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 flex items-start space-x-1.5 text-[12px] text-gray-700 font-normal">
            <span class="font-semibold text-[13px]">Références :</span>
            <p class="font-medium text-gray-700">disponibles sur demande</p>
          </div>
        </div>

        <div class="w-[30%]">
          <div class="flex flex-col">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
              Formation
            </h2>

            <div class="mt-1 flex flex-col">
              <div class="text-gray-700 font-bold text-[12px]">
                Licence Professionnelle en Systèmes Informatiques et Logiciels
              </div>
              <p class="text-[12px] text-gray-700 font-normal">
                Obtenue en 2022, à la Haute Ecole de Management et de Commerce (HECM).
              </p>
            </div>
          </div>

          <div class="flex flex-col mt-3">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
              Certification
            </h2>

            <a
              href="https://www.freecodecamp.org/certification/simeon_azogbonon/back-end-development-and-apis"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-1"
              ><div class="text-gray-700 font-bold text-[12px]">Développement Back End et APIs</div>
              <p class="text-[12px] text-gray-700 font-normal">freeCodeCamp</p></a
            >
          </div>

          <div class="flex flex-col mt-3">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
              Compétences
            </h2>

            <div class="mt-2 flex flex-col">
              <div class="text-gray-700 font-bold text-[13px]">Compétences techniques</div>
              <div class="mt-1 flex flex-col">
                <p class="text-[12px] text-gray-700">
                  • Concevoir des interfaces web à partir de designs Figma
                </p>
                <p class="text-[12px] text-gray-700">
                  • Développer des applications frontend avec Vue.js / Nuxt et TailwindCSS
                </p>
                <p class="text-[12px] text-gray-700">
                  • Créer et intégrer des APIs REST avec Node.js et NestJS
                </p>
                <p class="text-[12px] text-gray-700">
                  • Gérer le versioning et collaborer avec Git, GitHub / GitLab
                </p>
                <p class="text-[12px] text-gray-700">
                  • Optimiser l’expérience utilisateur (UX) et la performance web
                </p>
                <p class="text-[12px] text-gray-700">
                  • Rédiger la documentation technique (Swagger, Postman)
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-col mt-2">
            <h3 class="text-gray-700 font-bold text-[13px]">Stack technique</h3>
            <div class="mt-1 flex flex-col space-y-1">
              <p class="text-[12px] text-gray-700 font-normal">
                • Langages : JavaScript (ES6+), TypeScript, HTML5, CSS3
              </p>
              <p class="text-[12px] text-gray-700 font-normal">
                • Frontend : Vue.js, Nuxt.js, TailwindCSS
              </p>
              <p class="text-[12px] text-gray-700 font-normal">
                • Backend : Express, NestJS, REST APIs
              </p>
              <p class="text-[12px] text-gray-700 font-normal">
                • Base de données : PostgreSQL, MongoDB
              </p>
              <p class="text-[12px] text-gray-700 font-normal">• ORM / ODM : TypeORM, Mongoose</p>
              <p class="text-[12px] text-gray-700 font-normal">
                • Outils & autres : VsCode, Cursor, Git, GitHub, GitLab, Postman, Swagger, Netlify,
                Vercel, Docker
              </p>
            </div>
          </div>

          <div class="flex flex-col mt-2">
            <h3 class="text-gray-700 font-bold text-[13px]">Compétences transversales</h3>
            <div class="mt-1 flex flex-col font-normal">
              <p class="text-[12px] text-gray-700">• Résolution de problèmes</p>
              <p class="text-[12px] text-gray-700">• Travail en équipe</p>
              <p class="text-[12px] text-gray-700">• Autonomie</p>
              <p class="text-[12px] text-gray-700">• Adaptabilité</p>
              <p class="text-[12px] text-gray-700">• Gestion du temps</p>
              <p class="text-[12px] text-gray-700">• Esprit critique</p>
            </div>
          </div>

          <div class="flex flex-col mt-2">
            <h3 class="text-gray-700 font-bold text-[13px]">Langues</h3>
            <div class="mt-1 flex flex-col font-normal">
              <p class="text-[12px] text-gray-700">• Français : courant (natif)</p>
              <p class="text-[12px] text-gray-700">• Anglais : niveau intermédiaire (B1)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.body {
  font-family: 'Inter', sans-serif;
}
</style>
