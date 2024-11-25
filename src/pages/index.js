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
          <h1 className="text-xl font-bold">Juncheng Hao&apos;s portfolio</h1>
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
            href="portfolio_juncheng/public/Juncheng_cv.pdf"
            download="Juncheng_cv.pdf"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            Download CV
          </a>
        </div>
      </nav>
      
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Juncheng Hao</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Montreal, QC, Canada</p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/juncheng-hao-462828260/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/JunchengHao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            GitHub
          </a>
          <a
            href="mailto:Richardhao0629@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Richardhao0629@gmail.com
          </a>
          <p className="text-gray-600 dark:text-gray-400">514-549-9666</p>
        </div>
      </header>

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
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800 text-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Programming Languages</h3>
              <ul className="list-disc pl-5">
                <li>Java</li>
                <li>Python</li>
                <li>Swift</li>
                <li>C#</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-800 text-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Web Development</h3>
              <ul className="list-disc pl-5">
                <li>HTML, CSS, JavaScript</li>
                <li>jQuery</li>
                <li>PHP</li>
                <li>Django (Web Framework)</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-800 text-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Mobile Development</h3>
              <ul className="list-disc pl-5">
                <li>Android (Java, Kotlin)</li>
                <li>iOS (Swift)</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-800 text-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Database Management</h3>
              <ul className="list-disc pl-5">
                <li>SQL</li>
                <li>MySQL</li>
                <li>SQLite</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-800 text-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Tools & Frameworks</h3>
              <ul className="list-disc pl-5">
                <li>Android Studio</li>
                <li>Xcode</li>
                <li>Git, GitHub</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-800 text-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Operating Systems</h3>
              <ul className="list-disc pl-5">
                <li>Windows</li>
                <li>macOS</li>
                <li>Linux</li>
              </ul>
            </div>
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
            <h3 className="text-xl font-bold text-purple-400">Project Name</h3>
            <p className="text-gray-400 mt-2">
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
