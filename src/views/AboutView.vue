<template>
  <main class="flex justify-center body">
    <div class="bg-white w-[210mm] h-[297mm] p-[10mm] flex flex-col">
      <div class="w-full flex justify-between">
        <div class="flex flex-col w-[60%]">
          <h1 class="text-[40px] text-[#1d4ed8] tracking-[-1px] leading-[100%] font-semibold">
            Siméon Azogbonon
          </h1>
          <p class="text-[12px] text-gray-700 w-[85%] font-normal mt-1">
            Full Stack Developer specializing in JavaScript (Node.js, Vue.js, NestJS, TailwindCSS)
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
              title="Phone number"
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
          </div>
        </div>
      </div>

      <div class="w-full flex justify-between mt-5">
        <div class="flex flex-col w-[60%]">
          <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
            Professional Experience
          </h2>

          <!-- TOK Services -->
          <div class="mt-3 flex flex-col">
            <div class="flex items-end space-x-1">
              <h4 class="text-[14px] text-gray-700 font-normal">Full-Stack Web Developer & Lead</h4>
              <span class="text-[10px] text-gray-700 mb-1">•</span>
              <a
                href="https://tok-services.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                title="TOK Services Website"
                class="text-[13px] text-gray-700 font-bold"
                >TOK Services</a
              >
            </div>
            <div>
              <span class="text-[12px] text-gray-700 font-semibold">Agla, Cotonou, Benin</span>
              <span class="text-[10px] text-gray-700 ml-2">June 2024 - June 2025</span>
            </div>

            <div class="flex flex-col mt-3">
              <h5 class="text-[13px] text-gray-700 font-bold">Key Projects</h5>
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
                  >: Website generator using templates, e-commerce, and appointment management
                </div>

                <div class="flex flex-col space-y-1 mt-2 pl-3">
                  <p class="text-[12px] text-gray-700">
                    • Full back-end development (architecture, security) using NestJS, TypeORM,
                    PostgreSQL
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Implemented business logic for automatic website customization
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Integrated e-commerce features: catalog, cart, and online payment system
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Built appointment management system: scheduling, booking, and notifications
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Developed the majority of the front-end with responsive integration using
                    Vue.js 3 and TailwindCSS
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Supervised interns and designers (task management, UI/UX validation, code
                    review)
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Contributed to overall architecture and technical decision-making
                  </p>
                </div>
              </div>

              <!-- Panneau mobile -->
              <div class="flex flex-col mt-3">
                <div class="text-gray-700 font-normal text-[12.5px]">
                  Client management and portal application for
                  <a
                    href="http://panneaumobile.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Panneau Mobile Website"
                    >Panneau Mobile</a
                  >
                </div>

                <div class="flex flex-col space-y-1 mt-2 pl-3">
                  <p class="text-[12px] text-gray-700">
                    • Updated the client services management system
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Updated the Panneau Mobile showcase website
                  </p>
                  <p class="text-[12px] text-gray-700">• Developed user interfaces using Vue.js</p>
                  <p class="text-[12px] text-gray-700">
                    • Built API for real-time geolocation of mobile advertising devices using
                    NestJS, TypeORM, and PostgreSQL
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Developed the TOK Services showcase website
                  </p>
                </div>
              </div>

              <div class="mt-2 flex items-start space-x-1.5 text-[12px] text-gray-700 font-normal">
                <span class="font-semibold mr-1">Reference:</span>
                <p class="font-medium text-gray-700">
                  Mr. Cédric TOKPONSI • CEO of TOK Services & Panneau Mobile (<a
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
              <h4 class="text-[14px] text-gray-700 font-normal">Web Developer Intern</h4>
              <span class="text-[10px] text-gray-700 mb-1">•</span>
              <a
                href="https://euphorbiagroup.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Euphorbia Group Website"
                class="text-[13px] text-gray-700 font-bold"
                >Euphorbia Group</a
              >
            </div>
            <div>
              <span class="text-[12px] text-gray-700 font-semibold"
                >Scoa Gbeto, Cotonou, Benin</span
              >
              <span class="text-[10px] text-gray-700 ml-2">March 2023 - March 2024</span>
            </div>

            <div class="flex flex-col mt-3">
              <h5 class="text-[13px] text-gray-700 font-bold">Key Projects</h5>
              <div class="flex flex-col mt-1">
                <div class="text-gray-700 font-normal text-[12.5px]">
                  Water supply management application for the Municipality of Parakou
                </div>
                <div class="text-gray-700 font-normal text-[12.5px] mt-2">
                  Private school management application
                </div>
                <div class="text-gray-700 font-normal text-[12.5px] mt-2">
                  Mutual insurance management platform for Euphorbia Group
                </div>
                <div class="flex flex-col space-y-1 mt-2 pl-3">
                  <p class="text-[12px] text-gray-700">
                    • Integrated Vue.js templates for building the user interface
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Consumed external APIs for data management
                  </p>
                  <p class="text-[12px] text-gray-700">
                    • Created APIs with NestJS and CodeIgniter, using MySQL and MongoDB
                  </p>
                </div>
              </div>

              <div class="mt-2 flex items-start space-x-1.5 text-[12px] text-gray-700 font-normal">
                <span class="font-semibold mr-1">Reference:</span>
                <p class="font-medium text-gray-700">
                  Mr. Habib DONOU • Head of IT Department at Euphorbia Group (<a
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
              Skills
            </h2>

            <div class="mt-3 flex flex-col">
              <div class="text-gray-700 font-bold text-[13px]">Programming Languages</div>
              <p class="text-[12px] text-gray-700 font-normal">
                JavaScript (ES6+), TypeScript, HTML, CSS
              </p>
            </div>

            <div class="mt-3 flex flex-col">
              <div class="text-gray-700 font-bold text-[13px]">Tech Stack</div>
              <p class="text-[12px] text-gray-700 font-normal">
                NodeJS, Vue.js, TailwindCSS, NestJS, PostgreSQL, TypeORM, MongoDB, Mongoose, REST
                APIs
              </p>
            </div>

            <div class="mt-3 flex flex-col">
              <div class="text-gray-700 font-bold text-[13px]">Tools</div>
              <p class="text-[12px] text-gray-700 font-normal">
                Git, Github, Gitlab, Postman, Swagger, Figma, Framer Motion, Firebase, Docker,
                Netlify, Vercel, Trello
              </p>
            </div>
          </div>

          <div class="flex flex-col mt-5">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
              Education
            </h2>

            <div class="mt-3 flex flex-col">
              <div class="text-gray-700 font-bold text-[13px]">
                Haute Ecole de Commerce et de Management
              </div>
              <p class="text-[12px] text-gray-700 font-normal">
                Bachelor's Degree in Computer Science, obtained in 2022.
              </p>
            </div>
          </div>

          <div class="flex flex-col mt-5">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
              Certifications
            </h2>

            <a
              href="https://www.freecodecamp.org/certification/simeon_azogbonon/back-end-development-and-apis"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-3 flex flex-col"
            >
              <div class="text-gray-700 font-bold text-[13px]">freeCodeCamp</div>
              <p class="text-[12px] text-gray-700 font-normal">Back End Development and APIs</p>
            </a>
          </div>

          <div class="flex flex-col mt-5">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
              Interests
            </h2>

            <p class="mt-3 text-[12px] text-gray-700 font-normal">
              Tech watch and IT news, music production, reading, football
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
