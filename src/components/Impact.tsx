import { Quote } from "lucide-react";

const stories = [
  {
    name: "Sarah M.",
    role: "Trauma Recovery Program Participant",
    quote: "TrustAid gave me the support I needed to heal. Through their counseling program, I found my voice again and learned to trust in tomorrow.",
    location: "Kenya"
  },
  {
    name: "David O.",
    role: "Peace Building Workshop Participant",
    quote: "The peace building sessions helped our community come together after years of conflict. We're now working side by side, building a future for our children.",
    location: "Uganda"
  },
  {
    name: "Grace N.",
    role: "Livelihood Empowerment Beneficiary",
    quote: "The skills training program changed my life. I now run my own business and can provide for my family with dignity and pride.",
    location: "Rwanda"
  }
];

const stats = [
  { number: "5,000+", label: "Lives Transformed" },
  { number: "50+", label: "Communities Served" },
  { number: "15,000+", label: "Trees Planted" },
  { number: "1,200+", label: "Skills Trained" }
];

const Impact = () => {
  return (
    <section id="impact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stories Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Stories of Hope
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div 
                key={index}
                className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-hover transition-smooth group"
              >
                <Quote className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{story.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{story.name}</p>
                  <p className="text-sm text-muted-foreground">{story.role}</p>
                  <p className="text-sm text-primary mt-1">{story.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
