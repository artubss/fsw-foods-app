import Image from "next/image";

interface PromoBannerProps {
  src: string;
  alt: string;
}

const PromoBanner = ({ src, alt }: PromoBannerProps) => {
  return (
    <div className="relative h-[170px] w-full">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
};

export default PromoBanner;
