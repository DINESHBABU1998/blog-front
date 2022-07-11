import React, { useEffect, useState } from 'react'
import './styles.css';
import Top from './Top';

const Home = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
   const url='http://localhost:7000/api/home'
   fetch(url).then(res=>res.json()
   .then(res=>setData(res)))
  },[])
  return (
    <>
    <div className='head'>
      <img src="https://www.pinkvilla.com/files/styles/fbimagesection/public/samantha_workout_video_social.jpg?itok=MlF-0DMX" alt='Nothing' className='head1'/>
      <img src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/03/did-you-know-maggie-gyllenhaal-couldnt-look-at-heath-ledgers-joker-during-their-intense-scene-in-the-dark-knight-because-she-was-too-scared-01.jpg" alt='Nothing' className='head2'/>
      <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUMI8S.img?h=274&w=486&m=6&q=60&o=f&l=f" alt='Nothing' className='head3'/>
    </div>
    <h1 className='h1'>The Latest</h1>
    <div className='sec1'>
    {data.filter((value)=>{return value.CategoryName === "Bollywood"}).map((item,index)=>{
      return(<>
      <div className="card">
              <img src={item.ImageAsset} alt="Nothing" className='img-sec'/>
              <p>{item.Title}</p>
              <p>{item.BlogContent.slice(0,100)}</p>
              <p>{item.PublishedDate}</p>
              <hr />
            </div>
      </>)
    })}
    {data.filter((value)=>{return value.CategoryName === "Food"}).map((item,index)=>{
      return(<>
      <div className="card">
              <img src={item.ImageAsset} alt="Nothing" className='img-sec' />
              <p>{item.Title}</p>
              <p>{item.BlogContent.slice(0,100)}</p>
              <p>{item.PublishedDate}</p>
              <hr />
            </div>
      </>)
    })}
    </div>
    <h1 className='h2'>Latest Articles</h1>
    <div className='sec2'>
    {data.filter((value)=>{return value.CategoryName === "Technology"}).map((item,index)=>{
      return(<>
      <div className="card">
              <img src={item.ImageAsset} alt="Nothing" className='img-sec2' />
              <p>{item.Title}</p>
              <p>{item.BlogContent.slice(0,100)}</p>
              <p>{item.PublishedDate}</p>
              <hr />
            </div>
      </>)
    })}
    {data.filter((value)=>{return value.CategoryName === "Fitness"}).map((item,index)=>{
      return(<>
      <div className="card">
              <img src={item.ImageAsset} alt="Nothing" className='img-sec2' />
              <p>{item.Title}</p>
              <p>{item.BlogContent.slice(0,100)}</p>
              <p>{item.PublishedDate}</p>
              <hr />
            </div>
      </>)
    })}
    </div>
    <div className='top'>
      <Top/>
    </div>
    </>
  )
}

export default Home