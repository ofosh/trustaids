import { Heart, Users, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            TrustAid was born from a simple yet powerful belief: that every
            person deserves the opportunity to heal, grow, and build a life of
            dignity and purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision */}
          <div className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-hover transition-smooth group">
            <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To transform lives, build peaceful and resilient communities with
              healthier minds and a greener planet.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-hover transition-smooth group">
            <div className="w-14 h-14 rounded-full gradient-warm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To promote holistic well-being, peace, and sustainable development
              in vulnerable communities through trauma support, peacebuilding,
              climate action, and livelihood empowerment.
            </p>
          </div>

          {/* Values */}
          {/* <div className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-hover transition-smooth group">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <p className="text-muted-foreground leading-relaxed">
              Compassion, integrity, collaboration, and empowerment guide
              everything we do, ensuring dignity and respect in every
              interaction.
            </p>
          </div> */}
        </div>

        {/* Story Text */}
        <div className="max-w-3xl mx-auto mt-16 text-center space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Trust Aid is a non-governmental, non-religious, not political and
            not-for-profit making organization committed to promoting peace and
            mental health in Nigeria, fostering hope during and aftermath of
            conflict, crises, disaster and other challenging situations.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our journey began in 2021 in response to the growing needs of
            vulnerable populations in Nigeria, who face numerous challenges;
            from conflicts and insecurity, displacement and migration, poor
            healthcare services, natural disasters/impact of climate change,
            social and economic inequality to cultural and religious tensions.
            It was founded on the principle that every individual deserves hope,
            dignity, and the opportunity to thrive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
