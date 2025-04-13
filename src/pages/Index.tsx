import EarthAnimation from "@/components/EarthAnimation";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <EarthAnimation />
      <div className="text-center p-8 bg-black/50 rounded-xl backdrop-blur-md z-10">
        <h1 className="text-4xl font-bold mb-4 text-white">Вид на Землю из космоса</h1>
        <p className="text-xl text-gray-200 max-w-2xl">
          Когда смотришь на нашу планету из космоса, понимаешь, насколько она прекрасна и хрупка. 
          Голубые океаны, зеленые континенты и белые облака создают неповторимую картину, 
          которая навсегда остается в памяти каждого астронавта.
        </p>
      </div>
    </div>
  );
};

export default Index;
