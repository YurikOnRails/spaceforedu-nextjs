"use client";

import React, { useEffect, useState } from 'react';
import { MDXRemote } from 'next-mdx-remote';

export default function MDXContent({ source }: { source: any }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <MDXRemote {...source} />;
}
