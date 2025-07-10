
import { Card, CardContent } from '@/components/ui/card';
import { Clock, MapPin, Coffee, Gamepad2, Sunset, Utensils, Music, Star, Bed, UtensilsCrossed } from 'lucide-react';

const DayTimelineSection = () => {
  const timelineEvents = [
    { 
      time: '2:00 PM', 
      title: 'Welcome to Paradise', 
      description: 'Check-in and get settled in your comfortable tent',
      icon: <MapPin className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      time: '3:00 PM', 
      title: 'Welcome Snacks', 
      description: 'Enjoy delicious snacks and refreshing beverages',
      icon: <Coffee className="w-6 h-6" />,
      color: 'from-amber-500 to-amber-600'
    },
    { 
      time: '4:30 PM', 
      title: 'Fun & Games', 
      description: 'Indoor and outdoor games for all ages',
      icon: <Gamepad2 className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      time: '6:00 PM', 
      title: 'Sunset Point Visit', 
      description: 'Witness breathtaking sunset views from the best spots',
      icon: <Sunset className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    },
    { 
      time: '7:30 PM', 
      title: 'Delicious Dinner', 
      description: 'Unlimited dinner with local and continental cuisine',
      icon: <Utensils className="w-6 h-6" />,
      color: 'from-green-500 to-green-600'
    },
    { 
      time: '9:00 PM', 
      title: 'Bonfire & Music', 
      description: 'Gather around the bonfire with music and stories',
      icon: <Music className="w-6 h-6" />,
      color: 'from-red-500 to-orange-500'
    },
    { 
      time: '10:30 PM', 
      title: 'Stargazing', 
      description: 'Marvel at the clear night sky and countless stars',
      icon: <Star className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      time: '11:30 PM', 
      title: 'Sweet Dreams', 
      description: 'Rest comfortably in your cozy tent',
      icon: <Bed className="w-6 h-6" />,
      color: 'from-slate-500 to-slate-600'
    },
    { 
      time: '7:00 AM', 
      title: 'Fresh Breakfast', 
      description: 'Start your day with unlimited breakfast',
      icon: <UtensilsCrossed className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      time: '11:00 AM', 
      title: 'Farewell', 
      description: 'Check-out with unforgettable memories',
      icon: <MapPin className="w-6 h-6" />,
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id='experience' className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            How Your Day Looks Like
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A perfect blend of adventure, relaxation, and memorable experiences from arrival to departure
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 via-orange-200 to-teal-200 transform md:-translate-x-1/2 rounded-full"></div>
            
            {/* Timeline Events */}
            <div className="space-y-8 md:space-y-12">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center group animate-fade-in ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 transform -translate-x-1/2 z-10">
                    <div className={`w-full h-full bg-gradient-to-r ${event.color} rounded-full border-4 border-white shadow-lg group-hover:scale-150 transition-all duration-500`}></div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <Card className="group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:scale-105 cursor-pointer border-2 border-transparent hover:border-blue-200 bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        {/* Time Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold text-white bg-gradient-to-r ${event.color} shadow-lg`}>
                            <Clock className="w-4 h-4 mr-1" />
                            {event.time}
                          </div>
                          <div className={`p-3 bg-gradient-to-br ${event.color} rounded-full text-white group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                            {event.icon}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          {event.description}
                        </p>
                        
                        {/* Hover Effect Line */}
                        <div className={`mt-4 h-1 bg-gradient-to-r ${event.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <Clock className="w-6 h-6" />
            <span>Experience Every Moment of Your Journey</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default DayTimelineSection;