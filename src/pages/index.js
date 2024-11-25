import Image from "next/image";
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
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-8 sm:p-20`}
    >
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

      <main className="space-y-12">
        {/* Professional Summary */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
          <p>
            Motivated Computer Science student with strong proficiency in Python, Java, and web
            development. Experienced in developing and optimizing algorithms, as well as creating
            robust software solutions. Passionate about learning new technologies and contributing
            to open-source projects. Seeking an internship or entry-level software developer role to
            apply my technical skills and collaborative mindset in a fast-paced, innovative
            environment.
          </p>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 list-disc pl-5">
            <li>Python</li>
            <li>Java</li>
            <li>Swift</li>
            <li>C#</li>
            <li>JavaScript</li>
            <li>HTML/CSS/PHP</li>
            <li>Node.js</li>
            <li>MySQL</li>
            <li>Git</li>
            <li>Docker</li>
            <li>Adobe Photoshop/Illustrator/InDesign</li>
            <li>Agile/Scrum</li>
          </ul>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div>
            <h3 className="text-lg font-bold">DEP of Computer Science</h3>
            <p>Lasalle College, Montreal, Canada (Jan 2023 - May 2025)</p>
            <p className="text-gray-600 dark:text-gray-400">
              Relevant Coursework: Object-Oriented Programming, Software Development Lifecycle,
              Database Systems, Computer Networks, Web Development
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold">DVS of Graphic Design</h3>
            <p>Saint Pius X Career Centre, Montreal, Canada (Sep 2016 - Sep 2017)</p>
            <p className="text-gray-600 dark:text-gray-400">
              Fundamentals of design, typography, color theory, and composition.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div>
            <h3 className="text-lg font-bold">Kids Game Website – Lead Developer</h3>
            <p className="text-gray-600 dark:text-gray-400">
              PHP, CSS, HTML, JavaScript, SQL
            </p>
            <p>
              Developed a children's gaming website, leading a small team to create responsive
              designs and manage secure databases. Ensured timely project delivery while optimizing
              performance and scalability.
            </p>
          </div>
        </section>

        {/* Experiences */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Experiences</h2>
          <div>
            <h3 className="text-lg font-bold">Graphic Designer</h3>
            <p>MengChengHui, Montréal, QC (May 2017 - Aug 2017)</p>
            <p className="text-gray-600 dark:text-gray-400">
              Proficient in Adobe Creative Suite, including Adobe Photoshop and InDesign.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Computer Store Manager</h3>
            <p>Kingpaq Computer Store, Verdun, QC (May 2018 - Jul 2022)</p>
            <p className="text-gray-600 dark:text-gray-400">
              Provided technical support and resolved hardware and software issues.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Export Manager</h3>
            <p>Yu Qilin Textile Agricultural Machine Co., China (Sep 2020 - Jul 2022)</p>
            <p className="text-gray-600 dark:text-gray-400">
              Managed international sales and logistics for import/export processes.
            </p>
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Languages</h2>
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
