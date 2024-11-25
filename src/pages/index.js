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
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
    >
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-gray-100 shadow-lg z-50">
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
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 px-8 sm:px-20 space-y-12">
        {/* Professional Summary */}
        <section id="summary" className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">Professional Summary</h2>
          <p className="text-lg">
            Motivated Computer Science student with strong proficiency in Python, Java, and web
            development. Experienced in developing and optimizing algorithms, as well as creating
            robust software solutions. Passionate about learning new technologies and contributing
            to open-source projects. Seeking an internship or entry-level software developer role to
            apply my technical skills and collaborative mindset in a fast-paced, innovative
            environment.
          </p>
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

        {/* Remaining Sections */}
        <section id="education">
          <h2 className="text-3xl font-semibold mb-4">Education</h2>
          {/* Add education details here */}
        </section>
        <section id="projects">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          {/* Add project details here */}
        </section>
        <section id="experience">
          <h2 className="text-3xl font-semibold mb-4">Experience</h2>
          {/* Add experience details here */}
        </section>
        <section id="languages">
          <h2 className="text-3xl font-semibold mb-4">Languages</h2>
          <ul className="list-disc pl-5">
            <li>English: Advanced</li>
            <li>French: Advanced</li>
            <li>Chinese (Mandarin): Native</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
