type TextAreaProps = {
  label: string;
  placeholder?: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea: React.FC<TextAreaProps> = ({ label, placeholder, required, value, onChange }) => (
  <div className="mb-5">
    <label
      htmlFor={label.toLowerCase()}
      className="block mb-2 text-sm font-medium text-gray-900 text-start"
    >
      {label}
    </label>
    <textarea
      id={label.toLowerCase()}
      rows={4}
      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500"
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    ></textarea>
  </div>
);

export default TextArea;