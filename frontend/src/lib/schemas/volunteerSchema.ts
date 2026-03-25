import { z } from "zod";

export const volunteerSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number is too long"),
  email: z.string().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  occupation: z.string().min(1, "Occupation is required").max(100, "Occupation must be less than 100 characters"),
  address: z.string().min(1, "Address is required").max(500, "Address must be less than 500 characters"),
  isNavodayan: z.enum(["yes", "no"], { required_error: "Please select whether you are a Navodayan" }),
  
  // Navodayan fields (conditional)
  jnvSchool: z.string().optional(),
  district: z.string().optional(),
  timeContribution: z.string().optional(),
  
  // Phase and role selection
  selectedPhases: z.array(z.string()).min(1, "Please select at least one phase"),
  beforeRoles: z.array(z.string()).optional(),
  duringRoles: z.array(z.string()).optional(),
  afterRoles: z.array(z.string()).optional(),
}).superRefine((data, ctx) => {
  if (data.isNavodayan === "yes") {
    if (!data.jnvSchool) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "JNV School name is required", path: ["jnvSchool"] });
    if (!data.district) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "District is required", path: ["district"] });
    if (!data.timeContribution) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Time contribution is required", path: ["timeContribution"] });
  }
  if (data.selectedPhases.includes("before") && (!data.beforeRoles || data.beforeRoles.length === 0)) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please select at least one role for Before Navodaya", path: ["beforeRoles"] });
  }
  if (data.selectedPhases.includes("during") && (!data.duringRoles || data.duringRoles.length === 0)) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please select at least one role for During Navodaya", path: ["duringRoles"] });
  }
  if (data.selectedPhases.includes("after") && (!data.afterRoles || data.afterRoles.length === 0)) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please select at least one role for After Navodaya", path: ["afterRoles"] });
  }
});

export type VolunteerFormData = z.infer<typeof volunteerSchema>;