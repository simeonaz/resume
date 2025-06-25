<template>
  <main class="flex justify-center body">
    <div class="bg-white w-[210mm] h-[297mm] p-[10mm] flex flex-col">
      <div class="w-full flex justify-between">
        <div class="flex flex-col w-[60%]">
          <h1 class="text-[40px] text-[#1d4ed8] tracking-[-1px] leading-[100%] font-semibold">
            Siméon Azogbonon
          </h1>
          <p class="text-[12px] text-gray-700 w-[85%] font-normal mt-1">
            Développeur JavaScript Full Stack (Node.js, Vue.js, Nuxt, NestJS, TailwindCSS) avec 02
            années d'expérience professionnelle.
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
              >+229 01 53 988 208</a
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
        <div class="flex flex-col w-[60%]">
          <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
            Expérience professionnelle
          </h2>

          <!-- TOK Services -->
          <div class="mt-3 flex flex-col">
            <div class="flex items-end space-x-1">
              <h4 class="text-[14px] text-gray-700 font-normal">Lead développeur full-stack</h4>
              <span class="text-[10px] text-gray-700 mb-1">•</span>
              <a
                href="https://tok-services.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                title="Site web de Tok Services"
                class="text-[13px] text-gray-700 font-bold"
                >TOK Services</a
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
                    • Conception et développement complet du back‑end de l'application Iryka
                    (architecture, sécurité) avec NestJS, TypeORM, PostgreSql
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
                    dispositifs publicitaires mobiles avec NestJS, TypeORM et PostgreSql
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Développement du site vitrine de TOK Services
                  </p>
                </div>
              </div>

              <div class="mt-2 flex items-start space-x-1.5 text-[12px] text-gray-700 font-normal">
                <span class="font-semibold mr-1">Référence:</span>
                <p class="font-medium text-gray-700">
                  M. Cédric TOKPONSI • DG TOK Services & Panneau Mobile (<a
                    href="tel:+2290167790998"
                    >+229 01 67 790 998</a
                  >)
                </p>
              </div>
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
                  Application de gestion des ouvrages d'approvisionnement en eau potable pour la
                  mairie de Parakou
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

              <!-- Environnement technique -->
              <!-- <div class="mt-2 flex items-start space-x-1.5 text-[12px] text-gray-700">
                <span class="font-semibold mr-1 w-[40%]">Environnement technique:</span>
                <p class="font-medium">Vue.js, Node.js, NestJS, MongoDB, PHP, CodeIgniter</p>
              </div> -->

              <div class="mt-2 flex items-start space-x-1.5 text-[12px] text-gray-700 font-normal">
                <span class="font-semibold mr-1">Référence:</span>
                <p class="font-medium text-gray-700">
                  M. Habib DONOU • Chef Département Systèmes d'informations à Euphorbia Group (<a
                    href="tel:+2290197283688"
                    >+229 01 97 283 688</a
                  >)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-[30%]">
          <div class="flex flex-col">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
              Compétences
            </h2>

            <div class="mt-2 flex flex-col">
              <div class="text-gray-700 font-bold text-[13px]">Langages de programmation</div>
              <p class="text-[12px] text-gray-700 font-normal">
                JavaScript (ES6+), TypeScript, HTML, CSS
              </p>
            </div>
            <div class="mt-2 flex flex-col">
              <div class="text-gray-700 font-bold text-[13px]">Stack technique</div>
              <p class="text-[12px] text-gray-700 font-normal">
                NodeJS, Vue.js, Nuxt, TailwindCSS, NestJS, PostgreSQL, TypeORM, MongoDB, Mongoose,
                APIs REST
              </p>
            </div>

            <div class="mt-2 flex flex-col">
              <div class="text-gray-700 font-bold text-[13px]">Outils</div>
              <p class="text-[12px] text-gray-700 font-normal">
                VsCode, Cursor, Git, Github, Gitlab, Postman, Swagger, Figma, Framer Motion, Stitch,
                Firebase, Docker, Netlify, Vercel, Trello
              </p>
            </div>

            <div class="mt-2 flex flex-col">
              <div class="text-gray-700 font-bold text-[13px]">Compétences supplémentaires</div>
              <p class="text-[12px] text-gray-700 font-normal">
                Design responsive, intégration de designs Figma
              </p>
            </div>
            <div class="mt-2 flex flex-col">
              <div class="text-gray-700 font-bold text-[13px]">Soft Skills</div>
              <p class="text-[12px] text-gray-700 font-normal">
                Résolution de problèmes, travail en équipe, autonomie, communication, adaptabilité,
                gestion du temps, attention aux détails
              </p>
            </div>
          </div>

          <div class="flex flex-col mt-3">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
              Projet(s) personnel(s)
            </h2>

            <a
              href="https://neith-security.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-2 flex flex-col"
              ><div class="text-gray-700 font-bold text-[13px]">Neith - vérificateur de lien</div>
              <p class="text-[12px] text-gray-700 font-normal">
                Application web développée avec Nuxt.js permettant d'évaluer la fiabilité d'un lien
                via l'API Google Safe Browsing.
              </p></a
            >
          </div>

          <div class="flex flex-col mt-3">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
              Formation
            </h2>

            <div class="mt-2 flex flex-col">
              <div class="text-gray-700 font-bold text-[13px]">
                Haute Ecole de Commerce et de Management
              </div>
              <p class="text-[12px] text-gray-700 font-normal">
                Licence Professionnelle en Systèmes Informatiques et Logiciels obtenue en 2022.
              </p>
            </div>
          </div>

          <div class="flex flex-col mt-3">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
              Certification(s)
            </h2>

            <a
              href="https://www.freecodecamp.org/certification/simeon_azogbonon/back-end-development-and-apis"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-2 flex flex-col"
              ><div class="text-gray-700 font-bold text-[13px]">freeCodeCamp</div>
              <p class="text-[12px] text-gray-700 font-normal">
                Back End Developpement and APIs
              </p></a
            >
          </div>

          <div class="flex flex-col mt-3">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
              Langues
            </h2>

            <div class="mt-2 flex flex-col">
              <div class="text-gray-700 font-bold text-[13px]">Français</div>
              <p class="text-[12px] text-gray-700 font-normal">Maîtrise professionnelle complète</p>
            </div>
            <div class="mt-2 flex flex-col">
              <div class="text-gray-700 font-bold text-[13px]">Anglais</div>
              <p class="text-[12px] text-gray-700 font-normal">Maîtrise professionnelle</p>
            </div>
          </div>

          <div class="flex flex-col mt-3">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
              Centres d'intérêt
            </h2>

            <p class="mt-2 text-[12px] text-gray-700 font-normal">
              Veille technologique et actualités informatiques, production musicale, lecture,
              football
            </p>
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
