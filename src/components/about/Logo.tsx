import { Wheat } from "lucide-react";
import { motion } from "framer-motion";

export function Logo() {
  return (
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="relative">
        <img src="/assets/images/nestSpices.png" className="w-50 h-50" />
      </div>
      <div>
        <p className="text-sm text-gray-600">Authentic Flavors Since 1990</p>
      </div>
    </motion.div>
  );
}
