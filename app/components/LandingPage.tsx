"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  Zap,
  Globe,
  Share2,
  Link,
  Sparkles,
  Shield,
  Rocket,
  Sun,
  Moon,
} from "lucide-react";

// ─── Theme Context ────────────────────────────────────────────────────────────
const ThemeContext = createContext<{
  dark: boolean;
  toggle: () => void;
}>({ dark: false, toggle: () => {} });

function useTheme() {
  return useContext(ThemeContext);
}

// ─── Package Data (edit bullet points here) ───────────────────────────────────
const PACKAGES = [
  {
    id: 1,
    icon: Rocket,
    title: "Brand Foundation Plan",
    badge: null,
    highlight: false,
    bullets: [
      "8 High-Impact Reels",
      "8 Strategic Carousel & Creative Posts",
      "Monthly Content Strategy",
      "Caption Writing + Hashtag Strategy",
      "Instagram & Facebook Page Management",
      "Audience Engagement",
      "Monthly Insights Report",
    ],
  },
  {
    id: 2,
    icon: Sparkles,
    title: "Brand Growth Plan",
    badge: "Most Popular",
    highlight: true,
    bullets: [
      "12 High-Performance Reels",
      "12 Premium Carousel & Creative Posts",
      "1 Concept-Based Reel Shoot",
      "Strategic Content Calendar",
      "Instagram & Facebook Growth Management",
      "Caption Writing & Hashtag Strategy",
      "Audience Engagement & Community Interaction",
      "Creative Ad Post Designs",
      "Monthly Growth Report",
    ],
  },
  {
    id: 3,
    icon: Shield,
    title: "Brand Authority Plan",
    badge: "Premium",
    highlight: false,
    bullets: [
      "16 High-Impact Reels",
      "16 Premium Carousel & Creative Posts",
      "2 Concept-Based Reel Shoots",
      "Advanced Brand Content Strategy",
      "Instagram Growth Optimization Strategy",
      "Instagram & Facebook Complete Management",
      "Google Business Optimization",
      "Local SEO for Google Ranking",
      "Competitor Content Analysis",
      "Monthly Brand Growth Strategy Call",
      "Advanced Performance Reports",
    ],
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "200+", label: "Brands Served" },
  { value: "50M+", label: "Reels Views Generated" },
  { value: "98%", label: "Client Retention" },
  { value: "5★", label: "Average Rating" },
];

// ─── Logo Letter-by-Letter Animation ─────────────────────────────────────────
function AnimatedLogo() {
  const { dark } = useTheme();
  const letters = "V Pro Brands".split("");
  return (
    <span className="flex items-center gap-0.5 font-extrabold text-2xl tracking-tight">
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06, duration: 0.35, ease: "easeOut" }}
          className={char === " " ? "mr-1" : ""}
        >
          {char === " " ? (
            " "
          ) : (
            <span
              className={
                i < 1
                  ? "text-blue-500"
                  : dark
                  ? "text-white"
                  : "text-slate-900"
              }
            >
              {char}
            </span>
          )}
        </motion.span>
      ))}
    </span>
  );
}

