import React, { useState } from 'react';
import Header from '@/components/Header';
import ActivityCard from '@/components/ActivityCard';
import { activities } from '@/data/activities';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { Progress } from '@/components/ui/progress';
import { Trophy, Sparkles, BrainCircuit } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { saveProgress } from '@/lib/api';

export default function Activities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentActivity = activities[currentIndex];
  const progress = ((currentIndex) / activities.length) * 100;

  const handleComplete = async (points: number) => {
    setScore(prev => prev + points);
    setCompletedCount(prev => prev + 1);
    
    try {
      await saveProgress({
        user_id: 'guest_user',
        activity_id: currentActivity.id,
        completed: true,
        score: points
      });
    } catch (error) {
      console.error('Failed to save progress:', error);
    }
  };

  const handleNext = () => {
    if (currentIndex < activities.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setCompletedCount(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {!isFinished ? (
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                <div className="space-y-1">
                  <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Current Progress</h2>
                  <div className="flex items-center gap-3">
                    <Progress value={progress} className="h-3 w-48 md:w-64 bg-indigo-100" />
                    <span className="text-sm font-bold text-gray-600">
                      {currentIndex + 1} of {activities.length}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Total Score</p>
                      <p className="text-lg font-bold text-gray-800">{score}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <BrainCircuit className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Completed</p>
                      <p className="text-lg font-bold text-gray-800">{completedCount}</p>
                    </div>
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ActivityCard 
                    activity={currentActivity} 
                    onComplete={handleComplete}
                    onNext={handleNext}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8 bg-white/80 backdrop-blur-md p-12 rounded-3xl shadow-2xl border border-white"
            >
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <Sparkles className="text-white w-12 h-12" />
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl font-black text-gray-900">Learning Journey Complete!</h2>
                <p className="text-xl text-gray-600 max-w-md mx-auto">
                  You've explored all the concepts for today. Your final score is a testament to your curiosity!
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                  <p className="text-sm text-indigo-600 font-bold uppercase mb-1">Final Score</p>
                  <p className="text-3xl font-black text-indigo-900">{score}</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                  <p className="text-sm text-purple-600 font-bold uppercase mb-1">Accuracy</p>
                  <p className="text-3xl font-black text-purple-900">
                    {Math.round((score / (activities.length * 100)) * 100)}%
                  </p>
                </div>
              </div>

              <button
                onClick={handleRestart}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-200 transition-all hover:scale-105 active:scale-95"
              >
                Start Over
              </button>
            </motion.div>
          )}
        </div>
      </main>
      
      <MadeWithApplaa />
    </div>
  );
}