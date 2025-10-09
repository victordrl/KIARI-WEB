declare module "@material-tailwind/react" {
  import * as React from "react";

  export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    transition?: object;
    autoplay?: boolean;
    loop?: boolean;
    className?: string;
    children?: React.ReactNode;
  }

  export const Carousel: React.FC<CarouselProps>;
}
