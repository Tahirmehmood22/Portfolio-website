import React from "react";

const DownloadCV = () => {
  return (
    <div className="flex justify-center mt-8">
      <a
  href="/cv/CV-Tahir-Mehmood.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow-elegant hover:bg-accent transition duration-300"
      >
        View / Download My CV
      </a>
    </div>
  );
};

export default DownloadCV;
