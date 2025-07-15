<template>
  <main class="flex justify-center body">
    <!-- div to download -->
    <div class="bg-white w-[210mm] h-[297mm] px-[10mm] py-[5mm] flex flex-col">
      <div class="w-full flex justify-between">
        <div class="flex flex-col w-[65%]">
          <h1 class="text-[40px] text-[#1d4ed8] tracking-[-1px] leading-[100%] font-semibold">
            Siméon Azogbonon
          </h1>
          <h2 class="text-[16px] text-gray-700 font-semibold my-1">Full Stack Web Developer</h2>
          <p class="text-[12px] text-gray-700 w-[85%] font-normal">
            Web Developer with 2 years of experience, I am passionate about web technologies and
            Artificial Intelligence, a field in which I wish to specialize through a master's
            degree.
          </p>
        </div>

        <div class="flex items-center w-[30%]">
          <div class="flex flex-col text-[12px] text-gray-700">
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
              title="Phone number"
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
            <span>Abomey-Calavi, Republic of Benin</span>
          </div>
        </div>
      </div>

      <div class="w-full flex justify-between mt-4">
        <div class="flex flex-col w-[65%]">
          <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
            Professional Experience
          </h2>

          <!-- TOK Services -->
          <div class="mt-3 flex flex-col">
            <div class="flex flex-col">
              <div class="flex justify-between text-[13px] font-semibold text-gray-800">
                <span>Full Stack Developer – <span class="text-[#1d4ed8]">TOK SERVICES</span></span>
                <span class="italic text-gray-600 font-normal text-[12px]"
                  >June 2024 – June 2025</span
                >
              </div>
              <div class="text-[12px] text-gray-600">Agla, Cotonou, Benin</div>
            </div>

            <div class="flex flex-col mt-2.5">
              <h5 class="text-[13px] text-gray-700 font-bold">Key Projects</h5>
              <!-- Iryka -->
              <div class="flex flex-col mt-1">
                <div class="text-gray-700 font-medium text-[15px]">
                  Application
                  <a
                    href="http://app.iryka.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Iryka"
                    >Iryka</a
                  >: Website generator using templates, e-commerce and appointment management –
                  <a
                    href="http://app.iryka.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 underline text-[12px]"
                    >view</a
                  >
                </div>

                <div class="flex flex-col space-y-1 mt-2 pl-3 text-[13px] text-gray-700">
                  <p>• Designed and developed the backend with NestJS, TypeORM and PostgreSQL</p>
                  <p>• Developed responsive front-end with Vue.js and TailwindCSS</p>
                  <p>• Implemented business logic for automatic website customization</p>
                  <p>• Integrated e-commerce features (catalog, cart, online payment)</p>
                  <p>
                    • Set up appointment management system (scheduling, booking and notifications)
                  </p>
                  <p>• Participated in overall architecture and technical decisions</p>
                  <p>• Supervised interns (task management, UI/UX validation, code review)</p>
                </div>
              </div>
              <!-- Panneau mobile -->
              <div class="flex flex-col mt-3">
                <div class="text-gray-700 font-medium text-[15px]">
                  Client management and portal application for
                  <a
                    href="http://panneaumobile.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Panneau Mobile Website"
                    >Panneau Mobile</a
                  >
                  –
                  <a
                    href="http://pige.panneaumobile.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 underline text-[12px]"
                    >view</a
                  >
                </div>

                <div class="flex flex-col space-y-1 mt-2 pl-3 text-[13px] text-gray-700">
                  <p>• Updated client services management system</p>
                  <p>• Developed user interfaces with Vue.js and TailwindCSS</p>
                  <p>
                    • Created management API for real-time geolocation of mobile advertising devices
                    with NestJS, TypeORM and PostgreSQL
                  </p>
                  <p>• Updated Panneau Mobile showcase website</p>
                </div>
              </div>

              <div class="mt-2 flex items-start space-x-1.5 text-[12px] text-gray-700 font-normal">
                <span class="font-semibold mr-1">Reference:</span>
                <p class="font-normal text-gray-700">
                  Mr. Cédric TOKPONSI • CEO TOK SERVICES (<a href="tel:+2290167790998"
                    >+229 01 67 79 09 98</a
                  >)
                </p>
              </div>
            </div>
          </div>

          <!-- Euphorbia Group -->
          <div class="mt-5 flex flex-col">
            <div class="flex flex-col">
              <div class="flex justify-between text-[13px] font-semibold text-gray-800">
                <span
                  >Web Developer Intern – <span class="text-[#1d4ed8]">EUPHORBIA GROUP</span></span
                >
                <span class="italic text-gray-600 font-normal text-[12px]"
                  >March 2023 – March 2024</span
                >
              </div>
              <div class="text-[12px] text-gray-600">Scoa Gbeto, Cotonou, Benin</div>
            </div>

            <div class="flex flex-col mt-3">
              <h5 class="text-[13px] text-gray-700 font-bold">Key Projects</h5>
              <!-- AEP Parakou -->
              <div class="flex flex-col mt-1">
                <div class="text-gray-700 font-medium text-[15px]">
                  Water supply management application for the Municipality of Parakou –
                  <a
                    href="https://aep.parakou.bj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 underline text-[12px]"
                    >view</a
                  >
                </div>
                <div class="text-gray-700 font-medium text-[15px] mt-1">
                  Private school management application
                  <a
                    href="https://axena.euphorbiagroup.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 underline text-[12px]"
                    >view</a
                  >
                </div>
                <div class="text-gray-700 font-medium text-[15px] mt-1">
                  Mutual insurance management application for Euphorbia Group
                </div>
                <div class="flex flex-col space-y-1 mt-2 pl-3 text-[13px] text-gray-700">
                  <p>• Integrated Vue.js templates to create user interfaces</p>
                  <p>• Consumed external APIs for data management</p>
                  <p>• Created APIs with NestJS and CodeIgniter, MySQL, MongoDB</p>
                </div>
              </div>
            </div>
            <div class="mt-2 flex items-start space-x-1.5 text-[12px] text-gray-700 font-normal">
              <span class="font-semibold mr-1">Reference:</span>
              <p class="font-normal text-gray-700">
                Mr. Habib DONOU • Head of Information Systems Department at Euphorbia Group (<a
                  href="tel:+2290197283688"
                  >+229 01 97 28 36 88</a
                >)
              </p>
            </div>
          </div>
        </div>

        <div class="w-[30%]">
          <div class="flex flex-col">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25px] leading-[100%] font-semibold">
              Education
            </h2>

            <div class="mt-1 flex flex-col">
              <div class="flex justify-between">
                <div class="text-gray-700 font-semibold text-[12px]">
                  Bachelor's Degree in Computer Science
                </div>
                <div class="text-[12px] text-gray-500 italic">2022</div>
              </div>
              <p class="text-[12px] text-gray-700 font-normal">
                Haute École de Management et de Commerce (HECM)
              </p>
            </div>

            <div class="mt-1 flex flex-col">
              <div class="flex justify-between">
                <div class="text-gray-700 font-semibold text-[12px]">
                  Back End Development and APIs
                </div>
                <div class="text-[12px] text-gray-500 italic">2023</div>
              </div>
              <p class="text-[12px] text-gray-700 font-normal">
                freeCodeCamp –
                <a
                  href="https://www.freecodecamp.org/certification/simeon_azogbonon/back-end-development-and-apis"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 underline"
                  >view</a
                >
              </p>
            </div>

            <div class="mt-1 flex flex-col">
              <div class="flex justify-between">
                <div class="text-gray-700 font-semibold text-[12px]">API Design</div>
                <div class="text-[12px] text-gray-500 italic">2025</div>
              </div>
              <p class="text-[12px] text-gray-700 font-normal">API Academy</p>
            </div>
          </div>

          <div class="flex flex-col mt-4">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
              Skills
            </h2>

            <div class="mt-2 flex flex-col">
              <h3 class="text-gray-700 font-semibold text-[13px]">Technical Skills</h3>
              <div class="mt-1 flex flex-col space-y-1.5 text-[12.5px] text-gray-700 font-normal">
                <p>• Designed web interfaces from Figma mockups</p>
                <p>• Developed frontend with Vue.js, Nuxt.js and TailwindCSS</p>
                <p>• Created and integrated REST APIs with Node.js and NestJS</p>
                <p>• Manipulated databases with PostgreSQL (TypeORM) and MongoDB (Mongoose)</p>
                <p>• Used version control and collaborated with Git, GitHub, GitLab</p>
                <p>• Implemented CI/CD workflows with GitHub Actions</p>
                <p>• Wrote technical documentation with Swagger and Postman</p>
                <p>• Used tools: VS Code, Cursor, Docker</p>
                <p>• Deployed on Netlify and Vercel</p>
                <p>• Mastered languages: JavaScript (ES6+), TypeScript, HTML5, CSS3</p>
              </div>
            </div>

            <div class="flex flex-col mt-2">
              <h3 class="text-gray-700 font-semibold text-[13px]">Soft Skills</h3>
              <div class="mt-1 flex flex-col space-y-1 text-[12.5px] text-gray-700 font-normal">
                <p>• Problem solving</p>
                <p>• Teamwork</p>
                <p>• Autonomy</p>
              </div>
            </div>

            <div class="flex flex-col mt-2">
              <h3 class="text-gray-700 font-bold text-[13px]">Language Skills</h3>
              <div class="mt-1 flex flex-col space-y-1 text-[12.5px] text-gray-700 font-normal">
                <p>• French: fluent (native)</p>
                <p>• English: intermediate level (B1)</p>
              </div>
            </div>
          </div>

          <div class="flex flex-col mt-4">
            <h2 class="text-[15px] text-[#1d4ed8] tracking-[-0.25 px] leading-[100%] font-semibold">
              Hobbies
            </h2>
            <div class="mt-1 flex flex-col space-y-1 text-[12.5px] text-gray-700 font-normal">
              <p>• Music production</p>
              <p>• Reading</p>
              <p>• Technology watch and IT news</p>
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
