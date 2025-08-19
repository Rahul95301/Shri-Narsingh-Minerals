import React, { useState } from "react";

export default function ShrinarSinghMineralsSite() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = () => {
    setSent(true);
  };

  const products = [
    {
      name: "Quartz (Snow White)",
      desc: "High‑purity snow white quartz for engineered stone, glass and ceramics.",
      specs: ["SiO₂ > 98–99.5%", "Fe₂O₃ < 0.08%", "Whiteness 92–98%"],
      sizes: "0–5 mm, 5–10 mm, 10–40 mm lumps; 100–300 mesh powder (on order)",
    },
    {
      name: "Quartz (Industrial)",
      desc: "Consistent industrial grade quartz for foundry, refractories and ramming mass.",
      specs: ["SiO₂ > 97%", "Moisture < 0.5%", "Low alkali"],
      sizes: "Lumps 10–80 mm; Graded as per buyer requirement",
    },
    {
      name: "Feldspar (Soda / Potash)",
      desc: "Ceramic‑grade feldspar for vitrified tiles, sanitary ware and glass.",
      specs: ["K₂O / Na₂O 8–12% (grade‑dependent)", "Fe₂O₃ < 0.3%"],
      sizes: "Lumps 10–75 mm; Powder on request",
    },
  ];

  const coverage = [
    "Tonk–Newai (Stock Yard)",
    "Bagru",
    "Jaipur (Sitapura, VKI, Murlipura, Mansarovar industrial belts)",
    "Kishangarh (Marble zone)",
    "Dudu",
    "Tikawara",
  ];

  const routes = [
    { from: "Tonk Newai", to: "Jaipur", kms: 65, time: "1.5–2 hrs" },
    { from: "Tonk Newai", to: "Kishangarh", kms: 95, time: "2–2.5 hrs" },
    { from: "Tonk Newai", to: "Dudu", kms: 80, time: "1.5–2 hrs" },
    { from: "Tonk Newai", to: "Bagru", kms: 50, time: "1–1.5 hrs" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-600 to-red-800 shadow-lg" />
            <div className="font-extrabold tracking-wide text-lg">
              SHRI NARSINGH <span className="text-red-500">MINERALS</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-200">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#quality" className="hover:text-white">Quality</a>
            <a href="#operations" className="hover:text-white">Operations</a>
            <a href="#locations" className="hover:text-white">Locations</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919999999999?text=Hello%2C%20I%20am%20interested%20in%20Quartz%20supplies"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex px-3 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-sm font-semibold shadow"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(239,68,68,.35),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-200 text-sm mb-2">Export • Supply • Logistics</p>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                High‑Purity <span className="text-red-500">Quartz</span> & Feldspar from Rajasthan
              </h1>
              <p className="mt-4 text-gray-100 max-w-prose">
                We are a sourcing and logistics partner for quartz (snow white & industrial) and feldspar,
                supplying factories across Jaipur, Kishangarh, Dudu, Tikawara, Bagru and beyond. Stock yard at
                <span className="font-semibold"> Tonk–Newai</span>. Timely deliveries. Consistent quality.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#products" className="px-5 py-3 rounded-2xl bg-red-600 hover:bg-red-500 font-semibold shadow">
                  View Products
                </a>
                <a href="#contact" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 font-semibold">
                  Get a Quote
                </a>
              </div>
              <div className="mt-6 text-xs text-gray-300">
                GST: <span className="font-mono">XXABCDE1234Z5ZQ</span> • IEC: <span className="font-mono">IMPORT‑CODE‑1234</span> (placeholders)
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-xl overflow-hidden">
                <svg viewBox="0 0 800 600" className="w-full h-full">
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#27272a" />
                      <stop offset="100%" stopColor="#0b0b0f" />
                    </linearGradient>
                  </defs>
                  <rect width="800" height="600" fill="url(#g1)" />
                  <g opacity="0.8">
                    <circle cx="120" cy="120" r="90" fill="#3f3f46" />
                    <circle cx="190" cy="140" r="60" fill="#52525b" />
                    <circle cx="230" cy="110" r="40" fill="#71717a" />
                  </g>
                  <g opacity="0.8">
                    <rect x="520" y="380" width="200" height="120" rx="18" fill="#18181b" stroke="#3f3f46" />
                    <rect x="540" y="410" width="70" height="16" rx="8" fill="#ef4444" />
                    <rect x="620" y="410" width="80" height="16" rx="8" fill="#71717a" />
                    <rect x="540" y="438" width="160" height="10" rx="5" fill="#27272a" />
                    <rect x="540" y="458" width="120" height="10" rx="5" fill="#27272a" />
                  </g>
                  <text x="40" y="520" fill="#a1a1aa" fontFamily="ui-sans-serif" fontSize="22">Rajasthan Quartz Supply Chain</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h2 className="text-2xl font-extrabold">Who We Are</h2>
              <p className="mt-3 text-gray-100">
                SHRI NARSINGH MINERALS is a Rajasthan‑based mineral trading and logistics firm focused on
                quartz and feldspar. With a stock yard at Tonk–Newai and reliable transporter network, we
                fulfil repeat orders for factories across Jaipur district and adjoining industrial clusters.
              </p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-3 gap-6">
              {[
                { k: "> 3,000 MT", v: "Annual Handling" },
                { k: "65–100 km", v: "Typical Route Distance" },
                { k: "24–72 hrs", v: "Dispatch Turnaround" },
                { k: "Consistent", v: "Screening & Sizing" },
                { k: "Flexible", v: "Lumps & Powder" },
                { k: "Trusted", v: "Factory Partners" },
              ].map((i) => (
                <div key={i.v} className="rounded-2xl bg-zinc-900/60 border border-white/10 p-5">
                  <div className="text-xl font-black text-red-400">{i.k}</div>
                  <div className="text-sm text-gray-300">{i.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="border-t border-white/10 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between gap-6 mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold">Products & Grades</h2>
            <a href="#contact" className="text-sm text-red-400 hover:text-red-300">Request current prices →</a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p) => (
              <article key={p.name} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 shadow">
                <h3 className="font-black text-lg">{p.name}</h3>
                <p className="mt-2 text-sm text-gray-100">{p.desc}</p>
                <div className="mt-3 text-sm">
                  <div className="font-semibold text-white">Typical Specs</div>
                  <ul className="mt-1 list-disc list-inside text-gray-100 space-y-1">
                    {p.specs.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3 text-sm">
                  <div className="font-semibold text-white">Available Sizes</div>
                  <p className="text-gray-100">{p.sizes}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Technical Specs Table */}
          <div className="mt-10 overflow-x-auto">
            <table className="min-w-full text-sm border-separate border-spacing-y-2">
              <thead className="text-left text-gray-300">
                <tr>
                  <th className="px-4 py-2">Material</th>
                  <th className="px-4 py-2">SiO₂</th>
                  <th className="px-4 py-2">Fe₂O₃</th>
                  <th className="px-4 py-2">Whiteness</th>
                  <th className="px-4 py-2">Sizes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-zinc-900/60">
                  <td className="px-4 py-3 font-medium rounded-l-2xl border border-white/10">Quartz (Snow White)</td>
                  <td className="px-4 py-3 border-t border-b border-white/10">98–99.5%</td>
                  <td className="px-4 py-3 border-t border-b border-white/10">≤ 0.08%</td>
                  <td className="px-4 py-3 border-t border-b border-white/10">92–98%</td>
                  <td className="px-4 py-3 rounded-r-2xl border border-white/10">0–5, 5–10, 10–40 mm; powder</td>
                </tr>
                <tr className="bg-zinc-900/60">
                  <td className="px-4 py-3 font-medium rounded-l-2xl border border-white/10">Quartz (Industrial)</td>
                  <td className="px-4 py-3 border-t border-b border-white/10">≥ 97%</td>
                  <td className="px-4 py-3 border-t border-b border-white/10">—</td>
                  <td className="px-4 py-3 border-t border-b border-white/10">—</td>
                  <td className="px-4 py-3 rounded-r-2xl border border-white/10">10–80 mm; graded</td>
                </tr>
                <tr className="bg-zinc-900/60">
                  <td className="px-4 py-3 font-medium rounded-l-2xl border border-white/10">Feldspar (Ceramic Grade)</td>
                  <td className="px-4 py-3 border-t border-b border-white/10">—</td>
                  <td className="px-4 py-3 border-t border-b border-white/10">≤ 0.3%</td>
                  <td className="px-4 py-3 border-t border-b border-white/10">—</td>
                  <td className="px-4 py-3 rounded-r-2xl border border-white/10">10–75 mm; powder</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section id="quality" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold">Quality & Consistency</h2>
              <ul className="mt-4 space-y-3 text-gray-100 list-disc list-inside">
                <li>Material sourced from vetted leases around Tonk–Newai belt.</li>
                <li>Manual and mechanical screening for controlled sizes.</li>
                <li>Random sampling for Fe₂O₃ and moisture checks (portable kits / lab partners).</li>
                <li>Covered transport wherever required to maintain whiteness.</li>
                <li>Proof of delivery and weighbridge slips shared digitally.</li>
              </ul>
              <div className="mt-6 p-4 rounded-2xl border border-white/10 bg-zinc-900/60 text-sm">
                <div className="font-semibold">Certifications & Documents</div>
                <p className="text-gray-100">GST Invoice • E‑way Bill • Test Reports (on lot) • IEC for export shipments.</p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6">
              <h3 className="font-bold">Industries Served</h3>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-gray-100">
                {[
                  "Engineered Stone",
                  "Tiles & Ceramics",
                  "Glass Works",
                  "Foundry & Refractories",
                  "Ramming Mass",
                  "Paints & Coatings",
                ].map((i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2">{i}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations */}
      <section id="operations" className="border-t border-white/10 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold">Operations & Capacity</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { t: "Stock Yard", d: "Tonk–Newai yard with space for segregated piling and loading." },
              { t: "Sizing", d: "Lumps sizing 0–5, 5–10, 10–40, 10–80 mm. Powder via partners." },
              { t: "Fleet", d: "Network of 10T–20T tippers, tractor‑trolleys for short hauls." },
              { t: "Dispatch", d: "24–72 hour turnaround depending on route and lot size." },
              { t: "Digital", d: "Live updates, e‑docs, weighbridge slips over WhatsApp/Email." },
              { t: "Safety", d: "Material covered/tarpaulin on request to preserve whiteness." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
                <div className="font-bold">{x.t}</div>
                <div className="text-sm text-gray-100">{x.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="font-bold">Popular Logistics Routes</h3>
            <div className="mt-3 overflow-x-auto">
              <table className="min-w-[520px] text-sm">
                <thead className="text-left text-gray-300">
                  <tr>
                    <th className="px-3 py-2">From</th>
                    <th className="px-3 py-2">To</th>
                    <th className="px-3 py-2">Distance (km)</th>
                    <th className="px-3 py-2">Typical Time</th>
                  </tr>
                </thead>
                <tbody>
                  {routes.map((r) => (
                    <tr key={r.to} className="border-b border-white/10">
                      <td className="px-3 py-2">{r.from}</td>
                      <td className="px-3 py-2">{r.to}</td>
                      <td className="px-3 py-2">{r.kms}</td>
                      <td className="px-3 py-2">{r.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold">Locations & Coverage</h2>
              <p className="mt-3 text-gray-100">
                Stock located at <span className="font-semibold">Tonk–Newai</span>. We supply across Jaipur,
                Kishangarh, Dudu, Tikawara, Bagru and nearby industrial areas. For export, we facilitate
                container loading from ICDs in Jaipur and nearby.
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {coverage.map((c) => (
                  <li key={c} className="rounded-xl border border-white/10 bg-zinc-900/60 px-3 py-2">{c}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-4">
              <div className="text-sm text-zinc-400 mb-2">Illustrative Map (replace with Google Map/embed)</div>
              <div className="aspect-[4/3] rounded-2xl bg-zinc-950 border border-white/10 grid place-items-center">
                <span className="text-zinc-500">Map Placeholder — Tonk → Jaipur/Kishangarh/Bagru/Dudu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-white/10 bg-gradient-to-b from-zinc-900/60 to-zinc-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold">Need steady Quartz & Feldspar supply?</h3>
          <p className="mt-2 text-gray-100">Share your monthly requirement, specs and destination. We will revert with prices and dispatch timelines.</p>
          <div className="mt-5 flex justify-center gap-3">
            <a href="#contact" className="px-5 py-3 rounded-2xl bg-red-600 hover:bg-red-500 font-semibold shadow">Send RFQ</a>
            <a
              href="mailto:sales@shrinarminerals.com?subject=RFQ%20-%20Quartz&body=Hello%2C%20we%20require..."
              className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 font-semibold"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold">Contact & Enquiries</h2>
              <div className="mt-4 space-y-2 text-gray-100 text-sm">
                <div><span className="text-gray-300">Phone:</span> +91‑98XX‑XXXXXX</div>
                <div><span className="text-gray-300">Email:</span> sales@shrinarminerals.com</div>
                <div><span className="text-gray-300">Yard:</span> Tonk–Newai, Rajasthan</div>
                <div><span className="text-gray-300">Office:</span> Jaipur, Rajasthan</div>
              </div>
              <div className="mt-5 text-sm text-gray-300">Business hours: Mon–Sat, 9:30 AM–6:30 PM</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
              {sent ? (
                <div className="text-green-400 font-semibold">Thanks! We will contact you shortly.</div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-white" htmlFor="name">Your Name</label>
                      <input id="name" name="name" required value={form.name} onChange={update}
                             className="mt-1 w-full rounded-xl bg-zinc-950 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
                    </div>
                    <div>
                      <label className="text-sm text-white" htmlFor="phone">Phone / WhatsApp</label>
                      <input id="phone" name="phone" required value={form.phone} onChange={update}
                             className="mt-1 w-full rounded-xl bg-zinc-950 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-sm text-white" htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" value={form.email} onChange={update}
                             className="mt-1 w-full rounded-xl bg-zinc-950 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-sm text-white" htmlFor="message">Requirement</label>
                      <textarea id="message" name="message" rows={5} required value={form.message} onChange={update}
                                placeholder="Material, quantity/month, destination, specs…"
                                className="mt-1 w-full rounded-xl bg-zinc-950 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
                    </div>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button onClick={submit} className="px-5 py-3 rounded-2xl bg-red-600 hover:bg-red-500 font-semibold">Submit Enquiry</button>
                    <a
                      href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hello, we need Quartz/Feldspar. Name: ${form.name}; Phone: ${form.phone}; Requirement: ${form.message}`)}`}
                      target="_blank" rel="noreferrer"
                      className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 font-semibold"
                    >
                      Send on WhatsApp
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-gray-300">
            <div>© {new Date().getFullYear()} SHRI NARSINGH MINERALS. All rights reserved.</div>
            <div className="flex flex-wrap gap-4">
              <a className="hover:text-white" href="#">GST & Compliance</a>
              <a className="hover:text-white" href="#">Quality Policy</a>
              <a className="hover:text-white" href="#">Privacy</a>
              <a className="hover:text-white" href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}