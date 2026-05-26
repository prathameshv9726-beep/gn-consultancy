export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">About GN Consultancy</h1>
        <p className="max-w-4xl mx-auto text-xl leading-relaxed">
          Your trusted healthcare consultancy partner for claims management,
          hospital empanelment, staff recruitment, and revenue cycle management.
        </p>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">
          Who We Are
        </h2>

        <p className="text-lg leading-8 text-gray-700 mb-6">
          GN Consultancy is a professional healthcare consultancy and claims
          management firm dedicated to providing comprehensive and effective
          solutions to hospitals and healthcare institutions.
        </p>

        <p className="text-lg leading-8 text-gray-700">
          We specialize in Health Insurance Claims Management, Ayushman Bharat
          and Government Scheme Claims, Hospital Empanelment, Medical Billing,
          Staff Recruitment, and Revenue Cycle Management (RCM), helping
          healthcare organizations achieve operational excellence and financial
          growth.
        </p>
      </section>

      {/* Mission Vision */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-blue-50 p-10 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              Our Mission
            </h3>

            <p className="text-lg leading-8 text-gray-700">
              To provide accurate, transparent, and result-oriented services
              that reduce claim rejections, improve revenue realization, and
              enhance the overall efficiency of healthcare institutions.
            </p>
          </div>

          <div className="bg-blue-50 p-10 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              Our Vision
            </h3>

            <p className="text-lg leading-8 text-gray-700">
              To become a trusted and leading healthcare consultancy partner by
              delivering high-quality, reliable, and performance-driven
              solutions to hospitals and healthcare organizations.
            </p>
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Insurance Claims Management",
              "Ayushman Bharat & Government Schemes",
              "Medical Billing & Coding",
              "Claim Audit & Denial Management",
              "Revenue Cycle Management",
              "Hospital Empanelment",
              "Documentation & Record Management",
              "Healthcare Staff Recruitment",
              "Training & Capacity Building",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 hover:shadow-2xl transition"
              >
                <div className="w-14 h-14 bg-blue-700 text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-6">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold text-blue-900">
                  {service}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Experienced and Professional Team",
              "Fast and Accurate Claim Processing",
              "Reduced Claim Rejections",
              "Higher Claim Approval Rates",
              "Strong Focus on Revenue Growth",
              "Complete Hospital Empanelment Support",
              "Qualified Healthcare Staffing Solutions",
              "Transparent and Reliable Services",
              "End-to-End Operational Support",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-2xl backdrop-blur-md"
              >
                <p className="text-lg font-medium">
                  ✔ {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Goal */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-blue-900 mb-10">
            Our Goal
          </h2>

          <p className="text-lg leading-8 text-gray-700">
            To empower healthcare institutions with professional solutions that
            streamline billing, claims management, empanelment, and human
            resource processes, resulting in higher claim approval rates,
            increased revenue, and improved operational efficiency.
          </p>

        </div>
      </section>

    </main>
  );
}