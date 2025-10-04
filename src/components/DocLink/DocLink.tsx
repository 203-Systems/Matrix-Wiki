import React from 'react';
import Link from '@docusaurus/Link';
import { useActiveVersion } from '@docusaurus/plugin-content-docs/client';

interface DocLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export default function DocLink({ to, children, className }: DocLinkProps) {
  const activeVersion = useActiveVersion();

  // Resolve version-aware link
  const resolvedTo = React.useMemo(() => {
    if (!to || to.startsWith('#') || to.startsWith('http')) {
      return to;
    }

    // If link starts with /docs and we have an active version, use version path
    if (to.startsWith('/docs') && activeVersion) {
      return `${activeVersion.path}${to.substring(5)}`; // Remove '/docs' and prepend version path
    }

    return to;
  }, [to, activeVersion]);

  return (
    <Link to={resolvedTo} className={className}>
      {children}
    </Link>
  );
}
