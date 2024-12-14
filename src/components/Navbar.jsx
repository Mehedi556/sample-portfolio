import { useState } from "react";
import linkedin from "../assets/svgs/linkedin.svg"
import navDownArrow from "../assets/svgs/nav-down-arrow.svg"
import { Menu, Home, User, Mic, Award, Briefcase } from "lucide-react"

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const menuItems = [
        { label: 'Home', icon: <Home color="#FA5A03" /> },
        { label: 'About Me', icon: <User color="#FA5A03" /> },
        { label: 'Podcast', icon: <Mic color="#FA5A03" /> },
        { label: 'Achievement', icon: <Award color="#FA5A03" /> },
        { label: 'Services', icon: <Briefcase color="#FA5A03" /> },
        // { label: 'Contact', icon: <Mail color="#FA5A03" /> },
    ];

  return (
    <div className="bg-[#000000] text-white font-jost">
        <div className="flex justify-between items-center max-w-[1480px] mx-auto px-5 py-3">
            <h1 className="font-bold text-3xl text-[#FFFFFF]">Jewel <span className="text-[#FA5A03]">Rana</span></h1>

            <div className="hidden md:flex gap-x-4 items-center text-xl font-light">
                <p>Home</p>
                <p>About Me</p>
                <p>Podcast</p>
                <p>Achievement</p>
            </div>

            <div className="hidden lg:flex items-center gap-x-2">
                <p className="text-xl">Services</p>
                <img className="h-6 w-6" src={navDownArrow} alt="down arrow icon" />
            </div>

            <div className="hidden lg:flex items-center gap-x-2">
                <button className="text-xl py-2 px-12 bg-[#FA5A03] rounded-full font-semibold">Contact</button>
                <img src={linkedin} alt="" className="h-[50px] w-[50px]"/>
            </div>
            <Menu strokeWidth={1.5} className="block lg:hidden h-[40px] w-[40px] cursor-pointer" onClick={toggleSidebar}/>
        </div>

        {/* Sidebar code starts from here*/}
        <div
                className={`fixed top-0 right-0 h-full w-[250px] bg-[#111111] text-white transform ${
                    isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out shadow-lg lg:hidden`}
            >
                <div className="flex justify-end items-center w-full px-5 pt-3">
                    <button
                        onClick={toggleSidebar}
                        className="text-white font-bold text-2xl"
                    >
                        &times;
                    </button>
                </div>
                <h1 className="font-semibold text-2xl text-center text-[#FFFFFF] mt-[-10px]">Jewel <span className="text-[#FA5A03]">Rana</span></h1>
                <div className="flex flex-col items-start gap-y-4 px-5 mt-5">
                    <div className="md:hidden flex flex-col items-start gap-y-4">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-x-3 cursor-pointer"
                            onClick={toggleSidebar}
                        >
                            {item.icon}
                            <p>{item.label}</p>
                        </div>
                    ))}
                    </div>
                
                    <div className="flex items-center gap-x-2">
                        <button onClick={toggleSidebar} className="text-lg py-1 px-12 bg-[#FA5A03] rounded-full">Contact</button>
                        <img onClick={toggleSidebar} src={linkedin} alt="" className="h-[40px] w-[40px]"/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Navbar