import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h2 className="section-title text-3xl mb-5 font-semibold text-violet-500">
      {title}
    </h2>
  );
};

export default React.memo(SectionTitle);
