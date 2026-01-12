import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SECTION_PATHS: Record<string, string> = {
  "/about": "about",
  "/products": "products",
  "/contact": "contact",
};

const SECTION_HASHES: Record<string, string> = {
  "#about": "about",
  "#products": "products",
  "#contact": "contact",
};

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
};

/**
 * Fixes "404" navigation when users click section links on hosts like GitHub Pages.
 * Supports:
 * - /about, /products, /contact (client-side)
 * - #about, #products, #contact
 */
const SectionScrollHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const sectionId = useMemo(() => {
    return (
      SECTION_PATHS[location.pathname] ??
      SECTION_HASHES[location.hash] ??
      null
    );
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!sectionId) return;

    // Normalize the URL to home first, then scroll.
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
    }

    let attempts = 0;
    const maxAttempts = 30;

    const tick = () => {
      attempts += 1;

      if (scrollToId(sectionId)) {
        // Remove hash so it doesn't interfere with routing on some hosts.
        if (window.location.hash) {
          window.history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search
          );
        }
        return;
      }

      if (attempts < maxAttempts) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [sectionId, location.pathname, navigate]);

  return null;
};

export default SectionScrollHandler;
