
import React from 'react';
import { Mail, Phone, Code, Book, Headphones, Cricket, FileCode } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProjectCard from '@/components/ProjectCard';

const Index = () => {
  const skills = ['HTML', 'CSS', 'Java', 'SQL'];
  const projects = [
    {
      title: 'Spam Mail Detection',
      description: 'Application to detect and filter spam emails',
    },
    {
      title: 'Pet Care Application',
      description: 'Platform for managing pet care services',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Section */}
        <Card className="w-full">
          <CardHeader className="flex flex-col items-center space-y-4">
            <Avatar className="w-32 h-32">
              <AvatarImage src="/lovable-uploads/bb252fd3-5a99-441d-8c70-1f4ed5f8570a.png" alt="Vishnu Vardhan Reddy" />
              <AvatarFallback>VVR</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <CardTitle className="text-3xl font-bold">Vishnu Vardhan Reddy</CardTitle>
              <p className="text-lg text-gray-600 mt-2">Front-end Developer</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Contact Information */}
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="text-primary h-5 w-5" />
                <span>vishnuvardhankaredla359@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary h-5 w-5" />
                <span>7674053039</span>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Code className="text-primary" />
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>

            {/* Hobbies Section */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Hobbies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Headphones className="text-primary" />
                  <span>Learning Programming</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Cricket className="text-primary" />
                  <span>Playing Cricket</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Book className="text-primary" />
                  <span>Reading Books</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FileCode className="text-primary" />
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard 
                key={project.title}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
