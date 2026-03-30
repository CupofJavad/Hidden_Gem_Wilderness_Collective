import { Link } from 'react-router';
import type { AriaAttributes, ReactNode } from 'react';

function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

export function NavOrExternalLink({
  href,
  className,
  children,
  'aria-label': ariaLabel,
}: {
  href: string;
  className?: string;
  children: ReactNode;
} & Pick<AriaAttributes, 'aria-label'>) {
  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
