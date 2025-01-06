import { testimonials } from "@/data/data";

const Testimonials = () => {
    return (
        <div className=" py-10 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
              <h3 className="text-blue-500 font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500 text-sm">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Testimonials;