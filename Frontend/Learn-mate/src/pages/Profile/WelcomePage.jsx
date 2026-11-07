
import React from 'react';
import { Link } from 'react-router-dom';
import {
    BrainCircuit,
    FileText,
    MessageSquare,
    Layers,
    ClipboardCheck,
    ArrowRight,
    Sparkles
} from 'lucide-react';

const WelcomePage = () => {

    const features = [
        {
            icon: FileText,
            title: 'PDF Summaries',
            description: 'Turn lengthy study materials into short and easy-to-understand summaries.'
        },
        {
            icon: MessageSquare,
            title: 'AI Chat',
            description: 'Ask questions about your documents and get instant explanations.'
        },
        {
            icon: Layers,
            title: 'Flashcards',
            description: 'Generate flashcards automatically and improve your memory.'
        },
        {
            icon: ClipboardCheck,
            title: 'Smart Quizzes',
            description: 'Test your knowledge with AI-generated quizzes and explanations.'
        }
    ];

    return (
        <div className="min-h-screen bg-white text-slate-800">

            {/* Navbar */}
            <nav className="border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

                    <Link to="/" className="flex items-center gap-2">
                        <div className="p-2 rounded-xl bg-emerald-500">
                            <BrainCircuit className="text-white" size={24} />
                        </div>
                        <span className="text-xl font-bold text-slate-900">
                            Learn<span className="text-emerald-500">Mate</span>
                        </span>
                    </Link>

                    <div className="flex items-center gap-5">
                        <Link
                            to="/login"
                            className="text-sm font-semibold text-slate-600 hover:text-emerald-600"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="px-5 py-2.5 rounded-lg bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition"
                        >
                            Get Started
                        </Link>
                    </div>

                </div>
            </nav>

            {/* Hero */}
            <section className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium mb-7">
                    <Sparkles size={16} />
                    Your AI-powered learning companion
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight max-w-4xl mx-auto">
                    Learn smarter, not harder with
                    <span className="text-emerald-500"> LearnMate.</span>
                </h1>

                <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    Upload your study materials, chat with AI, create flashcards,
                    and practice with quizzes. Make learning easier, faster, and smarter.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-9">
                    <Link
                        to="/register"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition shadow-lg shadow-emerald-500/20"
                    >
                        Start Learning
                        <ArrowRight size={18} />
                    </Link>

                    <Link
                        to="/login"
                        className="px-7 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition"
                    >
                        I already have an account
                    </Link>
                </div>

            </section>

            {/* Features */}
            <section className="bg-slate-50 py-20 px-6">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">
                            Everything you need to learn
                        </h2>
                        <p className="text-slate-500 mt-3">
                            Powerful AI tools to make your learning journey easier.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition"
                            >
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                                    <feature.icon className="text-emerald-600" size={24} />
                                </div>

                                <h3 className="font-bold text-lg text-slate-900 mt-5">
                                    {feature.title}
                                </h3>

                                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 px-6 text-center">
                <h2 className="text-3xl font-bold text-slate-900">
                    Ready to make learning easier?
                </h2>

                <p className="text-slate-500 mt-3">
                    Start your journey with LearnMate today.
                </p>

                <Link
                    to="/register"
                    className="inline-flex items-center gap-2 mt-7 px-7 py-3.5 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
                >
                    Get Started <ArrowRight size={18} />
                </Link>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-100 py-6 px-6">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="font-bold text-slate-800">
                        Learn<span className="text-emerald-500">Mate</span>
                    </p>

                    <p className="text-sm text-slate-400">
                        © {new Date().getFullYear()} LearnMate. All rights reserved.
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default WelcomePage;
