import React from 'react'
import Kontak from './Kontak';
import Quicklink from './Quicklink';
import Subscribe from './Subscribe';

const Footer = () => {
    const quicklink = [
      {name:'YPS GROUP', link: '/'},
      {name:'Peo Wo Batak', link: 'peo-batak'},
      {name:'Peo Wedding Package', link: 'wedding-package'},
      {name:'Maestro Photo', link: 'wedding-package'},
      {name:'Deandra Dekorasi', link: 'deandra-dekorasi'},
      {name:'Costum Adat Batak', link: 'costum-adatbatak'}
    ];

    const kontak = [
      "Ruko Harapan Baru Regency Blok G No. 17",
      "0812-xxxx-xxxx",
      "yps-group@gmail.com"
    ];

    const social = [
        {icon : "https://img.icons8.com/material-outlined/30/000000/instagram-new--v1.png", link : "/"},
        {icon : "https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png", link : "/"}
    ]

  return (
    <div className='bg-[#F1E1D8] py-12 w-full'>
      <div className="footers grid lg:grid-cols-3 grid-cols-2 md:mx-20 mx-8 gap-5">
        <Quicklink quicklink={quicklink}/>
        <Kontak kontak={kontak}/>
        <Subscribe social={social}/>
      </div>       
    </div>
  )
}

export default Footer
