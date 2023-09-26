import Navigation from "../header/navigation";
export default function Footer() {
  return (
    <footer className=" bg-primary-color/10 flex flex-col items-center gap-6 py-6 font-light">
      <div className="w-full gap-6 flex flex-col items-center">
        <h3 className=" text-lg">SMARKET</h3>
        <Navigation />
      </div>
      <div className="w-11/12 h-[1px] bg-gray-500/50"></div>
      <p className=" text-xs">All rights reserved</p>
    </footer>
  );
}
