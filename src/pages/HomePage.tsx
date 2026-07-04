import { motion } from 'framer-motion';
import {
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  FileCheck2,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  ReceiptText,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Calculator,
    title: 'Income Tax Advisory',
    text: 'Return filing, tax planning, scrutiny support, notice replies and representation for individuals, professionals and businesses.',
  },
  {
    icon: ReceiptText,
    title: 'GST Compliance',
    text: 'GST registration, monthly returns, reconciliations, advisory, demand responses and practical compliance health checks.',
  },
  {
    icon: FileCheck2,
    title: 'Audit Support & Reviews',
    text: 'Documentation support, internal checks, tax audit coordination and practical review procedures designed for clear decision-making.',
  },
  {
    icon: Building2,
    title: 'Company & ROC Services',
    text: 'Company formation, LLP support, annual filings, MCA compliance and secretarial coordination for growing teams.',
  },
  {
    icon: ClipboardCheck,
    title: 'Accounting & Bookkeeping',
    text: 'Cloud-ready accounting, MIS, reconciliations, payroll support and books that stay investor and lender ready.',
  },
  {
    icon: Landmark,
    title: 'Financial & Business Advisory',
    text: 'Loan documentation, project finance guidance, budgeting, working-capital planning and owner-led business support.',
  },
];

const stats = [
  ['Experienced Desk', 'Direct advisory support'],
  ['Prompt Response', 'Clear next steps'],
  ['Kalina, Mumbai', 'Santacruz East office'],
  ['Tax Consultant', 'Experienced advisory desk'],
];

const phoneHref = 'tel:+918369893433';
const email = 'pateldevendra123@gmail.com';
const emailHref =
  'mailto:pateldevendra123@gmail.com?subject=Consultation%20request%20for%20Dev%20Patel%20%26%20Associates';
const logoSrc = `${import.meta.env.BASE_URL}Logo.webp`;
const address =
  'Office no. 1, Basement, Tejaswini Apartments, opp. Mumbai University, Mhada Colony, Vidya Nagari, Kalina, Santacruz East, Mumbai, Maharashtra 400098';

const process = [
  'Understand your exact tax, compliance or business requirement',
  'Review records, deadlines, risks and available remedies',
  'Prepare filings, responses or advisory notes with clear next steps',
  'Track completion and keep you informed until closure',
];

