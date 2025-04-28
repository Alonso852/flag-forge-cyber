
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft, Flag, MessageSquare, Info, Users, User } from 'lucide-react';
import { challenges } from '@/data/challenges';
import { useToast } from '@/hooks/use-toast';

const ChallengeTabs = {
  Description: 'description',
  Hints: 'hints',
  Discussion: 'discussion',
  Solvers: 'solvers'
} as const;

type ChallengeTab = typeof ChallengeTabs[keyof typeof ChallengeTabs];

const ChallengeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [flagInput, setFlagInput] = useState('');
  const [currentTab, setCurrentTab] = useState<ChallengeTab>(ChallengeTabs.Description);
  
  // Find the challenge by id
  const challenge = challenges.find(c => c.id === id);
  
  if (!challenge) {
    return (
      <Layout>
        <div className="container py-16">
          <h2 className="text-3xl font-bold mb-4">Challenge not found</h2>
          <Button variant="outline" onClick={() => navigate('/challenges')}>
            Go back to challenges
          </Button>
        </div>
      </Layout>
    );
  }
  
  const handleFlagSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const correctFlag = `flag{${challenge.id}_s3cr3t_v4lu3}`;
    
    if (flagInput.trim() === correctFlag) {
      toast({
        title: "Correct Flag!",
        description: `Congratulations! You've solved "${challenge.title}"`,
        className: "bg-green-900 border-green-800"
      });
      setFlagInput('');
    } else {
      toast({
        title: "Incorrect Flag",
        description: "Try again with a different solution",
        variant: "destructive"
      });
    }
  };
  
  return (
    <Layout>
      <div className="container py-8">
        <Button 
          variant="ghost" 
          className="mb-6 text-gray-400 hover:text-cyber-purple flex items-center"
          onClick={() => navigate('/challenges')}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Challenges
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className={`badge badge-category`}>
                {challenge.category}
              </span>
              <span className={`badge ${
                challenge.difficulty === 'easy' ? 'badge-easy' :
                challenge.difficulty === 'medium' ? 'badge-medium' : 
                'badge-hard'
              }`}>
                {challenge.difficulty}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold mb-2">{challenge.title}</h1>
            
            <div className="text-sm text-gray-400 mb-8">
              Created by <span className="text-cyber-purple">Admin</span> • {challenge.solvedCount} solves
            </div>
            
            <div className="mb-8">
              <div className="flex border-b border-cyber-purple/20">
                <button 
                  className={`px-4 py-2 -mb-px font-medium text-sm ${
                    currentTab === ChallengeTabs.Description ? 
                    'text-cyber-purple border-b-2 border-cyber-purple' : 
                    'text-gray-400 hover:text-gray-300'
                  }`}
                  onClick={() => setCurrentTab(ChallengeTabs.Description)}
                >
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    Description
                  </div>
                </button>
                <button 
                  className={`px-4 py-2 -mb-px font-medium text-sm ${
                    currentTab === ChallengeTabs.Hints ? 
                    'text-cyber-purple border-b-2 border-cyber-purple' : 
                    'text-gray-400 hover:text-gray-300'
                  }`}
                  onClick={() => setCurrentTab(ChallengeTabs.Hints)}
                >
                  <div className="flex items-center gap-2">
                    <Flag className="h-4 w-4" />
                    Hints
                  </div>
                </button>
                <button 
                  className={`px-4 py-2 -mb-px font-medium text-sm ${
                    currentTab === ChallengeTabs.Discussion ? 
                    'text-cyber-purple border-b-2 border-cyber-purple' : 
                    'text-gray-400 hover:text-gray-300'
                  }`}
                  onClick={() => setCurrentTab(ChallengeTabs.Discussion)}
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Discussion
                  </div>
                </button>
                <button 
                  className={`px-4 py-2 -mb-px font-medium text-sm ${
                    currentTab === ChallengeTabs.Solvers ? 
                    'text-cyber-purple border-b-2 border-cyber-purple' : 
                    'text-gray-400 hover:text-gray-300'
                  }`}
                  onClick={() => setCurrentTab(ChallengeTabs.Solvers)}
                >
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Solvers
                  </div>
                </button>
              </div>
              
              <div className="mt-6">
                {currentTab === ChallengeTabs.Description && (
                  <div className="prose prose-invert max-w-none">
                    <p>
                      {challenge.description || `This is a detailed description of the ${challenge.title} challenge. 
                      It outlines the scenario, provides necessary background information, and gives clues about what 
                      to look for without giving away the solution.`}
                    </p>
                    
                    {/* Add sample files or information depending on the challenge type */}
                    {challenge.category === 'web' && (
                      <div className="bg-card p-4 rounded-md border border-cyber-purple/20 mt-4">
                        <h3 className="text-lg font-medium mb-2">Target URL</h3>
                        <code className="text-cyber-purple bg-cyber-purple/10 px-2 py-1 rounded">
                          https://challenge.flagforge.com/{challenge.id}/
                        </code>
                      </div>
                    )}
                    
                    {challenge.category === 'crypto' && (
                      <div className="bg-card p-4 rounded-md border border-cyber-purple/20 mt-4">
                        <h3 className="text-lg font-medium mb-2">Encrypted Data</h3>
                        <code className="text-cyber-purple bg-cyber-purple/10 px-2 py-1 rounded block overflow-x-auto">
                          {`VGhpcyBpcyBhbiBleGFtcGxlIG9mIGVuY3J5cHRlZCBkYXRhLiBEZWNvZGUgbWUh`}
                        </code>
                      </div>
                    )}
                    
                    {challenge.category === 'forensics' && (
                      <div className="bg-card p-4 rounded-md border border-cyber-purple/20 mt-4">
                        <h3 className="text-lg font-medium mb-2">Evidence File</h3>
                        <Button variant="outline" className="border-cyber-purple/30 text-cyber-purple hover:bg-cyber-purple/10">
                          Download Evidence.zip
                        </Button>
                      </div>
                    )}
                  </div>
                )}
                
                {currentTab === ChallengeTabs.Hints && (
                  <div>
                    <div className="bg-card p-4 rounded-md border border-cyber-purple/20 hover:border-cyber-purple/40 cursor-pointer transition-colors">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">First hint (100 points)</h3>
                        <Button size="sm" className="cyber-button text-xs">
                          Unlock Hint
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-card p-4 rounded-md border border-cyber-purple/20 hover:border-cyber-purple/40 cursor-pointer transition-colors mt-3">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">Second hint (200 points)</h3>
                        <Button size="sm" className="cyber-button text-xs">
                          Unlock Hint
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
                
                {currentTab === ChallengeTabs.Discussion && (
                  <div className="text-center py-8">
                    <User className="h-12 w-12 text-gray-500 mx-auto mb-3" />
                    <h3 className="text-xl font-medium mb-2">Join the discussion</h3>
                    <p className="text-gray-400 mb-4">
                      Sign in to participate in discussions about this challenge.
                    </p>
                    <Button className="cyber-button">Sign In</Button>
                  </div>
                )}
                
                {currentTab === ChallengeTabs.Solvers && (
                  <div>
                    <div className="text-gray-400 text-sm mb-4">
                      Total solvers: {challenge.solvedCount}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-card rounded-md border border-cyber-purple/20">
                        <div className="w-10 h-10 rounded-full bg-cyber-purple/20 flex items-center justify-center text-cyber-purple font-medium">
                          AS
                        </div>
                        <div className="ml-3">
                          <div className="font-medium">Alice Smith</div>
                          <div className="text-xs text-gray-400">Solved 2 days ago • First blood</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 bg-card rounded-md border border-cyber-purple/20">
                        <div className="w-10 h-10 rounded-full bg-cyber-purple/20 flex items-center justify-center text-cyber-purple font-medium">
                          BJ
                        </div>
                        <div className="ml-3">
                          <div className="font-medium">Bob Johnson</div>
                          <div className="text-xs text-gray-400">Solved 1 day ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold mb-4">Submit Flag</h3>
              <form onSubmit={handleFlagSubmit}>
                <Input
                  type="text"
                  placeholder="flag{...}"
                  className="cyber-input mb-4"
                  value={flagInput}
                  onChange={e => setFlagInput(e.target.value)}
                />
                <Button type="submit" className="cyber-button w-full">
                  <Flag className="h-4 w-4 mr-2" />
                  Submit Flag
                </Button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-cyber-purple/20">
                <div className="flex justify-between mb-2">
                  <div className="text-gray-400">Points:</div>
                  <div className="font-bold text-cyber-purple">{challenge.points}</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-400">Solves:</div>
                  <div>{challenge.solvedCount}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChallengeDetail;
