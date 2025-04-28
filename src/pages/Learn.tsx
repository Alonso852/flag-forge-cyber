
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { BookOpen, Code, Database, Shield, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const LearnCategory: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  level: string;
  lessons: number;
  path: string;
}> = ({ title, description, icon, level, lessons, path }) => {
  return (
    <Card className="cyber-card bg-card shadow-none transition-all duration-300 hover:shadow-neon cursor-pointer group">
      <CardHeader>
        <div className="inline-flex p-3 rounded-lg bg-cyber-purple/10 mb-2">
          {icon}
        </div>
        <CardTitle className="group-hover:text-cyber-purple transition-colors">{title}</CardTitle>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Level</span>
          <span className="font-medium">{level}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Lessons</span>
          <span className="font-medium">{lessons}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="cyber-button w-full">Start Learning</Button>
      </CardFooter>
    </Card>
  );
};

const Learn: React.FC = () => {
  const learningPaths = [
    {
      title: "Web Exploitation",
      description: "Learn to identify and exploit common web vulnerabilities",
      icon: <Code className="h-6 w-6 text-cyber-purple" />,
      level: "Beginner to Intermediate",
      lessons: 12,
      path: "/learn/web"
    },
    {
      title: "Cryptography",
      description: "Master encryption, decryption, and cryptographic attacks",
      icon: <Shield className="h-6 w-6 text-cyber-purple" />,
      level: "Intermediate",
      lessons: 8,
      path: "/learn/crypto"
    },
    {
      title: "Forensics",
      description: "Discover techniques for digital evidence analysis",
      icon: <Search className="h-6 w-6 text-cyber-purple" />,
      level: "Beginner to Advanced",
      lessons: 10,
      path: "/learn/forensics"
    },
    {
      title: "Binary Exploitation",
      description: "Understand memory corruption and exploitation techniques",
      icon: <Database className="h-6 w-6 text-cyber-purple" />,
      level: "Advanced",
      lessons: 15,
      path: "/learn/pwn"
    }
  ];
  
  return (
    <Layout>
      <div className="container py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Learning Center</h1>
          <p className="text-gray-300">
            Improve your cybersecurity skills with our structured learning paths and tutorials.
            Each path contains practical lessons with hands-on exercises.
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-cyber-purple" />
            Learning Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPaths.map((path, index) => (
              <LearnCategory 
                key={index}
                title={path.title}
                description={path.description}
                icon={path.icon}
                level={path.level}
                lessons={path.lessons}
                path={path.path}
              />
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-cyber-dark to-cyber-dark/80 p-8 md:p-12 rounded-xl border border-cyber-purple/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to test what you've learned?</h2>
            <p className="text-gray-300 mb-6">
              Jump into our challenges and put your newly acquired knowledge to the test.
              Start with beginner challenges and work your way up to more advanced ones.
            </p>
            <Button className="cyber-button">
              Go to Challenges
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Learn;
