"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function VirtualCampusTour() {
  const [view, setView] = useState<"photos" | "video">("photos");
  const [activeCategory, setActiveCategory] = useState<"infrastructure" | "libraries" | "laboratories" | null>(null);

  return (
    <div className="bg-blue-100 font-serif">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-[#37bce0] text-neutral-100">
        <Image
          src="/uni-images/logo.png"
          alt="University Logo"
          width={150}
          height={150}
        />
        <div className="flex gap-3">
          <Button
            variant={view === "photos" ? "default" : "outline"}
            onClick={() => setView("photos")}
          >
            Photo Gallery
          </Button>
          <Button
            variant={view === "video" ? "default" : "outline"}
            onClick={() => setView("video")}
          >
            Video Tour
          </Button>
        </div>
      </nav>

      {/* Content */}
      {view === "photos" ? (
        <main className="grid grid-cols-1 gap-y-8">
          {/* Hero Section */}
          <section
            id="start"
            className="h-full flex flex-col items-center justify-center bg-cover bg-center py-12"
            style={{ backgroundImage: "url('/uni-images/uni-bg-2.png')" }}
          >
            {/* Category Buttons - Updated Layout */}
            <div className="flex flex-col items-center space-y-8 w-full">
              <h1 className="text-4xl font-bold text-center mb-6 text-[#0b293c]">
                UNIVERSITY OF DELFASY
              </h1>
              
              <div className="flex flex-col items-center space-y-4 w-full max-w-2xl">
                <CategoryButton
                  label="Campus Infrastructure"
                  onClick={() => setActiveCategory("infrastructure")}
                  color="bg-[#0b293c]"
                />
                <CategoryButton
                  label="Libraries"
                  onClick={() => setActiveCategory("libraries")}
                  color="bg-[#77c9e6]"
                />
                <CategoryButton
                  label="Laboratories"
                  onClick={() => setActiveCategory("laboratories")}
                  color="bg-[#095bab]"
                />
              </div>

              <div className="mt-8 text-center">
                <p className="text-2xl font-bold text-[#0b293c]">
                  POWERFUL OF DATA
                </p>
                <p className="text-2xl font-bold text-[#0b293c]">FOR</p>
                <p className="text-2xl font-bold text-[#0b293c]">LABORATO</p>
              </div>
            </div>

            {/* Default Welcome Section */}
            {!activeCategory && (
              <section className="mt-12 text-center px-4">
                <Image
                  src="/uni-images/uni-gate.svg"
                  alt="University Gate"
                  width={1080}
                  height={600}
                  className="mx-auto"
                />
              </section>
            )}
          </section>

          {/* Category Sections */}
          <PhotosSection category={activeCategory} />
        </main>
      ) : (
        <section
          id="5"
          className="flex flex-col items-center justify-center my-7"
        >
          <div className="my-8">
            <h4 className="text-lg font-semibold text-center my-5">
              Video Tour of the University of Delta
            </h4>
            <video
              width="1080"
              height="730"
              controls
              className="rounded-lg shadow-lg"
            >
              <source src="/uni-del video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      )}
    </div>
  );
}

function CategoryButton({ label, onClick, color }: { label: string; onClick: () => void; color: string }) {
  return (
    <button
      onClick={onClick}
      className={`${color} w-full py-4 px-8 rounded-lg text-neutral-100 text-xl hover:opacity-90 transition-opacity text-center`}
    >
      {label}
    </button>
  );
}

function PhotosSection({ category }: { category: "infrastructure" | "libraries" | "laboratories" | null }) {
  if (!category) return null;

  const sections = {
    infrastructure: [
      {
        src: "/uni-images/Admin-building.svg",
        caption: "The Administrative Building",
        description:
          "Explore the heart of university management at the Administrative Building, a modern facility hosting top-level decision-making and faculty offices."
      },
      {
        src: "/uni-images/uni-field.svg",
        caption: "The University Field",
        description:
          "Vibrant and expansive, the University Field is where students engage in physical development, sportsmanship, and community events."
      },
      {
        src: "/uni-images/Law-building.svg",
        caption: "Faculty of Law Building",
        description: "A testament to academic excellence, the Law Faculty combines architectural beauty with a conducive legal learning environment."
      },
    ],
    libraries: [
      {
        src: "/uni-images/library.svg",
        caption: "The Library",
        description: "Our central Library provides access to thousands of academic materials and a quiet, focused space for deep learning."
      },
      {
        src: "/uni-images/E-library.svg",
        caption: "The E-Library",
        description: "A digital gateway to research, journals, and databases – supporting both on-campus and remote learning initiatives."
      },
    ],
    laboratories: [
      {
        src: "/uni-images/Hardware-lab.svg",
        caption: "The Computer Hardware Lab",
        description: "Hands-on learning takes center stage in the Hardware Lab, where students build and troubleshoot real computing systems."
      },
      {
        src: "/uni-images/Fluid-mech-lab.svg",
        caption: "Engineering Fluid Mechanics Lab",
        description: "Equipped for practical sessions in fluid dynamics, this lab strengthens theoretical engineering concepts with experiential learning."
      },
      {
        src: "/uni-images/Physics-lab.svg",
        caption: "The Physics Laboratory",
        description: "From kinematics to electricity, this lab is where students experiment with the physical laws that shape our world."
      },
      {
        src: "/uni-images/Art-room.svg",
        caption: "The Art Lecture Room",
        description: "Creative thinking thrives here. This space nurtures artistic talents through visual expression and applied design."
      },
    ]
  }[category];

  return (
    <section className="my-8 px-4">
      {sections.map((item, index) => (
        <div key={index} className="mb-12 text-center">
          <Image src={item.src} alt={item.caption} width={1300} height={600} className="mx-auto" />
          <figcaption className="text-lg mt-2 text-gray-600 font-medium">
            {item.caption}
          </figcaption>
          <p className="text-base text-gray-700 mt-2 max-w-4xl mx-auto">
            {item.description}
          </p>
        </div>
      ))}
    </section>
  );
}