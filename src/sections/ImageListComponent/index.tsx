import * as React from "react";
import Image from "next/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Image_Lsit } from "../../data/Constants";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
  };
}

const ImageListComponent = (): JSX.Element => {
  return (
    <>
      <ImageList
        sx={{
          display: {
            xs: "block",
            sm: "grid",
          },
          objectFit: {
            xs: "contain",
          },
        }}
        variant="quilted"
        cols={4}
        gap={0}
      >
        {Image_Lsit.map((item, index) => (
          <ImageListItem
            key={index}
            cols={item.cols || 1}
            rows={item.rows || 1}
            sx={{
              ".MuiImageListItem-img": {
                objectFit: "contain",
                height: "unset",
              },
            }}
          >
            <img
              {...srcset(item.img.src, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default ImageListComponent;
