import React, { useState, useEffect } from 'react'
import styles from "../../styles/admin/Home.module.css";
import styles1 from "../../styles/admin/User.module.css";
import Router, { useRouter } from "next/router";
import Link from 'next/dist/client/link';
import axios from 'axios'
import Swal from 'sweetalert2'

const PelangganList = () => {
  const [data, setData] = useState([])

  const getAllQuestion = () => {
    axios.get(`${process.env.HOST_API}/api/question`)
      .then(res => {
        setData(res.data)
        // console.log(res.data)
      }
      )
      .catch(err => {
        // console.log(err)
      }
      )
  }
  useEffect(() => {
    getAllQuestion()
  }
    , [])

  const [messge, setMessge] = useState('')
  const router = useRouter()

  async function deletePesan(_id) {
    try {
      const res = await axios.delete(`${process.env.HOST_API}/api/question/${_id}`)
      console.log(res)
      if (res.data.message) {
        setMessge(res.data.message)
      }
      Swal.fire({
        title: 'Dihapus',
        text: 'Data Pelanggan Sudah Dihapus',
        icon: 'error',
        confirmButtonText: 'Oke'
      })
    }
    catch (err) {
      console.log(err)
    }
    router.push('/admin/pesan')
  }

  return (
    <div>
        <div className={styles1.row}>
          <div className="col-md-15">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">List Pelanggan</h4>
                {/* <button className='btn btn-success text-align-right'>
                                            <Link href='/admin/Add'>
                                                <a className='text-white'>Tambah Inventaris</a>
                                            </Link>
                                        </button> */}


              </div>
              <div className="card-body">
                <div className={styles1.tableresposif}>
                  <table className="table table-hover">
                    <thead className="text-center text-primary">
                      <tr>
                        <th>NO</th>
                        <th>Nama</th>
                        <th>Tlpn/WA</th>
                        <th>Date</th>
                        <th>Alamat</th>
                        <th>Sampah</th>
                        <th>Jumlah Sampah</th>
                        <th>Keterangan</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={item._id}>
                          <td className='text-center'>{index + 1}</td>
                          <td>{item.nama}</td>
                          <td>{item.tlpn}</td>
                          <td>{item.date}</td>
                          <td>{item.alamat}</td>
                          <td>{item.sampah}</td>
                          <td>{item.jsampah}</td>
                          <td>{item.pesan}</td>
                          <td>
                            {/* <button className="btn btn-primary"><Link href={`/admin/Edit?id=${item._id}&kode=${item.kode}&nama=${item.nama}&merk=${item.merk}&jumlah=${item.jumlah}&foto=${item.foto}&keterangan=${item.keterangan
                                                                    }`}>Edit</Link></button> */}
                            <button className="btn btn-danger text-center" onClick={() => deletePesan(item._id)}>Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PelangganList
