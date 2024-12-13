// eslint-disable-next-line react/prop-types
export default function Button({ children, variant = "primary", className }) {
  const variants = {
    primary: "bg-white text-black",
    secondary: "bg-gray-400 text-white",
    outline: "border border-black",
  };

  return (
    <button
      className={` py-2 px-4 rounded-full hover:opacity-70 transition-all ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
