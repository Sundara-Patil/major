import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Layout } from "@/components/layout/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Heart, BookOpen, GraduationCap, Rocket } from "lucide-react";
import { volunteerSchema, type VolunteerFormData } from "@/lib/schemas/volunteerSchema";
import { toast } from "@/hooks/use-toast";
import bgVolunteer from "@/assets/bg-volunteer.jpg";

// Districts
const districts = [
  "Bagalkot", "Ballari", "Belagavi (Belgaum)", "Bengaluru Rural", "Bengaluru Urban (Bangalore)",
  "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru (Chikmagalur)", "Chitradurga",
  "Dakshina Kannada (South Canara)", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri",
  "Kalaburagi (Gulbarga)", "Kodagu (Coorg)", "Kolar", "Koppal", "Mandya", "Mysuru (Mysore)",
  "Raichur", "Ramanagara", "Shivamogga (Shimoga)", "Tumakuru (Tumkur)", "Udupi",
  "Uttara Kannada (Karwar)", "Vijayapura (Bijapur)", "Yadgir", "Vijayanagara"
];

// Phases
const phaseOptions = [
  { id: "before", label: "Before Navodaya" },
  { id: "during", label: "During Navodaya" },
  { id: "after", label: "After Navodaya" }
];

// Roles per phase
const beforeNavodayaRoles = [
  "Resource for teaching Navodaya entrance exam (online/offline)",
  "Learning centre at rural respective natives",
  "Creating awareness about Navodaya and exams",
  "Technical support",
  "Providing study materials"
];
const duringNavodayaRoles = [
  "Counseling",
  "Resource for guidance at Navodaya schools (current living location or other Navodaya)",
  "Technical support",
  "Connecting to right people/resources",
  "Conducting workshops/Seminars/Motivational speech",
  "Sponsorships"
];
const afterNavodayaRoles = [
  "Personal mentorship",
  "Domain based guidance",
  "College/Course Selection",
  "Trainer for upskilling",
  "Providing scholarship (Financial support)",
  "Internships opportunities",
  "Jobs opportunities",
  "Resources for training",
  "Resources for guiding"
];

