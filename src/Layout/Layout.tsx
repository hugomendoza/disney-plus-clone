import { Nav } from '@/Components'

export const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <>
      <Nav />
      { children }
    </>
  )
}
