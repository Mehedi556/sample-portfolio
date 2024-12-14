import Navbar from "./components/Navbar";
import jewelRana1 from "./assets/svgs/jewel-rana1.svg"
import downIndicator from "./assets/svgs/down-indicator.svg"
import { useEffect, useState } from "react";

function App() {
    const [arrows, setArrows] = useState([]);

    useEffect(() => {
      const interval = setInterval(() => {
        // Add a new arrow
        setArrows((prevArrows) => [
          ...prevArrows,
          { id: Date.now(), opacity: 1 },
        ]);
  
        // Remove arrows after they move out
        setTimeout(() => {
          setArrows((prevArrows) => prevArrows.slice(1));
        }, 2000); // Adjust based on animation duration
      }, 2000); // Interval for spawning arrows
  
      return () => clearInterval(interval);
    }, []);

    return (
    <div className="bg-[#000000] h-screen">
        <Navbar />
        <div className="text-white flex flex-col justify-center items-start px-5 md:px-10 lg:px-20 max-w-[1480px] mx-auto my-16">
            {/* Text Content */}
            <div className="flex justify-between items-center w-full">
                <div className="space-y-5">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#A6A6A6] to-[#FEFEFE] font-semibold text-2xl md:text-[40px] leading-[55px]">
                        Empowering People Revolutionizing <br />
                        Businesses Shaping the
                    </h1>
                    <h2 className="text-4xl md:text-5xl lg:text-8xl font-medium leading-snug">
                        Future with AI
                    </h2>
                    <p className="text-[#A6A6A6] text-2xl md:text-5xl font-medium pt-3">Development</p>
                </div>
                <img src={jewelRana1} className="h-[432px] w-[432px]" alt="" />
            </div>
            

            {/* Project Availability */}
            <div className="mt-10 max-w-[480px] mx-auto pb-10 pl-8 relative">
  {/* Gradient border */}
  <div
    className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-t from-[#767676] via-[#FEFEFE] to-[#767676]"
    aria-hidden="true"
  ></div>

  {/* Content */}
  <div className="relative">
    <p className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-[#A6A6A6] to-[#FEFEFE] text-sm md:text-base">
      <span className="h-2 w-2 bg-green-500 rounded-full text-base"></span>
      Available for new projects
    </p>
    <p className="mt-2 text-[#FEFEFE] text-2xl md:text-lg leading-relaxed italic">
      10 years of transforming businesses and lives through strategic vision,
      operational excellence, and cutting-edge technology
    </p>
  </div>
</div>

            {/* Down Arrow Animation */}
            <div className="absolute bottom-10 right-1/4 transform -translate-x-1/2">
                <div className="relative h-[100px] w-[50px] overflow-hidden">
                    {arrows.map((arrow) => (
                    <img
                        key={arrow.id}
                        src={downIndicator}
                        alt="Down Indicator"
                        className="absolute left-0 right-0 mx-auto animate-customArrow"
                    />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
