import type { LucideIcon } from 'lucide-react';
import { Code, DollarSign, GraduationCap, Server, Settings, Target } from 'lucide-react';
import type { ConsultingServiceId } from '@/data/consultingServices';

export const SERVICE_ICONS: Record<ConsultingServiceId, LucideIcon> = {
  strategy: Target,
  development: Code,
  infrastructure: Server,
  cost: DollarSign,
  maintenance: Settings,
  training: GraduationCap,
};
