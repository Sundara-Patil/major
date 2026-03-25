import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { HandHeart, GraduationCap, Briefcase, BookOpen, Target, AlertCircle } from "lucide-react";
import { studentHelpSchema, type StudentHelpFormData } from "@/lib/schemas/studentHelpSchema.ts";
import { toast } from "@/hooks/use-toast";

const helpTypes = [
  { id: "career-guidance", label: "Career Guidance" },
  { id: "higher-education", label: "Higher Education Support" },
  { id: "job-internship", label: "Job/Internship Opportunities" },
  { id: "mentorship", label: "Personal Mentorship" },
  { id: "financial-support", label: "Financial Support/Scholarship" },
  { id: "skill-development", label: "Skill Development/Training" },
  { id: "study-abroad", label: "Study Abroad Guidance" },
  { id: "other", label: "Other" },
];

const mentorDomains = [
  "Technology/IT",
  "Medical/Healthcare",
  "Engineering",
  "Civil Services/Government",
  "Business/Management",
  "Law",
  "Arts/Humanities",
  "Research/Academia",
  "Entrepreneurship",
  "Finance/Banking",
  "Media/Journalism",
  "Other",
];

const urgencyLevels = [
  { value: "immediate", label: "Immediate (Within 1 week)", description: "I need urgent assistance" },
  { value: "soon", label: "Soon (Within 1 month)", description: "I can wait a bit" },
  { value: "flexible", label: "Flexible (No rush)", description: "Whenever convenient" },
];

