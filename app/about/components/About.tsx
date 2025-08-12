import React from "react";
import Image from "next/image";
import air from "@/public/images/air.jpeg";
import buddy_photo_shot from "@/public/hero_images/buddy_photo_shoot.jpg";
import young_cleve from "@/public/hero_images/young_cleve.jpg";
import cape from "@/public/images/cape.jpeg";
import food from "@/public/images/food.jpeg";
import cleveC from "@/public/images/cleveC.jpeg";
import buddy_sleep from "@/public/hero_images/buddy_sleep.jpg";
import chloe from "@/public/hero_images/chole.jpg";
import dannie_gerber from "@/public/hero_images/dannie_gerber.jpg";
import micasa from "@/public/hero_images/micasa.jpg";
import potjie_kos from "@/public/hero_images/potjie_kos.jpg";
import rugby from "@/public/hero_images/rugby.jpg";
import tupac_glasses from "@/public/hero_images/tupac_glasses.jpg";
import warrick_geland from "@/public/hero_images/warrick_geland.jpg";
import lion from "@/public/hero_images/lion.jpeg";
import beach from "@/public/hero_images/beach.jpeg";

const AboutContent = () => {
  const images = [
    { src: food, alt: "Photo of a lion" },
    { src: cape, alt: "Photo of a cape" },
    { src: air, alt: "Photo of pancakes" },
    { src: cleveC, alt: "Photo of Cleve Drinking a coconut" },
    { src: buddy_photo_shot, alt: "Buddy Photo Shoot" },
    { src: young_cleve, alt: "Young WP Supporter" },
    { src: buddy_sleep, alt: "Buddy Sleep" },
    { src: chloe, alt: "Chloe Sleep" },
    { src: dannie_gerber, alt: "Dannie Gerber" },
    { src: micasa, alt: "Micasa" },
    { src: potjie_kos, alt: "Potjie Kos" },
    { src: rugby, alt: "Rugby Practice" },
    { src: tupac_glasses, alt: "Tupac with Glasses" },
    { src: warrick_geland, alt: "Warrick Geland" },
    { src: beach, alt: "Beach" },
    { src: lion, alt: "Lion" },
    { src: beach, alt: "Beach" },
    { src: beach, alt: "Beach" },
  ];

  return (
    <div className="w-full my-4 ">
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="gallery-img"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .gallery {
          display: grid;
          width: 100%;
          max-width: 100%;
          height:600px;
          margin: 0 auto;
          aspect-ratio: 16/10;
          grid: auto-flow 1fr / repeat(8, 1fr);
          gap: 8px;
          padding: 0 1rem;
          grid-template-rows: repeat(4, 1fr);
        }

        @media (max-width: 1024px) {
          .gallery {
            grid: auto-flow 1fr / repeat(6, 1fr);
            aspect-ratio: 6/4;
            grid-template-rows: repeat(4, 1fr);
          }
        }

        @media (max-width: 768px) {
          .gallery {
            grid: auto-flow 1fr / repeat(4, 1fr);
            aspect-ratio: 4/4;
            gap: 6px;
            grid-template-rows: repeat(4, 1fr);
          }
        }

        @media (max-width: 480px) {
          .gallery {
            grid: auto-flow 1fr / repeat(4, 1fr);
            aspect-ratio: 4/4;
            gap: 4px;
            grid-template-rows: repeat(4, 1fr);
          }
        }

        .gallery-item {
          position: relative;
          width: 100%;
          height: 100%;
        }

        /* Large feature images with clip paths */
        .gallery-item:nth-child(2) {
          grid-area: 1/2 / span 2 / span 3;
          clip-path: polygon(
            0 0,
            100% 0,
            100% 100%,
             100%,
            0 calc(50% - 8px / 4)
          );
        }

        .gallery-item:nth-child(5) {
          grid-area: 2/5 / span 2 / span 3;
          clip-path: polygon(
            0 0,
            calc(50% - 8px / 4) 0,
            100% ,
            100% 100%,
            0 100%
          );
        }

        .gallery-item:nth-child(9) {
          grid-area: 3/2 / span 2 / span 2;
          clip-path: polygon(
            0 0,
            100% 0,
            100% calc(50% + 8px / 4),
             100%,
            0 100%
          );
        }

        .gallery-item:nth-child(12) {
          grid-area: 3/6 / span 2 / span 2;
          clip-path: polygon(
            calc(50% - 8px / 4) 0,
            100% 0,
            100% 100%,
            0 ,
            0 0
          );
        }

        /* Mobile responsive clip paths */
        @media (max-width: 768px) {
          .gallery-item:nth-child(2) {
            grid-area: 1/2 / span 2 / span 2;
            clip-path: polygon(
              0 0,
              100% 0,
              100% 100%,
              calc(50% + 6px / 4) 100%,
              0 calc(50% - 6px / 4)
            );
          }

          .gallery-item:nth-child(5) {
            grid-area: 2/3 / span 2 / span 2;
            clip-path: polygon(
              0 0,
              calc(50% - 6px / 4) 0,
              100% calc(50% + 6px / 4),
              100% 100%,
              0 100%
            );
          }

          .gallery-item:nth-child(9),
          .gallery-item:nth-child(12) {
            grid-area: unset;
            clip-path: none;
          }
        }

        :global(.gallery-img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1);
          cursor: pointer;
          transition: 0.5s;
        }

        .gallery-item:hover :global(.gallery-img) {
          filter: grayscale(0);
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default AboutContent;