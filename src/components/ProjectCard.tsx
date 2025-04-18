
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
}

const ProjectCard = ({ title, description, tech }: ProjectCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.split(',').map((t) => (
            <Badge key={t.trim()} variant="outline">
              {t.trim()}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
