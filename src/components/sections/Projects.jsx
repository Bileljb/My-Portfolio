import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    {/* Grid Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Task Manager */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold mb-2">Task Manager</h3>
                            <p className="text-gray-400 mb-4">A web app with JWT authentication, real-time notifications, and an admin dashboard.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Angular", "Express.js", "MongoDB"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a href="https://github.com/Bileljb/Task-manager" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">
                                View Project
                            </a>
                        </div>

                        {/* React Movie App */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold mb-2">React Movie App</h3>
                            <p className="text-gray-400 mb-4">A sleek, responsive movie app with real-time search and API integration.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a href="https://github.com/Bileljb/React-Movie-App" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
