import {
  Building2,
  CalendarCheck,
  Flame,
  Globe,
  Mail,
  MessageCircle,
  PhoneCall,
  Star,
  Workflow,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { Industry } from "@/data/industries";
import type { Service } from "@/data/services";

export const serviceIcons: Record<Service["icon"], LucideIcon> = {
  phone: PhoneCall,
  globe: Globe,
  message: MessageCircle,
  calendar: CalendarCheck,
  star: Star,
  workflow: Workflow,
  mail: Mail,
};

export const industryIcons: Record<Industry["icon"], LucideIcon> = {
  plumbing: Wrench,
  electrical: Zap,
  heating: Flame,
  business: Building2,
};
