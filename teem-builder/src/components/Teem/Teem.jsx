import React from 'react';
import './Teem.css'
import SingleMember from './Member';

const Teem = (props) => {
   const {teem , setTeem} = props;
   console.log(teem);
   const dismissFromTeem = (mem)=>{
       const newTeem = teem.filter(single=>single.phone !== mem.phone)
       setTeem(newTeem)
   }
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Teem Members: {teem.length}</h2>
            <div className="singleMember">
                {
                    teem.map((single, idx) => <SingleMember key={idx} single={single} dismissFromTeem={dismissFromTeem}></SingleMember>)
                }
            </div>
        </div>
    );
};

export default Teem;