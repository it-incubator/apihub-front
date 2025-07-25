import type { SVGProps } from 'react'

export const TextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <path
      fill="currentColor"
      d="M14.17 5 19 9.83V19H5V5h9.17Zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59ZM7 15h10v2H7v-2Zm0-4h10v2H7v-2Zm0-4h7v2H7V7Z"
    />
  </svg>
)