export default function Volunteer() {

  const [loading, setLoading] = useState(false);

  const form = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      occupation: "",
      address: "",
      isNavodayan: undefined,
      jnvSchool: "",
      district: "",
      timeContribution: "",
      selectedPhases: [],
      beforeRoles: [],
      duringRoles: [],
      afterRoles: [],
    },
  });

  const isNavodayan = form.watch("isNavodayan");
  const selectedPhases = form.watch("selectedPhases");
  const beforeRoles = form.watch("beforeRoles") || [];
  const duringRoles = form.watch("duringRoles") || [];
  const afterRoles = form.watch("afterRoles") || [];

  // Map form data to backend-friendly format
  const onSubmit = async (data: VolunteerFormData) => {
  if (loading) return;

  try {
    setLoading(true);
      const payload = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      occupation: data.occupation,
      address: data.address,
      is_navodayan: data.isNavodayan, // "yes" or "no"
      jnv_school: data.jnvSchool || "",
      district: data.district || "",
      time_contribution: data.timeContribution || "",
      selected_phases: data.selectedPhases || [],
      before_roles: data.beforeRoles || [],
      during_roles: data.duringRoles || [],
      after_roles: data.afterRoles || [],
    };

      const res = await fetch("https://velevateu.onrender.com/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const resData = await res.json();

      if (res.ok) {
        toast({
          title: "Application Submitted",
          description:
            resData.message ||
            "Thank you for volunteering! We will get in touch soon.",
        });

        form.reset();
      } else {
        toast({
          title: "Submission Error",
          description: resData.message || "Something went wrong.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Network Error",
        description: "Server not reachable.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePhaseToggle = (phaseId: string) => {
    const current = form.getValues("selectedPhases");
    const updated = current.includes(phaseId)
      ? current.filter(id => id !== phaseId)
      : [...current, phaseId];
    form.setValue("selectedPhases", updated, { shouldValidate: true });
  };

  const handleRoleToggle = (
    role: string,
    fieldName: "beforeRoles" | "duringRoles" | "afterRoles"
  ) => {
    const current = form.getValues(fieldName) || [];
    const updated = current.includes(role)
      ? current.filter(r => r !== role)
      : [...current, role];
    form.setValue(fieldName, updated, { shouldValidate: true });
  };

  return (
    <Layout>
      <AnimatedBackground
        image={bgVolunteer}
        overlay="dark"
        animation="zoom"
        className="py-16 md:py-24"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            {/* <Heart className="h-12 w-12 text-white mx-auto mb-4" /> */}
            <h1 className="mb-4 text-4xl font-bold text-white">Join as Volunteer</h1>
            <p className="text-lg text-white/90">Make a difference in the lives of JNV students.</p>
          </div>
        </div>
      </AnimatedBackground>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-[#061E3C] md:text-5xl">
              Become a Volunteer
            </h2>
            <p className="mb-10 text-lg text-gray-600 md:text-xl">
              Join our mission to support and guide Navodaya students at every stage of their journey.
              By volunteering, you can share your knowledge, mentor students, and help them discover the right opportunities for their future. Your time and experience can create a lasting impact.
            </p>
          </div>
        </div>

        <div className="container">
          <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Volunteer Registration</CardTitle>
              <CardDescription>
                Fill in your details to get started. Fields marked with * are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Basic Fields */}
                  {["name","phone","email","occupation","address"].map((field) => (
                    <FormField
                      key={field}
                      control={form.control}
                      name={field as keyof VolunteerFormData}
                      render={({ field: f }) => (
                        <FormItem>
                          <FormLabel>{field.charAt(0).toUpperCase() + field.slice(1)} *</FormLabel>
                          <FormControl>
                            {field === "address" ? (
                              <Textarea rows={3} placeholder="Your current address" {...f} />
                            ) : (
                              <Input placeholder={`Your ${field}`} {...f} />
                            )}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}

                  {/* Are you a Navodayan? */}
                  <FormField
                    control={form.control}
                    name="isNavodayan"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Are you a Navodayan? *</FormLabel>
                        <FormControl>
                          <RadioGroup onValueChange={field.onChange} value={field.value} className="flex gap-6">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="navodayan-yes" />
                              <Label htmlFor="navodayan-yes" className="font-normal cursor-pointer">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="navodayan-no" />
                              <Label htmlFor="navodayan-no" className="font-normal cursor-pointer">No</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Conditional fields for Navodayan = Yes */}
                  {isNavodayan === "yes" && (
                    <div className="space-y-6 border-t pt-6">
                      <FormField
                        control={form.control}
                        name="jnvSchool"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name your Navodaya School *</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., JNV Dharwad" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                    <div className="space-y-6 border-t pt-6">
                      <FormField
                        control={form.control}
                        name="district"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contribution District *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a district" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="max-h-[300px]">
                                {districts.map(d => (
                                  <SelectItem key={d} value={d.toLowerCase().replace(/\s+/g, "-")}>{d}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="timeContribution"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Time Contribution *</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., 5 hours/week" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="selectedPhases"
                        render={() => (
                          <FormItem>
                            <FormLabel>Which phase are you interested in? *</FormLabel>
                            <div className="space-y-3">
                              {phaseOptions.map(phase => (
                                <div key={phase.id} className="flex items-center space-x-3">
                                  <Checkbox
                                    id={`phase-${phase.id}`}
                                    checked={selectedPhases.includes(phase.id)}
                                    onCheckedChange={() => handlePhaseToggle(phase.id)}
                                  />
                                  <Label htmlFor={`phase-${phase.id}`} className="font-medium cursor-pointer">{phase.label}</Label>
                                </div>
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Roles per phase */}
                      {selectedPhases.includes("before") && (
                        <RoleSection roles={beforeNavodayaRoles} fieldName="beforeRoles" form={form} icon={BookOpen} title="Before Navodaya" />
                      )}
                      {selectedPhases.includes("during") && (
                        <RoleSection roles={duringNavodayaRoles} fieldName="duringRoles" form={form} icon={GraduationCap} title="During Navodaya" />
                      )}
                      {selectedPhases.includes("after") && (
                        <RoleSection roles={afterNavodayaRoles} fieldName="afterRoles" form={form} icon={Rocket} title="After Navodaya" />
                      )}
                    </div>
                  

                  <Button type="submit" className="w-full" size="lg" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}

// Reusable component for Roles per phase
function RoleSection({ roles, fieldName, form, icon: Icon, title }: any) {
  const selectedRoles = form.watch(fieldName) || [];
  const handleRoleToggle = (role: string) => {
    const current = form.getValues(fieldName) || [];
    const updated = current.includes(role) ? current.filter(r => r !== role) : [...current, role];
    form.setValue(fieldName, updated, { shouldValidate: true });
  };

  return (
    <div className="space-y-4 bg-muted/30 p-4 rounded-lg border">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="h-5 w-5" />
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      {roles.map((role: string) => (
        <div key={role} className="flex items-start space-x-3">
          <Checkbox
            id={`${fieldName}-${role}`}
            checked={selectedRoles.includes(role)}
            onCheckedChange={() => handleRoleToggle(role)}
          />
          <Label htmlFor={`${fieldName}-${role}`} className="font-normal cursor-pointer leading-tight">{role}</Label>
        </div>
      ))}
    </div>
  );
}
