interface TagProps {
  label: string;
  className?: string;
}

const Tag = ({ label, className }: TagProps) => {
  return (
    <span
      className={`
        px-4 py-2 bg-white rounded-full shadow text-gray-700 text-sm
        flex items-center justify-center
        ${className}
      `}
    >
      {label}
    </span>
  );
};

export default Tag;
