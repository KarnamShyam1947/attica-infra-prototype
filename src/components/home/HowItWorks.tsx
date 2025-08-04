import { FileText, Users, BookOpen, PenTool, Activity, Home } from 'lucide-react';
import HowItWorksUI from '../ui/HowItWorks';

const steps = [
  {
    icon: <FileText className="w-5 h-5" />,
    number: 1,
    title: 'Request a Quote',
    description: 'Submit your construction requirements through our platform.',
    image: './how-it-works/home/1.webp',
  },
  {
    icon: <Users className="w-5 h-5" />,
    number: 2,
    title: 'Consult with Experts',
    description: 'Talk to our professionals about your project details.',
    image: './how-it-works/home/2.jpg',
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    number: 3,
    title: 'Confirm Your Project',
    description: 'Finalize the details and confirm your booking.',
    image: './how-it-works/home/3.jpg',
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    number: 4,
    title: 'Get Your Design',
    description: 'Receive complete architectural plans and designs.',
    image: './how-it-works/home/4.jpg',
  },
  {
    icon: <Activity className="w-5 h-5" />,
    number: 5,
    title: 'Track Progress',
    description: 'Stay updated on construction and manage payments.',
    image: './how-it-works/home/5.jpg',
  },
  {
    icon: <Home className="w-5 h-5" />,
    number: 6,
    title: 'Move In',
    description: 'Move into your newly constructed space with ease.',
    image: './how-it-works/home/6.jpg',
  },
];

const HowItWorks = () => <HowItWorksUI steps={steps} />;

export default HowItWorks;
