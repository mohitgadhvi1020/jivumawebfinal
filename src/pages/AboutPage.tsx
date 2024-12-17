import { Award, Users, Heart, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "@/components/about/Logo";
import { Timeline } from "@/components/about/TimeLine";
import { ConsultingExperience } from "@/components/about/ConsultingExperience";

export function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Logo and Introduction */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings as spice consultants to becoming a premium
            spice blend brand, our journey has been flavored with passion,
            expertise, and dedication to authentic taste.
          </p>
        </motion.div>
      </div>

      {/* Consulting Experience */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
        <ConsultingExperience />
      </section>

      {/* Company Timeline */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <Timeline />
      </section>

      {/* Values Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="text-center p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <Award className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality First</h3>
            <p className="text-gray-600">
              Premium ingredients and authentic recipes for the perfect taste.
            </p>
          </motion.div>
          <motion.div
            className="text-center p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}>
            <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Family Heritage</h3>
            <p className="text-gray-600">
              Recipes passed down through generations of master chefs.
            </p>
          </motion.div>
          <motion.div
            className="text-center p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}>
            <Heart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
            <p className="text-gray-600">
              Every blend crafted with care and attention to detail.
            </p>
          </motion.div>
          <motion.div
            className="text-center p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}>
            <Leaf className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Natural Ingredients</h3>
            <p className="text-gray-600">
              100% natural spices without any artificial additives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Promise */}
      <motion.section
        className="bg-orange-50 rounded-lg p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}>
        <h2 className="text-3xl font-bold mb-4">Our Quality Promise</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          With over two decades of consulting experience, every NestSpices
          product embodies our commitment to excellence. We take pride in
          delivering authentic flavors that make your cooking experience truly
          special, backed by our extensive expertise in the culinary world.
        </p>
      </motion.section>
    </div>
  );
}
