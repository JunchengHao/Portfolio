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
          href="/Juncheng_cv.pdf"
          download="Juncheng_cv.pdf"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
        >
          Download CV
        </a>
      </div>
    </nav>

    {/* Main Content */}
    <div className="pt-20">
      <header className="text-center mb-12">
        {/* Portfolio Photo */}
        <div className="flex justify-center mb-4">
            <img
              src="/photo.jpg"
              alt="Juncheng Hao"
              className="w-52 h-52 rounded-full border-4 border-gray-700 shadow-lg"
            />
          </div>
        <h1 className="text-4xl font-bold mb-2">Juncheng Hao</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Montreal, QC, Canada</p>
        <div className="flex justify-center flex-col gap-4 mt-4">
  <div className="flex justify-center gap-4">
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
  </div>

  <div className="flex justify-center gap-4 mb-1">
    <a
      href="mailto:Richardhao0629@gmail.com"
      className="text-blue-600 dark:text-blue-400 hover:underline"
    >
      Richardhao0629@gmail.com
    </a>
    <a
      href="tel:5145499666"
      className="text-blue-600 dark:text-blue-400 hover:underline"
    >
      514-549-9666
    </a>
  </div>
</div>
      </header>
    </div>
      {/* Main Content */}
      <main className="pt-10 px-8 sm:px-20 space-y-6">
        {/* Professional Summary */}
        <section id="summary" className="mt-4">
          <h2 className="text-3xl font-semibold mb-1 text-blue-400">Professional Summary</h2>
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
    <h3 className="text-xl font-bold text-purple-400">Kids Game Website – Lead Developer</h3>
    <p className="text-gray-400 mt-2">
      <strong>Technologies:</strong> PHP, CSS, HTML, JavaScript, SQL
    </p>
    <p className="mt-2">
      Developed a children&apos;s gaming website, leading a small team to create responsive
      designs and manage secure databases. Ensured timely project delivery while optimizing
      performance and scalability.
    </p>
    <a href="https://github.com/zhiyu0617/php_Final_Project" target="_blank" rel="noopener noreferrer">
      <button className="mt-4 py-2 px-6 bg-purple-500 text-white rounded-lg hover:bg-purple-700 transition duration-300">View on GitHub</button>
    </a>
  </div>
  <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold text-purple-400">Restaurant Ordering App – Lead Developer</h3>
    <div className="mt-4">
      <img src="/app.jpg" alt="Restaurant Ordering App" className="w-full h-auto rounded-lg shadow-md"/>
    </div>
    <p className="text-gray-400 mt-2">
      <strong>Technologies:</strong> Node.js, Android, CSS, HTML, Stripe API, Firebase
    </p>
    <p className="mt-2">
      Developed a restaurant ordering Android app, leading the development of both merchant and customer sides
      of the platform. Integrated features such as product listing for merchants, order management, and secure
      payment processing using Stripe API. Utilized Firebase for real-time data updates and ensured a smooth,
      user-friendly experience. Managed the app&apos;s scalability, security, and performance to deliver a reliable and
      efficient solution.
    </p>
    <a href="https://github.com/YamadaElf1/Project-Android-Team-3" target="_blank" rel="noopener noreferrer">
      <button className="mt-4 py-2 px-6 bg-purple-500 text-white rounded-lg hover:bg-purple-700 transition duration-300">View on GitHub</button>
    </a>
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

        <section id="testimonials">
  <h2 className="text-3xl font-semibold mb-4 text-blue-400">Testimonials</h2>

  <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold text-purple-400">John – Peer</h3>
    <p className="text-gray-400 mt-2">
      &quot;I enjoyed working with Juncheng on the restaurant app. He is skilled, reliable, and always ready to help solve any problems.&quot;
    </p>
  </div>
  <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold text-purple-400">Professor Li – Mentor</h3>
    <p className="text-gray-400 mt-2">
      &quot;I&apos;ve seen Juncheng grow into a strong developer. His dedication and attention to detail make him a valuable team member.&quot;
    </p>
  </div>
</section>


      </main>
    </div>
  );
}