export default function StudentHelpForm() {
  const form = useForm<StudentHelpFormData>({
    resolver: zodResolver(studentHelpSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      jnvSchool: "",
      isGraduated: undefined,
      degree: "",
      specialization: "",
      graduationYear: "",
      collegeName: "",
      currentOccupation: "",
      currentYear: "",
      currentCourse: "",
      institutionName: "",
      expectedGraduation: "",
      helpTypes: [],
      mentorDomain: "",
      careerGoals: "",
      challenges: "",
      additionalInfo: "",
      urgency: undefined,
      preferredTime: "",
    },
  });

  const isGraduated = form.watch("isGraduated");
  const selectedHelpTypes = form.watch("helpTypes");

  const onSubmit = async (data: StudentHelpFormData) => {
    console.log("Student Help Form Data:", data);
    // TODO: Connect to backend API
    toast({
      title: "Request Submitted",
      description: "Your help request has been submitted. Our volunteers will reach out to you soon.",
    });
  };

  const handleHelpTypeToggle = (helpId: string) => {
    const current = form.getValues("helpTypes");
    const updated = current.includes(helpId)
      ? current.filter(id => id !== helpId)
      : [...current, helpId];
    form.setValue("helpTypes", updated, { shouldValidate: true });
  };

  return (
    <Card className="border-phase-after/30">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-phase-after/10">
          <HandHeart className="h-8 w-8 text-phase-after" />
        </div>
        <CardTitle className="text-2xl">Request Support</CardTitle>
        <CardDescription className="text-base">
          Need help with your career, education, or personal growth? Fill out this form and our volunteers will reach out to you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <div className="bg-muted/50 p-3 rounded-lg flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-phase-after" />
                <h3 className="font-semibold">Basic Information</h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+91 98765 43210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email ID *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="jnvSchool"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>JNV School Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., JNV Dharwad" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="isGraduated"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Graduated? *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex gap-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="graduated-yes" />
                          <Label htmlFor="graduated-yes" className="font-normal cursor-pointer">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="graduated-no" />
                          <Label htmlFor="graduated-no" className="font-normal cursor-pointer">No</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Conditional: Graduated = Yes */}
              {isGraduated === "yes" && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300 bg-muted/30 p-4 rounded-lg border">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-phase-after" />
                    <h3 className="font-semibold">Graduation Details</h3>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="degree"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Degree/Qualification *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., B.Tech, MBBS, BA" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="specialization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Specialization/Branch *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Computer Science, Medicine" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="graduationYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Year of Graduation *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 2023" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="collegeName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>College/University Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Name of your institution" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="currentOccupation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Occupation</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Working at XYZ, Preparing for exams" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Conditional: Graduated = No */}
              {isGraduated === "no" && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300 bg-muted/30 p-4 rounded-lg border">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-phase-after" />
                    <h3 className="font-semibold">Current Education Details</h3>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="currentYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Year/Class *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Class 12, 2nd Year" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="currentCourse"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Course/Stream *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Science, B.Tech CSE" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="institutionName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Institution Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Name of your school/college" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="expectedGraduation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expected Graduation Year *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 2025" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>

            {/* Type of Help Needed */}
            {(isGraduated === "yes" || isGraduated === "no") && (
              <div className="space-y-4 border-t pt-6 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="bg-muted/50 p-3 rounded-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-phase-after" />
                  <h3 className="font-semibold">Type of Help Needed</h3>
                </div>

                <FormField
                  control={form.control}
                  name="helpTypes"
                  render={() => (
                    <FormItem>
                      <FormLabel>What kind of support are you looking for? * (Select all that apply)</FormLabel>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {helpTypes.map((help) => (
                          <div
                            key={help.id}
                            className="flex items-center space-x-3 rounded-lg border p-3 cursor-pointer hover:bg-muted/50"
                          >
                            <Checkbox
                              id={`help-${help.id}`}
                              checked={selectedHelpTypes.includes(help.id)}
                              onCheckedChange={() => handleHelpTypeToggle(help.id)}
                            />
                            <Label htmlFor={`help-${help.id}`} className="font-normal cursor-pointer flex-1">
                              {help.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mentorDomain"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Mentor Domain</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a domain" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="max-h-[300px]">
                          {mentorDomains.map((domain) => (
                            <SelectItem key={domain} value={domain.toLowerCase().replace(/[\/\s]+/g, '-')}>
                              {domain}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Career Goals & Challenges */}
            {(isGraduated === "yes" || isGraduated === "no") && (
              <div className="space-y-4 border-t pt-6 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="bg-muted/50 p-3 rounded-lg flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-phase-after" />
                  <h3 className="font-semibold">Career Goals & Challenges</h3>
                </div>

                <FormField
                  control={form.control}
                  name="careerGoals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What are your career goals? *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your short-term and long-term career aspirations..."
                          rows={3}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="challenges"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Specific challenges you're facing *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe the specific challenges or obstacles you need help with..."
                          rows={3}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Any additional information</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any other details you'd like to share with potential mentors..."
                          rows={2}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Urgency Level */}
            {(isGraduated === "yes" || isGraduated === "no") && (
              <div className="space-y-4 border-t pt-6 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="bg-muted/50 p-3 rounded-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-phase-after" />
                  <h3 className="font-semibold">Urgency & Availability</h3>
                </div>

                <FormField
                  control={form.control}
                  name="urgency"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>How urgent is your request? *</FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} value={field.value} className="grid gap-2">
                          {urgencyLevels.map((level) => (
                            <div
                              key={level.value}
                              className="flex items-center space-x-3 rounded-lg border p-3 cursor-pointer hover:bg-muted/50"
                            >
                              <RadioGroupItem value={level.value} id={`urgency-${level.value}`} />
                              <div className="flex-1">
                                <Label htmlFor={`urgency-${level.value}`} className="font-medium cursor-pointer">
                                  {level.label}
                                </Label>
                                <p className="text-xs text-muted-foreground">{level.description}</p>
                              </div>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferredTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred time for contact</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Weekday evenings, Weekend mornings" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {(isGraduated === "yes" || isGraduated === "no") && (
              <Button type="submit" className="w-full bg-phase-after hover:bg-phase-after/90" size="lg">
                Submit Help Request
              </Button>
            )}

            <p className="text-xs text-center text-muted-foreground">
              Your information will be shared only with relevant volunteers who can help you.
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}