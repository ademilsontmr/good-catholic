import { Star, Quote } from "lucide-react";
const testimonials = [{
  name: "Sarah Mitchell",
  location: "Austin, TX",
  rating: 5,
  text: "The quiz made me realize I need to pray the rosary daily again. Very edifying!",
  level: "Growing Catholic"
}, {
  name: "Michael Thompson",
  location: "Denver, CO",
  rating: 5,
  text: "Excellent tool for examining our faith life. I highly recommend it!",
  level: "Committed Catholic"
}, {
  name: "Emily Rodriguez",
  location: "Phoenix, AZ",
  rating: 5,
  text: "The guide I received is helping me a lot to organize my prayer life. Gratitude!",
  level: "Exemplary Practicing Catholic"
}, {
  name: "David Anderson",
  location: "Nashville, TN",
  rating: 5,
  text: "I was surprised by the result! It motivated me to participate more in my parish life.",
  level: "Seeking Catholic"
}, {
  name: "Jennifer Martinez",
  location: "Portland, OR",
  rating: 5,
  text: "The questions are very well crafted. They made me reflect deeply on my faith.",
  level: "Committed Catholic"
}, {
  name: "Robert O'Connor",
  location: "Boston, MA",
  rating: 5,
  text: "I shared it with my prayer group. Everyone loved it and is using it to grow in faith!",
  level: "Exemplary Practicing Catholic"
}];
export function TestimonialsSection() {
  return <section id="depoimentos" className="py-20 md:py-32 bg-primary text-button-text">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            What Participants Say
          </h2>
          <p className="text-button-text/80 text-lg">
            Thousands of Catholics have already taken the quiz and are growing in faith.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-button-text/10 backdrop-blur-sm rounded-2xl p-6 border border-button-text/20">
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
              </div>
              
              {/* Text */}
              <p className="text-button-text/90 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-button-text/60">{testimonial.location}</p>
                </div>
                <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">
                  {testimonial.level.split(" ").slice(-1)}
                </span>
              </div>
            </div>)}
        </div>

        {/* Stats */}
        
      </div>
    </section>;
}
