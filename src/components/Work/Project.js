import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Project({ title, img, description, type, role }) {
  return (
    <div>
      <h2>{title}</h2>
      <Image src={img} alt={title} />
      <span>{description}</span>
      <span>{type}</span>
      <span>{role}</span>
    </div>
  );
}
