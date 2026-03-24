import Image from "next/image";

export function ShowcaseImage({
  src,
  alt,
  width = 750,
  height = 750,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className="mt-6 rounded-xl bg-muted/50 p-3 shadow-sm">
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        priority
        className="w-full rounded-lg"
      />
    </div>
  );
}
