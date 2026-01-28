import Header from '@/components/Header';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { motion } from 'framer-motion';
import { BookOpen, Target, Users, ShieldCheck, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-black text-gray-900">
                Our Mission: <span className="text-indigo-600">Active Learning</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We believe that the best way to understand a concept is to interact with it. 
                LearnByDoing was built to bridge the gap between theory and practice.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why LearnByDoing?</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Traditional education often relies on passive consumption—reading textbooks or watching videos. 
                  Research shows that active recall and immediate application lead to significantly higher retention rates.
                </p>
                <ul className="space-y-4">
                  {[
                    "Interactive problem solving",
                    "Immediate feedback loops",
                    "Bite-sized conceptual chunks",
                    "Gamified progress tracking"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[3rem] rotate-3 absolute inset-0 -z-10 opacity-10"></div>
                <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100 space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Curated Content</h4>
                      <p className="text-gray-600">Every activity is designed to highlight a specific core concept.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-50 rounded-xl">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">User Centric</h4>
                      <p className="text-gray-600">Designed for learners of all ages with a focus on accessibility.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-50 rounded-xl">
                      <GraduationCap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Academic Rigor</h4>
                      <p className="text-gray-600">Concepts are based on standard educational curricula.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <ShieldCheck className="w-16 h-16 mx-auto text-gray-400" />
              <h2 className="text-3xl font-bold text-gray-900">Educational Disclaimer</h2>
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm text-left">
                <p className="text-gray-600 leading-relaxed mb-4">
                  LearnByDoing is an educational tool designed to supplement formal learning. While we make every effort to ensure the accuracy of our content, the information provided should not be considered a substitute for professional academic instruction or primary research sources.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The activities are simplified for conceptual clarity and may omit certain nuances of complex subjects for the sake of introductory learning.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MadeWithApplaa />
    </div>
  );
}