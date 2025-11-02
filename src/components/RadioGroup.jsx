function RadioGroup({ name, onChange, selectedValue }) {
  return (
    <div className="flex gap-3">
      {[1, 2, 3, 4, 5].map((value) => (
        <label
          key={value}
          className={`w-10 h-10 flex items-center justify-center rounded-full border-2 cursor-pointer transition 
          ${
            selectedValue === value
              ? "bg-indigo-600 border-indigo-600 text-white font-bold"
              : "bg-white border-gray-300 text-gray-600 hover:border-indigo-400"
          }`}
        >
          <input
            type="radio"
            name={name}
            value={value}
            checked={selectedValue === value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="hidden"
          />
          {value}
        </label>
      ))}
    </div>
  );
}

export default RadioGroup;
