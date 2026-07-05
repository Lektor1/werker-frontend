import React from 'react';
import { CheckCircle2 } from 'lucide-react';
export function About() {
  const features = [
  'Small family business with decades of combined experience.',
  'Installs any kind of heating or cooling systems, including floor heating.',
  'Specializes in external heating systems that do NOT require home renovation.',
  'Works with all types of plumbing materials and standards.',
  'Designs full plumbing systems (cold/hot intake, outtake).',
  'Installs boilers, radiators, fans, and smart climate controls.'];

  return (
    <section id="about" className="py-24 bg-brandWhite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-grid-pattern bg-[size:20px_20px] opacity-20 z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Werker team at work"
              className="relative z-10 w-full h-[500px] object-cover rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" />
            
            <div className="absolute -bottom-8 -right-8 bg-primary text-brandWhite p-8 rounded-sm z-20 shadow-xl hidden md:block">
              <div className="text-5xl font-display font-bold mb-2">25+</div>
              <div className="text-sm font-bold uppercase tracking-wider">
                Years of
                <br />
                Excellence
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
              About Werker
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-brandBlack mb-6 leading-tight">
              Precision Engineering for Your Home.
            </h3>
            <p className="text-brandBlack/70 text-lg mb-8 leading-relaxed">
              We are a dedicated family business that brings industrial-grade
              precision to residential and commercial spaces. We believe that a
              well-designed plumbing or heating system should be invisible,
              efficient, and built to last a lifetime.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) =>
              <li key={index} className="flex items-start gap-3">
                  <CheckCircle2
                  className="text-primary shrink-0 mt-1"
                  size={20} />
                
                  <span className="text-brandBlack/80 font-medium">
                    {feature}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>);

}