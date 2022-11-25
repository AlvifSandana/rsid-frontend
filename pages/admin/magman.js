import React, { useEffect } from 'react'
import useLoginStore from '../../store/store';
import { useRouter } from 'next/router';
import Layout from '../../component/admin/Layout';
import SmallCard from '../../component/admin/CardSmall';
import Card from '../../component/admin/Card';
import Charts from '../../component/admin/Chart';


export default function MaggotManagement() {
	const isLoggedIn = useLoginStore((state) => state.isLoggedIn)
	const router = useRouter()
	const handleSubmit = () => {

	}

	useEffect(() => {
		// if(isLoggedIn == 0){
		// 	router.push('/admin/login');
		// }
	})

	return (
		<Layout title={'Dashboard'} isActiveNavLink={2}>
			<div className='content-wrapper'>
				<section className='content'>
					<div className="row mb-2">
						<div className="col-sm-6">
							<h1 className="ml-2">Dashboard</h1>
						</div>
					</div>
					<div className='row mb-2'>
						<div className='col-md-5'>
							<SmallCard title={'100 kg'} caption={'Total Panen'} icon={'ion-ios-calculator'} background={'bg-info'} />
						</div>
					</div>
					<div className='row mb-2'>
					</div>
				</section>
			</div>
		</Layout>
	)
}
