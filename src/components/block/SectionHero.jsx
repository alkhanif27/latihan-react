import Button from "../ui/Button";

export default function SectionHero() {
  return (
    <div className="relative ">
      <div className="container py-20 min-h-96 after:content-[''] after:size-full after:bg-black/45 after:absolute after:top-0 after:left-0 after:-z-10 flex items-end">
        <div className="text-white">
          <p>Lorem ipsum dolor sit amet.</p>
          <h1 className="text-xl md:text-3xl font-bold">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <Button className="mt-3">Click Me!</Button>
          
        </div>
        {/* background img */}
        <img
          src="https://picsum.photos/1080"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 "
        />
      </div>
    </div>
  );
}
