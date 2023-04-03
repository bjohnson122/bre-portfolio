// import Image from "next/image";
// import React, { useState } from "react";
// import Photos from "./photos";
// import Masonry from "react-responsive-masonry";

export default function Images() {
  let imageContentWeb = [
    {
      id: 5,
      imageSrc: faces,
      caption: "",
      category: "nails",
    },
    {
      id: 10,
      imageSrc: huey,
      caption: "",
      category: "art",
    },
    {
      id: 2,
      imageSrc: cherries,
      caption: "",
      category: "nails",
    },
    {
      id: 7,
      imageSrc: halloweenNails,
      caption: "",
      category: "nails",
    },
    {
      id: 18,
      imageSrc: srNails,
      caption: "",
      category: "nails",
    },
    {
      id: 9,
      imageSrc: gridNails,
      caption: "",
      category: "nails",
    },

    {
      id: 1,
      imageSrc: artShow,
      caption: "",
      category: "art",
    },
    {
      id: 3,
      imageSrc: cole,
      caption: "",
      category: "art",
    },
    {
      id: 32,
      imageSrc: greenNails,
      caption: "",
      category: "nails",
    },
    {
      id: 4,
      imageSrc: drawingCole,
      caption: "",
      category: "art",
    },
    {
      id: 22,
      imageSrc: wraps,
      caption: "",
      category: "nails",
    },
    {
      id: 8,
      imageSrc: nipsey,
      caption: "",
      category: "art",
    },

    {
      id: 11,
      imageSrc: kanye,
      caption: "",
      category: "art",
    },
    {
      id: 12,
      imageSrc: kawsP,
      caption: "",
      category: "nails",
    },
    {
      id: 23,
      imageSrc: xmasNails,
      caption: "",
      category: "nails",
    },

    {
      id: 13,
      imageSrc: kawsSSNails,
      caption: "",
      category: "nails",
    },
    {
      id: 14,
      imageSrc: kendrick,
      caption: "",
      category: "art",
    },
    {
      id: 24,
      imageSrc: hueyPainting,
      caption: "",
      category: "art",
    },
    {
      id: 25,
      imageSrc: kehlani,
      caption: "",
      category: "art",
    },
    {
      id: 21,
      imageSrc: twoHandsNailWraps,
      caption: "",
      category: "nails",
    },

    {
      id: 20,
      imageSrc: thEvent,
      caption: "",
      category: "nails",
    },

    {
      id: 17,
      imageSrc: purpleNails,
      caption: "",
      category: "nails",
    },
    {
      id: 19,
      imageSrc: swirlArtNails,
      caption: "",
      category: "nails",
    },
    {
      id: 15,
      imageSrc: money,
      caption: "",
      category: "nails",
    },
    {
      id: 16,
      imageSrc: pac,
      caption: "",
      category: "art",
    },
  ];
  const [pictures, setPictures] = useState(Photos);

  const filterPictures = (selectedCategory) => {
    const updatedPictures = Photos.filter((ele) => {
      return ele.category == selectedCategory;
    });
    setPictures(updatedPictures)
  };

  return (
    <Masonry>
      {imageContentWeb.map(({ imageSrc }, idx) => {
        return (
          <div key={idx}>
            <Image
              src={imageSrc}
              alt="test"
              className="block cursor-pointer p-1 rounded-lg"
            />
          </div>
        );
      })}
    </Masonry>
  );
}
 