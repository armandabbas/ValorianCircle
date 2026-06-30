import re

# 1. Add scroll tracking to NewPage.tsx
with open('src/app/pages/NewPage.tsx', 'r') as f:
    content = f.read()

scroll_track_code = """
  // Track scroll position so we can return to it when clicking the logo
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem('homeScrollY', window.scrollY.toString());
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
"""

marker = "  const lowerHeroRef = useRef<HTMLElement>(null);"
if marker in content and 'homeScrollY' not in content:
    content = content.replace(marker, marker + '\n' + scroll_track_code)

with open('src/app/pages/NewPage.tsx', 'w') as f:
    f.write(content)


# 2. Modify StaggeredMenu.tsx logo click
with open('src/app/components/StaggeredMenu.tsx', 'r') as f:
    menu_content = f.read()

import_hook = "import { Link } from 'react-router-dom';"
if "useNavigate, useLocation" not in menu_content:
    menu_content = menu_content.replace(import_hook, "import { Link, useNavigate, useLocation } from 'react-router-dom';")

click_handler = """
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      return; // Already on home, do nothing to preserve scroll
    }
    
    navigate('/');
    // Use a small timeout to allow the DOM to render the home page before scrolling
    setTimeout(() => {
      const savedScroll = sessionStorage.getItem('homeScrollY');
      if (savedScroll) {
        window.scrollTo({ top: parseInt(savedScroll, 10), behavior: 'instant' });
      }
    }, 100);
  };
"""

# Insert click handler inside StaggeredMenu component
component_start = "export default function StaggeredMenu({"
if component_start in menu_content and 'handleLogoClick' not in menu_content:
    # Find the first opening brace and insert after
    brace_index = menu_content.find('{', menu_content.find(component_start))
    menu_content = menu_content[:brace_index+1] + click_handler + menu_content[brace_index+1:]

# Replace the Link tag
link_search = '<Link to="/">'
if link_search in menu_content:
    menu_content = menu_content.replace(link_search, '<Link to="/" onClick={handleLogoClick}>')

with open('src/app/components/StaggeredMenu.tsx', 'w') as f:
    f.write(menu_content)
