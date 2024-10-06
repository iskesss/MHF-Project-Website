import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4 text-gray-200">
        <div>
          <p className="text-xl mb-3">
            Welcome 🤙 I'm{" "}
            <a href="/#/aboutus" className="text-[#71c2c3]">
              Jordan Bouret
            </a>
            .
          </p>

          <p className="text-lg mb-3">
            I built this site to share the impactful AI work I'm doing for the{" "}
            <a
              href="https://maternalhealthfoundation.org/"
              className="text-[#71c2c3]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maternal Health Foundation
            </a>{" "}
            (MHF), an organization dedicated to preventing and treating
            childbirth injuries in underdeveloped regions.
          </p>

          <p className="text-lg">
            Learn about the work I'm doing for MHF{" "}
            <a href="/#/myproject" className="text-[#71c2c3]">
              here
            </a>{" "}
            or about my team{" "}
            <a href="/#/aboutus" className="text-[#71c2c3]">
              here
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
