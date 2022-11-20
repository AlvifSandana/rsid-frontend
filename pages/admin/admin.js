import React, { useEffect } from 'react'
import Head from 'next/head'
// import Image from "next/image";
import styles from "../../styles/admin/Home.module.css";
import LeftNavbar from '../../component/admin/LeftNavbar';
import Header from '../../component/admin/Header';
// import PelangganList from '../../component/admin/UserList';
import Charts from '../../component/admin/Chart'
import useLoginStore from '../../store/store';
import { useRouter } from 'next/router';


export default function Admin() {
	const isLoggedIn = useLoginStore((state) => state.isLoggedIn)
	const router = useRouter()

	useEffect(() => {
		if(isLoggedIn == 0){
			router.push('/admin/login');
		}
	})

	return (
		<div>
			<div className={styles.container}>
				<Head>
					<title>Rumah Sampah</title>
					<meta name="description" content="Main10" />
					<link rel="icon" href="/rs.png" />
				</Head>
				<div className={styles.container}>
					<LeftNavbar />
					<Header />
					<div className="ml-auto">
						<Charts />
					</div>
				</div>
			</div>
		</div>
	)
}
