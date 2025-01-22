import React, { useState } from "react";
import "./home.css";

// Data for different sections
const sectionData = {
  study: [
    {
      image: "https://img.icons8.com/color/100/books.png",
      title: "Study Resources",
      price: "$0 - Free",
    },
    {
      image:
        "https://img.icons8.com/external-others-phat-plus/100/external-courses-online-courses-color-line-others-phat-plus-32.png",
      title: "Online Courses",
      price: "$10 - $200",
    },
    {
      image:
        "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-scholarship-hockey-flaticons-lineal-color-flat-icons-2.png",
      title: "Scholarships",
      price: "Varies",
    },
    {
      image: "https://img.icons8.com/dusk/100/university-campus.png",
      title: "University Programs",
      price: "$2000 - $50000",
    },
    {
      image: "https://img.icons8.com/bubbles/100/books.png",
      title: "E-books",
      price: "$5 - $50",
    },
    {
      image: "https://img.icons8.com/color/100/certification.png",
      title: "Degrees",
      price: "$10000 - $60000",
    },
  ],
  work: [
    {
      image: "https://img.icons8.com/color/100/job.png",
      title: "Job Portals",
      price: "Free",
    },
    {
      image: "https://img.icons8.com/color/100/resume.png",
      title: "Resume Building",
      price: "$20 - $100",
    },
    {
      image: "https://img.icons8.com/color/100/work.png",
      title: "Remote Jobs",
      price: "Free",
    },
    {
      image: "https://img.icons8.com/color/100/coach--skin-type-4.png",
      title: "Interview Coaching",
      price: "$50 - $300",
    },
    {
      image: "https://img.icons8.com/color-glass/100/conclusion-contract.png",
      title: "Contract Templates",
      price: "$10 - $50",
    },
    {
      image: "https://img.icons8.com/color/100/businesswoman.png",
      title: "Freelance Opportunities",
      price: "Free",
    },
  ],
  business: [
    {
      image: "https://img.icons8.com/fluency/100/bad-idea.png",
      title: "Startup Ideas",
      price: "Free",
    },
    {
      image: "https://img.icons8.com/fluency/100/tip.png",
      title: "Investment Tips",
      price: "$10 - $200",
    },
    {
      image: "https://img.icons8.com/color/100/analytics.png",
      title: "Business Analytics",
      price: "$50 - $500",
    },
    {
      image:
        "https://img.icons8.com/external-itim2101-lineal-color-itim2101/100/external-economy-money-and-economy-itim2101-lineal-color-itim2101.png",
      title: "Financial Planning",
      price: "$100 - $1000",
    },
    {
      image: "https://img.icons8.com/color/100/meeting.png",
      title: "Business Meetings",
      price: "$30 - $200",
    },
    {
      image:
        "https://img.icons8.com/external-flat-icons-vectorslab/100/external-Business-Strategy-marketing-strategy-flat-icons-vectorslab-2.png",
      title: "Business Strategy",
      price: "$100 - $1000",
    },
  ],
  migration: [
    {
      image: "https://img.icons8.com/color/100/passport.png",
      title: "Visa Processes",
      price: "Varies",
    },
    {
      image: "https://img.icons8.com/color/100/move.png",
      title: "Relocation Guide",
      price: "$50 - $500",
    },
    {
      image:
        "https://img.icons8.com/external-others-iconmarket/100/external-living-types-of-building-others-iconmarket-8.png",
      title: "Living Abroad",
      price: "$100 - $1000",
    },
    {
      image:
        "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-job-search-job-search-flaticons-lineal-color-flat-icons-3.png",
      title: "International Job Search",
      price: "$10 - $50",
    },
    {
      image:
        "https://img.icons8.com/external-filled-color-icons-papa-vector/100/external-People-smuggling-RGB-color-icon-smuggling.-color.-filled-filled-color-icons-papa-vector.png",
      title: "Expat Guides",
      price: "$30 - $150",
    },
  ],
  travel: [
    {
      image: "https://img.icons8.com/color/100/country.png",
      title: "Country to Travel",
      price: "Free",
    },
    {
      image: "https://img.icons8.com/color/100/clock.png",
      title: "Travel Time",
      price: "Free",
    },
    {
      image: "https://img.icons8.com/color/100/visa.png",
      title: "Visa Fees & Requirements",
      price: "$20 - $100",
    },
    {
      image: "https://img.icons8.com/clouds/50/airplane-take-off.png",
      title: "Flight Booking",
      price: "$50 - $2000",
    },
    {
      image: "https://img.icons8.com/clouds/50/4-star-hotel.png",
      title: "Hotel Booking",
      price: "$30 - $500",
    },
  ],
};

