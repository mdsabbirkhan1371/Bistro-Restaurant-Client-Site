const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mx-auto md:w-4/12 my-8">
      <p className="text-yellow-400 mb-2">---{heading}---</p>
      <h3
        className="text-3xl border-y-2
      py-2"
      >
        {subHeading}
      </h3>
    </div>
  );
};

export default SectionTitle;
