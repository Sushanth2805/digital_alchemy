import { ReactNode } from "react";

export interface NavLinkProps {
  href: string;
  label: string;
}

export interface StatCardProps {
  value: string;
  label: string;
  trend?: string;
  icon?: ReactNode;
}

export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  className?: string;
  onClick?: () => void;
}