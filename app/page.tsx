import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="my-14">
      <Image
        src={"/RightEllipse.svg"}
        alt="bg"
        width={412}
        height={412}
        className="select-none absolute top-0 right-0 z-40"
      />
      <Image
        src={"/LeftEllipse.svg"}
        alt="bg"
        width={412}
        height={412}
        className="select-none absolute top-0 left-0 z-40"
      />
      <section className="container grid grid-cols-3 gap-4 items-end">
        <div className="col-span-2">
          <span className="relative">
            <div className="text-[140px] text-primary font-bold text-right leading-none relative">
              <span className="relative">
                React
                <Image
                  src={"/crown.svg"}
                  alt="ting"
                  width={85}
                  height={82}
                  className="absolute -top-5 -left-12"
                />
              </span>
              <Image
                src={"/line.svg"}
                alt="line"
                width={940}
                height={832}
                className="absolute top-0 right-0 translate-x-[30vw] -z-10 select-none"
              />
            </div>
            <div className="text-[140px] text-primary font-bold text-right leading-none">
              <span className="relative">Conference</span>
            </div>
          </span>
          <div className="grid grid-cols-2 mt-8">
            <div className="relative">
              <Image
                src={"/leftHero.svg"}
                alt="left hero"
                width={330}
                height={420}
              />
              <Image
                src={"/leftHeroHelp.svg"}
                alt="help"
                width={196}
                height={189}
                className="absolute bottom-0 translate-x-full translate-y-24 -z-10"
              />
            </div>
            <div className="flex flex-col gap-20">
              <div>
                Lorem uis diam turpis quam id fermentum.In quis diam turpis quam
                id fermentum..id fermentum.In quis diam turpis quam id
                fermentum.
              </div>
              <div className="bg-secondary w-[290px] py-[20px] px-[80px] flex items-center justify-center gap-2 rounded-full cursor-pointer font-medium">
                Buy Tickets
                <Image
                  alt="arrow"
                  src={"arrowRight.svg"}
                  width={20}
                  height={20}
                />
              </div>
              <Link
                href={"#footer"}
                className="flex items-center justify-center"
              >
                <span className="rotate-[270deg] flex">
                  <Image
                    src={"/arrowhead.svg"}
                    alt="arrow"
                    height={16}
                    width={16}
                    className="rotate-90"
                  />
                  Scroll Down
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <span className="relative">
            <Image
              src={"/rightHero.svg"}
              alt="hero"
              width={550}
              height={560}
              className="-translate-y-28"
            />
            <Image
              src={"/star.svg"}
              alt="star"
              width={132}
              height={132}
              className="absolute bottom-0 left-0 -translate-x-12 -translate-y-10"
            />
          </span>
        </div>
      </section>
    </div>
  );
}
