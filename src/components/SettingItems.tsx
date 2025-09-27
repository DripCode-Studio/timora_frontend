import { ChevronRight, ExternalLink } from "lucide-react";

interface SettingItemProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  onClick?: () => void;
  href?: string;
  external?: boolean;
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  title,
  description,
  onClick,
  href,
  external = false,
}) => {
  const handleClick = () => {
    if (href) {
      if (external) {
        window.open(href, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = href;
      }
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center justify-between p-4 bg-white rounded-lg border hover:bg-gray-50 transition-colors text-left"
    >
      <div className="flex items-center gap-3">
        <div className="text-[#4CD964]">{icon}</div>
        <div>
          <div className="font-medium text-gray-900">{title}</div>
          {description && (
            <div className="text-sm text-gray-500">{description}</div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {external && <ExternalLink className="h-4 w-4 text-gray-400" />}
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </div>
    </button>
  );
};

export default SettingItem;
