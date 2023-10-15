import Link from "next/link";
import React from "react";

interface featureProps {
  name: string;
  pathname: string;
  content?: string;
  icon?: JSX.Element;
}

export function Feature({ feature }: { feature: featureProps }) {
  return (
    <Link href={feature.pathname}>
      <div className="feature">{feature.name}</div>
    </Link>
  );
}
