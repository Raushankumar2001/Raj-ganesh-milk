"use client";

import Image from "next/image";
import {
  CheckCircle2,
  Clock3,
  Droplets,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Milk,
  ShieldCheck,
  Sparkles,
  Star,
  Truck
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } }
};

const products = [
  { name: "Fresh Cow Milk", text: "Morning collected milk for tea, children and daily family nutrition.", price: "From ₹60/L" },
  { name: "Paneer", text: "Soft, fresh paneer made in small batches for home cooking.", price: "Pre-order" },
  { name: "Dahi", text: "Naturally set curd with a clean, familiar homemade taste.", price: "Daily fresh" },
  { name: "Ghee", text: "Aromatic dairy ghee prepared with patient, traditional care.", price: "Limited batch" }
];

const gallery = [
  { src: "/images/raj-ganesh-hero.png", title: "Morning Farm Collection", copy: "Freshness begins before the city wakes." },
  { src: "/images/raj-ganesh-paneer.png", title: "Paneer Making", copy: "Clean utensils, small batches and careful handling." },
  { src: "/images/raj-ganesh-family.png", title: "Family Table", copy: "Milk chosen for children, elders and everyday meals." }
];

const areas = ["Mithanpura", "Aghoria Bazar", "Kalambagh Road", "Motijheel", "Bairia", "Bhagwanpur", "Khabra", "Ramdayalu"];

