import { defineCollection, z } from 'astro:content';

const education = defineCollection({
  type: 'data',
  schema: z.object({
    period: z.string(),
    institution: z.string(),
    department: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

const experience = defineCollection({
  type: 'data',
  schema: z.object({
    period: z.string(),
    company: z.string(),
    role: z.string(),
    url: z.string().url().optional(),
    description: z.string().optional(),
  }),
});

const certifications = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    name: z.string(),
    issuer: z.string().optional(),
    date: z.string().optional(),
    url: z.string().url().optional(),
    description: z.string().optional(),
  })),
});

const awards = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    title: z.string(),
    event: z.string().optional(),
    url: z.string().url().optional(),
    date: z.string().optional(),
    description: z.string().optional(),
  })),
});

const presentations = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    title: z.string(),
    event: z.string(),
    url: z.string().url().optional(),
    date: z.string().optional(),
    description: z.string().optional(),
  })),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    url: z.string().url().optional(),
    github: z.string().url().optional(),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  education,
  experience,
  certifications,
  awards,
  presentations,
  projects,
};
