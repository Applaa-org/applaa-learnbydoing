import React, { useState } from 'react';
import { Activity } from '@/data/activities';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface ActivityCardProps {
  activity: Activity;
  onComplete: (score: number) => void;
  onNext: () => void;
}

export default function ActivityCard({ activity, onComplete, onNext }: ActivityCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionSelect = (option: string) => {
    if (isSubmitted) return;
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    setIsSubmitted(true);
    const isCorrect = selectedOption === activity.correctAnswer;
    onComplete(isCorrect ? 100 : 0);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  const isCorrect = selectedOption === activity.correctAnswer;

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden border-none shadow-2xl bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-indigo-100/50">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="bg-white/50 text-indigo-600 border-indigo-200">
            {activity.category}
          </Badge>
          <Badge className={cn(
            "capitalize",
            activity.difficulty === 'Beginner' ? "bg-green-100 text-green-700" :
            activity.difficulty === 'Intermediate' ? "bg-orange-100 text-orange-700" :
            "bg-red-100 text-red-700"
          )}>
            {activity.difficulty}
          </Badge>
        </div>
        <CardTitle className="text-2xl font-bold text-gray-800">{activity.title}</CardTitle>
        <CardDescription className="text-gray-600 text-lg">{activity.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="p-6 space-y-6">
        <div className="bg-indigo-50/30 p-4 rounded-xl border border-indigo-100/50">
          <h3 className="text-lg font-semibold text-indigo-900 mb-2 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-indigo-500" />
            The Task
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">{activity.task}</p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {activity.options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionSelect(option)}
              disabled={isSubmitted}
              className={cn(
                "w-full p-4 text-left rounded-xl border-2 transition-all duration-200 flex items-center justify-between group",
                selectedOption === option 
                  ? "border-indigo-500 bg-indigo-50 shadow-md" 
                  : "border-gray-100 hover:border-indigo-200 hover:bg-gray-50",
                isSubmitted && option === activity.correctAnswer && "border-green-500 bg-green-50",
                isSubmitted && selectedOption === option && option !== activity.correctAnswer && "border-red-500 bg-red-50",
                isSubmitted && option !== selectedOption && option !== activity.correctAnswer && "opacity-50"
              )}
            >
              <span className={cn(
                "font-medium text-lg",
                selectedOption === option ? "text-indigo-700" : "text-gray-700"
              )}>
                {option}
              </span>
              {isSubmitted && option === activity.correctAnswer && (
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              )}
              {isSubmitted && selectedOption === option && option !== activity.correctAnswer && (
                <XCircle className="w-6 h-6 text-red-500" />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "p-4 rounded-xl border",
                isCorrect ? "bg-green-50 border-green-100 text-green-800" : "bg-red-50 border-red-100 text-red-800"
              )}
            >
              <div className="flex items-center gap-2 mb-2 font-bold text-lg">
                {isCorrect ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                {isCorrect ? "Excellent Work!" : "Not quite right..."}
              </div>
              <p className="text-base leading-relaxed opacity-90">
                {activity.explanation}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>

      <CardFooter className="p-6 bg-gray-50/50 border-t border-gray-100 flex justify-between items-center">
        {!isSubmitted ? (
          <Button 
            onClick={handleSubmit} 
            disabled={!selectedOption}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-lg rounded-xl shadow-lg shadow-indigo-200"
          >
            Submit Answer
          </Button>
        ) : (
          <div className="flex gap-3 w-full">
            <Button 
              variant="outline" 
              onClick={handleReset}
              className="flex-1 py-6 text-lg rounded-xl border-gray-200 hover:bg-white"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Try Again
            </Button>
            <Button 
              onClick={onNext}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-lg rounded-xl shadow-lg shadow-indigo-200"
            >
              Next Activity
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}