import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    if (!sectionIds.length) {
      return;
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    let animationFrame = 0;

    function updateActiveSection() {
      const targetPosition = window.scrollY + window.innerHeight * 0.32;
      const currentSection =
        sections.find((section, index) => {
          const nextSection = sections[index + 1];
          const sectionTop = section.offsetTop;
          const nextSectionTop = nextSection?.offsetTop ?? Number.POSITIVE_INFINITY;

          return targetPosition >= sectionTop && targetPosition < nextSectionTop;
        }) || sections[0];

      setActiveSection(currentSection.id);
      animationFrame = 0;
    }

    function scheduleUpdate() {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [sectionIds]);

  return activeSection;
}
