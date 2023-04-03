import Image from "next/image";
import React from "react";
import artShow from "/public/xfer/artShow.png";
import cherries from "/public/xfer/cherries.jpg";
import cole from "/public/xfer/cole.jpg";
import drawingCole from "/public/xfer/drawingCole.jpg";
import faces from "/public/xfer/faces.jpg";
import greenNails from "/public/xfer/greenNails.jpg";
import gridNails from "/public/xfer/gridNails.jpg";
import halloweenNails from "/public/xfer/halloweenNails.jpg";
import huey from "/public/xfer/huey.jpg";
import kanye from "/public/xfer/kanye.jpg";
import kawsP from "/public/xfer/kawsP.jpeg";
import kawsSSNails from "/public/xfer/kawsSSNails.jpg";
import kendrick from "/public/xfer/kendrick.jpg";
import money from "/public/xfer/money.jpg";
import kehlani from "/public/xfer/negativeDrawing.JPG";
import nipsey from "/public/xfer/nipsey.jpg";
import pac from "/public/xfer/pac.jpg";
import purpleNails from "/public/xfer/purpleNails.jpg";
import srNails from "/public/xfer/srNails.jpg";
import swirlArtNails from "/public/xfer/swirlArtNails.jpg";
import thEvent from "/public/xfer/thEvent.jpg";
import twoHandsNailWraps from "/public/xfer/twoHandsNailWraps.jpg";
import wraps from "/public/xfer/wraps.jpg";
import xmasNails from "/public/xfer/xmasNails.jpg";
import hueyPainting from "public/xfer/hueyPainting.jpg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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
      id: 3,
      imageSrc: cole,
      caption: "",
      category: "art",
    },

    {
      id: 1,
      imageSrc: artShow,
      caption: "",
      category: "art",
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
      id: 23,
      imageSrc: xmasNails,
      caption: "",
      category: "nails",
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
      id: 14,
      imageSrc: kendrick,
      caption: "",
      category: "art",
    },
    {
      id: 13,
      imageSrc: kawsSSNails,
      caption: "",
      category: "nails",
    },
    {
      id: 24,
      imageSrc: hueyPainting,
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
      id: 25,
      imageSrc: kehlani,
      caption: "",
      category: "art",
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
