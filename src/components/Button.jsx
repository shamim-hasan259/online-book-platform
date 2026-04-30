const Button = ({ text }) => {
  return (
    <div>
      <button className="px-4 py-2 bg-linear-to-l from-purple-500 to-purple-800 text-white rounded">
        {text}
      </button>
    </div>
  );
};

export default Button;
