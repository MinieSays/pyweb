const Step = ({ title, description, number }) => {
    return (
      <div className="flex items-start gap-4">
        {/* Circle Container */}
        <div className="flex items-center justify-center h-8 w-16 rounded-full bg-[#ffc857] text-white">
          <span className="text-lg font-bold">{number}</span>
        </div>
        
        {/* Text Container */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Step;