import * as z from "zod";

export const userZodSchema = z.object({
  name: z.string().min(1, "name is required").max(10),
});
