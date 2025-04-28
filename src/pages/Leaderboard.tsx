
import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { userRankings } from '@/data/users';

const timeRanges = [
  { label: 'All Time', value: 'all' },
  { label: 'Monthly', value: 'month' },
  { label: 'Weekly', value: 'week' },
  { label: 'Daily', value: 'day' },
];

const Leaderboard: React.FC = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('all');
  
  return (
    <Layout>
      <div className="container py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Leaderboard</h1>
          <p className="text-gray-300">
            Top cybersecurity experts based on challenge completions and points earned.
          </p>
        </div>
        
        {/* Time range filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="text-sm font-medium text-gray-400 self-center">Time Range:</span>
          {timeRanges.map(range => (
            <Button 
              key={range.value} 
              variant={selectedTimeRange === range.value ? "default" : "outline"}
              size="sm"
              className={selectedTimeRange === range.value ? 
                "bg-cyber-purple hover:bg-cyber-purple-dark" : 
                "border-cyber-purple/30 text-gray-300 hover:bg-cyber-purple/10"
              }
              onClick={() => setSelectedTimeRange(range.value)}
            >
              {range.label}
            </Button>
          ))}
        </div>
        
        {/* Leaderboard table */}
        <div className="bg-card rounded-lg overflow-hidden border border-cyber-purple/20">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-cyber-purple/20">
              <thead className="bg-cyber-purple/10">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Rank
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Score
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Challenges
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Last Active
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cyber-purple/10">
                {userRankings.slice(0, 10).map((user, index) => (
                  <tr key={user.id} className={index < 3 ? "bg-cyber-purple/5" : ""}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`
                        flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold
                        ${index === 0 ? 'bg-yellow-500/20 text-yellow-300' : 
                          index === 1 ? 'bg-gray-400/20 text-gray-300' : 
                          index === 2 ? 'bg-amber-600/20 text-amber-500' : 
                          'bg-cyber-purple/10 text-cyber-purple'}
                      `}>
                        {index + 1}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-cyber-purple/20 flex items-center justify-center text-cyber-purple font-medium">
                          {user.username.substring(0, 2).toUpperCase()}
                        </div>
                        <div className="ml-3">
                          <div className="font-medium">
                            {user.username}
                            {index < 3 && (
                              <span className={`ml-2 text-xs ${
                                index === 0 ? 'text-yellow-300' : 
                                index === 1 ? 'text-gray-300' : 
                                'text-amber-500'
                              }`}>
                                {index === 0 ? '👑' : index === 1 ? '🥈' : '🥉'}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-gray-400">{user.country}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-cyber-purple font-bold">
                      {user.score}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.challengesSolved}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-400 text-sm">
                      {user.lastActive}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Leaderboard;