// ─── Theme Toggle Button ──────────────────────────────────────────────────────
function ThemeToggle() {
  const { dark, toggle } = useTheme();
  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
      className={`w-9 h-9 rounded-full flex items-center justify-center border transition-colors duration-200 ${
        dark
          ? "bg-slate-700 border-slate-600 text-yellow-400 hover:bg-slate-600"
          : "bg-slate-100 border-slate-200 text-slate-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600"
      }`}
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </motion.button>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const { dark } = useTheme();
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b shadow-sm transition-colors duration-300 ${
        dark
          ? "bg-slate-900/90 border-slate-700/60"
          : "bg-white/90 border-blue-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <AnimatedLogo />
        <div
          className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-300 ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {["Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition-colors duration-200 ${
                dark ? "hover:text-blue-400" : "hover:text-blue-600"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            Get Started <ArrowRight size={14} />
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const { dark } = useTheme();
  return (
    <section
      className={`relative overflow-hidden pt-32 pb-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        dark ? "bg-slate-900" : "bg-white"
      }`}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: dark
            ? "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(37,99,235,0.15) 0%, transparent 70%)"
            : "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(37,99,235,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className={`absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl opacity-60 pointer-events-none ${
          dark ? "bg-blue-900" : "bg-blue-50"
        }`}
      />
      <div
        aria-hidden
        className={`absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-50 pointer-events-none ${
          dark ? "bg-cyan-900" : "bg-cyan-50"
        }`}
      />

      <div className="max-w-5xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className={`inline-flex items-center gap-2 border text-xs font-semibold px-4 py-1.5 rounded-full mb-8 transition-colors duration-300 ${
            dark
              ? "bg-blue-900/40 border-blue-700/50 text-blue-300"
              : "bg-blue-50 border-blue-100 text-blue-700"
          }`}
        >
          <Zap size={12} />
          Full-Service Digital Marketing & Development Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 transition-colors duration-300 ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          Grow Your Brand{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Digitally
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className={`text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-colors duration-300 ${
            dark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          From viral reels and brand strategy to custom websites and mobile
          apps — we deliver everything your brand needs to dominate online.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-200/50"
          >
            Start Your Growth <ArrowRight size={16} />
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 ${
              dark
                ? "border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400"
                : "border-blue-100 text-slate-700 hover:border-blue-300 hover:text-blue-600"
            }`}
          >
            Explore Packages
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-blue-500">
                {stat.value}
              </div>
              <div
                className={`text-sm mt-1 transition-colors duration-300 ${
                  dark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Package Card ─────────────────────────────────────────────────────────────
function PackageCard({
  pkg,
  index,
}: {
  pkg: (typeof PACKAGES)[0];
  index: number;
}) {
  const { dark } = useTheme();
  const Icon = pkg.icon;
  const isHighlight = pkg.highlight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.12, duration: 0.55, ease: "easeOut" }}
      whileHover={
        isHighlight
          ? {
              y: -12,
              boxShadow:
                "0 0 0 3px #2563eb, 0 30px 70px -10px rgba(37,99,235,0.35)",
            }
          : {
              y: -10,
              boxShadow: dark
                ? "0 0 0 2px #3b82f6, 0 20px 60px -10px rgba(59,130,246,0.2)"
                : "0 0 0 2px #93c5fd, 0 20px 60px -10px rgba(37,99,235,0.15)",
            }
      }
      className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 ${
        isHighlight
          ? "bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-2xl shadow-blue-500/30 scale-[1.03]"
          : dark
          ? "bg-slate-800 border border-slate-700 text-white"
          : "bg-white border border-slate-100 text-slate-900"
      }`}
    >
      {/* Top accent bar */}
      {!isHighlight && (
        <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-cyan-400" />
      )}

      {/* Badge */}
      {pkg.badge && (
        <div className="absolute top-5 right-5">
          <span
            className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${
              isHighlight
                ? "bg-white/20 text-white border border-white/30"
                : dark
                ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                : "bg-blue-600 text-white"
            }`}
          >
            {pkg.badge}
          </span>
        </div>
      )}

      <div className="p-8 flex flex-col gap-6 flex-1">
        {/* Icon + Title */}
        <div className="flex flex-col gap-3">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
              isHighlight
                ? "bg-white/20"
                : dark
                ? "bg-blue-500/20"
                : "bg-blue-50"
            }`}
          >
            <Icon
              size={22}
              className={
                isHighlight ? "text-white" : dark ? "text-blue-400" : "text-blue-600"
              }
            />
          </div>
          <h3
            className={`text-xl font-extrabold leading-tight pr-16 ${
              isHighlight ? "text-white" : dark ? "text-white" : "text-slate-900"
            }`}
          >
            {pkg.title}
          </h3>
        </div>

        {/* Divider */}
        <div
          className={`h-px ${
            isHighlight ? "bg-white/20" : dark ? "bg-slate-700" : "bg-slate-100"
          }`}
        />

        {/* Bullets */}
        <ul className="flex flex-col gap-3 flex-1">
          {pkg.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <CheckCircle2
                size={15}
                className={`mt-0.5 flex-shrink-0 ${
                  isHighlight
                    ? "text-cyan-300"
                    : dark
                    ? "text-blue-400"
                    : "text-blue-400"
                }`}
              />
              <span
                className={
                  isHighlight ? "text-blue-50" : dark ? "text-slate-300" : "text-slate-600"
                }
              >
                {bullet}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className={`mt-auto flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-sm transition-colors ${
            isHighlight
              ? "bg-white text-blue-600 hover:bg-blue-50"
              : dark
              ? "bg-blue-600 text-white hover:bg-blue-500"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Send Enquiry <ArrowRight size={15} />
        </motion.a>
      </div>
    </motion.div>
  );
}

