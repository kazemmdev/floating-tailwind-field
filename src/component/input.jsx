const Input = ({ label, name, type = "text", ...rest }) => {
  return (
    <div className="relative z-0 w-full mb-8">
      <input
        {...rest}
        id={name}
        type={type}
        placeholder=" "
        className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      />
      <label
        htmlFor={name}
        className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
