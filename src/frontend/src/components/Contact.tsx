import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContact } from "../hooks/useQueries";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const mutation = useSubmitContact();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync(form);
      setSubmitted(true);
      toast.success("Message sent! Sarah will be in touch soon.");
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <section id="contact" className="py-20" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-sm font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "oklch(0.57 0.115 192)" }}
          >
            Get In Touch
          </p>
          <h2
            className="font-serif font-bold text-4xl"
            style={{ color: "oklch(0.22 0.055 222)" }}
          >
            Contact Us
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="rounded-2xl p-8 h-full"
              style={{ background: "oklch(0.22 0.055 222)" }}
            >
              <h3 className="font-serif font-bold text-2xl text-white mb-2">
                Sarah Jenkins
              </h3>
              <p
                style={{ color: "oklch(0.72 0.115 192)" }}
                className="font-medium mb-8"
              >
                Top-Rated Real Estate Agent
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.57 0.115 192 / 0.2)" }}
                  >
                    <Phone
                      className="w-5 h-5"
                      style={{ color: "oklch(0.72 0.115 192)" }}
                    />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wide mb-1">
                      Phone
                    </p>
                    <p className="text-white font-medium">(310) 555-0192</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.57 0.115 192 / 0.2)" }}
                  >
                    <Mail
                      className="w-5 h-5"
                      style={{ color: "oklch(0.72 0.115 192)" }}
                    />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wide mb-1">
                      Email
                    </p>
                    <p className="text-white font-medium">
                      sarah@bestrealestateagent.info
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.57 0.115 192 / 0.2)" }}
                  >
                    <MapPin
                      className="w-5 h-5"
                      style={{ color: "oklch(0.72 0.115 192)" }}
                    />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wide mb-1">
                      Office
                    </p>
                    <p className="text-white font-medium">
                      9840 Wilshire Blvd, Suite 200
                      <br />
                      Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="rounded-xl p-5"
                style={{
                  background: "oklch(0.57 0.115 192 / 0.1)",
                  border: "1px solid oklch(0.57 0.115 192 / 0.3)",
                }}
              >
                <p className="text-white/70 text-sm leading-relaxed">
                  Available Monday – Saturday, 8AM – 7PM PST. For urgent
                  inquiries, please call directly.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div
                className="h-full rounded-2xl flex flex-col items-center justify-center text-center p-10"
                style={{ background: "oklch(0.97 0.005 220)" }}
                data-ocid="contact.success_state"
              >
                <CheckCircle
                  className="w-16 h-16 mb-4"
                  style={{ color: "oklch(0.57 0.115 192)" }}
                />
                <h3
                  className="font-serif font-bold text-2xl mb-2"
                  style={{ color: "oklch(0.22 0.055 222)" }}
                >
                  Message Sent!
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "oklch(0.48 0.02 222)" }}
                >
                  Thank you for reaching out. Sarah will contact you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 shadow-md space-y-5"
                style={{ background: "oklch(0.97 0.005 220)" }}
                data-ocid="contact.panel"
              >
                <h3
                  className="font-serif font-bold text-xl"
                  style={{ color: "oklch(0.22 0.055 222)" }}
                >
                  Send a Message
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-name">Full Name *</Label>
                    <Input
                      id="contact-name"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={update("name")}
                      required
                      data-ocid="contact.input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={update("email")}
                      required
                      data-ocid="contact.input"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contact-phone">Phone</Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={form.phone}
                    onChange={update("phone")}
                    data-ocid="contact.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contact-message">Message *</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell Sarah about your real estate needs..."
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    required
                    data-ocid="contact.textarea"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full font-semibold text-white"
                  style={{ background: "oklch(0.57 0.115 192)" }}
                  data-ocid="contact.submit_button"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />{" "}
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
