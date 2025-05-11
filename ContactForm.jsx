export default function ContactForm() {
  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
      <h3 className="text-3xl font-semibold text-center mb-8">Get in Touch</h3>
      <form className="max-w-xl mx-auto grid gap-4">
        <input type="text" placeholder="Name" required className="p-2 rounded border" />
        <input type="email" placeholder="Email" required className="p-2 rounded border" />
        <input type="text" placeholder="Company" className="p-2 rounded border" />
        <select required className="p-2 rounded border">
          <option value="">Select License Type</option>
          <option value="OS">Operating System</option>
          <option value="Design">Design Software</option>
          <option value="Office">Office Suite</option>
        </select>
        <textarea placeholder="Message" required className="p-2 rounded border"></textarea>
        <button type="submit" className="bg-indigo-600 text-white py-2 rounded">Send Message</button>
      </form>
    </section>
  );
}
