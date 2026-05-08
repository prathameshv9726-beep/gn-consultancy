export default function GNConsultancyWebsite() {
  const services = [
    {
      title: 'Healthcare Support',
      desc: 'Support for corporate, TPA and insurance healthcare processes.'
    },
    {
      title: 'Empanelment Services',
      desc: 'Seamless empanelment for insurance and government schemes.'
    },
    {
      title: 'Revenue Management',
      desc: 'Optimized revenue cycle management for faster collections.'
    },
    {
      title: 'Claim Audit',
      desc: 'Professional denial management and claim auditing services.'
    }
  ]

  const highlights = [
    'Healthcare Support for Corporate, TPA & Insurance',
    'Empanelment Services for Govt. Schemes',
    'Claim Audit & Denial Management',
    'Faster Revenue Generation',
    'Reliable and Transparent Workflow'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-slate-800">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">

        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1585435557343-3b092031d4f7?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur text-sm mb-6">
              Healthcare Revenue & Claim Experts
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              GN Consultancy
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl">
              Reliable healthcare support and claim management solutions for hospitals,
              insurance providers, TPAs, corporates, and government healthcare schemes.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">

              <a
                href="#contact"
                className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform"
              >
                Contact Us
              </a>

              <a
                href="#services"
                className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-blue-700 transition-all"
              >
                Our Services
              </a>

            </div>

            <div className="flex flex-wrap gap-4 text-sm text-blue-100">

              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl">
                <span>🛡️</span>
                <span>Trusted Support</span>
              </div>

              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl">
                <span>🏥</span>
                <span>Healthcare Experts</span>
              </div>

            </div>

          </div>

          <div className="flex justify-center">

            <div className="bg-white rounded-3xl shadow-2xl p-4 w-full max-w-lg">

              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
                alt="Healthcare Consultancy"
                className="rounded-2xl w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">

        <div>

          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            About Us
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            GN Consultancy specializes in healthcare revenue management and insurance claim services.
            We help healthcare providers improve operational efficiency, reduce claim denials,
            and accelerate revenue cycles.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">

            <div className="bg-white shadow-lg rounded-2xl p-5 border border-blue-100 text-center">
              <h3 className="text-2xl font-bold text-blue-700">100%</h3>
              <p className="text-sm text-slate-600 mt-2">Transparent Support</p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-5 border border-blue-100 text-center">
              <h3 className="text-2xl font-bold text-blue-700">24/7</h3>
              <p className="text-sm text-slate-600 mt-2">Healthcare Assistance</p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-5 border border-blue-100 text-center">
              <h3 className="text-2xl font-bold text-blue-700">Fast</h3>
              <p className="text-sm text-slate-600 mt-2">Revenue Generation</p>
            </div>

          </div>

        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 text-white shadow-2xl">

          <h3 className="text-3xl font-bold mb-8">
            Why Choose Us?
          </h3>

          <div className="space-y-5">

            {highlights.map((item, index) => (

              <div
                key={index}
                className="flex items-start gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur"
              >
                <div className="w-3 h-3 rounded-full bg-white mt-2"></div>
                <p>{item}</p>
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Services */}
      <section id="services" className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Our Services
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto">
              End-to-end healthcare claim and revenue cycle solutions tailored for hospitals,
              clinics, corporates, and insurance partners.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {services.map((service, index) => (

              <div
                key={index}
                className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-3xl p-7 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-blue-700 text-white flex items-center justify-center text-2xl font-bold mb-5">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {service.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <h2 className="text-4xl font-bold mb-6">
                Get In Touch
              </h2>

              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Connect with our experts for healthcare revenue optimization,
                insurance claim management, and healthcare support services.
              </p>

              <div className="space-y-4 text-lg">

                <div className="bg-white/10 rounded-2xl p-4 flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <span>+91 81096 68047</span>
                </div>

                <div className="bg-white/10 rounded-2xl p-4 flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <span>+91 70246 51289</span>
                </div>

                <div className="bg-white/10 rounded-2xl p-4 break-all flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  <span>gnconsultancy.support@gmail.com</span>
                </div>

              </div>

            </div>

            <div className="bg-white text-slate-800 rounded-3xl p-8 shadow-2xl">

              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl font-semibold transition-colors"
                >
                  Submit Inquiry
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-8 relative">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <div>

            <h3 className="text-xl font-bold text-white">
              GN Consultancy
            </h3>

            <p className="text-sm text-slate-400 mt-1">
              Reliable | Transparent | Revenue Driven
            </p>

          </div>

          <div className="text-sm text-slate-500 text-center md:text-right">
            © 2026 GN Consultancy. All rights reserved.
          </div>

        </div>

      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

        <a
          href="https://wa.me/918109668047"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl text-2xl"
        >
          💬
        </a>

        <a
          href="https://www.linkedin.com/in/prathamesh-vengurlekar-a4522218b/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-full shadow-2xl text-2xl"
        >
          in
        </a>

      </div>

    </div>
  )
}