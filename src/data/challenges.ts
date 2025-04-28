
import { Challenge } from '@/types/challenge';

export const challenges: Challenge[] = [
  {
    id: 'web-1',
    title: 'SQL Injection 101',
    category: 'web',
    difficulty: 'easy',
    points: 100,
    description: 'This challenge introduces you to basic SQL injection. Can you bypass the login form and access the admin panel?',
    solvedCount: 156
  },
  {
    id: 'web-2',
    title: 'Cookie Monster',
    category: 'web',
    difficulty: 'medium',
    points: 250,
    description: 'The website uses cookies for session management, but something seems off. Can you manipulate the cookies to gain admin access?',
    solvedCount: 87
  },
  {
    id: 'web-3',
    title: 'XSS Playground',
    category: 'web',
    difficulty: 'medium',
    points: 300,
    description: 'This web application has a vulnerable comment section. Find a way to execute JavaScript in the context of other users.',
    solvedCount: 52
  },
  {
    id: 'crypto-1',
    title: 'Caesar\'s Secret',
    category: 'crypto',
    difficulty: 'easy',
    points: 75,
    description: 'A message has been encrypted using a classic Caesar cipher. Can you decrypt it and find the hidden flag?',
    solvedCount: 203
  },
  {
    id: 'crypto-2',
    title: 'RSA Rookie',
    category: 'crypto',
    difficulty: 'medium',
    points: 275,
    description: 'You've intercepted an RSA-encrypted message along with some key parameters. Can you break the encryption and retrieve the original message?',
    solvedCount: 64
  },
  {
    id: 'forensics-1',
    title: 'Hidden in Plain Sight',
    category: 'forensics',
    difficulty: 'easy',
    points: 125,
    description: 'There's a hidden message in this image file. Use steganography techniques to extract the flag.',
    solvedCount: 176
  },
  {
    id: 'forensics-2',
    title: 'Packet Detective',
    category: 'forensics',
    difficulty: 'medium',
    points: 225,
    description: 'We've captured network traffic during a suspected data exfiltration. Analyze the PCAP file and find what information was stolen.',
    solvedCount: 98
  },
  {
    id: 'pwn-1',
    title: 'Buffer Overflow Basics',
    category: 'pwn',
    difficulty: 'medium',
    points: 350,
    description: 'This program has a vulnerable function that doesn't check input length. Exploit the buffer overflow to gain control of the program flow.',
    solvedCount: 42
  },
  {
    id: 'pwn-2',
    title: 'Return to Libc',
    category: 'pwn',
    difficulty: 'hard',
    points: 500,
    description: 'The binary has stack protection enabled, but it's still vulnerable. Use a return-to-libc attack to bypass these protections.',
    solvedCount: 23
  },
  {
    id: 'reverse-1',
    title: 'Reverse Me',
    category: 'reverse',
    difficulty: 'medium',
    points: 300,
    description: 'This executable checks for the correct password. Reverse engineer it to find what password it's looking for.',
    solvedCount: 57
  },
  {
    id: 'reverse-2',
    title: 'Assembly Puzzle',
    category: 'reverse',
    difficulty: 'hard',
    points: 450,
    description: 'Analyze the assembly code and understand the algorithm implemented. Then find the input that produces the expected output.',
    solvedCount: 31
  }
];

export const featuredChallenges: Challenge[] = [
  {
    id: 'web-1',
    title: 'SQL Injection 101',
    category: 'web',
    difficulty: 'easy',
    points: 100,
    solvedCount: 156
  },
  {
    id: 'crypto-1',
    title: 'Caesar\'s Secret',
    category: 'crypto',
    difficulty: 'easy',
    points: 75,
    solvedCount: 203
  },
  {
    id: 'forensics-2',
    title: 'Packet Detective',
    category: 'forensics',
    difficulty: 'medium',
    points: 225,
    solvedCount: 98
  }
];
