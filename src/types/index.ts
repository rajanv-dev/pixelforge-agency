// Shared TypeScript types for Pixelforge Studio

export interface Service {
  id: string;
  icon: string; // lucide icon name
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export type FormStatus = "idle" | "loading" | "success" | "error";
