
import React from 'react';
import { Flag } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-dark border-t border-cyber-purple/20 py-8 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Flag className="h-5 w-5 text-cyber-purple" />
              <span className="text-lg font-bold bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent">
                FlagForge
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              A modern platform for cybersecurity challenges, designed for both beginners and experts.
            </p>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyber-purple mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyber-purple transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-cyber-purple transition-colors">Learning Path</a></li>
              <li><a href="#" className="hover:text-cyber-purple transition-colors">Community Forum</a></li>
              <li><a href="#" className="hover:text-cyber-purple transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyber-purple mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyber-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyber-purple transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cyber-purple transition-colors">Code of Conduct</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cyber-purple/20 mt-8 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} FlagForge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
