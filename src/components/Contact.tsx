
import React from "react";
import { useForm } from "react-hook-form";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    toast.success("Message sent successfully! I'll get back to you soon.");
    form.reset();
  };

  return (
    <section id="contact" className="section-container py-20">
      <h2 className="section-title">
        <Mail className="text-dev" /> Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div className="dev-card p-8">
          <h3 className="text-xl font-bold mb-6 text-white">Get In Touch</h3>
          <p className="text-gray-300 mb-8">
            Have a project in mind or want to collaborate? Feel free to reach out through the form or using the contact information below.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-dev mt-1" />
              <div>
                <h4 className="font-medium text-white">Email</h4>
                <a href="mailto:aditya@example.com" className="text-gray-400 hover:text-dev transition-colors">
                  aditya@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-dev mt-1" />
              <div>
                <h4 className="font-medium text-white">Phone</h4>
                <p className="text-gray-400">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-dev mt-1" />
              <div>
                <h4 className="font-medium text-white">Location</h4>
                <p className="text-gray-400">Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your name" 
                        {...field}
                        className="bg-dev-dark border-dev/30 focus-visible:border-dev focus-visible:ring-dev" 
                      />
                    </FormControl>
                    <FormMessage className="text-dev-tertiary" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="your.email@example.com" 
                        {...field}
                        className="bg-dev-dark border-dev/30 focus-visible:border-dev focus-visible:ring-dev" 
                      />
                    </FormControl>
                    <FormMessage className="text-dev-tertiary" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Subject</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="What is this regarding?" 
                        {...field}
                        className="bg-dev-dark border-dev/30 focus-visible:border-dev focus-visible:ring-dev" 
                      />
                    </FormControl>
                    <FormMessage className="text-dev-tertiary" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Write your message here..." 
                        rows={6}
                        {...field}
                        className="bg-dev-dark border-dev/30 focus-visible:border-dev focus-visible:ring-dev resize-none" 
                      />
                    </FormControl>
                    <FormMessage className="text-dev-tertiary" />
                  </FormItem>
                )}
              />
              
              <button 
                type="submit"
                className="px-6 py-3 bg-dev-dark border border-dev text-dev font-code rounded hover:bg-dev hover:text-dev-dark transition-all duration-300 w-full flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
