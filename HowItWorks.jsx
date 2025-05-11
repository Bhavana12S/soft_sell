export default function HowItWorks() {
  return (
    <section className="py-16 px-6 text-center">
      <h3 className="text-3xl font-semibold mb-8">How It Works</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {['Upload License', 'Get Valuation', 'Get Paid'].map((step, i) => (
          <div key={i} className="p-6 border rounded shadow hover:shadow-lg">
            <div className="text-4xl mb-2">⬆️💰✅</div>
            <h4 className="text-xl font-medium">{step}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
