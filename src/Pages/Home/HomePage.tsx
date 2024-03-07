import { useEffect } from 'react'
import { useAppSelector, useStoreData } from '@/hooks'
import { Layout } from '@/Layout'
import {
  Hero
} from '@/Components'
import { CardCategory, HomeSection, WrapperCards } from './HomePage.styles'

import {
  disney,
  marvel,
  nationalGeographic,
  pixar,
  starWars
} from '@/assets/img'
import { Category } from '@/types/types'

export const HomePage = () => {
  const { startLoadingContent } = useStoreData()
  const { user: {allowedCategories} } = useAppSelector(state => state.auth)
  const { categories } = useAppSelector(state => state.categories)

  const showCategories = categories?.filter(cat => allowedCategories?.includes(cat.id!))

  const logosCat = {
    disney,
    marvel,
    pixar,
    starWars,
    nationalGeographic
  } as Record<string, string>

  useEffect(() => {
    startLoadingContent()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout>
      <Hero />
      <HomeSection>
        <WrapperCards cols={showCategories?.length}>
          {showCategories?.map(({id, logo='disney'}:Category) => (
            <CardCategory
              key={id}
              to={`/category/${id}`}
            >
              <img src={logosCat[logo]} />
            </CardCategory>
          ))}
        </WrapperCards>
      </HomeSection>
    </Layout>
  )
}
