import Image from 'next/image'
import Link from 'next/link'
import { MapPin, MessageCircle, ShieldCheck, Truck } from 'lucide-react'

export const metadata = {
  title: 'Fresh Milk Delivery in Muzaffarpur',
  description:
    'Order pure, hygienic and fresh milk delivery in Muzaffarpur from Raj Ganesh Dairy. Daily milk, paneer, dahi and monthly subscription plans for local families.',
  alternates: {
    canonical: '/muzaffarpur-milk-delivery',
  },
}

const deliveryAreas = [
  'Mithanpura',
  'Aghoria Bazar',
  'Kalambagh Road',
  'Motijheel',
  'Bairia',
  'Bhagwanpur',
  'Khabra',
  'Ramdayalu',
]

export default function MuzaffarpurMilkDeliveryPage() {
  const whatsappUrl =
    'https://wa.me/917494037455?text=Namaste%20Raj%20Ganesh%20Dairy%2C%20I%20want%20fresh%20milk%20delivery%20in%20Muzaffarpur.'

  return (
    <main className="bg-milk">
      <section className="relative min-h-[72vh] overflow-hidden bg-cream">
        <Image
          src="/images/raj-ganesh-family.png"
          alt="Indian family drinking fresh milk at home in Muzaffarpur"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-milk via-milk/82 to-milk/20" />
        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex w-fit rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-leaf"
          >
            Raj Ganesh Dairy
          </Link>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-ink sm:text-6xl">
            Fresh milk delivery in Muzaffarpur for families who care about purity.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
            Get clean, local dairy delivered daily across Muzaffarpur. Choose morning milk, monthly
            plans, paneer, dahi and fresh dairy support on WhatsApp.
          </p>
          <a
            href={whatsappUrl}
            className="mt-8 inline-flex h-14 w-fit items-center gap-2 rounded-full bg-leaf px-7 font-extrabold text-white shadow-soft"
          >
            <MessageCircle size={20} />
            Check delivery in your area
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            [
              ShieldCheck,
              'Hygienic handling',
              'Clean steel utensils and careful packing for family kitchens.',
            ],
            [
              Truck,
              'Morning delivery',
              'A steady local route built around breakfast and tea time.',
            ],
            [
              MapPin,
              'Muzaffarpur focus',
              'Local service areas, landmarks and subscription support.',
            ],
          ].map(([Icon, title, copy]) => (
            <article
              key={title}
              className="rounded-[1.5rem] border border-leaf/10 bg-white p-6 shadow-sm"
            >
              <Icon className="text-leaf" size={30} />
              <h2 className="mt-5 text-xl font-extrabold">{title}</h2>
              <p className="mt-3 leading-7 text-ink/68">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-ink sm:text-5xl">
            Areas we serve in Muzaffarpur
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {deliveryAreas.map((area) => (
              <div key={area} className="rounded-2xl bg-white p-4 font-bold text-ink shadow-sm">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
