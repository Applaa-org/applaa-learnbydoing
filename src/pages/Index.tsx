import Header from '@/components/Header';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { BookOpen, Brain, Lightbulb, Rocket, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-100/50 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-semibold text-sm">
                <Zap className="w-4 h-4" />
                <span>Interactive Learning Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Master Concepts Through <span className="text-indigo-600">Action.</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                LearnByDoing transforms complex ideas into simple, interactive activities. 
                No long lectures—just hands-on tasks with instant feedback.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link to="/activities">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-7 text-lg rounded-2xl shadow-xl shadow-indigo-200 transition-all hover:scale-105">
                    <Rocket className="w-5 h-5 mr-2" />
                    Start Learning Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="px-8 py-7 text-lg rounded-2xl border-gray-200 hover:bg-gray-50">
                    How it Works
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gray-50/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-indigo-600" />,
                  title: "Active Recall",
                  description: "Strengthen your memory by solving problems instead of just reading about them."
                },
                {
                  icon: <Zap className="w-8 h-8 text-purple-600" />,
                  title: "Instant Feedback",
                  description: "Know exactly why an answer is correct or incorrect the moment you submit it."
                },
                {
                  icon: <Lightbulb className="w-8 h-8 text-amber-600" />,
                  title: "Bite-sized Lessons",
                  description: "Complex subjects broken down into manageable, 2-minute interactive tasks."
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="mb-6 p-4 bg-gray-50 rounded-2xl inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-indigo-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="relative z-10 space-y-6">
                <ShieldCheck className="w-12 h-12 mx-auto text-indigo-300" />
                <h2 className="text-3xl font-bold">Educational Disclaimer</h2>
                <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl mx-auto">
                  LearnByDoing is designed for educational purposes only. While we strive for accuracy, 
                  always consult primary academic sources for critical research and formal education.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MadeWithApplaa />
    </div>
  );
};

export default Index;