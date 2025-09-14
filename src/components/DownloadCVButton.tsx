import { Button } from "@/components/ui/button";
import { Download, FileText, ExternalLink } from "lucide-react";

interface DownloadCVButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  showIcon?: boolean;
  showText?: boolean;
}

const DownloadCVButton = ({ 
  variant = "default", 
  size = "default", 
  className = "",
  showIcon = true,
  showText = true
}: DownloadCVButtonProps) => {
  const handleDownload = () => {
    // Open the CV in a new tab - file is now properly available
    const cvUrl = '/cv/CV-Tahir-Mehmood.pdf';
    const newWindow = window.open(cvUrl, '_blank', 'noopener,noreferrer');
    
    // If popup is blocked, fallback to direct navigation
    if (!newWindow) {
      window.location.href = cvUrl;
    }
  };

  return (
    <Button 
      onClick={handleDownload}
      variant={variant}
      size={size}
      className={`group transition-all duration-300 hover:scale-105 ${className}`}
      aria-label="View CV"
    >
      {showIcon && (
        <ExternalLink className="h-4 w-4 mr-2 group-hover:animate-bounce" />
      )}
      {showText && "View CV"}
      {!showText && showIcon && (
        <span className="sr-only">View CV</span>
      )}
    </Button>
  );
};

export default DownloadCVButton;