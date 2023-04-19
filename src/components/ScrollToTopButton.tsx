import { useEffect, useState } from "react";
import { Fab, Box } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box m={2}>
      {showButton && (
        <Fab sx={{ background: '#3f51b5', color: 'white' }} onClick={handleClick}>
          <KeyboardArrowUp />
        </Fab>
      )}
    </Box>
  );
};

export default ScrollToTopButton;
