import { Button } from "@/components/ui/button";
import { Heart, Users, Handshake } from "lucide-react";
import { toast } from "sonner";

const GetInvolved = () => {
  const handleDonate = () => {
    toast.success("Thank you for your interest! Donation system coming soon.");
  };

  const handleVolunteer = () => {
    toast.success(
      "Thank you for your interest in volunteering! We'll be in touch soon."
    );
  };

  const handlePartner = () => {
    toast.success(
      "Thank you for your interest in partnering! We'll contact you shortly."
    );
  };

  return (
    <section id="get-involved" className="py-24 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your support makes a real difference. Join us in creating lasting
            change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Donate */}
          <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-smooth text-center group">
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Donate</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your financial support helps us provide essential services and
              create sustainable change in communities.
            </p>
            <Button
              className="gradient-primary hover:shadow-hover transition-smooth rounded-full w-full"
              size="lg"
              onClick={handleDonate}
            >
              Make a Donation
            </Button>
          </div>

          {/* Volunteer */}
          <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-smooth text-center group">
            <div className="w-16 h-16 rounded-full gradient-warm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Volunteer</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Share your time, skills, and passion to make a direct impact in
              the lives of those we serve.
            </p>
            <Button
              variant="outline"
              className="rounded-full w-full border-2 hover:bg-primary/5 transition-smooth hover:text-blue-800"
              size="lg"
              onClick={handleVolunteer}
            >
              Become a Volunteer
            </Button>
          </div>

          {/* Partner */}
          <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-smooth text-center group">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Handshake className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Partner With Us</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Collaborate with TrustAid to amplify our impact and create
              systemic change together.
            </p>
            <Button
              variant="outline"
              className="rounded-full w-full border-2 hover:bg-primary/5 transition-smooth hover:text-blue-800"
              size="lg"
              onClick={handlePartner}
            >
              Explore Partnerships
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
