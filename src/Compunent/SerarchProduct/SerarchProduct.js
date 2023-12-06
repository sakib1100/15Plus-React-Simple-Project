import React, { useState } from 'react';
import './SearchProduct.css'
const SerarchProduct = () => {
    const datas = ['Apple','Beauty', 'Cat', 'Dog', "Elepent", 'Nutty', 'Queen', 'Mobile','Charger','laptop','Football','Name','Sakib','Dolar','Item',"Another Item", "item Tow", 'Item four'];

    const [searchData,setSearchData] = useState('');

const dummiData = datas.filter((data) => (
    data.toLowerCase().includes(searchData.toLowerCase())
))

    return (


        <div>
 <h1 style={{textAlign:"center", color:"tomato"}}>Search below items</h1>

        <div className="Containers">
   <div className='searchProduct'>
             
<input type='text' placeholder='Serarch Product...' onChange={(e) => setSearchData(e.target.value)} />
<ul className='mainData'>
   {
    dummiData.map((dummiDatas,index) => (
        <li className='liststule'>{index + 1}.  {dummiDatas}</li>
    ))
   }
</ul>
   </div>
        </div>
        </div>
    );
};

export default SerarchProduct;