"use client";
import React from "react";
const Card = (title: any) => {
  return (
    <div className="relative w-96 h-96 overflow-hidden rounded-lg shadow-lg group">
      <a target="_blank" rel="noopener noreferrer" href={title.link}>
        {title.image}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="text-white text-center">
            <h2 className="text-lg font-bold">{title.title}</h2>
            <p className="mt-2">{title.body}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
