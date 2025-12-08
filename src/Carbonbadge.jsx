import React, { useEffect } from "react";
import PropTypes from "prop-types";

export const Carbonbadge = ({ darkMode }) => {
  useEffect(() => {
    const scriptSrc = "https://unpkg.com/website-carbon-badges@^1/b.min.js";
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="wcb"
      className={`wcb carbonbadge${darkMode ? ` wcb-d` : ""}`}
    ></div>
  );
};

Carbonbadge.propTypes = {
  darkMode: PropTypes.bool,
};

Carbonbadge.defaultProps = {
  darkMode: false,
};
