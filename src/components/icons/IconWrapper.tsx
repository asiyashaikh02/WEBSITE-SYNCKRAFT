import React from 'react';
import {
  Search,
  Target,
  Code,
  Rocket,
  TrendingUp,
  Boxes,
  ShieldCheck,
  Smile,
  Layers,
  UserCheck,
  Code2,
  Users2,
  Sparkles,
  BarChart3,
  Cloud,
  Headphones,
  CheckCircle2,
  Zap,
  Users,
  Shield,
  Award,
  HeartPulse,
  Building2,
  GraduationCap,
  Truck,
  Landmark,
  ShoppingBag,
  Mail,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Eye,
  Heart,
  Globe2,
  Check,
  ArrowRight,
  ChevronDown,
  Dumbbell,
  Bot,
  Utensils,
  Sun,
  FileCheck,
} from 'lucide-react';

interface IconWrapperProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ name, className = 'w-6 h-6', style }) => {
  switch (name) {
    case 'Search':
      return <Search className={className} style={style} />;
    case 'Target':
      return <Target className={className} style={style} />;
    case 'Code':
      return <Code className={className} style={style} />;
    case 'Rocket':
      return <Rocket className={className} style={style} />;
    case 'TrendingUp':
      return <TrendingUp className={className} style={style} />;
    case 'Boxes':
      return <Boxes className={className} style={style} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} style={style} />;
    case 'Smile':
      return <Smile className={className} style={style} />;
    case 'Layers':
      return <Layers className={className} style={style} />;
    case 'UserCheck':
      return <UserCheck className={className} style={style} />;
    case 'Code2':
      return <Code2 className={className} style={style} />;
    case 'Users2':
      return <Users2 className={className} style={style} />;
    case 'Sparkles':
      return <Sparkles className={className} style={style} />;
    case 'BarChart3':
      return <BarChart3 className={className} style={style} />;
    case 'Cloud':
      return <Cloud className={className} style={style} />;
    case 'Headphones':
      return <Headphones className={className} style={style} />;
    case 'CheckCircle2':
      return <CheckCircle2 className={className} style={style} />;
    case 'Zap':
      return <Zap className={className} style={style} />;
    case 'Users':
      return <Users className={className} style={style} />;
    case 'Shield':
      return <Shield className={className} style={style} />;
    case 'Award':
      return <Award className={className} style={style} />;
    case 'HeartPulse':
      return <HeartPulse className={className} style={style} />;
    case 'Building2':
      return <Building2 className={className} style={style} />;
    case 'GraduationCap':
      return <GraduationCap className={className} style={style} />;
    case 'Truck':
      return <Truck className={className} style={style} />;
    case 'Landmark':
      return <Landmark className={className} style={style} />;
    case 'ShoppingBag':
      return <ShoppingBag className={className} style={style} />;
    case 'Mail':
      return <Mail className={className} style={style} />;
    case 'Phone':
      return <Phone className={className} style={style} />;
    case 'MessageCircle':
      return <MessageCircle className={className} style={style} />;
    case 'Clock':
      return <Clock className={className} style={style} />;
    case 'MapPin':
      return <MapPin className={className} style={style} />;
    case 'Eye':
      return <Eye className={className} style={style} />;
    case 'Heart':
      return <Heart className={className} style={style} />;
    case 'Globe2':
      return <Globe2 className={className} style={style} />;
    case 'Check':
      return <Check className={className} style={style} />;
    case 'ArrowRight':
      return <ArrowRight className={className} style={style} />;
    case 'ChevronDown':
      return <ChevronDown className={className} style={style} />;
    case 'Dumbbell':
      return <Dumbbell className={className} style={style} />;
    case 'Bot':
      return <Bot className={className} style={style} />;
    case 'Utensils':
      return <Utensils className={className} style={style} />;
    case 'Sun':
      return <Sun className={className} style={style} />;
    case 'FileCheck':
      return <FileCheck className={className} style={style} />;
    default:
      return <Code2 className={className} style={style} />;
  }
};
