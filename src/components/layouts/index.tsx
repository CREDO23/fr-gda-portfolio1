import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div
      className={` overflow-auto no-scrollbar h-screen  items-center justify-center  w-screen  gap-5`}
    >
      <Header />
      <div className="w-full">{children}</div>
      <Footer />
    </div>
  );
}
