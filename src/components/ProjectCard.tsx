
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard = ({ title, description }: ProjectCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
