import { z } from "zod";

export const studentHelpSchema = z.object({
  fullName: z.string().min(1, "Full name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number is too long"),
  email: z.string().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  jnvSchool: z.string().min(1, "JNV School name is required").max(100, "School name is too long"),
  isGraduated: z.enum(["yes", "no"], { required_error: "Please select whether you have graduated" }),
  
  // Graduated fields (conditional)
  degree: z.string().optional(),
  specialization: z.string().optional(),
  graduationYear: z.string().optional(),
  collegeName: z.string().optional(),
  currentOccupation: z.string().optional(),
  
  // Not graduated fields (conditional)
  currentYear: z.string().optional(),
  currentCourse: z.string().optional(),
  institutionName: z.string().optional(),
  expectedGraduation: z.string().optional(),
  
  // Help details
  helpTypes: z.array(z.string()).min(1, "Please select at least one type of help"),
  mentorDomain: z.string().optional(),
  careerGoals: z.string().min(1, "Please describe your career goals").max(1000, "Career goals must be less than 1000 characters"),
  challenges: z.string().min(1, "Please describe your challenges").max(1000, "Challenges must be less than 1000 characters"),
  additionalInfo: z.string().max(500, "Additional info must be less than 500 characters").optional(),
  
  // Urgency
  urgency: z.enum(["immediate", "soon", "flexible"], { required_error: "Please select urgency level" }),
  preferredTime: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.isGraduated === "yes") {
    if (!data.degree) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Degree is required", path: ["degree"] });
    if (!data.specialization) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Specialization is required", path: ["specialization"] });
    if (!data.graduationYear) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Graduation year is required", path: ["graduationYear"] });
    if (!data.collegeName) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "College name is required", path: ["collegeName"] });
  }
  if (data.isGraduated === "no") {
    if (!data.currentYear) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Current year is required", path: ["currentYear"] });
    if (!data.currentCourse) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Course/Stream is required", path: ["currentCourse"] });
    if (!data.institutionName) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Institution name is required", path: ["institutionName"] });
    if (!data.expectedGraduation) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Expected graduation year is required", path: ["expectedGraduation"] });
  }
});

export type StudentHelpFormData = z.infer<typeof studentHelpSchema>;