import React from "react";
import { motion } from "framer-motion";
import { 
  GitBranch, 
  Network, 
  Search,
  MessageSquare,
  Layers,
  Sparkles // Nouvelle icône pour l'IA
} from "lucide-react";

// Un composant de carte unique et plus visuel
const FeatureGridCard = ({ title, description, icon: Icon, imageUrl, className }) => {
  return (
    <motion.div
      className={`group relative rounded-3xl overflow-hidden p-8 flex flex-col justify-end items-start h-full min-h-[400px] ${className}`}
      style={{
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, y: -5, boxShadow: '0 16px 48px 0 rgba(122, 155, 238, 0.3)' }}
    >
      {/* Image en arrière-plan */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Dégradé pour la lisibilité du texte */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0) 60%)'
        }}
      />
      
      {/* Contenu textuel */}
      <div className="relative z-10">
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const HowItWorksSection = () => {
  const features = [
    {
      icon: GitBranch,
      title: "Branching Conversations",
      description: "Explore ideas in parallel without losing your train of thought.",
      imageUrl: "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=2896&auto=format&fit=crop",
      className: "md:col-span-2", // Cette carte prendra 2 colonnes sur 3
    },
    {
      icon: MessageSquare,
      title: "Model Switching",
      description: "Leverage different AI models in one chat for diverse insights.",
      imageUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2940&auto=format&fit=crop",
      className: "",
    },
    {
      icon: Network,
      title: "Knowledge Graphs",
      description: "Your workspace automatically connects concepts and builds a queryable map of your knowledge.",
      imageUrl: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?q=80&w=2940&auto=format&fit=crop",
      className: "md:row-span-2", // Cette carte prendra 2 rangées de hauteur
    },
    {
      icon: Layers,
      title: "Intelligent Workspaces",
      description: "Organize projects with context-aware AI.",
      imageUrl: "https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      className: "md:col-span-2", // Cette carte prendra 2 colonnes
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-semibold mb-8" style={{ color: '#1E1E2F' }}>
            A Workspace Built for a New{" "}
            <span style={{
              background: 'linear-gradient(135deg, #7A9BEE 0%, #3D48C1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Dimension of Thought
            </span>
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#1E1E2F', opacity: 0.7 }}>
            SYNAPS isn't just another tool. It's a new environment designed to augment your creative and analytical process.
          </p>
        </motion.div>

        {/* La Grille Asymétrique */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8">
          {features.map((feature) => (
            <FeatureGridCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              imageUrl={feature.imageUrl}
              className={feature.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;