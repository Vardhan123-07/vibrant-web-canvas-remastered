
import React from 'react';
import { Mail, Phone, User } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="items-center">
          <Avatar className="w-32 h-32 mb-4">
            <AvatarImage 
              src="/lovable-uploads/b625cdc6-45fd-4bf5-81ea-6a1292f8cd73.png" 
              alt="Vishnu Vardhan Reddy" 
            />
            <AvatarFallback>VVR</AvatarFallback>
          </Avatar>
          <CardTitle className="text-3xl font-bold text-center">
            Vishnu Vardhan Reddy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Mail className="text-primary" />
            <span>vishnuvardhankaredla359@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-primary" />
            <span>7674053039</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
