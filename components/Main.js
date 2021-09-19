import React,{ useState } from "react";
import Creatform from "./Creatform";
import ReportTable from "./ReportTable";
import Footer from "./Footer";


export default function Home () {
    let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
    let [render , setStore]=useState([])
    let [total , setTotal]=useState([])

   
     let  calculations =()=>{ 
        let myTotal=[]  
         for (let i=0;i<=render .length-1;i++){
            for (let j=0;j<=render [i].salePerHour.length-1;j++)
                if (myTotal[j]){
                    myTotal[j]+=render [i].salePerHour[j]
                }else{
                myTotal.push(render [i].salePerHour[j])
                }
        }
        setTotal([myTotal,myTotal.reduce((C, D) => C + D, 0)])
        console.log(total);

    }
    

    let tabelHandelar =((event)=>{
        event.preventDefault()
        let storeCity={
            location:event.target.location.value,
            maximumPrehour:event.target. maximumPrehour.value,
            min:event.target.min.value,
            avg:event.target.avg.value
        }
        let salePerHour=hours.map(()=>{
            return Math.floor(Math.random() * parseInt(storeCity.avg) * (parseInt(storeCity. maximumPrehour) - parseInt(storeCity.min)+ 1) + parseInt(storeCity.min))
         })
        
        let objectData={
            location:event.target.location.value,
            salePerHour:salePerHour,
            sum:salePerHour.reduce((a, b) => a + b, 0)

        }
        setStore(render  => [...render , objectData])
        calculations()       

    })
    
    return (
        <>
        <Creatform tabelHandelar={tabelHandelar}/>
        <ReportTable render ={render } total={total} />
        <Footer reports={render } />
        </>
    )
}