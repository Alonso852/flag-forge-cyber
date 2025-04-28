
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flag, Menu, User, Trophy, BookOpen, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-purple/20 py-3">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Flag className="h-6 w-6 text-cyber-purple" />
          <span className="text-xl font-bold bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent">
            FlagForge
          </span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-cyber-purple hover:text-cyber-purple-dark transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/challenges" className="text-foreground hover:text-cyber-purple transition-colors">
            Challenges
          </Link>
          <Link to="/leaderboard" className="text-foreground hover:text-cyber-purple transition-colors">
            Leaderboard
          </Link>
          <Link to="/learn" className="text-foreground hover:text-cyber-purple transition-colors">
            Learn
          </Link>
          <div className="h-6 w-px bg-cyber-gray/20"></div>
          <Button variant="outline" className="flex items-center gap-2 border-cyber-purple/30 text-cyber-purple hover:bg-cyber-purple/10">
            <User className="h-4 w-4" />
            Sign In
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-cyber-dark/95 backdrop-blur-md pt-16">
          <div className="container flex flex-col items-center gap-8 py-8">
            <Link to="/challenges" className="flex items-center gap-3 text-xl" onClick={toggleMenu}>
              <Flag className="h-5 w-5 text-cyber-purple" />
              <span>Challenges</span>
            </Link>
            <Link to="/leaderboard" className="flex items-center gap-3 text-xl" onClick={toggleMenu}>
              <Trophy className="h-5 w-5 text-cyber-purple" />
              <span>Leaderboard</span>
            </Link>
            <Link to="/learn" className="flex items-center gap-3 text-xl" onClick={toggleMenu}>
              <BookOpen className="h-5 w-5 text-cyber-purple" />
              <span>Learn</span>
            </Link>
            <div className="h-px w-full bg-cyber-purple/20 my-4"></div>
            <Button className="w-full cyber-button">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
