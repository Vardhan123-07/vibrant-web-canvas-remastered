
import React from 'react';
import { Mail, Phone, Code, Book, Headphones, Gamepad2, FileCode, Github, Linkedin, GraduationCap, Target } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProjectCard from '@/components/ProjectCard';
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'Django'];
  const projects = [
    {
      title: 'LearnCrypto',
      description: 'A self-learning platform for cryptography techniques using Django. Features include two-step verification and user-friendly UI.',
      tech: 'Django'
    },
    {
      title: 'Budget Planning',
      description: 'Created a tool to manage personal finances efficiently.',
      tech: 'Django, Python'
    },
    {
      title: 'Hospital Management System',
      description: 'Built a system to streamline hospital operations and patient records.',
      tech: 'Django'
    },
    {
      title: 'Face Recognition System',
      description: 'Designed a facial recognition-based authentication system for online exams.',
      tech: 'Python, Django'
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Data Science (Ongoing)',
      institution: 'Mallareddy University, Misammaguda, Telangana',
      grades: 'CGPA: 7.12 (Overall) | SGPA: 7.29 (1st Sem), 6.94 (2nd Sem)'
    },
    {
      degree: 'Intermediate (10+2)',
      institution: 'Master minds junior college, Siddipet, telangana',
      grades: 'Marks: 953 (Board Exams)'
    },
    {
      degree: '10th Grade',
      institution: 'Sri Vani High School, Kandi, Siddipet, Telangana',
      grades: 'GPA: 10/10'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Section */}
        <Card className="w-full">
          <CardHeader className="flex flex-col items-center space-y-4">
            <Avatar className="w-32 h-32">
              <AvatarImage src="/lovable-uploads/ddca3713-5df4-45fd-8b8d-32a3254e63dc.png" alt="Vishnu Vardhan Reddy" />
              <AvatarFallback>VVR</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <CardTitle className="text-3xl font-bold">KAREDLA VISHNUVARDHAN REDDY</CardTitle>
              <p className="text-lg text-gray-600 mt-2">Data Science Student</p>
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
              <div className="flex items-center space-x-3">
                <Linkedin className="text-primary h-5 w-5" />
                <a href="https://www.linkedin.com/in/vishnuvardhan-reddy-63692b327/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="text-primary h-5 w-5" />
                <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  GitHub Profile
                </a>
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Target className="text-primary" />
                Career Objective
              </h3>
              <p className="text-gray-600">
                Aspiring to gain real-world experience to build a strong foundation for my future career. Dedicated to delivering my best efforts in any environment, striving for excellence and growth.
              </p>
            </div>

            <Separator />

            {/* Education Section */}
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <GraduationCap className="text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.grades}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Code className="text-primary" />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>

            {/* Hobbies Section */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Hobbies & Interests</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Headphones className="text-primary" />
                  <span>Learning Programming</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Gamepad2 className="text-primary" />
                  <span>Playing Cricket</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Book className="text-primary" />
                  <span>Exploring New Ideas</span>
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
                tech={project.tech}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
