import Link from "next/link";
import { DigitalTwinChat } from "./components/DigitalTwinChat";

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-black via-[#050505] to-black text-white">
            <div className="max-w-4xl mx-auto px-4 py-16 space-y-20">
                <header className="flex items-center justify-between text-xs md:text-sm text-gray-400">
                    <span className="uppercase tracking-[0.25em] text-gray-500">
                        Natalia Kaczyńska
                    </span>
                    <nav className="flex gap-4 md:gap-6">
                        <a
                            href="#about"
                            className="hover:text-gray-100 transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#career"
                            className="hover:text-gray-100 transition-colors"
                        >
                            Career
                        </a>
                        <a
                            href="#portfolio"
                            className="hover:text-gray-100 transition-colors"
                        >
                            Portfolio
                        </a>
                        <a
                            href="#digital-twin"
                            className="hover:text-gray-100 transition-colors"
                        >
                            Digital Twin
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-gray-100 transition-colors"
                        >
                            Contact
                        </a>
                    </nav>
                </header>
                <section id="hero" className="text-center px-6 py-10 md:py-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_18px_60px_rgba(0,0,0,0.65)]">
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4 md:mb-5 bg-gradient-to-r from-sky-400 via-emerald-400 to-purple-500 bg-clip-text text-transparent">
                        Natalia Kaczyńska
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 mb-4 md:mb-5">
                        Python &amp; AI developer
                    </p>

                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                        I create AI-based applications, chatbots, and RAG solutions. I focus on Python and language models, building systems that automate data processing and user communication.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/CV.pdf"
                            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white text-black px-6 py-2 text-sm font-medium shadow-sm hover:bg-gray-100 hover:border-white/40 hover:-translate-y-0.5 hover-shadow-[0_22px_70px_rgba(0,0,0,0.8)]  transition-transform transition-shdow transition-color"
                        >
                            Download CV
                        </a>
                        <a
                            href="#digital-twin"
                            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2 text-sm font-medium text-gray-200 hover:border-sky-400/60 hover:text-sky-300 hover:-translate-y-0.5 hover:bg-white/[0.03] transition-transform transition-color"
                        >
                            Ask my Digital Twin
                        </a>
                    </div>
                </section>

                <section
                    id="about"
                    className="grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] items-start"
                >
                    <div className="md:pt-1">
                        <h2 className="text-sm font-semibold uppercase tracking-[0.25rem] text-gray-400">About</h2>
                    </div>

                    <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                        <p>
                            I&apos;m a Python and AI developer focused on turning ideas into
                            working solutions. I enjoy designing systems that are not only
                            technically solid, but also intuitive for end users.
                        </p>
                        <p>
                            My core interests include large language models, retrieval-augmented
                            generation (RAG), and intelligent automation. I like working close
                            to real problems – from data processing pipelines to conversational
                            interfaces that feel natural and helpful.
                        </p>
                        <p>
                            Outside of coding I continuously explore new tools, papers, and
                            techniques in the AI space to keep my work modern, pragmatic, and
                            aligned with best practices.
                        </p>
                    </div>
                </section>

                <section
                    id="career"
                    className="grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] items-start"
                >
                    <div className="md:pt-1">
                        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
                            Career
                        </h2>
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-1">
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-400/80">
                                Current role
                            </p>
                            <p className="text-base md:text-lg font-medium text-gray-100">
                                Specialist at Central Laboratory of Radiological Protection
                            </p>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                I work in a radiological laboratory where I test the concentration of
                                radioactive plutonium in food and bottom sediments, and uranium in
                                water, aqueous sediments and urine using radiochemical methods. This
                                role has strengthened my attention to detail, data analysis skills and
                                rigorous, experiment‑driven approach.
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-400/80">
                                AI &amp; Python background
                            </p>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Since 2023 I have been learning programming, starting from the basics
                                (C++, HTML, PHP) and then developing towards Python and AI. I build
                                projects in the areas of chatbots, RAG solutions, LLMs, AI agents
                                and basic ML models, treating them as a way to turn theory into practical skills.
                            </p>
                        </div>

                        <div className="space-y-1">
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-400/80">
                                Next steps
                            </p>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                I&apos;m interested in roles and collaborations where I can
                                architect and implement AI solutions: from prototypes to
                                production-ready systems, ideally in environments that value
                                clean code, thoughtful UX, and continuous learning.
                            </p>
                        </div>
                    </div>
                </section>

                <section
                    id="portfolio"
                    className="grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] items-start"
                >
                    <div className="md:pt-1">
                        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
                            Portfolio
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                            I&apos;m curating a selection of AI and Python projects that show
                            how I design, build, and iterate on real-world solutions. Links
                            will appear here soon.
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-sky-400/40 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-transform transition-shadow transition-colors">
                                <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400/80 mb-1">
                                    Highlight project
                                </p>
                                <p className="text-sm text-gray-200">
                                    Placeholder for a key project – for example a chatbot,
                                    automation, or RAG app.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-sky-400/40 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-transform transition-shadow transition-colors">
                                <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400/80 mb-1">
                                    GitHub / demos
                                </p>
                                <p className="text-sm text-gray-200">
                                    Once ready, this card can link to your GitHub profile or live
                                    demos.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <DigitalTwinChat />

                <section
                    id="contact"
                    className="grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] items-start"
                >
                    <div className="md:pt-1">
                        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
                            Contact
                        </h2>
                    </div>
                    <div className="space-y-4">
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                            I&apos;m open to roles, collaborations, and interesting projects in
                            the Python &amp; AI space. The best way to reach me is via email.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <a
                                href="mailto:your.email@example.com"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-gray-100 hover:border-sky-400/60 hover:text-sky-300 transition"
                            >
                                natalia.kaczynska.programista@gmail.com
                            </a>
                            <div className="text-xs text-gray-500">
                                natalia.kaczynska.programista@gmail.com
                            </div>
                        </div>
                        <div className="text-xs text-gray-500 space-y-1">
                            <p>
                                Linkedin: <a href="https://www.linkedin.com/in/natalia-kaczy%C5%84ska-9673173a3/">https://www.linkedin.com/in/natalia-kaczy%C5%84ska-9673173a3/</a>
                                <br />
                                GitHub: <a href="https://github.com/NatKacz99">https://github.com/NatKacz99</a>
                                <br />
                                Website www: <a href="https://natalia-kaczynska.profesjonalnyprogramista.pl/en"> https://natalia-kaczynska.profesjonalnyprogramista.pl/en</a>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}