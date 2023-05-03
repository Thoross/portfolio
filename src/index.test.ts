import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/svelte'
import Page__SvelteComponent_ from './routes/+page.svelte'

describe('sum test', () => {
  it('should render', () => {
    render(Page__SvelteComponent_)
    const node = screen.queryByText("Hi, I'm Brendan")
    expect(node).not.toBeNull()
  })
})
