const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-800 focus:border-green-800 duration-300 focus:z-10 sm:text-sm";

export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
  defaultValue,
}) {
  return (
    <div className="my-3">
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      <input
        defaultValue={defaultValue}
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={fixedInputClass + customClass}
        placeholder={placeholder}
        min={type === "number" ? 0 : ""}
        step={type === "number" ? 100 : ""}
      />
    </div>
  );
}
