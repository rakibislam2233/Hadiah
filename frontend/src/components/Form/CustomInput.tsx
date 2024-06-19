import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
};

const CustomInput = ({
  type,
  name,
  required,
  label,
  disabled,
  placeholder,
}: TInputProps) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <div>
            <label htmlFor={name}>
              {label} {required && <span className="text-rose-500 ">*</span>}
            </label>
            <input
              {...field}
              type={type}
              id={name}
              disabled={disabled}
              className={`w-full px-3 py-1 border border-gray-400 rounded outline-none mt-2 ${
                error ? "focus:border-rose-500" : "focus:border-[#144982]"
              }`}
              placeholder={placeholder}
            />
            {error && (
              <span className="text-rose-600 text-start">{error.message}</span>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default CustomInput;
