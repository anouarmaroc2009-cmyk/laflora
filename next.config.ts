import type { NextConfig } from "next";

/*
 * Every image is local to `public/images/` and imported by path, so the
 * optimizer is never asked to fetch a remote host. The Unsplash remote pattern
 * that used to live here was left over from the stock-photo era and granted
 * the optimizer broader outbound access than the site needed — all 15 assets
 * are now first-party. Remove this file if no other Next option is added.
 */
const nextConfig: NextConfig = {};

export default nextConfig;
