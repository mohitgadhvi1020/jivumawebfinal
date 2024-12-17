import { motion } from "framer-motion";

const milestones = [
  {
    year: 2004,
    title: "Humble Beginnings",
    description:
      "Started as a small spice consulting firm, helping food business to perfect their product recipes.",
  },
  {
    year: 2010,
    title: "Expansion of Services",
    description:
      "Started Helping in developing comprehensive turnkey projects.",
  },

  {
    year: 2020,
    title: "Jivuam Food Product Launch",
    description:
      "Transformed our consulting expertise into a premium spice blend brand.",
  },
];

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-orange-500/80 to-orange-500/20" />

      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            className="relative"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}>
            <div
              className={`flex items-center ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}>
              <div className="flex-1" />

              <div className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full relative z-10">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>

              <div className="flex-1">
                <div
                  className={`bg-white p-6 rounded-lg shadow-md mx-4 ${
                    index % 2 === 0 ? "text-right" : ""
                  }`}>
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-2">
                    {milestone.year}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
