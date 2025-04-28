
import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import ChallengeCard from '@/components/Challenge/ChallengeCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { challenges } from '@/data/challenges';
import { ChallengeType, ChallengeDifficulty } from '@/types/challenge';

const ChallengeFilters: React.FC<{
  selectedCategory: ChallengeType | 'all';
  setSelectedCategory: (category: ChallengeType | 'all') => void;
  selectedDifficulty: ChallengeDifficulty | 'all';
  setSelectedDifficulty: (difficulty: ChallengeDifficulty | 'all') => void;
}> = ({
  selectedCategory,
  setSelectedCategory,
  selectedDifficulty,
  setSelectedDifficulty
}) => {
  const categories: Array<ChallengeType | 'all'> = [
    'all', 'web', 'crypto', 'forensics', 'pwn', 'reverse'
  ];
  
  const difficulties: Array<ChallengeDifficulty | 'all'> = [
    'all', 'easy', 'medium', 'hard'
  ];
  
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3 mb-4">
        <span className="text-sm font-medium text-gray-400 self-center">Categories:</span>
        {categories.map(category => (
          <Button 
            key={category} 
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            className={selectedCategory === category ? 
              "bg-cyber-purple hover:bg-cyber-purple-dark" : 
              "border-cyber-purple/30 text-gray-300 hover:bg-cyber-purple/10"
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <span className="text-sm font-medium text-gray-400 self-center">Difficulty:</span>
        {difficulties.map(difficulty => (
          <Button 
            key={difficulty} 
            variant={selectedDifficulty === difficulty ? "default" : "outline"}
            size="sm"
            className={selectedDifficulty === difficulty ? 
              "bg-cyber-purple hover:bg-cyber-purple-dark" : 
              "border-cyber-purple/30 text-gray-300 hover:bg-cyber-purple/10"
            }
            onClick={() => setSelectedDifficulty(difficulty)}
          >
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Button>
        ))}
      </div>
    </div>
  );
};

const Challenges: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ChallengeType | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<ChallengeDifficulty | 'all'>('all');
  
  const filteredChallenges = challenges.filter(challenge => {
    const matchesSearch = challenge.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || challenge.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || challenge.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });
  
  return (
    <Layout>
      <div className="container py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Challenges</h1>
          <p className="text-gray-300">
            Test your skills with our collection of cybersecurity challenges across different categories and difficulty levels.
          </p>
        </div>
        
        {/* Search and filters */}
        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <Input
              type="text"
              placeholder="Search challenges..."
              className="cyber-input pl-10"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          
          <ChallengeFilters 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedDifficulty={selectedDifficulty}
            setSelectedDifficulty={setSelectedDifficulty}
          />
        </div>
        
        {/* Challenge list */}
        {filteredChallenges.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChallenges.map(challenge => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold mb-2">No challenges found</h3>
            <p className="text-gray-400">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Challenges;
