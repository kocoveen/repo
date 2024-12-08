export const prerender = true;

import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';

export function load({ url }) {
  const { pathname } = url;

  // 루트 경로로 접근했을 때 리다이렉트
  if (pathname === `${base}/`) {
    throw redirect(302, `${base}/about`); // {base}/about으로 리다이렉트
  }
}