export default function Home() {
  const whatsappUrl =
    "https://wa.me/919999999999?text=Namaste%20Raj%20Ganesh%20Dairy%2C%20I%20want%20to%20order%20fresh%20milk%20in%20Muzaffarpur.";

  return (
    <main className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Raj Ganesh Dairy",
            image: "https://rajganeshdairy.com/images/raj-ganesh-hero.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Muzaffarpur",
              addressRegion: "Bihar",
              addressCountry: "IN"
            },
            areaServed: "Muzaffarpur, Bihar",
            servesCuisine: "Dairy Products",
            priceRange: "₹₹",
            description: "Fresh milk, paneer, dahi and dairy delivery for families in Muzaffarpur."
          })
        }}
      />

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-milk/86 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex min-w-0 flex-1 items-center gap-3" aria-label="Raj Ganesh Dairy home">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-leaf text-white shadow-soft">
              <Milk size={23} />
            </span>
            <span className="min-w-0">
              <span className="block text-base font-extrabold tracking-tight text-leaf">Raj Ganesh Dairy</span>
              <span className="block truncate font-mukta text-sm font-semibold text-earth">शुद्ध दूध, मुजफ्फरपुर</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold text-ink/75 md:flex">
            <a href="#products">Products</a>
            <a href="#plans">Plans</a>
            <a href="#areas">Areas</a>
          </div>
          <a
            href={whatsappUrl}
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-leaf px-3 text-sm font-bold text-white shadow-soft transition hover:bg-field sm:px-4"
            aria-label="Order on WhatsApp"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">Order</span>
          </a>
        </div>
      </nav>

      <section className="relative min-h-screen bg-cream pt-24">
        <Image
          src="/images/raj-ganesh-hero.png"
          alt="Fresh dairy farm in Muzaffarpur with cows and steel milk cans"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-milk via-milk/78 to-milk/12" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-cream to-transparent" />
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center px-4 pb-20 sm:px-6 lg:px-8"
        >
          <div className="w-full max-w-[22rem] min-w-0 sm:max-w-3xl">
            <motion.div variants={fadeUp} className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-gold/35 bg-white/80 px-4 py-2 text-sm font-bold text-earth shadow-sm">
              <Sparkles size={16} className="text-gold" />
              <span className="truncate">Farm-fresh dairy for Muzaffarpur families</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="max-w-full break-words text-4xl font-extrabold leading-[1.08] tracking-normal text-ink sm:text-6xl lg:text-7xl">
              Pure local milk handled with family-level care.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-full text-lg leading-8 text-ink/76 sm:max-w-2xl sm:text-xl">
              Raj Ganesh Dairy brings fresh milk, paneer, dahi and ghee from trusted local sources to homes across Muzaffarpur with clean handling, timely delivery and honest taste.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-leaf px-7 text-base font-extrabold text-white shadow-soft transition hover:bg-field">
                <MessageCircle size={20} />
                Order on WhatsApp
              </a>
              <a href="#plans" className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-leaf/20 bg-white/80 px-7 text-base font-extrabold text-leaf transition hover:bg-white">
                View Monthly Plans
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-9 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-4">
              {["Pure", "Hygienic", "Local", "Fresh"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/70 bg-white/78 p-4 shadow-sm backdrop-blur">
                  <CheckCircle2 className="mb-2 text-leaf" size={21} />
                  <p className="font-bold text-ink">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="trust-texture py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <p className="font-mukta text-xl font-bold text-leaf">क्यों चुनें राज गणेश डेयरी?</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-ink sm:text-5xl">Trust you can taste every morning.</h2>
          </motion.div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              [ShieldCheck, "Clean Handling", "Milk is collected, filtered and packed with careful utensil hygiene so it reaches your kitchen safely."],
              [Clock3, "Morning Freshness", "Daily delivery rhythm keeps milk fresh for tea, breakfast, children and elders."],
              [HeartHandshake, "Local Relationship", "A Muzaffarpur-focused dairy where repeat customers matter more than one-time sales."]
            ].map(([Icon, title, copy]) => (
              <motion.article key={title} variants={fadeUp} className="rounded-[1.75rem] border border-leaf/10 bg-white p-7 shadow-soft">
                <Icon className="text-leaf" size={34} />
                <h3 className="mt-5 text-xl font-extrabold text-ink">{title}</h3>
                <p className="mt-3 leading-7 text-ink/68">{copy}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="products" className="bg-milk py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold">Products</p>
              <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-5xl">Daily dairy essentials</h2>
            </div>
            <p className="max-w-xl leading-7 text-ink/68">Simple products, made with care: no confusing claims, just fresh dairy that feels right at home in a Bihar kitchen.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <motion.article
                whileHover={{ y: -6 }}
                key={product.name}
                className="rounded-[1.5rem] border border-leaf/10 bg-cream p-6 shadow-sm transition"
              >
                <Droplets className="text-leaf" size={30} />
                <h3 className="mt-5 text-xl font-extrabold">{product.name}</h3>
                <p className="mt-3 min-h-20 leading-7 text-ink/67">{product.text}</p>
                <p className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-extrabold text-leaf">{product.price}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {gallery.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[1.75rem] bg-white shadow-soft">
                <div className="relative aspect-[4/3]">
                  <Image src={item.src} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold">{item.title}</h3>
                  <p className="mt-2 leading-7 text-ink/68">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-leaf py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold">Testimonials</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">Chosen by families who notice purity.</h2>
          </div>
          <div className="grid gap-5">
            {[
              ["Fresh milk arrives before breakfast. The taste is clean and my children drink it happily.", "Neha S., Mithanpura"],
              ["Paneer quality feels homemade. We order for family meals whenever guests come.", "Amit K., Aghoria Bazar"]
            ].map(([quote, name]) => (
              <blockquote key={name} className="rounded-[1.5rem] border border-white/15 bg-white/10 p-6 backdrop-blur">
                <div className="mb-4 flex gap-1 text-gold">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} fill="currentColor" />)}</div>
                <p className="text-lg leading-8 text-white/90">"{quote}"</p>
                <footer className="mt-4 font-bold text-cream">{name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="bg-milk py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold">Subscription Plans</p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-5xl">Fresh milk without daily follow-up</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Family Daily", "1 litre every morning", "Best for tea and children", "Start plan"],
              ["Growing Family", "2 litres every morning", "For breakfast, curd and sweets", "Most chosen"],
              ["Custom Dairy Box", "Milk + paneer + dahi", "Weekly needs planned on WhatsApp", "Customize"]
            ].map(([name, amount, copy, cta], index) => (
              <article key={name} className={`rounded-[1.75rem] border p-7 shadow-soft ${index === 1 ? "border-gold bg-cream" : "border-leaf/10 bg-white"}`}>
                <h3 className="text-2xl font-extrabold text-ink">{name}</h3>
                <p className="mt-4 text-lg font-bold text-leaf">{amount}</p>
                <p className="mt-3 min-h-14 leading-7 text-ink/67">{copy}</p>
                <a href={whatsappUrl} className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-full bg-leaf px-5 font-extrabold text-white transition hover:bg-field">
                  {cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="bg-cream py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold">Delivery Areas</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">Local delivery across Muzaffarpur</h2>
            <p className="mt-5 leading-8 text-ink/68">Share your lane or landmark on WhatsApp. The team confirms timing, quantity and monthly delivery options.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-3 rounded-2xl border border-leaf/10 bg-white p-4 font-bold text-ink shadow-sm">
                <MapPin className="text-leaf" size={20} />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-milk px-4 py-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-leaf p-8 text-center text-white shadow-soft sm:p-12">
          <Truck className="mx-auto text-gold" size={42} />
          <h2 className="mt-5 text-3xl font-extrabold sm:text-5xl">Start fresh milk delivery tomorrow morning.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/84">Send your address, quantity and preferred time. We will confirm availability for your area in Muzaffarpur.</p>
          <a href={whatsappUrl} className="mt-7 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-7 font-extrabold text-leaf transition hover:bg-cream">
            <MessageCircle size={20} />
            WhatsApp Raj Ganesh Dairy
          </a>
        </div>
      </section>

      <footer className="bg-ink px-4 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xl font-extrabold">Raj Ganesh Dairy</p>
            <p className="font-mukta text-white/70">मुजफ्फरपुर के परिवारों के लिए शुद्ध और ताजा डेयरी</p>
          </div>
          <p className="text-sm text-white/60">Fresh milk, paneer, dahi and ghee delivery in Muzaffarpur, Bihar.</p>
        </div>
      </footer>
    </main>
  );
}
