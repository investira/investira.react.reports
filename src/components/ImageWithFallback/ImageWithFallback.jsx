import React, { useState } from "react";
import { Box } from "@mui/material";

const ImageWithFallback = ({ src, alt }) => {
  const [error, width, height, sx, setError] = useState(false);

  if (error) return null; // Não renderiza nada se houver erro

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      onError={() => setError(true)}
      width={width}
      height={height}
      sx={{ ...sx, display: error ? "none" : "block" }}
    />
  );
};

export default ImageWithFallback;
