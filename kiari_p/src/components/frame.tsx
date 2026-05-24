import clsx from "clsx";

const sizeMap = {
  sm: {
    solid: "h-16 w-16",
    tl: "-top-1 -left-1",
    tr: "-top-1 -right-1",
    bl: "-bottom-1 -left-1",
    br: "-bottom-1 -right-1",
    border: "h-9 w-9",
    btl: "left-2.5 top-2.5",
    btr: "right-2.5 top-2.5",
    bbl: "bottom-2.5 left-2.5",
    bbr: "bottom-2.5 right-2.5",
    pad: "p-8",
  },
  md: {
    solid: "h-24 w-24",
    tl: "-top-1.5 -left-1.5",
    tr: "-top-1.5 -right-1.5",
    bl: "-bottom-1.5 -left-1.5",
    br: "-bottom-1.5 -right-1.5",
    border: "h-12 w-12",
    btl: "left-3 top-3",
    btr: "right-3 top-3",
    bbl: "bottom-3 left-3",
    bbr: "bottom-3 right-3",
    pad: "p-8",
  },
  lg: {
    solid: "h-32 w-32",
    tl: "-top-1.5 -left-1.5",
    tr: "-top-1.5 -right-1.5",
    bl: "-bottom-1.5 -left-1.5",
    br: "-bottom-1.5 -right-1.5",
    border: "h-16 w-16",
    btl: "left-4 top-4",
    btr: "right-4 top-4",
    bbl: "bottom-4 left-4",
    bbr: "bottom-4 right-4",
    pad: "p-12",
  },
};

const colorMap = {
  primary:   { bg: "bg-primary",   border: "border-primary" },
  secondary: { bg: "bg-secondary", border: "border-secondary" },
  warning:   { bg: "bg-warning",   border: "border-warning" },
  success:   { bg: "bg-success",   border: "border-success" },
  danger:    { bg: "bg-danger",    border: "border-danger" },
  default:   { bg: "bg-default-500", border: "border-default-500" },
  foreground:{ bg: "bg-foreground",  border: "border-foreground" },
};

interface FrameProps {
  children: React.ReactNode;
  size?: keyof typeof sizeMap;
  color?: keyof typeof colorMap;
  className?: string;
}

export default function Frame({ children, size = "md", color = "foreground", className }: FrameProps) {
  const s = sizeMap[size];
  const c = colorMap[color];

  return (
    <div className="container sm:px-24 flex items-center justify-center w-full">
      <div className="relative inline-block">
        <div className={clsx("absolute", s.tl, s.solid, c.bg)} />
        <div className={clsx("absolute", s.tr, s.solid, c.bg)} />
        <div className={clsx("absolute", s.bl, s.solid, c.bg)} />
        <div className={clsx("absolute", s.br, s.solid, c.bg)} />

        <div className={clsx("text-center relative z-10", s.pad, className)}>{children}</div>

        <div className={clsx("absolute z-20 border-t border-l", c.border, s.btl, s.border)} />
        <div className={clsx("absolute z-20 border-t border-r", c.border, s.btr, s.border)} />
        <div className={clsx("absolute z-20 border-b border-l", c.border, s.bbl, s.border)} />
        <div className={clsx("absolute z-20 border-b border-r", c.border, s.bbr, s.border)} />
      </div>
    </div>
  );
}
