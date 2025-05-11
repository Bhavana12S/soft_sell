export default function WhyChooseUs() {
  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
      <h3 className="text-3xl font-semibold text-center mb-8">Why Choose Us</h3>
      <div className="grid md:grid-cols-4 gap-4">
        {['Fast Payouts', 'Secure Transactions', 'Top Valuations', '24/7 Support'].map((title, i) => (
          <div key={i} className="bg-white dark:bg-gray-700 p-4 rounded shadow text-center">
            <div className="text-3xl mb-2">⭐</div>
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
