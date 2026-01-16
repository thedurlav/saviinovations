import { useEffect, useState } from 'react';
import {
  Rocket,
  TrendingUp,
  Users,
  Target,
  Megaphone,
  Fingerprint,
  UserCheck,
  FolderKanban,
  Mail,
  Phone,
  ChevronRight,
  Menu,
  X,
  Award,
  Zap,
  Shield,
  Star
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-100px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Rocket className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Savi Innovations</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Partners', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Services', 'Partners', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-slate-50 animate-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                Savi Innovations
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Driving Innovation, Building Trust, Accelerating Growth Through Technology Excellence
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-xl hover:scale-105 flex items-center space-x-2"
              >
                <span>Contact Us</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all hover:shadow-lg"
              >
                Our Services
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
              {[
                { icon: Rocket, label: 'Innovation' },
                { icon: Shield, label: 'Trust' },
                { icon: Zap, label: 'Efficiency' },
                { icon: TrendingUp, label: 'Growth' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="w-12 h-12 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white animate-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Savi Innovations</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Savi Innovations is a forward-thinking company committed to delivering innovative solutions
                that drive business growth and operational excellence. We specialize in digital transformation,
                project management, and cutting-edge technology services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to empower organizations with reliable, professional services that foster
                innovation and build lasting partnerships. We combine technical expertise with strategic
                thinking to deliver exceptional results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 shadow-lg hover-lift">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Mr. Tushar Pandey</h3>
                  <p className="text-blue-600 font-semibold">Founder & Visionary Leader</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Leading Savi Innovations with a vision to transform businesses through innovation,
                technology, and unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 animate-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to elevate your business to new heights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Megaphone,
                title: 'Digital Marketing',
                description: 'Strategic digital marketing solutions to amplify your brand presence and drive measurable results across all digital channels.'
              },
              {
                icon: Fingerprint,
                title: 'Aadhaar Project Marketing',
                description: 'Specialized marketing expertise for Aadhaar-based projects, ensuring maximum reach and engagement with target audiences.'
              },
              {
                icon: Target,
                title: 'Aadhaar Services & Operations',
                description: 'End-to-end Aadhaar-related services and operational support, delivered with precision and compliance.'
              },
              {
                icon: UserCheck,
                title: 'Human Resource Management',
                description: 'Comprehensive HR solutions including recruitment, talent management, and organizational development strategies.'
              },
              {
                icon: FolderKanban,
                title: 'Project Management',
                description: 'Expert project management services ensuring timely delivery, optimal resource utilization, and successful outcomes.'
              },
              {
                icon: TrendingUp,
                title: 'Business Consulting',
                description: 'Strategic consulting services to help businesses navigate challenges and unlock growth opportunities.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover-lift cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8 bg-white animate-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners & Collaborations</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">
              Trusted partnerships driving mutual success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'MileStone Company', type: 'Strategic Partner' },
              { name: 'BHN School', type: 'Education Partner' },
              { name: 'Partner Organizations', type: 'Collaborative Network' }
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 text-center hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-blue-600 font-semibold">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 animate-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Pushpendra',
                role: 'Business Leader',
                review: 'Savi Innovations delivered exceptional results. Their professionalism and dedication to excellence is unmatched. Highly recommended!'
              },
              {
                name: 'MileStone Company',
                role: 'Corporate Partner',
                review: 'Working with Savi Innovations has been transformative. Their innovative approach and reliable service delivery exceeded our expectations.'
              },
              {
                name: 'BHN School',
                role: 'Education Institution',
                review: 'The team at Savi Innovations brings both expertise and integrity. Their commitment to our success is evident in everything they do.'
              },
              {
                name: 'Durlav Sahu',
                role: 'Project Manager',
                review: 'Outstanding project management and technical capabilities. Savi Innovations is our trusted partner for complex initiatives.'
              },
              {
                name: 'Mohammad Shan',
                role: 'Entrepreneur',
                review: 'Savi Innovations combines innovation with reliability. Their team consistently delivers high-quality solutions on time.'
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.review}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-blue-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white animate-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Rocket, title: 'Innovation First', description: 'Cutting-edge solutions that keep you ahead of the curve' },
              { icon: Shield, title: 'Trusted Partner', description: 'Reliability and integrity in every engagement' },
              { icon: Target, title: 'Result-Driven', description: 'Focused on delivering measurable outcomes' },
              { icon: Zap, title: 'Efficient Delivery', description: 'Fast, agile, and responsive to your needs' }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center space-y-4 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white animate-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Get In Touch With Us</h2>
          <p className="text-xl mb-12 text-blue-100">
            Ready to transform your business? Let's start a conversation.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:aadhartechs@gmail.com"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all hover-lift"
            >
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">aadhartechs@gmail.com</p>
            </a>

            <a
              href="tel:+918839503653"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all hover-lift"
            >
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100">+91 8839503653</p>
            </a>
          </div>

          <button
            onClick={() => window.location.href = 'mailto:aadhartechs@gmail.com'}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:shadow-xl hover:scale-105"
          >
            Start Your Journey With Us
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Rocket className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold">Savi Innovations</span>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} Savi Innovations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
