import Layout from '../../component/admin/Layout'
import Log from '../../component/admin/log'

export default function Activity() {
  return (
    <Layout title='Activity' isActiveNavLink={4}>
      <div className="content-wrapper">
        <Log />
      </div>
    </Layout>
  )
}