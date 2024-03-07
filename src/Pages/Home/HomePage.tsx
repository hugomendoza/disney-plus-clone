import { useEffect } from 'react'
import { useAppSelector, useStoreData } from '@/hooks'
import { logosBrand } from '@/helpers/logosBrand'
import { Layout } from '@/Layout'
import {
  Hero
} from '@/Components'
import { CardCategory, HomeSection, WrapperCards } from './HomePage.styles'

import { Category } from '@/types/types'

export const HomePage = () => {
  const { startLoadingContent } = useStoreData()
  const { user: {allowedCategories} } = useAppSelector(state => state.auth)
  const { categories } = useAppSelector(state => state.categories)

  const showCategories = categories?.filter(cat => allowedCategories?.includes(cat.id!))

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
              to={`/brand/${id}`}
            >
              <img src={logosBrand[logo]} />
            </CardCategory>
          ))}
        </WrapperCards>
      </HomeSection>
    </Layout>
  )
}
