import React, { useState } from "react";
import {
  ShieldAlert,
  Terminal,
  Network,
  Lock,
  FileText,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";

function App() {
  const [activeCase, setActiveCase] = useState(null);
  return (
    <div className="min-h-screen bg-[#0a0f18] text-gray-300 font-sans selection:bg-cyan-500 selection:text-white">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <div className="flex items-center gap-3 text-white font-bold text-xl">
          {/* Custom WA Shield SVG directly embedded */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-8 h-8 md:w-10 md:h-10 drop-shadow-md"
          >
            {/* Dark background */}
            <rect width="100" height="100" rx="20" fill="#0a0f18" />
            {/* Cyan Shield Outline */}
            <path
              d="M50 15 L85 30 V50 C85 70 50 85 50 85 C50 85 15 70 15 50 V30 L50 15 Z"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="6"
              strokeLinejoin="round"
            />
            {/* WA Text */}
            <text
              x="50"
              y="60"
              fontFamily="Arial, sans-serif"
              fontSize="24"
              fontWeight="bold"
              fill="#ffffff"
              textAnchor="middle"
              letterSpacing="2"
            >
              WA
            </text>
          </svg>

          <a href="#home" className="hover:text-cyan-400 transition mt-1">
            Waliul<span className="text-cyan-400"> Alam</span>
          </a>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-semibold">
          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>
          <a href="#cases" className="hover:text-cyan-400 transition">
            Case Files
          </a>
          <a href="#experience" className="hover:text-cyan-400 transition">
            Experience
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>
        <a
          href={`${import.meta.env.BASE_URL}CV.pdf`}
          target="_blank"
          className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-md text-sm font-bold transition"
        >
          Download CV
        </a>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center py-32 px-4 relative overflow-hidden z-10"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <p className="text-cyan-400 font-mono tracking-widest text-sm mb-4">
          IT SECURITY & INFRASTRUCTURE LEADER
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          MD. WALIUL ALAM
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-8 font-light">
          Network Security • System Administration • IT Management
        </h2>
        <p className="max-w-2xl text-gray-400 mb-10">
          Results-driven IT Leader with 12+ years of experience in enterprise
          network security, Windows Server administration, and enterprise
          routing & switching. Proven track record of securing organizational
          assets through proactive risk mitigation and incident response.
        </p>
        <div className="flex gap-4">
          <a
            href="#cases"
            className="bg-cyan-600/30 hover:bg-cyan-900/30 text-cyan-400 px-6 py-3 rounded-md font-bold flex items-center gap-2 transition relative z-50 cursor-pointer"
          >
            <FileText size={18} /> View Case Files
          </a>
          <a
            href="https://github.com/waliul-alam"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-600 hover:border-cyan-400 text-white px-6 py-3 rounded-md font-bold flex items-center gap-2 transition relative z-50 cursor-pointer"
          >
            <Github size={18} /> GitHub Profile
          </a>
        </div>
      </section>

      {/* STATS DASHBOARD */}
      <section className="py-16 px-8 max-w-6xl mx-auto border-y border-gray-800 bg-[#0d1420]">
        <h2 className="text-center text-gray-500 font-mono tracking-widest text-sm mb-8">
          PORTFOLIO OVERVIEW
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 border border-gray-700 rounded-lg">
            <div className="text-4xl font-bold text-cyan-400 mb-2">12+</div>
            <div className="text-sm text-gray-400">Years IT Experience</div>
          </div>
          <div className="p-4 border border-gray-700 rounded-lg">
            <div className="text-4xl font-bold text-cyan-400 mb-2">3</div>
            <div className="text-sm text-gray-400">Security Case Files</div>
          </div>
          <div className="p-4 border border-gray-700 rounded-lg">
            <div className="text-4xl font-bold text-cyan-400 mb-2">40+</div>
            <div className="text-sm text-gray-400">Web Projects</div>
          </div>
          <div className="p-4 border border-gray-700 rounded-lg">
            <div className="text-4xl font-bold text-cyan-400 mb-2">
              Wireshark
            </div>
            <div className="text-sm text-gray-400">Primary Analysis Tool</div>
          </div>
        </div>
      </section>

      {/* CASE FILES (INVESTIGATIONS) */}
      <section id="cases" className="py-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-center text-gray-500 font-mono tracking-widest text-sm mb-2">
          CASE FILES
        </h2>
        <h3 className="text-center text-3xl font-bold text-white mb-12">
          Featured Security Investigations
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Case 1 */}
          <div className="bg-[#111827] border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition duration-300">
            <div className="flex justify-between items-center mb-4">
              <span className="text-cyan-400 font-mono text-xs">
                IR-2024-001
              </span>
              <span className="bg-yellow-900/50 text-yellow-500 text-xs px-2 py-1 rounded">
                Medium
              </span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              Wireless Security Audit
            </h4>
            <p className="text-sm text-gray-400 mb-6 h-20">
              Conducted WPA2 handshake capture and penetration testing using
              Kali Linux and Hashcat to evaluate wireless network resilience.
            </p>
            <div className="text-xs text-gray-500 mb-4 space-y-1 font-mono">
              <p>Status: Completed</p>
              <p>Platform: Kali Linux</p>
              <p>Category: Network Penetration</p>
            </div>
            <a
              href="https://github.com/waliul-alam/wireless-security-audit-lab"
              target="_blank"
              rel="noreferrer"
              className="block text-center bg-cyan-900/30 text-cyan-400 py-2 rounded hover:bg-cyan-800 transition"
            >
              View Write-up
            </a>
          </div>

          {/* Case 2 */}
          <div className="bg-[#111827] border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition duration-300">
            <div className="flex justify-between items-center mb-4">
              <span className="text-cyan-400 font-mono text-xs">
                IR-2024-002
              </span>
              <span className="bg-green-900/50 text-green-500 text-xs px-2 py-1 rounded">
                Low
              </span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              Windows Server Hardening
            </h4>
            <p className="text-sm text-gray-400 mb-6 h-20">
              Implemented Active Directory security policies, patch management,
              and access control protocols across enterprise Windows Server
              environments.
            </p>
            <div className="text-xs text-gray-500 mb-4 space-y-1 font-mono">
              <p>Status: Completed</p>
              <p>Platform: Windows Server</p>
              <p>Category: System Hardening</p>
            </div>
            <button
              onClick={() => setActiveCase("case2")}
              className="w-full block text-center bg-cyan-900/30 text-cyan-400 py-2 rounded hover:bg-cyan-800 transition"
            >
              View Details
            </button>
          </div>

          {/* Case 3 */}
          {/* Case 3 */}
          <div className="bg-[#111827] border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition duration-300">
            <div className="flex justify-between items-center mb-4">
              <span className="text-cyan-400 font-mono text-xs">
                IR-2024-003
              </span>
              {/* Changed Tag */}
              <span className="bg-green-900/50 text-green-500 text-xs px-2 py-1 rounded">
                Completed
              </span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              Enterprise CCTV Network
            </h4>
            <p className="text-sm text-gray-400 mb-6 h-20">
              Successfully configured and secured IP-based surveillance networks
              and biometric access control systems for a large educational
              institution.
            </p>
            <div className="text-xs text-gray-500 mb-4 space-y-1 font-mono">
              <p>Status: Delivered</p>
              <p>Platform: Physical Security</p>
              <p>Category: Infrastructure</p>
            </div>
            <button
              onClick={() => setActiveCase("case3")}
              className="w-full block text-center bg-cyan-900/30 text-cyan-400 py-2 rounded hover:bg-cyan-800 transition"
            >
              Read Report
            </button>
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section id="experience" className="py-24 px-8 max-w-5xl mx-auto">
        <h2 className="text-center text-gray-500 font-mono tracking-widest text-sm mb-2">
          MY CAREER OVERVIEW
        </h2>
        <h3 className="text-center text-3xl font-bold text-white mb-16">
          Professional Work Experience
        </h3>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-gray-700 ml-6 md:ml-12">
          {/* USTC */}
          <div className="mb-10 ml-8 relative">
            {/* Timeline Dot */}
            <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-[41px] top-2 border-4 border-[#0a0f18]"></div>
            <div className="bg-[#111827] border border-gray-700 p-6 rounded-xl hover:border-cyan-500 transition duration-300 w-full">
              <span className="text-cyan-400 font-mono text-xs mb-2 block">
                Jan 2026 - Oct 2026
              </span>
              <h4 className="text-xl font-bold text-white">
                Senior IT Executive
              </h4>
              <h5 className="text-gray-400 text-sm mb-3">
                University of Science and Technology Chittagong (USTC)
              </h5>
              <p className="text-sm text-gray-500">
                Administered enterprise IT operations, network security, and
                physical security systems including CCTV and access control.
              </p>
            </div>
          </div>

          {/* Self Employed */}
          <div className="mb-10 ml-8 relative">
            <div className="absolute w-4 h-4 bg-gray-500 rounded-full -left-[41px] top-2 border-4 border-[#0a0f18]"></div>
            <div className="bg-[#111827] border border-gray-700 p-6 rounded-xl hover:border-cyan-500 transition duration-300 w-full">
              <span className="text-gray-500 font-mono text-xs mb-2 block">
                Feb 2024 - Dec 2025
              </span>
              <h4 className="text-xl font-bold text-white">
                Self-Employed Frontend Developer
              </h4>
              <h5 className="text-gray-400 text-sm mb-3">
                GitHub (Open Source)
              </h5>
              <p className="text-sm text-gray-500">
                Developed 40+ responsive web applications using React.js and
                modern JavaScript frameworks.
              </p>
            </div>
          </div>

          {/* Kenpark */}
          <div className="mb-10 ml-8 relative">
            <div className="absolute w-4 h-4 bg-gray-500 rounded-full -left-[41px] top-2 border-4 border-[#0a0f18]"></div>
            <div className="bg-[#111827] border border-gray-700 p-6 rounded-xl hover:border-cyan-500 transition duration-300 w-full">
              <span className="text-gray-500 font-mono text-xs mb-2 block">
                Apr 2016 - Jan 2024
              </span>
              <h4 className="text-xl font-bold text-white">
                Senior Executive, IT
              </h4>
              <h5 className="text-gray-400 text-sm mb-3">
                Kenpark Bangladesh Apparel (Pvt.) Limited
              </h5>
              <p className="text-sm text-gray-500">
                Led IT teams, managed large-scale Cisco network infrastructure,
                and mitigated enterprise security risks for 8 years.
              </p>
            </div>
          </div>

          {/* Halishahar Cantonment */}
          <div className="mb-10 ml-8 relative">
            <div className="absolute w-4 h-4 bg-gray-500 rounded-full -left-[41px] top-2 border-4 border-[#0a0f18]"></div>
            <div className="bg-[#111827] border border-gray-700 p-6 rounded-xl hover:border-cyan-500 transition duration-300 w-full">
              <span className="text-gray-500 font-mono text-xs mb-2 block">
                Jan 2015 - Apr 2016
              </span>
              <h4 className="text-xl font-bold text-white">
                IT Trainer & Server Engineer
              </h4>
              <h5 className="text-gray-400 text-sm mb-3">
                Halishahar Cantonment Public School & College
              </h5>
              <p className="text-sm text-gray-500">
                Taught IT subjects, managed the school management system, and
                troubleshooted hardware, software, and networks.
              </p>
            </div>
          </div>

          {/* Summit Alliance Port */}
          <div className="ml-8 relative">
            <div className="absolute w-4 h-4 bg-gray-500 rounded-full -left-[41px] top-2 border-4 border-[#0a0f18]"></div>
            <div className="bg-[#111827] border border-gray-700 p-6 rounded-xl hover:border-cyan-500 transition duration-300 w-full">
              <span className="text-gray-500 font-mono text-xs mb-2 block">
                Jul 2012 - Oct 2014
              </span>
              <h4 className="text-xl font-bold text-white">
                Junior IT Executive
              </h4>
              <h5 className="text-gray-400 text-sm mb-3">
                Summit Alliance Port Limited
              </h5>
              <p className="text-sm text-gray-500">
                Provided technical support for networking, CCTV installation,
                and IT device configuration while supervising technicians.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-8 bg-[#0d1420] text-center">
        <h2 className="text-gray-500 font-mono tracking-widest text-sm mb-8">
          CORE SKILLS DEMONSTRATED
        </h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {[
            "Network Security",
            "Wireshark",
            "Nmap",
            "Hashcat",
            "Kali Linux",
            "Windows Server",
            "Active Directory",
            "Cisco Routing",
            "Incident Response",
            "Risk Mitigation",
            "React.js",
            "Tailwind CSS",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-semibold border border-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-8 text-center">
        <h2 className="text-gray-500 font-mono tracking-widest text-sm mb-2">
          CONTACT
        </h2>
        <h3 className="text-3xl font-bold text-white mb-6">Connect With Me</h3>
        <p className="max-w-2xl mx-auto text-gray-400 mb-8">
          I have 12+ years of experience in IT Infrastructure and Security. I am
          actively seeking SOC Analyst, IT Security, and IT Manager
          opportunities.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:oli.cste10@gmail.com"
            className="flex items-center gap-2 text-cyan-400 hover:text-white transition"
          >
            <Mail size={20} /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/waliulalam/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-cyan-400 hover:text-white transition"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://github.com/waliul-alam"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-cyan-400 hover:text-white transition"
          >
            <Github size={20} /> GitHub
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500 font-mono">
        <p>MD. Waliul Alam - IT Security & Infrastructure</p>
        <p>© 2026 All Rights Reserved</p>
      </footer>
      {/* MODALS FOR CASE 2 & 3 */}
      {activeCase && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-[#111827] border border-gray-700 rounded-xl p-8 max-w-2xl w-full relative">
            <button
              onClick={() => setActiveCase(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold"
            >
              ✕
            </button>

            {activeCase === "case2" && (
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  Windows Server Hardening (IR-2024-002)
                </h3>
                <p className="text-gray-300 mb-4">
                  In my role as Senior IT Executive, I implemented strict
                  security policies across multiple Windows Server (2008 R2 -
                  2019) environments.
                </p>
                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                  <li>
                    Enforced Group Policy Objects (GPOs) to restrict
                    unauthorized access.
                  </li>
                  <li>
                    Managed Active Directory user roles and permissions using
                    the Principle of Least Privilege.
                  </li>
                  <li>
                    Implemented automated patch management for critical security
                    updates.
                  </li>
                  <li>
                    Configured Windows Firewall rules to block malicious
                    traffic.
                  </li>
                </ul>
              </div>
            )}

            {activeCase === "case3" && (
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  Enterprise CCTV & Access Control (IR-2024-003)
                </h3>
                <p className="text-gray-300 mb-4">
                  Led the deployment and security configuration of physical
                  security infrastructure for the University of Science and
                  Technology Chittagong.
                </p>
                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                  <li>
                    Designed and deployed an IP-based CCTV surveillance network
                    across multiple buildings.
                  </li>
                  <li>
                    Integrated biometric attendance devices and IP-PABX systems
                    securely.
                  </li>
                  <li>
                    Segmented the CCTV network from the main office network to
                    prevent lateral movement by attackers.
                  </li>
                  <li>
                    Ensured compliance with institutional physical security
                    standards.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
