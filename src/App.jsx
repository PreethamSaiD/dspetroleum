export default function PetroleumLogisticsWebsite() {
  const services = [
    {
      title: 'Fuel Transportation',
      desc: 'Safe and timely transportation of petroleum products from refineries and depots to retail fuel stations across regions.',
    },
    {
      title: 'Fleet Management',
      desc: 'Well-maintained tanker fleet equipped with modern safety standards, GPS tracking, and experienced drivers.',
    },
    {
      title: '24/7 Operations',
      desc: 'Round-the-clock logistics support ensuring uninterrupted fuel supply for petrol pumps and commercial clients.',
    },
    {
      title: 'Safety & Compliance',
      desc: 'Strict adherence to petroleum transportation regulations, safety protocols, and environmental standards.',
    },
  ];

  const stats = [
    { value: '100+', label: 'Fuel Stations Served' },
    { value: '10+', label: 'Petroleum Tankers' },
    { value: '25+', label: 'Years of Experience' },
    { value: '24/7', label: 'Operations Support' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_rgba(255,0,0,0.4),_transparent_40%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <nav className="flex items-center justify-between mb-20">
            <div>
              <h1 className="text-2xl font-bold tracking-wide">D SRINIVAS PETROLEUM LOGISTICS</h1>
              <p className="text-sm text-gray-300 mt-1">Fuel Transportation & Tanker Services</p>
            </div>

            <div className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#services" className="hover:text-red-400 transition">Services</a>
              <a href="#about" className="hover:text-red-400 transition">About</a>
              <a href="#fleet" className="hover:text-red-400 transition">Fleet</a>
              <a href="#contact" className="hover:text-red-400 transition">Contact</a>
            </div>
          </nav>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 px-4 py-2 rounded-full text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                Trusted Petroleum Logistics Partner
              </div>

              <h2 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
                Reliable Fuel Transportation Across India
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                We specialize in petroleum tanker logistics, delivering fuel safely and efficiently from petroleum companies to petrol pumps with a commitment to reliability, safety, and operational excellence.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-red-600 hover:bg-red-700 transition px-7 py-4 rounded-2xl font-semibold shadow-lg shadow-red-900/30">
                  Request Transport Service
                </button>

                <button className="border border-white/20 hover:bg-white/10 transition px-7 py-4 rounded-2xl font-semibold">
                  View Fleet
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1200&auto=format&fit=crop"
                  alt="Petroleum tanker"
                  className="rounded-3xl w-full h-[420px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 rounded-3xl p-6 shadow-2xl w-64">
                <h3 className="font-bold text-3xl">24/7</h3>
                <p className="text-gray-600 mt-1">Fuel supply operations with on-time delivery management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 text-center"
            >
              <h3 className="text-4xl font-extrabold text-red-600 mb-2">{item.value}</h3>
              <p className="text-gray-600 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
              alt="Logistics operations"
              className="rounded-[2rem] shadow-2xl"
            />
          </div>

          <div>
            <div className="text-red-600 font-bold uppercase tracking-[0.25em] text-sm mb-4">
              About Us
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Delivering Petroleum With Precision & Trust
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our company operates a fleet of petroleum tankers dedicated to transporting fuel from major petroleum companies to retail petrol pumps and commercial distribution points.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              With experienced drivers, advanced tracking systems, and strict safety compliance, we ensure dependable and secure fuel delivery operations every day.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <h4 className="font-bold text-lg mb-2">Modern Tanker Fleet</h4>
                <p className="text-gray-600 text-sm">GPS-enabled petroleum transport vehicles with safety-certified systems.</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <h4 className="font-bold text-lg mb-2">Experienced Operations</h4>
                <p className="text-gray-600 text-sm">Professional logistics coordination and trained transportation staff.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-red-600 font-bold uppercase tracking-[0.25em] text-sm mb-4">
              Our Services
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
              Comprehensive Petroleum Logistics Solutions
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              We provide end-to-end petroleum transportation and logistics support with a focus on safety, operational reliability, and timely delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center mb-6">
                  <div className="w-6 h-6 rounded-full bg-red-600" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-red-600 font-bold uppercase tracking-[0.25em] text-sm mb-4">
              Our Fleet
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Built for Safe & Efficient Fuel Transportation
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our petroleum tanker fleet is designed to handle high-volume fuel transportation with strict operational safety and delivery efficiency.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-red-600 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Real-Time GPS Tracking</h4>
                  <p className="text-gray-600">Live fleet monitoring for route optimization and secure transportation.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-red-600 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Safety Certified Operations</h4>
                  <p className="text-gray-600">Compliance with petroleum transportation and hazardous material safety protocols.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-red-600 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Timely Deliveries</h4>
                  <p className="text-gray-600">Optimized dispatch and operational planning for uninterrupted fuel supply.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop"
              alt="Tanker fleet"
              className="rounded-[2rem] shadow-2xl h-[540px] object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-red-700 to-slate-900 rounded-[3rem] p-12 lg:p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_white,_transparent_35%)]" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Need Reliable Petroleum Transportation?
              </h2>

              <p className="text-lg text-gray-200 leading-relaxed max-w-2xl">
                Partner with us for dependable tanker logistics, efficient fuel supply operations, and industry-standard transportation services.
              </p>
            </div>

            <div className="flex lg:justify-end">
              <button className="bg-white text-slate-900 hover:bg-gray-100 transition px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-14">
          <div>
            <h3 className="text-3xl font-extrabold mb-5">D SRINIVAS PETROLEUM LOGISTICS</h3>
            <p className="text-gray-400 leading-relaxed">
              Professional petroleum tanker transportation company delivering fuel logistics solutions with safety, efficiency, and reliability.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-5">Quick Links</h4>
            <div className="space-y-3 text-gray-400">
              <div>Home</div>
              <div>About</div>
              <div>Services</div>
              <div>Fleet</div>
              <div>Contact</div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-5">Contact Information</h4>

            <div className="space-y-4 text-gray-400">
              <div>
                <span className="font-semibold text-white">Phone:</span> +91 XXXXX XXXXX
              </div>

              <div>
                <span className="font-semibold text-white">Email:</span> info@dspetroleums.com
              </div>

              <div>
                <span className="font-semibold text-white">Location:</span> Hyderabad, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm px-6">
          © 2026 D SRINIVAS Petroleum Logistics. All rights reserved.
        </div>
      </section>
    </div>
  );
}
