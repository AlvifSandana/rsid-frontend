import React from 'react'
import Head from 'next/head'
// import Image from "next/image";
import styles from "../../styles/admin/Home.module.css";
import LeftNavbar from '../../component/admin/LeftNavbar';
import Header from '../../component/admin/Header';
import PelangganList from '../../component/admin/UserList';
// import UploadBenner from '../../component/admin/UploadBenner';
export default function pesan() {
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
				<PelangganList/>
				{/* <UploadBenner/> */}
			</div>
		</div>
    </div>
  )
}
