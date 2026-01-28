import { Link } from '@tanstack/react-router';
import { BookOpen, GraduationCap, Info, Layout, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-indigo-200 shadow-lg group-hover:scale-110 transition-transform">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              LearnByDoing
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium"
            >
              <Layout className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link 
              to="/activities" 
              className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium"
            >
              <BookOpen className="w-4 h-4" />
              <span>Activities</span>
            </Link>
            <Link 
              to="/progress" 
              className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium"
            >
              <Trophy className="w-4 h-4" />
              <span>My Progress</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium"
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </Link>
          </nav>

          <div className="md:hidden">
            {/* Mobile menu could go here, but keeping it simple for now */}
            <button className="p-2 text-gray-600">
              <Layout className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}