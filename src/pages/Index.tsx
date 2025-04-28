
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Code, Database, Search } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import ChallengeCard from '@/components/Challenge/ChallengeCard';
import { featuredChallenges } from '@/data/challenges';

const Index: React.FC = () => {
  return (
    <Layout>
      {/* Hero section */}
      <section className="relative">
        <div className="container py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Master <span className="bg-gradient-to-r from-cyber-purple to-cyber-magenta bg-clip-text text-transparent">cybersecurity</span> through real challenges
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Join a community of security professionals and enthusiasts. Learn, practice, and compete in capture the flag challenges designed for all skill levels.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="cyber-button">Get Started</Button>
              <Button variant="outline" className="border-cyber-purple/30 text-cyber-purple hover:bg-cyber-purple/10">
                Explore Challenges
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-2/5 h-96">
          <div className="relative h-full">
            <div className="absolute top-0 left-0 w-32 h-32 rounded-lg bg-cyber-purple/20 backdrop-blur-xl border border-cyber-purple/30 animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute bottom-0 left-20 w-48 h-48 rounded-lg bg-cyber-blue/20 backdrop-blur-xl border border-cyber-blue/30 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-20 right-10 w-40 h-40 rounded-lg bg-cyber-magenta/20 backdrop-blur-xl border border-cyber-magenta/30 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 bg-cyber-dark/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose <span className="text-cyber-purple">FlagForge</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-lg border border-cyber-purple/20 hover:border-cyber-purple/50 transition-colors">
              <div className="inline-flex p-3 rounded-lg bg-cyber-purple/10 mb-4">
                <Shield className="h-6 w-6 text-cyber-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Real-world Scenarios</h3>
              <p className="text-gray-400">Practice with challenges based on actual cybersecurity incidents and techniques.</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-cyber-purple/20 hover:border-cyber-purple/50 transition-colors">
              <div className="inline-flex p-3 rounded-lg bg-cyber-purple/10 mb-4">
                <Code className="h-6 w-6 text-cyber-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Multiple Categories</h3>
              <p className="text-gray-400">From web exploitation to cryptography, reverse engineering to forensics.</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-cyber-purple/20 hover:border-cyber-purple/50 transition-colors">
              <div className="inline-flex p-3 rounded-lg bg-cyber-purple/10 mb-4">
                <Database className="h-6 w-6 text-cyber-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Skill Progression</h3>
              <p className="text-gray-400">Challenges for all levels, gradually increase your skills and knowledge.</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-cyber-purple/20 hover:border-cyber-purple/50 transition-colors">
              <div className="inline-flex p-3 rounded-lg bg-cyber-purple/10 mb-4">
                <Search className="h-6 w-6 text-cyber-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Detailed Solutions</h3>
              <p className="text-gray-400">Learn from comprehensive explanations after completing challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Challenges */}
      <section className="py-20">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">
              Featured <span className="text-cyber-purple">Challenges</span>
            </h2>
            <Link to="/challenges" className="text-cyber-purple hover:text-cyber-purple-dark">
              View all challenges →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-gradient-to-r from-cyber-dark to-cyber-dark/80 p-8 md:p-12 rounded-xl border border-cyber-purple/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to test your skills?</h2>
              <p className="text-gray-300 mb-8">
                Jump into our challenges and put your cybersecurity knowledge to the test. Track your progress and compare your skills with others on our leaderboard.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="cyber-button">
                  Start Hacking
                </Button>
                <Button variant="outline" className="border-cyber-purple/30 text-cyber-purple hover:bg-cyber-purple/10">
                  View Leaderboard
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
