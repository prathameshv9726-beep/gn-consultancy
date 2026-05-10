export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 to-slate-900 text-white px-6">
      <div className="bg-white text-slate-900 rounded-3xl p-12 max-w-xl text-center shadow-2xl">
        <div className="text-6xl mb-6">✅</div>

        <h1 className="text-4xl font-bold mb-4">
          Thank You!
        </h1>

        <p className="text-lg text-slate-600 mb-8">
          Your inquiry has been submitted successfully.
          Our team will contact you shortly.
        </p>

        <a
          href="/"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl font-semibold transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}