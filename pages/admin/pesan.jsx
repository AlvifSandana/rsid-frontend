import React from 'react'
import Head from 'next/head'
import PelangganList from '../../component/admin/UserList';
import Layout from '../../component/admin/Layout';
// import UploadBenner from '../../component/admin/UploadBenner';
export default function pesan() {
	return (
		<Layout title={'Pemesanan'} isActiveNavLink={3}>
			<div className='content-wrapper'>
				<section className='content'>
					<div className="row mb-2">
						<div className="col-sm-6">
							<h1 className="ml-2">Pemesanan</h1>
						</div>
					</div>
					<div className='row mb-2'>
						<PelangganList />
					</div>
				</section>
			</div>
		</Layout>
	)
}
