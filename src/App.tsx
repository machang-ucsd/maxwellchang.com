import { Linkedin, FileText } from "lucide-react";
import profilePhoto from "../maxwellchang.JPG";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-6 font-sans">
      <div className="max-w-xl w-full bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 p-5 sm:p-8 md:p-12 text-center space-y-6 sm:space-y-8">
        {/* Profile Picture */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto bg-gray-200 rounded-full overflow-hidden ring-4 ring-gray-50">
          <img
            src={profilePhoto}
            alt="Maxwell Chang"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1.5 sm:mb-2">
            Maxwell Chang
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Electrical Engineer @ Google
          </p>
        </div>

        {/* About */}
        <div className="text-left space-y-2">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-400">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            I'm a passionate electrical engineer with 3+ years of experience
            building enterprise servers. I love solving complex problems and
            defining new processes that help drive development.
          </p>
        </div>

        {/* My interests */}
        <div className="text-left space-y-2">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-400">
            My Interests
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            I enjoy working on high-performance hardware systems and following
            developments in cloud infrastructure and quantitative trading
            technology. I am especially interested in projects that push
            hardware performance, reliability, and scale.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
          <a
            href="https://linkedin.com/in/maxwell-chang"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="group inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white text-[#0A66C2] ring-1 ring-gray-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0A66C2] hover:text-white hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] focus-visible:ring-offset-2"
          >
            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:scale-110" />
          </a>
          <a
            href="maxwellchang.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="View Resume"
            title="View Resume"
            className="group inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gray-900 text-white ring-1 ring-gray-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
          >
            <FileText className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:scale-110" />
          </a>
        </div>
      </div>
    </div>
  );
}
