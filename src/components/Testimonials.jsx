import React, { useRef, useState } from 'react';

const Testimonials = () => {
  // Add state to track current testimonial index
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      rating: 4.5,
      comment: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
      avatar: "/images/Ellipse 175.png"
    },
    {
      name: "Yessica Christy",
      location: "Shanxi, China",
      rating: 4.5,
      comment: "I like it because I like to travel far and still can connect with high speed.",
      avatar: "/images/Ellipse 175 (1).png"
    },
    {
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      rating: 4.5,
      comment: "This is very unusual for my business that currently requires a virtual private network that has high security.",
      avatar: "/images/Ellipse 175 (2).png"
    }
    ,
    {
      name: "Yessica Christy",
      location: "Shanxi, China",
      rating: 4.5,
      comment: "I like it because I like to travel far and still can connect with high speed.",
      avatar: "/images/Ellipse 175 (1).png"
    },
    ,
    {
      name: "Yessica Christy",
      location: "Shanxi, China",
      rating: 4.5,
      comment: "I like it because I like to travel far and still can connect with high speed.",
      avatar: "/images/Ellipse 175 (1).png"
    },
  ];

  // Create a reference to the testimonials container
  const scrollContainerRef = useRef(null);

  // Function to scroll to a specific index
  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = 370; // Card width + gap
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  // Function to scroll left
  const scrollLeft = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    scrollToIndex(newIndex);
  };

  // Function to scroll right
  const scrollRight = () => {
    const newIndex = Math.min(testimonials.length - 1, activeIndex + 1);
    scrollToIndex(newIndex);
  };

  return (
    <section className="py-16 px-6 md:px-12">
      <h2 className="text-3xl font-bold mb-4 text-center">Trusted by Thousands of</h2>
      <h2 className="text-3xl font-bold mb-8 text-center">Happy Customer</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-center">
        These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
      </p>
      
      <div 
        ref={scrollContainerRef} 
        className="flex overflow-x-auto gap-6 pb-8 scroll-smooth"
      >
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-8 border border-gray-200 w-[400px] flex-shrink-0 mx-8"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4" 
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-1">{testimonial.rating}</span>
                <img src="/images/Group 1161.png" alt="Rating" className="h-4 w-4" />
              </div>
            </div>
            <p className="text-gray-700">{testimonial.comment}</p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center items-center mt-8">
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <span 
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full cursor-pointer transition-all ${
                index === activeIndex 
                  ? 'w-8 bg-red-500' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            ></span>
          ))}
        </div>
        <div className="flex ml-auto space-x-4">
          <button 
            onClick={scrollLeft}
            className="p-3 border border-red-500 rounded-full transition-all hover:bg-red-100"
          >
            <img src="/images/Vector.png" alt="Previous" className="h-4 w-4" />
          </button>
          <button 
            onClick={scrollRight}
            className="p-3 bg-red-500 text-white rounded-full transition-all hover:bg-red-600"
          >
            <img src="/images/arrow.png" alt="Next" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;