// ─── Packages Section ─────────────────────────────────────────────────────────
function PackagesSection() {
  const { dark } = useTheme();
  return (
    <section
      id="services"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        dark ? "bg-slate-800/50" : "bg-slate-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-blue-500 text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Brand Growth & Social Media
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-4xl sm:text-5xl font-extrabold tracking-tight transition-colors duration-300 ${
              dark ? "text-white" : "text-slate-900"
            }`}
          >
            Choose Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Package
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className={`mt-4 max-w-xl mx-auto text-lg transition-colors duration-300 ${
              dark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Structured plans built to grow your brand at every stage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PACKAGES.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-14 text-center"
        >
          <div
            className={`inline-flex flex-col sm:flex-row items-center gap-3 border rounded-2xl px-8 py-5 shadow-sm transition-colors duration-300 ${
              dark
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-blue-100"
            }`}
          >
            <span className="text-2xl">💡</span>
            <p
              className={`text-base max-w-xl transition-colors duration-300 ${
                dark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Most agencies post content. At{" "}
              <span className="font-bold text-blue-500">VPRO</span> we focus on
              building brands that{" "}
              <span
                className={`font-semibold ${dark ? "text-white" : "text-slate-800"}`}
              >
                stand out
              </span>
              , create{" "}
              <span
                className={`font-semibold ${dark ? "text-white" : "text-slate-800"}`}
              >
                authority
              </span>
              , and drive{" "}
              <span
                className={`font-semibold ${dark ? "text-white" : "text-slate-800"}`}
              >
                long-term business growth
              </span>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────
function AboutSection() {
  const { dark } = useTheme();
  const features = [
    { icon: Zap, title: "Fast Execution", desc: "From brief to live content in record time." },
    { icon: Users, title: "Dedicated Team", desc: "A specialist assigned to each brand." },
    { icon: Globe, title: "Full-Stack Growth", desc: "Marketing + tech under one roof." },
    { icon: Star, title: "Proven Results", desc: "Data-backed strategies that actually work." },
  ];

  return (
    <section
      id="about"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        dark ? "bg-slate-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-blue-500 text-sm font-semibold uppercase tracking-widest mb-4">
            About Us
          </span>
          <h2
            className={`text-4xl sm:text-5xl font-extrabold leading-tight mb-6 transition-colors duration-300 ${
              dark ? "text-white" : "text-slate-900"
            }`}
          >
            We Don&apos;t Just Market.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              We Build.
            </span>
          </h2>
          <p
            className={`text-lg leading-relaxed mb-8 transition-colors duration-300 ${
              dark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            V Pro Brands is a full-service agency that blends creative
            storytelling with cutting-edge technology. Whether you need viral
            social content, a stunning website, or a fully-fledged mobile app —
            we handle it all with precision.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-7 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Work With Us <ArrowRight size={15} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-5"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`border rounded-2xl p-5 transition-colors duration-300 ${
                dark
                  ? "bg-slate-800 border-slate-700"
                  : "bg-slate-50 border-slate-100"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors duration-300 ${
                  dark ? "bg-blue-500/20" : "bg-blue-100"
                }`}
              >
                <f.icon
                  size={18}
                  className={dark ? "text-blue-400" : "text-blue-600"}
                />
              </div>
              <h4
                className={`font-bold mb-1 transition-colors duration-300 ${
                  dark ? "text-white" : "text-slate-900"
                }`}
              >
                {f.title}
              </h4>
              <p
                className={`text-sm transition-colors duration-300 ${
                  dark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner() {
  const { dark } = useTheme();
  return (
    <section
      className={`py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        dark
          ? "bg-gradient-to-r from-blue-700 to-blue-600"
          : "bg-blue-600"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
        >
          Ready to Scale Your Brand?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-blue-100 text-lg mb-8"
        >
          Let&apos;s build something exceptional together.
        </motion.p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors shadow-xl"
        >
          Get a Free Consultation <ArrowRight size={16} />
        </motion.a>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────
function ContactSection() {
  const { dark } = useTheme();
  return (
    <section
      id="contact"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        dark ? "bg-slate-900" : "bg-white"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-blue-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Contact
          </span>
          <h2
            className={`text-4xl sm:text-5xl font-extrabold transition-colors duration-300 ${
              dark ? "text-white" : "text-slate-900"
            }`}
          >
            Let&apos;s{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Talk
            </span>
          </h2>
          <p
            className={`mt-4 text-lg transition-colors duration-300 ${
              dark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Reach out and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {[
              { icon: Mail, label: "Email", value: "hello@vprobrands.com" },
              { icon: Phone, label: "Phone", value: "+91 98765 43210" },
              { icon: MapPin, label: "Location", value: "Mumbai, Maharashtra, India" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    dark ? "bg-blue-500/20" : "bg-blue-50"
                  }`}
                >
                  <item.icon
                    size={18}
                    className={dark ? "text-blue-400" : "text-blue-600"}
                  />
                </div>
                <div>
                  <div
                    className={`text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
                      dark ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    {item.label}
                  </div>
                  <div
                    className={`font-medium transition-colors duration-300 ${
                      dark ? "text-slate-200" : "text-slate-800"
                    }`}
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex gap-3 mt-2">
              {[
                { icon: Share2, href: "#", label: "Instagram" },
                { icon: Link, href: "#", label: "Facebook" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.1 }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    dark
                      ? "bg-slate-800 hover:bg-slate-700 text-blue-400"
                      : "bg-blue-50 hover:bg-blue-100 text-blue-600"
                  }`}
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            {["text", "email"].map((type) => (
              <input
                key={type}
                type={type}
                placeholder={type === "text" ? "Your Name" : "Email Address"}
                className={`w-full border rounded-xl px-4 py-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition ${
                  dark
                    ? "bg-slate-800 border-slate-700 text-white"
                    : "bg-white border-slate-200 text-slate-800"
                }`}
              />
            ))}
            <textarea
              rows={4}
              placeholder="Tell us about your project..."
              className={`w-full border rounded-xl px-4 py-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition resize-none ${
                dark
                  ? "bg-slate-800 border-slate-700 text-white"
                  : "bg-white border-slate-200 text-slate-800"
              }`}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-blue-600 text-white font-semibold py-3.5 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              Send Message <ArrowRight size={16} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const { dark } = useTheme();
  return (
    <footer
      className={`py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        dark ? "bg-slate-950 text-slate-500" : "bg-slate-900 text-slate-400"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-extrabold text-xl text-white">
          V <span className="text-blue-400">Pro Brands</span>
        </span>
        <p className="text-sm text-center">
          © {new Date().getFullYear()} V Pro Brands. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          {["Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Page Root ────────────────────────────────────────────────────────────────
export default function LandingPage() {
  const [dark, setDark] = useState(false);

  // Persist theme preference across page reloads
  useEffect(() => {
    const stored = localStorage.getItem("vpro-theme");
    if (stored === "dark") setDark(true);
  }, []);

  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      localStorage.setItem("vpro-theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {/* Applying .dark class here scopes all dark: variants */}
      <div className={`min-h-screen flex flex-col ${dark ? "dark" : ""}`}>
        <Navbar />
        <main className="flex-1">
          <Hero />
          <PackagesSection />
          <AboutSection />
          <CTABanner />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
