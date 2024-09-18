"use client";
import React from "react";
import Badge from "../../body/CarbonBadge/Badge";
const Footer = () => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <Badge />
      </div>
      <div className="text-center">
        <div>Designed by @cleveclayton</div>
        <div>@2024 </div>
      </div>
    </div>
  );
};

export default Footer;
