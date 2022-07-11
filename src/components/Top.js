import React,{useState,useEffect} from 'react'

const Top = () => {
    const [data,setData]=useState([])
  useEffect(()=>{
   const url='http://localhost:7000/api/home'
   fetch(url).then(res=>res.json()
   .then(res=>setData(res)))
  },[])
  return (
    <>
    <h1 className='h3'>Top posts</h1>
    <div className='sec3'>
    {data.filter(value=>value.id==='3').map((item,index)=>{
        return(<>
        <div className='card'>
        <img src={item.ImageAsset} alt="Nothing" className='img-sec3' />
        <div>{item.CategoryName}</div>
        <div>{item.Likes}</div>
        </div>
        </>)
    })}
    {data.filter(value=>value.id==='4').map((item,index)=>{
        return(<>
        <div className='card'>
        <img src={item.ImageAsset} alt="Nothing" className='img-sec3' />
        <div>{item.CategoryName}</div>
        <div>{item.Likes}</div>
        </div>
        </>)
    })}
    </div>
    </>
  )
}

export default Top