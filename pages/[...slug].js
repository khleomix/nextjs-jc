import getPostTypeStaticPaths from '@/api/wordpress/_global/getPostTypeStaticPaths'
import getPostTypeStaticProps from '@/api/wordpress/_global/getPostTypeStaticProps'
import Layout from '@/components/common/Layout'
import {NextSeo} from 'next-seo'
import PropTypes from 'prop-types'

// Define route post type.
const postType = 'page'

/**
 * The Page component displays an individual page via dynamic routing.
 *
 * @author WebDevStudios
 * @param  {Object} [props] Properties passed to the component.
 * @return {Element}        Element to render.
 */
export default function Page({post}) {
  return (
    <Layout>
      <NextSeo
        title="Query from Yoast SEO"
        description="Query from Yoast SEO"
        openGraph={{
          title: 'Query from Yoast SEO',
          description: 'Query from Yoast SEO',
          images: [
            {
              url: 'Query from Yoast SEO',
              alt: 'Query from Yoast SEO'
            }
          ]
        }}
      />
      <div className="container">
        <section>
          <article>
            <h1 dangerouslySetInnerHTML={{__html: post?.title}} />
            <div
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(post?.blocks ?? [])
              }}
            />
          </article>
        </section>
      </div>
    </Layout>
  )
}

/**
 * Get post static paths.
 *
 * @author WebDevStudios
 * @return {Object} Object consisting of array of paths and fallback setting.
 */
export async function getStaticPaths() {
  return await getPostTypeStaticPaths(postType)
}

/**
 * Get post static props.
 *
 * @param  {Object}  context             Context for current post.
 * @param  {Object}  context.params      Route parameters for current post.
 * @param  {boolean} context.preview     Whether requesting preview of post.
 * @param  {Object}  context.previewData Post preview data.
 * @return {Object}                      Post props.
 */
export async function getStaticProps({params}) {
  return getPostTypeStaticProps(params, postType)
}

Page.propTypes = {
  post: PropTypes.object
}
