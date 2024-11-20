import { type MDXComponents as MDXComponentsType } from 'mdx/types'

import { MDXComponents } from '@/app/components/MDXComponents'

export function useMDXComponents(components: MDXComponentsType) {
  return {
    ...components,
    ...MDXComponents,
  }
}
