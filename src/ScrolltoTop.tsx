interface ScrollToButtonProps {
  targetId: string;
  label: string;
}

export default function ScrollToButton({
  targetId,
  label,
}: ScrollToButtonProps) {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded bg-blue-500 text-white"
    >
      {label}
    </button>
  );
}
