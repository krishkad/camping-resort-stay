"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./FloatingAction";

const phoneNumber = process.env.NEXT_PUBLIC_CALL_PHONE_NO;

const faqs = [
  {
    question: "What's included in my camping stay?",
    answer:
      "Your stay includes comfortable tent accommodation, evening tea with pakoras upon arrival, dinner with local delicacies, breakfast, and access to activities like badminton, carrom, cricket, bonfire nights, and lake kayaking. Barbeque with sound system is available until 9:30 PM.",
    category: "Stay Details",
  },
  {
    question: "Are pets welcome at Pawana Lake Camping?",
    answer:
      "Yes! We welcome well-behaved pets with prior notice. Please inform us during booking to ensure we can accommodate your furry friend.",
    category: "Policies",
  },
  {
    question: "What should I pack for my camping trip?",
    answer:
      "Pack comfortable clothes for outdoor activities, hiking shoes for nearby fort treks, sunscreen, insect repellent, and personal toiletries. Bring layers for cool evenings by the lake. We provide all bedding and camping essentials.",
    category: "Preparation",
  },
  {
    question: "What are your check-in and check-out times?",
    answer:
      "Check-in is between 4:00 PM and 8:00 PM. Check-out is by 11:00 AM after breakfast. Please plan your arrival accordingly to enjoy the complete camping experience.",
    category: "Stay Details",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "Bookings once confirmed are non-refundable. The advance amount paid is strictly non-refundable in case of cancellation.",
    category: "Policies",
  },
  {
    question: "How do I reach Pawana Lake Camping?",
    answer:
      "We're located at Thakursai Pavananagar Road Near Vaishnavi Hotel, Pawna Lake, Pune - 410 406. The campsite is approximately 2 hours from Pune city. Detailed driving directions will be provided upon booking confirmation.",
    category: "Travel",
  },
  {
    question: "Is Pawana Lake Camping suitable for families and children?",
    answer:
      "Absolutely! We offer family-friendly cottages with attached washrooms and lake views. Children can enjoy various activities like cricket, badminton, kayaking, and bonfire sessions in a safe outdoor environment.",
    category: "Family",
  },
  {
    question: "What dining and meal options are available?",
    answer:
      "We provide delicious meals including evening tea with pakoras, barbeque dinner, traditional dinner with local delicacies (served until 10:00 PM), and hearty breakfast (served until 9:30 AM). Vegetarian and special dietary requirements can be accommodated with advance notice.",
    category: "Dining",
  },
  {
    question: "What adventure activities can we enjoy?",
    answer:
      "Enjoy lake kayaking, bonfire nights with music and stories (until 11:30 PM), nature hiking, stargazing, and outdoor games like badminton, carrom, and cricket. Nearby attractions include Lohagad Fort, Bhaja Caves, Karla Caves, and trekking to Rajmachi Fort.",
    category: "Activities",
  },
  {
    question: "What types of accommodation do you offer?",
    answer:
      "We offer Regular Tents (2-3 person capacity with essential facilities), Triangle Tents (stylish with lake views and added comfort), and Deluxe Cottages (family-friendly with attached washrooms and lake touch views).",
    category: "Accommodation",
  },
];



const FAQ = () => {
  const handleWhatsApp = () => {
    const message =
      "Hi! I'm interested in Pawna Lake Camping. Could you please help me with booking?";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleCall = () => {
    window.open(`tel:+${phoneNumber}`, "_self");
  };
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-stone mb-4 sm:mb-6">
            Everything You Need to Know
          </h2>
          <p className="text-lg sm:text-xl text-stone/80 font-poppins">
            We&apos;ve got answers to all your questions for a seamless glamping
            adventure
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl sm:rounded-3xl px-4 sm:px-8 py-2 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-bold text-stone hover:text-moss transition-colors font-playfair text-base sm:text-lg py-4 sm:py-6">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                  <span className="bg-[#4caf50]/10 w-max text-moss px-2 sm:px-3 py-1 rounded-full text-xs font-poppins font-semibold">
                    {faq.category}
                  </span>
                  <span className="flex-1 text-left">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-stone/80 pb-4 sm:pb-6 font-poppins leading-relaxed text-sm sm:text-base pl-0 sm:pl-16">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div id="contact" className="text-center pt-24">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-playfair font-bold text-stone mb-3 sm:mb-4">
              {/* Still have questions? We&apos;re here to help! */}
              Have questions? Let&apos;s make your trip stress-free.
            </h3>
            <p className="text-stone/80 mb-4 sm:mb-6 font-poppins text-sm sm:text-base">
              Our friendly team is available 24/7 to assist with your booking
              and travel planning
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition-colors font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base cursor-pointer gap-2 sm:gap-3"
                onClick={handleWhatsApp}
              >
                {/* <MessageCircle className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5" /> */}
                <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                WhatsApp Support
              </a>
              {/* <a
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-moss text-white rounded-2xl hover:bg-moss/90 transition-colors font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base cursor-pointer"
                onClick={handleCall}
              >
                <Phone className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5" />
                Call Now
              </a> */}
              <a
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl  transition-colors font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base cursor-pointer"
                onClick={handleCall}
              >
                <Phone className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
