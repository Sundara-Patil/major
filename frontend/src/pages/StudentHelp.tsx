import { useForm } from "react-hook-form";
import { Layout } from "@/components/layout/Layout";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { HandHeart } from "lucide-react";
import bgStudentHelp from "@/assets/bg-student-help.jpg";

/* ---------------- TYPES ---------------- */

type StudentHelpFormData = {
  fullName: string;
  email: string;
  phone: string;
  helpType: string;
  message: string;
};

/* ---------------- COMPONENT ---------------- */

export default function StudentHelp() {
  const form = useForm<StudentHelpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      helpType: "",
      message: "",
    },
  });

  const onSubmit = async (data: StudentHelpFormData) => {
    // 🔑 MAP FRONTEND → BACKEND
    const payload = {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      help_type: data.helpType,
      message: data.message,
    };

    try {
      const res = await fetch("https://velevateu.onrender.com/api/student-help", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const resData = await res.json();

      if (res.ok) {
        toast({
          title: "Request Submitted",
          description: "Our team will contact you soon.",
        });
        form.reset();
      } else {
        const errors = Object.entries(resData)
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n");

        toast({
          title: "Submission Error",
          description: errors || "Something went wrong",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Network Error",
        description: "Backend server not running",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <AnimatedBackground
        image={bgStudentHelp}
        animation="zoom"
        className="py-16 md:py-24"
      >
        <div className="container text-center">
          <HandHeart className="mx-auto mb-4 h-10 w-10 text-white" />
          <h1 className="text-4xl font-bold text-white mb-2">Student Help</h1>
          <p className="text-white/90">
            Career, mentorship, or financial guidance — we’re here to help.
          </p>
        </div>
      </AnimatedBackground>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-[#061E3C] md:text-5xl">
              Get Guidance for Your Next Step
            </h2>
            <p className="mb-10 text-lg text-gray-600 text-xl">
              Transitioning after Navodaya can bring many questions about careers, higher education, and opportunities. Our alumni and volunteers are here to guide you with mentorship, advice, and resources to help you make informed decisions for your future.

              Fill out the form below and our team will connect you with the right guidance and support.
            </p>
          </div>
        </div>

        <div className="container max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Request Support</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@email.com" {...field} />
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
                        <FormLabel>Phone *</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 9XXXXXXXXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="helpType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type of Help *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select help type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="career">Career Guidance</SelectItem>
                            <SelectItem value="mentorship">Mentorship</SelectItem>
                            <SelectItem value="financial">Financial Support</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea rows={4} placeholder="Explain your requirement..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    Submit Request
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
