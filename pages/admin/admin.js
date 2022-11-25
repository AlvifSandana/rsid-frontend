import React, { useEffect } from 'react'
import Head from 'next/head'
// import Image from "next/image";
import useLoginStore from '../../store/store';
import { useRouter } from 'next/router';
import Layout from '../../component/admin/Layout';
import SmallCard from '../../component/admin/CardSmall';
import Card from '../../component/admin/Card';
import Charts from '../../component/admin/Chart';


export default function Admin() {
	const isLoggedIn = useLoginStore((state) => state.isLoggedIn)
	const router = useRouter()

	useEffect(() => {
		// if(isLoggedIn == 0){
		// 	router.push('/admin/login');
		// }
	})

	return (
		<Layout title={'Dashboard'} isActiveNavLink={1}>
			<div className='content-wrapper'>
				<section className='content'>
					<div className="row mb-2">
						<div className="col-sm-6">
							<h1 className="ml-2">Dashboard</h1>
						</div>
					</div>
					<div className='row mb-2'>
						<div className='col-md-4'>
							<SmallCard title={'100 kg'} caption={'Total'} icon={''} background={'bg-info'} />
						</div>
						<div className='col-md-4'>
							<SmallCard title={'60 kg'} caption={'Organik'} icon={''} background={'bg-success'} />
						</div>
						<div className='col-md-4'>
							<SmallCard title={'40 kg'} caption={'Anorganik'} icon={''} background={'bg-warning'} />
						</div>
					</div>
					<div className='row mb-2'>
						<div className='col-md-7'>
							<Card cardTitle={'Chart Pemasukan Sampah'} cardType={'card-info'}>
								<Charts />
							</Card>
						</div>
						<div className='col-md-5'>
							<Card cardTitle={'Input Data Sampah'} cardType={'card-info'}></Card>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	)
}
