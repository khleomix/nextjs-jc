import Meta from '@/components/common/Meta'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import {NextSeo} from 'next-seo'
import PropTypes from 'prop-types'

export default function Layout({children, ...props}) {
  return (
    <>
      <NextSeo
        title={props?.title}
        description={props?.description}
        openGraph={props?.openGraph}
        nofollow={props?.noFollow}
        noindex={props?.noIndex}
      />
      <Meta />
      <Header algolia={props?.algolia} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  description: PropTypes.string.isRequired,
  noFollow: PropTypes.bool,
  noIndex: PropTypes.bool,
  openGraph: PropTypes.object,
  title: PropTypes.string.isRequired,
  algolia: PropTypes.object
}
