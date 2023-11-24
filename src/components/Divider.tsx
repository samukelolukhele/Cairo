const Divider = ({
  width = "w-full",
  border = "border-[1.5px]",
  customStyling = "",
}) => {
  return (
    <hr className={`${width} ${border} ${customStyling} border-brand mb-4`} />
  );
};

export default Divider;
