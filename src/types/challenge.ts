
export type ChallengeType = 'web' | 'crypto' | 'forensics' | 'pwn' | 'reverse';
export type ChallengeDifficulty = 'easy' | 'medium' | 'hard';

export interface Challenge {
  id: string;
  title: string;
  category: ChallengeType;
  difficulty: ChallengeDifficulty;
  points: number;
  description?: string;
  solvedCount: number;
  isSolved?: boolean;
}

export interface User {
  id: string;
  username: string;
  email: string;
  score: number;
  country: string;
  challengesSolved: number;
  lastActive: string;
}
