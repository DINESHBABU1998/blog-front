import React,{useState,useEffect} from 'react'
import Top from './Top';

const Technology = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const url = "http://localhost:7000/api/technology";
        fetch(url).then(res => res.json())
            .then(res => setData(res)  )
    }, [])
    
  return (
    <>
    <h1 className='txt'>Technology</h1>
    {data.map((item,index)=>{
        return(<div className="card" key={index}>
        <img src={item.ImageAsset} alt="Nothing" className='img-cont' />
        <div className='text'>
        <h3>{item.Title}</h3>
        <p>{item.BlogContent}</p>
        <p>{item.CategoryName}/{item.PublishedDate}</p>
        </div>
        <hr className='hr1'/>
        </div>)
    })}
    <div className='top2'>
    <Top/>
    </div>
    </>
  )
}

export default Technology