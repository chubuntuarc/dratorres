import React from 'react';

const Testimonials = ({
    title = "Lo Que Dicen Nuestros Pacientes",
    testimonials = [],
    backgroundClass = "bg-dental-purple",
    image = null
}) => {
    const defaultTestimonials = [
        {
            id: 1,
            text: "Excelente atención, la doctora Paty es muy profesional y me hizo sentir muy cómoda durante todo el tratamiento.",
            author: "María González",
            rating: 5
        },
        {
            id: 2,
            text: "Mi hijo siempre tenía miedo al dentista, pero aquí lo tratan con mucha paciencia y cariño. Ahora vamos sin quejas.",
            author: "Carlos Rodríguez",
            rating: 5
        },
        {
            id: 3,
            text: "La doctora es muy amable y los resultados de mi tratamiento fueron excelentes.",
            author: "Ana Martínez",
            rating: 5
        }
    ];

    const testimonialsToShow = testimonials.length > 0 ? testimonials : defaultTestimonials;

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span
                key={index}
                className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            >
                ⭐
            </span>
        ));
    };

    return (
        <section className={`${backgroundClass} section-padding`}>
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Testimonials Column */}
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
                            {title}
                        </h2>
                        <div className="space-y-6">
                            {testimonialsToShow.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="bg-white rounded-lg p-6 shadow-lg"
                                >
                                    {/* <div className="mb-3">
                    {renderStars(testimonial.rating)}
                  </div> */}
                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        "{testimonial.text}"
                                    </p>
                                    <p className="text-gray-600 font-medium">
                                        - {testimonial.author}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Column */}
                    {image && (
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src={image}
                                alt="Paciente en consulta dental"
                                className="rounded-lg shadow-lg w-full aspect-square object-cover"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
