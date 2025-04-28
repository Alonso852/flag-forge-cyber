
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import { userRankings } from "@/data/users";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, UserX } from "lucide-react";

export default function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, we would check for authentication here
    // This is just a simple example
  }, []);

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Panneau d'Administration</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Gestion des Utilisateurs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userRankings.slice(0, 5).map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-2 bg-secondary rounded-lg">
                    <div>
                      <p className="font-medium">{user.username}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                    <Button variant="destructive" size="sm">
                      <UserX className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
