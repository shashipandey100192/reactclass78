import React, { useState } from 'react';
import axios from 'axios';


function Mydatafatch() {

  const [stvariabl, stfunction] = useState([]);
  const abc = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        stfunction(res.data);
      })

  }


  return (
    <div>
      <div>Mydatafatch</div>
      <button type='button' onClick={abc}> get data</button>
      {/* {JSON.stringify(stvariabl)} */}


      <div className='container'>
        <div className='row'>
          {stvariabl.map((x) => {
            return (
              <>

                <div className='col-4 mt-3'>
                  <div className="card">
                    <div className="card-header">
                      Featured key={x.id}
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{x.name}</h5>
                      <p className="card-text" >{x.body}</p>
                      <a href="#" className="btn btn-primary">{x.email}</a>
                    </div>
                  </div>
                </div>
              </>
            )
          })}



        </div>
      </div>

    </div>

  )
}

export default Mydatafatch