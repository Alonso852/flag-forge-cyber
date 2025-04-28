
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="text-9xl font-bold text-cyber-purple mb-4 animate-text-glow">404</div>
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button className="cyber-button" asChild>
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
