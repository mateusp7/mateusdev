const Skill = ({ src, alt }) => {
  return (
    <div className="border-2 border-redColor rounded-xl p-6 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex justify-center items-center duration-300 transition-all ease-in-out">
      <img src={src} alt={alt} className="w-3/4 h-3/4 " />
    </div>
  );
};

export default Skill;
