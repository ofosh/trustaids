import { Brain, Handshake, Leaf, Briefcase } from "lucide-react";
import mentalHealthImg from "@/assets/program-mental-health.jpg";
import peaceImg from "@/assets/program-peace.jpg";
import climateImg from "@/assets/program-climate.jpg";
import livelihoodImg from "@/assets/program-livelihood.jpg";
import { useCollapse } from "react-collapsed";
import { useState } from "react";
const programs = [
  {
    icon: Brain,
    title: "Trauma & Mental Health",
    description:
      "Trauma occurs when our natural responses to life-threatening or distressing experiences lead to lasting changes that impact our ability to function. Traumatic events, such as loss, illness, violence, or crime, can affect anyone, anywhere, and have far-reaching consequences for individuals, communities, and societies as a whole. The World Health Organization (WHO) reports that over a billion people worldwide live with mental health conditions like anxiety and depression, resulting in significant personal and economic burdens. In 2021, nearly 727,000 lives were lost to suicide, and depression and anxiety are estimated to cost the global economy a staggering $1 trillion annually, primarily due to lost productivity. Often, individuals suffering from post-traumatic stress disorder (PTSD) go unnoticed and unsupported, exacerbating their struggles.  Through these comprehensive initiatives, Trust Aid continues to provide holistic support to individuals and communities affected by trauma, promoting healing, resilience, and recovery, creating a safer and more supportive environment for those in need.",
    subDesc: [
      {
        id: 1,
        titleDesc:
          "In response to this challenge, Trust Aid employs the following approach;",
      },
      {
        point:
          "1. Provides individual and group counseling sessions for individuals affected by trauma",
      },
      {
        point:
          "2. Organizes workshops on stress management, emotional regulation, and coping mechanisms",
      },
      {
        point:
          "3. Establishes support groups for survivors of trauma to share their experiences and receive support",
      },
      {
        point:
          "4. Provides training for healthcare providers on trauma-informed care and mental health support.",
      },
    ],
    image: mentalHealthImg,
    color: "from-primary to-primary-dark",
  },
  {
    icon: Handshake,
    title: "Peace Building",
    description:
      "Peace is the foundation upon which sustainable development is built, and it is essential for creating an environment where individuals and communities can flourish.We acknowledge that without peace, development is impossible, and without development, peace is unsustainable.We recognize the interconnection between peace and trauma, and that trauma can lead to feelings of vulnerability, anxiety, and fear, making it difficult to trust others and maintain peaceful relationships, as unaddressed trauma, amongst other factors, can perpetuate cycles of violence and conflict. By teaching children and young people about the importance of peace, conflict resolution, and social cohesion, we can create a more peaceful and harmonious society. Recognizing the importance of peace in fostering thriving individuals and communities, we work to create a more inclusive, just and peaceful society where vulnerable populations can flourish.",
    subDesc: [
      {
        id: 2,
        titleDesc:
          "At Trust Aid, we employ the following approach to promote peace and social cohesion:",
      },
      {
        point:
          "1. Offer training on conflict resolution, mediation, and negotiation to equip individuals and communities with the skills they need to manage conflicts effectively.",
      },
      {
        point:
          "2. Facilitate community dialogue sessions to promote understanding and reconciliation. These sessions provide a safe space for individuals and communities to share their experiences, concerns, and ideas.",
      },
      {
        point:
          "3. Organize youth leadership programs to empower young people to become peace builders. We believe that by equipping young people with leadership skills and knowledge, we can create a new generation of peace builders who can promote peace and development in their communities.",
      },
      {
        point:
          "4. Advocate for the integration of peace education into school curricula to promote a culture of peace.",
      },
    ],
    image: peaceImg,
    color: "from-accent to-secondary",
  },
  {
    icon: Leaf,
    title: "Climate Action",
    description:
      "Climate change is one of the most pressing issues of our time, with far-reaching consequences for the environment, human health, and the economy. Rising temperatures, changing precipitation patterns, and increased frequency of extreme weather events are altering ecosystems, displacing communities, and threatening livelihoods.The Impacts of climate change are felt across the globe, and are not limited to the environment; they also have significant social and economic implications. Climate change can exacerbate existing social and economic inequalities, particularly for vulnerable populations such as women, children, and indigenous communities. It can also lead to food and water scarcity, loss of biodiversity, and increased risk of natural disasters. ",
    subDesc: [
      { id: 3, sample: "Trust Aid’s Response" },
      {
        titleDesc:
          "Trust Aid’s climate action initiatives are committed to promoting the reduction of greenhouse gas emissions, and enhancing the resilience of communities to climate-related shocks and supporting communities in adapting to its impacts through;",
      },
      {
        point:
          "1. Promoting climate-resilient agricultural practices to enhance food security and reduce the impact of climate change.",
      },
      {
        point:
          "2. Supporting the adoption of renewable energy sources, such as solar and wind power, to reduce dependence on fossil fuels and lower greenhouse gas emissions.",
      },
      {
        point:
          "3. Providing training and support on disaster risk reduction and management to help communities prepare for and respond to climate-related disasters.",
      },
      {
        point:
          "4. Organizing awareness campaigns to educate communities about climate change causes, effects, and mitigation strategies.",
      },
    ],
    image: climateImg,
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Briefcase,
    title: "Livelihood Empowerment",
    description:
      "Livelihood empowerment is a critical component of sustainable development, enabling individuals and communities to improve their economic well-being and quality of life. Trust Aid recognizes the interconnectedness of livelihood empowerment, peace, trauma, and climate change, and implements initiatives that address these complex relationships. Livelihood empowerment initiatives can help communities adapt to climate change by promoting climate-resilient livelihoods. ",
    subDesc: [
      {
        id: 4,
        titleDesc:
          "The Interconnection between Livelihood Empowerment, Peace, Trauma, and Climate Change:",
      },
      {
        point:
          "1. Peace: Livelihood empowerment can contribute to peace by reducing poverty, inequality, and social tensions. When individuals have access to stable and sustainable livelihoods, they are less likely to engage in conflict.",
      },
      {
        point:
          "2. Trauma: Trauma can pose a significant impact on livelihoods, particularly in conflict-affected or disaster-prone areas. Livelihood empowerment initiatives can help individuals recover from trauma by providing a sense of purpose and stability.",
      },
      {
        point:
          "3. Climate Change: Climate change can have devastating impacts on livelihoods, particularly in communities that depend on natural resources. Livelihood empowerment initiatives can help communities adapt to climate change by promoting climate-resilient livelihoods",
      },

      {
        pon: "To equip individuals with practical skills that can be applied to generate income and improve their livelihoods, Trust Aid organizes training in agriculture, craftsmanship, entrepreneurship, financial literacy, supporting development of value chains for local products to enhance market access and income generation, helping communities connect to markets, improve their livelihoods, and reduce poverty, and enhancing their resilience to climate change",
      },
      {
        pon: "Trust Aid's peace building and livelihood empowerment initiatives address climate change, trauma and mental health by integrating sustainable practices, community engagement, and economic stability, promoting peace, resilience, and sustainability in communities affected by conflict, trauma, and climate change.",
      },
    ],
    image: livelihoodImg,
    color: "from-orange-500 to-amber-600",
  },
];

const Programs = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We focus on four key thematic areas that create lasting impact and
            transform lives
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-smooth"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{program.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
                {isExpanded ? (
                  ""
                ) : (
                  <button {...getToggleProps()} className="text-blue-600">
                    Read More
                  </button>
                )}
                <ul>
                  {program.subDesc.map((sub, index) => (
                    <div
                      key={index}
                      {...getCollapseProps()}
                      className="text-gray-700 text-sm leading-relaxed overflow-hidden transition-all duration-500 ease-in-out"
                    >
                      <p
                        className="text-muted-foreground leading-relaxed "
                        key={index}
                      >
                        {sub.sample}
                      </p>
                      <li className="text-muted-foreground leading-relaxed py-1 italic">
                        {sub.titleDesc}
                      </li>

                      <p className="text-muted-foreground leading-relaxed">
                        {sub.point}
                      </p>

                      <p className="text-muted-foreground leading-relaxed">
                        {sub.pon}
                      </p>
                    </div>
                  ))}
                </ul>
                {!isExpanded ? (
                  ""
                ) : (
                  <button {...getToggleProps()} className="text-blue-600">
                    Read Less
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
