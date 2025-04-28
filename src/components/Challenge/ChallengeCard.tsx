
import React from 'react';
import { Link } from 'react-router-dom';
import { ChallengeDifficulty, ChallengeType } from '@/types/challenge';

interface ChallengeCardProps {
  challenge: {
    id: string;
    title: string;
    category: ChallengeType;
    difficulty: ChallengeDifficulty;
    points: number;
    solvedCount: number;
    isSolved?: boolean;
  };
}

const getDifficultyBadgeClass = (difficulty: ChallengeDifficulty) => {
  switch (difficulty) {
    case 'easy': return 'badge-easy';
    case 'medium': return 'badge-medium';
    case 'hard': return 'badge-hard';
    default: return 'badge-easy';
  }
};

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  return (
    <Link to={`/challenges/${challenge.id}`} className="block">
      <div className="cyber-card h-full p-6 bg-card transition-all duration-300 hover:shadow-neon cursor-pointer group">
        <div className="flex justify-between items-start mb-3">
          <span className={`badge badge-category mb-2`}>
            {challenge.category}
          </span>
          <div className={`badge ${getDifficultyBadgeClass(challenge.difficulty)}`}>
            {challenge.difficulty}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-cyber-purple transition-colors">
          {challenge.title}
        </h3>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-400">
            {challenge.solvedCount} solves
          </span>
          <span className="font-bold text-cyber-purple">
            {challenge.points} pts
          </span>
        </div>
        
        {challenge.isSolved && (
          <div className="mt-3 pt-3 border-t border-cyber-purple/20 text-center">
            <span className="text-sm text-green-400 flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 mr-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Solved
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ChallengeCard;