const testimonials = [
  {
    quote:
      'Clear guidance, structured documentation and calm support through compliance deadlines.',
    name: 'Business Owner',
    meta: 'Mumbai SME',
  },
  {
    quote:
      'A practical approach to tax notices and GST reconciliation, with no unnecessary jargon.',
    name: 'Founder',
    meta: 'Services Company',
  },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const links = ['Services', 'Expertise', 'Process', 'Contact'];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-ivory/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoSrc}
            alt="Dev Patel & Associates logo"
            className="h-12 w-36 object-contain sm:w-44"
          />
          <span className="sr-only">
            <span className="block font-display text-base font-bold text-ink">
              Dev Patel & Associates
            </span>
            <span className="block text-xs font-medium uppercase tracking-[0.16em] text-teal">
              Tax & Compliance Consultants
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-semibold text-ink/75 transition hover:text-forest"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href={phoneHref}
          className="hidden items-center gap-2 rounded-md bg-forest px-5 py-3 text-sm font-bold text-white shadow-card transition hover:bg-teal lg:inline-flex"
        >
          Call Us
          <Phone size={17} />
        </a>
        <button
          aria-label="Open navigation"
          className="grid size-11 place-items-center rounded-md border border-line text-ink lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>
      </nav>
      {open && (
        <div className="fixed inset-0 z-50 bg-ink/35 lg:hidden">
          <div className="ml-auto h-full min-w-[280px] max-w-sm bg-ivory p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-bold text-ink">
                Menu
              </span>
              <button
                aria-label="Close navigation"
                className="grid size-10 place-items-center rounded-md border border-line"
                onClick={() => setOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="mt-8 grid gap-3">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="rounded-md border border-line px-4 py-3 font-semibold text-ink"
                >
                  {link}
                </a>
              ))}
              <a
                href={phoneHref}
                onClick={() => setOpen(false)}
                className="mt-3 rounded-md bg-forest px-4 py-3 text-center font-bold text-white"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-ink/68">{text}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-ivory font-sans text-ink">
      <Nav />
      <main>
        <section className="relative overflow-hidden pt-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-3 py-2 text-sm font-bold text-forest shadow-card">
                <ShieldCheck size={17} />
                Experienced tax and compliance support in Mumbai
              </div>
              <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.04] text-ink md:text-6xl">
                Tax, GST and compliance support for individuals and growing
                businesses.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70 md:text-xl">
                Dev Patel and Associates helps individuals, entrepreneurs and
                companies stay compliant, respond to notices, plan taxes and
                make financial decisions with confidence from its Kalina,
                Santacruz East office.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={emailHref}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-forest px-6 py-4 font-bold text-white shadow-soft transition hover:bg-teal"
                >
                  Email Us
                  <Mail size={19} />
                </a>
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-6 py-4 font-bold text-ink transition hover:border-forest hover:text-forest"
                >
                  <Phone size={19} />
                  Call Us
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-6 py-4 font-bold text-ink transition hover:border-forest hover:text-forest sm:hidden"
                >
                  Explore Services
                  <ChevronRight size={19} />
                </a>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map(([label, text]) => (
                  <div
                    key={label}
                    className="rounded-md border border-line bg-white p-4 shadow-card"
                  >
                    <p className="font-display text-lg font-bold text-forest">
                      {label}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-ink/62">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <img
                src={`${import.meta.env.BASE_URL}dev-patel-hero.png`}
                alt="Premium financial consultation office setting"
                className="aspect-[4/3] w-full rounded-md object-cover shadow-soft"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-md border border-white/45 bg-white/90 p-5 shadow-card backdrop-blur">
                <div className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-md bg-mint text-forest">
                    <ShieldCheck size={24} />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-ink">
                      Reliable representation, practical advice
                    </p>
                    <p className="mt-1 text-sm leading-6 text-ink/65">
                      Responsive support for income tax, GST, audit
                      coordination, ROC and business finance matters.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-line bg-white py-5">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 text-sm font-bold uppercase tracking-[0.14em] text-ink/56 lg:px-8">
            <span>Income Tax Filing</span>
            <span>GST Advisory</span>
            <span>Audit Support</span>
            <span>Bookkeeping</span>
            <span>ROC Compliance</span>
            <span>Prompt Response</span>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionTitle
              eyebrow="Services"
              title="A complete finance desk for compliance, tax and growth."
              text="The practice brings together practical tax, accounting and compliance services delivered with proactive communication and clean documentation."
            />
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <motion.article
                  key={service.title}
                  whileHover={{ y: -6 }}
                  className="rounded-md border border-line bg-white p-7 shadow-card transition"
                >
                  <span className="grid size-12 place-items-center rounded-md bg-mint text-forest">
                    <service.icon size={24} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-ink/66">{service.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="expertise"
          className="scroll-mt-24 bg-forest py-20 text-white lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
                Founder-led practice
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
                Devendra Patel brings focused tax and compliance guidance to
                Mumbai businesses.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/72">
                Built from the service strengths of Goldmark Consultancy, this
                standalone practice is positioned for clients who need direct,
                experienced support for tax, GST, audit coordination,
                accounting and regulatory matters.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  'Tax notices and demand support',
                  'GST registration and return workflows',
                  'Accounting systems and MIS discipline',
                  'Direct advisory for founders and families',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-gold" size={19} />
                    <span className="font-semibold text-white/88">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: Scale,
                  title: 'Regulatory Clarity',
                  text: 'Advice grounded in current tax and compliance requirements, explained in plain language.',
                },
                {
                  icon: Users,
                  title: 'Customer Focus',
                  text: 'A responsive, relationship-led approach for founders, families, professionals and SMEs.',
                },
                {
                  icon: BarChart3,
                  title: 'Decision Support',
                  text: 'Clear numbers, clean records and useful reporting for confident business decisions.',
                },
                {
                  icon: BriefcaseBusiness,
                  title: 'End-to-End Handling',
                  text: 'From registration and filing to notices, audit support and ongoing compliance calendars.',
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-md border border-white/14 bg-white/8 p-6"
                >
                  <item.icon className="text-gold" size={28} />
                  <h3 className="mt-5 font-display text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-white/68">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="process"
          className="scroll-mt-24 bg-white py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionTitle
              eyebrow="How it works"
              title="Structured advice without making clients chase updates."
              text="Every engagement is handled with a practical flow so the client understands what is needed, what is filed, what remains pending and what outcome to expect."
            />
            <div className="mt-14 grid gap-5 md:grid-cols-4">
              {process.map((item, index) => (
                <div
                  key={item}
                  className="relative rounded-md border border-line bg-ivory p-6"
                >
                  <span className="font-display text-4xl font-extrabold text-gold">
                    0{index + 1}
                  </span>
                  <p className="mt-5 font-semibold leading-7 text-ink/78">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-md bg-ink p-8 text-white">
                <Sparkles className="text-gold" size={28} />
                <h2 className="mt-5 font-display text-3xl font-bold">
                  Built for trust from the first conversation.
                </h2>
                <p className="mt-4 leading-7 text-white/68">
                  Clients get a composed advisory experience: careful review,
                  transparent scope, timely execution and practical answers.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {testimonials.map((item) => (
                  <blockquote
                    key={item.name}
                    className="rounded-md border border-line bg-white p-8 shadow-card"
                  >
                    <p className="text-lg leading-8 text-ink/74">
                      “{item.quote}”
                    </p>
                    <footer className="mt-6">
                      <p className="font-display font-bold text-ink">
                        {item.name}
                      </p>
                      <p className="text-sm text-ink/55">{item.meta}</p>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-mint py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
                Contact
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
                Ready to sort a tax, GST, accounting or compliance matter?
              </h2>
              <p className="mt-5 text-lg leading-8 text-ink/68">
                Choose the fastest channel for your matter. You can call for
                immediate guidance or email the details and documents for a
                structured review.
              </p>
              <div className="mt-8 grid gap-4">
                <a
                  href={phoneHref}
                  className="flex items-center gap-4 rounded-md border border-line bg-white p-4 font-semibold text-ink transition hover:border-forest"
                >
                  <Phone className="text-forest" size={22} />
                  Call Us
                </a>
                <a
                  href={emailHref}
                  className="flex items-center gap-4 rounded-md border border-line bg-white p-4 font-semibold text-ink transition hover:border-forest"
                >
                  <Mail className="text-forest" size={22} />
                  Email Us
                </a>
                <div className="flex items-center gap-4 rounded-md border border-line bg-white p-4 font-semibold text-ink">
                  <MapPin className="text-forest" size={22} />
                  <span>{address}</span>
                </div>
              </div>
            </div>
            <div className="rounded-md border border-line bg-white p-6 shadow-soft md:p-8">
              <div className="flex items-center gap-4">
                <img
                  src={logoSrc}
                  alt=""
                  className="h-20 w-52 object-contain"
                />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">
                    Direct consultation
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-ink">
                    Speak with an experienced advisory desk.
                  </h3>
                </div>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-forest px-6 py-4 font-bold text-white shadow-card transition hover:bg-teal"
                >
                  <Phone size={19} />
                  Call Us
                </a>
                <a
                  href={emailHref}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-ivory px-6 py-4 font-bold text-ink transition hover:border-forest hover:text-forest"
                >
                  <Mail size={19} />
                  Email Us
                </a>
              </div>
              <div className="mt-8 rounded-md bg-mint p-5">
                <p className="font-display text-lg font-bold text-ink">
                  For faster review, include:
                </p>
                <div className="mt-4 grid gap-3">
                  {[
                    'Your service requirement and deadline',
                    'Relevant notice, GST, tax or company documents',
                    'Preferred callback time and contact number',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-forest"
                        size={19}
                      />
                      <span className="font-semibold leading-6 text-ink/76">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 grid gap-3 border-t border-line pt-6 text-sm leading-6 text-ink/62">
                <p>
                  Calls are best for urgent tax notices, GST deadlines and
                  time-sensitive filing matters.
                </p>
                <p>
                  Email is ideal when the office needs to review documents
                  before advising on scope and next steps.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-ink px-5 py-8 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Dev Patel & Associates logo"
              className="h-14 w-44 rounded-md bg-white object-contain"
            />
            <p className="font-display text-lg font-bold">
              Dev Patel & Associates
            </p>
          </div>
          <div className="grid gap-1 text-sm text-white/58 md:text-right">
            <p>Tax, Compliance & Business Advisory Services in Mumbai</p>
            <a href={emailHref} className="transition hover:text-white">
              {email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
