import { motion } from "framer-motion";

type ToggleButtonProps = {
  toggled: boolean;
  onToggle: () => void;
};

export default function ToggleButton({ toggled, onToggle }: ToggleButtonProps) {
  return (
    <button
      className="w-12 h-6 bg-gray-300 rounded-full flex items-center px-1 transition-all"
      style={{
        justifyContent: "flex-" + (toggled ? "end" : "start"),
      }}
      onClick={onToggle}
    >
      <motion.div
        className="w-4 h-4 bg-white rounded-full shadow"
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      />
    </button>
  );
}
