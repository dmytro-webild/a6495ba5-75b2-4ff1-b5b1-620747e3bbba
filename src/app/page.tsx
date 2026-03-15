"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import FeatureCardTwentyThree from "@/components/sections/feature/FeatureCardTwentyThree";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import SplitAbout from "@/components/sections/about/SplitAbout";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Award, Compass, DollarSign, Phone, Users, MapPin, Gift, HelpCircle, Star, Heart, Compass as CompassIcon } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="mediumLargeSizeMediumTitles"
      background="circleGradient"
      cardStyle="inset"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Wanderlust Travels"
          navItems={[
            { name: "Destinations", id: "destinations" },
            { name: "Packages", id: "packages" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" }
          ]}
          button={{ text: "Book Now", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Discover Your Next Adventure"
          description="Explore the world's most beautiful destinatins with Wanderlust Travels. From tropical paradises to mountain peaks, we create unforgettable memories."
          tag="Travel Experiences"
          tagIcon={CompassIcon}
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          buttons={[
            { text: "Explore Destinations", href: "#destinations" },
            { text: "View Packages", href: "#packages" }
          ]}
          buttonAnimation="slide-up"
          mediaItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/romantic-dinner-setting_74190-468.jpg", imageAlt: "tropical beach sunset ocean travel" },
            { imageSrc: "http://img.b2bpic.net/free-photo/indian-travel-destination-beautiful-attractive_53876-16346.jpg", imageAlt: "mountain landscape hiking adventure" },
            { imageSrc: "http://img.b2bpic.net/free-photo/man-with-camera-castle-stairs_23-2148622583.jpg", imageAlt: "ancient temple architecture travel" }
          ]}
        />
      </div>

      <div id="destinations" data-section="destinations">
        <FeatureCardTwentyThree
          title="Featured Destinations"
          description="Handpicked locations across the globe that offer unique cultural experiences, stunning natural landscapes, and unforgettable moments."
          tag="Top Picks"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          carouselMode="buttons"
          features={[
            { id: "bali", title: "Bali, Indonesia", tags: ["Beach", "Culture", "Relaxation"], imageSrc: "http://img.b2bpic.net/free-photo/aerial-shot-long-road-surrounded-by-trees-fields_181624-45080.jpg", imageAlt: "Bali rice terraces landscape Indonesia" },
            { id: "paris", title: "Paris, France", tags: ["Romance", "Culture", "Art"], imageSrc: "http://img.b2bpic.net/free-vector/france-promotional-poster-template_23-2148326173.jpg", imageAlt: "Eiffel Tower Paris France city" },
            { id: "japan", title: "Japan", tags: ["Heritage", "Nature", "Urban"], imageSrc: "http://img.b2bpic.net/free-photo/asian-woman-wearing-japanese-traditional-kimono-cherry-blossom-spring-kyoto-temple-japan_335224-123.jpg", imageAlt: "Japan Mount Fuji landscape cherry blossom" }
          ]}
        />
      </div>

      <div id="packages" data-section="packages">
        <ProductCardThree
          title="Tour Packages"
          description="Choose from our curated collection of tour packages designed to match every travel style and budget."
          tag="Special Offers"
          tagIcon={Gift}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          carouselMode="buttons"
          products={[
            { id: "adventure-trek", name: "Adventure Trekking", price: "$1,299", imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-girl-exploring-nature_23-2150559772.jpg", imageAlt: "adventure sports outdoor activity action" },
            { id: "luxury-escape", name: "Luxury Escape", price: "$2,499", imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-girl-sitting-outdoor-cafe_1262-5451.jpg", imageAlt: "luxury resort spa relaxation vacation" },
            { id: "cultural-immersion", name: "Cultural Immersion", price: "$999", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-checking-map-new-destination-with-copy-space_23-2148631341.jpg", imageAlt: "cultural tour heritage site destination" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose Wanderlust Travels"
          description="With over 15 years of experience in the travel industry, we pride ourselves on creating personalized travel experiences that exceed expectations."
          tag="About Us"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          mediaAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/full-shot-people-planning-trip-together_23-2148925831.jpg"
          imageAlt="travel team professionals tourism experts"
          imagePosition="right"
          bulletPoints={[
            { title: "Expert Guides", description: "Experienced professionals dedicated to creating memorable journeys", icon: Users },
            { title: "24/7 Support", description: "Round-the-clock assistance for all your travel needs and concerns", icon: Phone },
            { title: "Customized Itineraries", description: "Tailored travel plans designed specifically for your preferences", icon: Compass },
            { title: "Best Price Guarantee", description: "Competitive pricing with the highest value for your investment", icon: DollarSign }
          ]}
          buttons={[{ text: "Learn More", href: "#" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Travelers Say"
          description="Real stories from real travelers who experienced the magic of exploring the world with us."
          tag="Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          carouselMode="buttons"
          testimonials={[
            { id: "review-1", name: "Sarah Mitchell", role: "Adventure Seeker", testimonial: "Wanderlust Travels made my dream trip to Bali unforgettable. Every detail was perfect, from the accommodations to the guided tours. Highly recommended!", imageSrc: "http://img.b2bpic.net/free-photo/front-view-elder-tourist-woman-with-beach-hat_23-2148620251.jpg", imageAlt: "happy traveler portrait outdoor vacation", icon: Heart },
            { id: "review-2", name: "James & Emma", role: "Honeymooners", testimonial: "Our honeymoon in Paris was absolutely magical, thanks to the thoughtful planning by the Wanderlust team. We couldn't have asked for a better experience.", imageSrc: "http://img.b2bpic.net/free-photo/attractive-happy-couple-laughing-traveling-summer-by-sea_285396-7596.jpg", imageAlt: "couple vacation travel enjoyment portrait", icon: Heart },
            { id: "review-3", name: "The Anderson Family", role: "Family Travelers", testimonial: "Taking our kids to Japan was amazing! The itinerary was perfectly balanced with activities for everyone. The kids are already asking when we can book our next trip!", imageSrc: "http://img.b2bpic.net/free-photo/grandma-grandpa-with-grandson_23-2148305422.jpg", imageAlt: "family vacation travel enjoyment happiness", icon: Heart },
            { id: "review-4", name: "Michael Chen", role: "Solo Traveler", testimonial: "As a solo traveler, I appreciated the safety and support provided throughout my journey. Wanderlust Travels made traveling alone feel secure and enjoyable.", imageSrc: "http://img.b2bpic.net/free-photo/man-showing-direction-his-family-when-hiking_74855-21390.jpg", imageAlt: "group travelers adventure tour enjoyment", icon: Heart }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFourteen
          title="Our Travel Impact"
          tag="By The Numbers"
          tagAnimation="slide-up"
          useInvertedBackground={true}
          metricsAnimation="slide-up"
          metrics={[
            { id: "travelers", value: "50K+", description: "Happy Travelers" },
            { id: "destinations", value: "120+", description: "Destinations Covered" },
            { id: "years", value: "15", description: "Years Experience" },
            { id: "satisfaction", value: "98%", description: "Satisfaction Rate" }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our tours, packages, and booking process."
          tag="FAQ"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            { id: "faq-1", title: "What is included in the tour packages?", content: "Our tour packages include accommodations, guided tours, meals as specified, transportation between destinations, and 24/7 customer support. Some premium packages include activities and entrance fees." },
            { id: "faq-2", title: "Can I customize my travel itinerary?", content: "Absolutely! We specialize in creating personalized travel experiences. Contact our travel consultants to discuss your preferences, and we'll design a custom itinerary tailored to your needs." },
            { id: "faq-3", title: "What is your cancellation policy?", content: "We offer flexible cancellation policies depending on your package. Generally, cancellations made 30 days before travel receive a full refund. Please check your specific package terms." },
            { id: "faq-4", title: "Do you arrange visas and travel documents?", content: "While we provide guidance on visa requirements and necessary documentation, we recommend consulting your country's embassy for official visa procedures. Our team can provide resources and support." },
            { id: "faq-5", title: "What travel insurance options are available?", content: "We offer comprehensive travel insurance packages covering medical emergencies, trip cancellations, and lost luggage. Insurance can be added to any booking for peace of mind." },
            { id: "faq-6", title: "How do I make a booking?", content: "Booking is easy! Browse our packages, select your preferred dates, and fill out the booking form. Our team will contact you to confirm details and process payment securely." }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Plan Your Journey Today"
          description="Get in touch with our travel experts to start planning your next adventure. We're here to answer all your questions and create the perfect itinerary for you."
          useInvertedBackground={true}
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputs={[
            { name: "fullName", type: "text", placeholder: "Your Full Name", required: true },
            { name: "email", type: "email", placeholder: "your@email.com", required: true },
            { name: "destination", type: "text", placeholder: "Dream Destination" },
            { name: "travelDate", type: "date", placeholder: "Preferred Travel Date", required: true }
          ]}
          textarea={{ name: "message", placeholder: "Tell us about your travel dreams and preferences...", rows: 5, required: false }}
          buttonText="Book Your Adventure"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Wanderlust Travels"
          copyrightText="© 2025 Wanderlust Travels. All rights reserved."
          columns={[
            { title: "Explore", items: [{ label: "Destinations", href: "#destinations" }, { label: "Tour Packages", href: "#packages" }, { label: "Reviews", href: "#testimonials" }] },
            { title: "Company", items: [{ label: "About Us", href: "#about" }, { label: "Travel Blog", href: "#" }, { label: "Contact", href: "#contact" }] },
            { title: "Support", items: [{ label: "FAQ", href: "#faq" }, { label: "Travel Insurance", href: "#" }, { label: "Privacy Policy", href: "#" }] },
            { title: "Connect", items: [{ label: "Facebook", href: "https://facebook.com" }, { label: "Instagram", href: "https://instagram.com" }, { label: "Twitter", href: "https://twitter.com" }] }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
