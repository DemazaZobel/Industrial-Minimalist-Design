import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Consultation & Planning",
    description:
      "We begin by understanding your vision, constraints, and timeline. Then we translate your ideas into a strategic roadmap with total clarity.",
    color: "bg-accent/20",
  },
  {
    title: "Design & Permitting",
    description:
      "Our architects and engineers bring your ideas to life—handling permits and compliance to clear the path for smooth execution.",
    color: "bg-secondary/20",
  },
  {
    title: "Site Prep & Foundation",
    description:
      "We mobilize the team, secure the site, and lay the structural foundation that supports everything to come.",
    color: "bg-primary/20",
  },
  {
    title: "Core Construction",
    description:
      "From structure to systems, we build with durability and precision using the highest standards in construction.",
    color: "bg-accent/20",
  },
  {
    title: "Finishing & Handover",
    description:
      "We perfect every detail, inspect thoroughly, and hand you the keys to a ready-to-use, flawless space.",
    color: "bg-secondary/20",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const HowItWorks = () => {
  return (
    <section className="bg-[#FAF6F6] py-20 px-6 sm:px-10 lg:px-32 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-[#134D82] tracking-tight drop-shadow-md">
          How It Works
        </h2>
        <p className="mt-6 text-xl text-[#112639] max-w-2xl mx-auto">
          From blueprint to build — we bring your construction vision to life with a seamless, transparent process.
        </p>
      </div>

      <div className="space-y-16">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className={`rounded-3xl p-8 shadow-xl flex flex-col md:flex-row items-start gap-6 ${step.color}`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="text-4xl font-black text-[#0084A9]">{`0${i + 1}`}</div>
            <div>
              <h3 className="text-2xl font-semibold text-[#134D82] mb-2">{step.title}</h3>
              <p className="text-[#112639] text-base leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
