import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 text-white">
        <div>
          <p className="text-lg">You may be wondering where you are</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
