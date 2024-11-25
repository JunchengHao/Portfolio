import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100`}
    >
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-gray-100 shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          <h1 className="text-xl font-bold">Juncheng Hao</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#summary" className="hover:text-blue-400">Summary</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-400">Skills</a>
            </li>
            <li>
              <a href="#education" className="hover:text-blue-400">Education</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400">Projects</a>
            </li>
            <li>
              <a href="#experience" className="hover:text-blue-400">Experience</a>
            </li>
            <li>
              <a href="#languages" className="hover:text-blue-400">Languages</a>
            </li>
          </ul>
          {/* Download CV Button */}
          <a
            href="/Juncheng_cv.pdf"
            download="Juncheng_cv.pdf"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            Download CV
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 px-8 sm:px-20 space-y-12">
        {/* Professional Summary */}
        <section id="summary" className="mt-8">
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Professional Summary</h2>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <p className="text-lg">
              Motivated Computer Science student with strong proficiency in Python, Java, and web
              development. Experienced in developing and optimizing algorithms, as well as creating
              robust software solutions. Passionate about learning new technologies and contributing
              to open-source projects. Seeking an internship or entry-level software developer role
              to apply my technical skills and collaborative mindset in a fast-paced, innovative
              environment.
            </p>
          </div>
        </section>

        {/* Technical Skills */}
        <section id="skills">
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Individual Skill Cards */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Programming Languages</h3>
              <ul className="list-disc pl-5">
                <li>Java</li>
                <li>Python</li>
                <li>Swift</li>
                <li>C#</li>
                <li>JavaScript</li>
              </ul>
            </div>
            {/* Add remaining skill sections similar to the provided image */}
          </div>
        </section>

        {/* Education */}
        <section id="education">
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-purple-400">DEP of Computer Science</h3>
              <p>Lasalle College, Montreal, Canada (Jan 2023 - May 2025)</p>
              <p className="text-gray-400 mt-2">
                Relevant Coursework: Object-Oriented Programming, Software Development Lifecycle,
                Database Systems, Computer Networks, Web Development
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-purple-400">DVS of Graphic Design</h3>
              <p>Saint Pius X Career Centre, Montreal, Canada (Sep 2016 - Sep 2017)</p>
              <p className="text-gray-400 mt-2">
                Fundamentals of design, typography, color theory, and composition.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Projects</h2>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-purple-400">Kids Game Website – Lead Developer</h3>
            <p className="text-gray-400 mt-2">
              <strong>Technologies:</strong> PHP, CSS, HTML, JavaScript, SQL
            </p>
            <p className="mt-2">
              Developed a children&apos;s gaming website, leading a small team to create responsive
              designs and manage secure databases. Ensured timely project delivery while optimizing
              performance and scalability.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-purple-400">Graphic Designer</h3>
              <p>MengChengHui, Montréal, QC (May 2017 - Aug 2017)</p>
              <p className="text-gray-400 mt-2">
                Proficient in Adobe Creative Suite, including Adobe Photoshop and InDesign.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-purple-400">Computer Store Manager</h3>
              <p>Kingpaq Computer Store, Verdun, QC (May 2018 - Jul 2022)</p>
              <p className="text-gray-400 mt-2">
                Provided technical support and resolved hardware and software issues.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-purple-400">Export Manager</h3>
              <p>Yu Qilin Textile Agricultural Machine Co., China (Sep 2020 - Jul 2022)</p>
              <p className="text-gray-400 mt-2">
                Managed international sales and logistics for import/export processes.
              </p>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section id="languages">
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Languages</h2>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <ul className="list-disc pl-5">
              <li>English: Advanced</li>
              <li>French: Advanced</li>
              <li>Chinese (Mandarin): Native</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
