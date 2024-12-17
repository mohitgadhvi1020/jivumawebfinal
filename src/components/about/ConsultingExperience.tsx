import { Users, BookOpen, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Business Consulted",
    description: "Helping restaurants perfect their recipes",
  },
  {
    icon: BookOpen,
    value: "1000+",
    label: "Recipes Developed",
    description: "Unique recipes crafted for clients",
  },
  {
    icon: Award,
    value: "20+",
    label: "Years Experience",
    description: "In spice blending and consulting",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Client Satisfaction",
    description: "Based on post-consultation surveys",
  },
];

export function ConsultingExperience() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white p-6 rounded-xl shadow-md">
          <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <stat.icon className="w-6 h-6 text-orange-600" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {stat.value}
          </div>
          <div className="text-sm font-medium text-gray-900 mb-1">
            {stat.label}
          </div>
          <div className="text-sm text-gray-600">{stat.description}</div>
        </motion.div>
      ))}
    </div>
  );
}
