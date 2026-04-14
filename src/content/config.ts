import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    readTime: z.string().optional(),
  }),
});

const cp = defineCollection({
  type: 'content',
  schema: z.object({
    problemName: z.string(),
    platform: z.enum(['Codeforces', 'LeetCode', 'AtCoder', 'CodeChef']),
    difficulty: z.string(),
    problemLink: z.string().url(),
    submissionLink: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date(),
    verdict: z.enum(['AC', 'WA', 'TLE', 'MLE']).default('AC'),
    contestId: z.string().optional(),
    problemId: z.string().optional(),
  }),
});

export const collections = { blog, cp };