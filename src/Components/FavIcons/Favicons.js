import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const FaviconChanger = () => {
   const location = useLocation();   
  
  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']");

    if (favicon) {
      switch (location.pathname) {
        case "/about":
          favicon.href = "/about.svg";
          break;
        case "/portfolio":
          favicon.href = "/portfolio.svg";
          break;
        case "/contact":
          favicon.href = "/contact.svg";
          break;
        default:
          favicon.href = "/home.svg";
          break;
      }
    }
  }, [location.pathname]);

   return null
}

export default FaviconChanger;