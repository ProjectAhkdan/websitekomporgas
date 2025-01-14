import { testimonials } from "@/data/data";

const Testimonials = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-8">
          — Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <blockquote className="italic text-gray-600 mb-4">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <h3 className="text-blue-500 font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500 text-sm">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
