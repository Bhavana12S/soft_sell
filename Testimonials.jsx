export default function Testimonials() {
  return (
    <section className="py-16 px-6 text-center">
      <h3 className="text-3xl font-semibold mb-8">What Our Customers Say</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {[{
          name: 'Jane Doe', role: 'IT Manager', company: 'TechCorp', quote: 'SoftSell made it easy to resell our unused software licenses.'
        }, {
          name: 'John Smith', role: 'Founder', company: 'StartupX', quote: 'Highly recommend! Fast, secure, and reliable.'
        }].map((t, i) => (
          <blockquote key={i} className="border-l-4 border-indigo-500 pl-4 text-left">
            <p className="italic">"{t.quote}"</p>
            <footer className="mt-2 text-sm font-medium">— {t.name}, {t.role} @ {t.company}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
