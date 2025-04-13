import EarthAnimation from "@/components/EarthAnimation";
import { useState } from "react";

const Index = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <EarthAnimation />
      
      {showInfo ? (
        <div className="absolute bottom-10 right-10 text-center p-6 bg-black/50 rounded-xl backdrop-blur-md z-10 max-w-sm">
          <button 
            onClick={() => setShowInfo(false)}
            className="absolute top-2 right-3 text-white hover:text-blue-300"
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold mb-3 text-white">Взгляд из космоса</h2>
          <p className="text-md text-gray-200">
            Когда смотришь на нашу планету из космоса, понимаешь, насколько она прекрасна и хрупка. 
            Голубые океаны, зеленые континенты и белые облака создают неповторимую картину.
          </p>
        </div>
      ) : (
        <button 
          onClick={() => setShowInfo(true)}
          className="absolute bottom-10 right-10 p-3 bg-black/50 text-white rounded-full backdrop-blur-md hover:bg-black/70 transition-all"
        >
          ℹ️
        </button>
      )}
      
      <div className="absolute top-10 left-10 text-3xl text-white font-light">
        Планета Земля
      </div>
    </div>
  );
};

export default Index;
