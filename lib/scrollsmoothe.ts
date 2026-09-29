import { ScrollSmoother } from "gsap/ScrollSmoother";

function handleScroll(to: string): void {
  ScrollSmoother.get()?.scrollTo(to, true);
}

export default function handleScrollPath(
  e: React.MouseEvent,
  section: string,
  pathname: string,
): void {
  if (pathname === "/") {
    e.preventDefault();
    handleScroll(section);
  }
}
