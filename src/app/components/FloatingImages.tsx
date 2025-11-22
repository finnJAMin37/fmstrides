import Image from 'next/image';

const images = [
  { src: '/Event1/Group1.JPEG', alt: 'Event group photo', style: 'top-24 left-24' },     
  { src: '/Event1/Mackenzie.JPEG', alt: 'Event photo 1', style: 'top-[5rem] right-24' },    
  { src: '/Event1/Matthew.jpg', alt: 'Event photo 2', style: 'bottom-[20rem] left-32' },     
  { src: '/Event1/donuts.JPEG', alt: 'Event photo 3', style: 'bottom-24 right-32' },     
];

export default function FloatingImages() {
  return (
    <>
      {/* Floating (absolute) images for xl screens and up */}
      <div className="pointer-events-none fixed inset-0 z-10 hidden custom1400:block">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute ${img.style}`}
            style={{ width: 240, height: 240 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={240}
              height={240}
              className="rounded-xl shadow-lg opacity-80"
              draggable={false}
              priority={idx === 0}
            />
          </div>
        ))}
      </div>
      {/* Inline images for smaller screens */}
      <div className="flex justify-center gap-4 mt-8 custom1400:hidden">
        {images.map((img, idx) => (
          <div key={idx} style={{ width: 125, height: 150 }}>
            <Image
              src={img.src}
              alt={img.alt}
              width={115}
              height={115}
              className="rounded-xl shadow-lg opacity-80"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </>
  );
}