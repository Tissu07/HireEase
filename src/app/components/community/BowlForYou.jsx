import React from "react";
import BowlCard from "./BowlCard";

// Sample images (replace with actual image paths)
const sampleImage = "https://via.placeholder.com/150";

const bowlsData = [
  {
    image: sampleImage,
    title: "2L",
    subtitle: "Big 4 Discussions!",
    description:
      "Originally this was Made for confessions. This Bowl is now for Big 4️⃣ (EY, PWC, KPMG & Deloitte) discussions!",
    viewLink: "#",
    followLink: "#",
  },
  {
    image: sampleImage,
    title: "87T",
    subtitle: "HiringInfo",
    description: "Open platform on exploring jobs and opportunities.",
    viewLink: "#",
    followLink: "#",
  },
  {
    image: sampleImage,
    title: "25T",
    subtitle: "Pune Network",
    description:
      "Physical and virtual group and 1:1 meetups for folks in Pune, India.",
    viewLink: "#",
    followLink: "#",
  },
  {
    image: sampleImage,
    title: "41T",
    subtitle: "Bangalore City",
    description: "Useful Resources ",
    viewLink: "#",
    followLink: "#",
  },
  {
    image: sampleImage,
    title: "32T",
    subtitle: "Management Consulting",
    description: "Conversations about Data Story, Business Strategy, GTM etc.",
    viewLink: "#",
    followLink: "#",
  },
];

const BowlForYou = () => {
  return (
    <div className="p-4 w-[25rem]">
      <h2 className="text-2xl font-bold mb-6">Bowls™ for you</h2>
      <div className="flex flex-col gap-4">
        {bowlsData.map((bowl, index) => (
          <BowlCard key={index} {...bowl} />
        ))}
      </div>
    </div>
  );
};

export default BowlForYou;
