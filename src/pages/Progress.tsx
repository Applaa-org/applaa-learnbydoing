import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { getProgress, UserProgress } from '@/lib/api';
import { activities } from '@/data/activities';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Calendar, CheckCircle2, Brain, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ProgressPage() {
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProgress() {
      try {
        const data = await getProgress('guest_user');
        setUserProgress(data);
      } catch (error) {
        console.error('Failed to load progress:', error);
      } finally {
        setLoading(false);
      }
    }
    loadProgress();
  }, []);

  const completedActivities = userProgress.filter(p => p.completed);
  const totalScore = userProgress.reduce((sum, p) => sum + p.score, 0);
  const averageScore = completedActivities.length > 0 
    ? Math.round(totalScore / completedActivities.length) 
    : 0;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-black text-gray-900">Your Learning Journey</h1>
              <p className="text-gray-600 text-lg">Track your achievements and mastered concepts.</p>
            </div>
            <Link to="/activities">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6">
                Continue Learning
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg bg-white rounded-3xl overflow-hidden">
              <CardContent className="p-8 flex items-center gap-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Total Score</p>
                  <p className="text-3xl font-black text-gray-900">{totalScore}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white rounded-3xl overflow-hidden">
              <CardContent className="p-8 flex items-center gap-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Completed</p>
                  <p className="text-3xl font-black text-gray-900">{completedActivities.length}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white rounded-3xl overflow-hidden">
              <CardContent className="p-8 flex items-center gap-6">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Avg. Accuracy</p>
                  <p className="text-3xl font-black text-gray-900">{averageScore}%</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-indigo-600" />
              Recent Achievements
            </h2>
            
            {loading ? (
              <div className="grid grid-cols-1 gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-24 bg-gray-200 animate-pulse rounded-2xl" />
                ))}
              </div>
            ) : userProgress.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {userProgress.map((record, i) => {
                  const activity = activities.find(a => a.id === record.activity_id);
                  if (!activity) return null;
                  
                  return (
                    <motion.div
                      key={record.id || i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center",
                          record.score === 100 ? "bg-green-50" : "bg-orange-50"
                        )}>
                          {record.score === 100 ? (
                            <CheckCircle2 className="w-6 h-6 text-green-600" />
                          ) : (
                            <Brain className="w-6 h-6 text-orange-600" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{activity.title}</h4>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-[10px] uppercase">{activity.category}</Badge>
                            <span className="text-xs text-gray-500">
                              {record.created_at ? new Date(record.created_at).toLocaleDateString() : 'Just now'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-gray-400 uppercase">Score</p>
                        <p className={cn(
                          "text-xl font-black",
                          record.score === 100 ? "text-green-600" : "text-orange-600"
                        )}>
                          {record.score}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                <Brain className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No activities completed yet. Start your journey today!</p>
                <Link to="/activities" className="mt-4 inline-block">
                  <Button variant="link" className="text-indigo-600 font-bold">Go to Activities</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>

      <MadeWithApplaa />
    </div>
  );
}