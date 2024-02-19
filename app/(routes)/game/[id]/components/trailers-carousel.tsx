"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface TrailersCarouselProps {
  trailers: Record<string, any>[];
}

const TrailersCarousel = ({ trailers }: TrailersCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  if (!isMounted) return null;
  return (
    <Carousel>
      <CarouselContent className="">
        {trailers?.map((trailer: Record<string, any>, index) => (
          <div key={trailer.id}>
            <CarouselItem key={index} className="w-96 h-60">
              <ReactPlayer
                url={trailer.data.max}
                controls={true}
                onPlay={() => {
                  setActiveIndex(index);
                }}
                width={"100%"}
                height={"100%"}
                playing={activeIndex === index ? true : false}
                light={trailer?.preview}
                onClickPreview={() => {
                  setActiveIndex(index);
                }}
              />
            </CarouselItem>
          </div>
        ))}
      </CarouselContent>
      <div className="flex gap-x-10 justify-center mt-10">
        <CarouselPrevious className="relative inset-0 h-10 w-10 bg-primary" />
        <CarouselNext className="relative inset-0 h-10 w-10 bg-primary" />
      </div>
    </Carousel>
  );
};

export default TrailersCarousel;