// Reusable Section Component
const Section = ({ title, items }) => {
  const [startIndex, setStartIndex] = useState(0);

  // Display 4 items at a time
  const itemsToDisplay = items.slice(startIndex, startIndex + 4);

  // Check if there are items to go left or right
  const hasMoreItemsLeft = startIndex > 0;
  const hasMoreItemsRight = startIndex + 4 < items.length;

  // Move one item left
  const moveLeft = () => {
    if (hasMoreItemsLeft) {
      setStartIndex(startIndex - 1); // Move one item to the left
    }
  };

  // Move one item right
  const moveRight = () => {
    if (hasMoreItemsRight) {
      setStartIndex(startIndex + 1); // Move one item to the right
    }
  };

  return (
    <div className="detailed-section">
      <h2 className="section-name">{title}</h2>
      <div className="detailed-section-grid">
        {itemsToDisplay.map((item, index) => (
          <div key={index} className="detailed-section-item">
            <img src={item.image} alt={item.title} className="item-images" />
            <h3 className="item-name">{item.title}</h3>
            <p className="item-price">{item.price}</p>
          </div>
        ))}
      </div>

      {/* Left Arrow Button */}
      <button
        className={`arrow-button arrow-left ${
          !hasMoreItemsLeft ? "hidden" : ""
        }`}
        onClick={moveLeft}
        disabled={!hasMoreItemsLeft} // Disable when there are no items to move left
      >
        &#8592;
      </button>

      {/* Right Arrow Button */}
      <button
        className={`arrow-button arrow-right ${
          !hasMoreItemsRight ? "hidden" : ""
        }`}
        onClick={moveRight}
        disabled={!hasMoreItemsRight} // Disable when there are no items to move right
      >
        &#8594;
      </button>
    </div>
  );
};

const Ad = () => (
  <div className="ad-container">
    <p>Ad Placeholder</p>
    <img
      src="https://via.placeholder.com/728x90.png?text=Ad+Banner"
      alt="Ad Banner"
      className="ad-banner"
    />
  </div>
);

const Home = () => {
  return (
    <>
      <div className="fields-container">
        <div className="fields">
          <div className="field-1">
            <div className="field">
              <a href="/study" className="field-anchors">
                <img
                  src="https://img.icons8.com/carbon-copy/100/saving-book.png"
                  alt="saving-book"
                />
                <h1>STUDY</h1>
              </a>
            </div>
            <div className="field">
              <a href="/work" className="field-anchors">
                <img
                  src="https://img.icons8.com/ios-filled/100/business.png"
                  alt="business"
                />
                <h1>WORK</h1>
              </a>
            </div>
          </div>
          <div className="field-1">
            <div className="field">
              <a href="/travel" className="field-anchors">
                <img
                  src="https://img.icons8.com/pastel-glyph/100/beach.png"
                  alt="beach"
                />
                <h1>TRAVEL</h1>
              </a>
            </div>
          </div>
          <div className="field-1">
            <div className="field">
              <a href="/business" className="field-anchors">
                <img
                  src="https://img.icons8.com/windows/100/organization.png"
                  alt="organization"
                />
                <h1>BUSINESS</h1>
              </a>
            </div>
            <div className="field">
              <a href="/migration" className="field-anchors">
                <img
                  src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/100/external-migration-immigration-tanah-basah-basic-outline-tanah-basah.png"
                  alt="migration"
                />
                <h1>MIGRATION</h1>
              </a>
            </div>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/defcbzxfm/image/upload/v1737546465/image.webp"
          className="respresent-image"
        />
      </div>

      <div className="detailed-sections">
        <Section title="Work" items={sectionData.work || []} />
        <Ad />
        <Section title="Travel" items={sectionData.travel || []} />
        <Ad />
        <Section title="Business" items={sectionData.business || []} />
        <Ad />
        <Section title="Migration" items={sectionData.migration || []} />
        <Ad />
        <Section title="Study" items={sectionData.study || []} />
      </div>
    </>
  );
};

export default Home;
