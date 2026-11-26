// Shared TypeScript types for PIXELFORGE STUDIO

export interface Service {
  id: string;
  number: string;
  icon: string; // lucide icon name
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  year: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export type FormStatus = "idle" | "loading" | "success" | "error";
