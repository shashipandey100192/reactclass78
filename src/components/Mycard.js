import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const mydata = [
    {
        cardtitle:'mycard Title',
        cardsubtitle:' this is sub heading',
        carddis:'skdfjksdfjshdjkfhsdfsdf',
        cardlink:'http://google.com',
        cardnumber:1,
        cardroute:'/loop',
        back:'bg-info'
    },
    {
        cardtitle:'mycard Title1',
        cardsubtitle:' this is sub heading1',
        carddis:'skdfjksdfjshdjkfhsdfsdf',
        cardlink:'http://google.com',
        cardnumber:2,
        cardroute:'/cond',
        back:'bg-light'
    },
    {
        cardtitle:'mycard Title1',
        cardsubtitle:' this is sub heading1',
        carddis:'skdfjksdfjshdjkfhsdfsdf',
        cardlink:'http://facebook.com',
        cardnumber:3,
        cardroute:'/gallery',
        back:'bg-light'
    }


]


function Mycard() {
  return (
    <div className='container-fluid'>
        <div className='row'>

            {mydata.map(({cardtitle,cardsubtitle,carddis,cardroute,cardlink,back,cardnumber})=>(
                
            <div className='col-md-3 mt-2'>
                <div className={`card ${back}`}>
                    <div className="card-body">
                        <h5 className="card-title">{cardtitle}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{cardsubtitle}</h6>
                        <p className="card-text">{carddis}</p>
                        <h1>{cardnumber}</h1>
                        <Link to={cardroute} className="card-link">{cardlink}</Link>
                        <a href={cardlink} target="_blank" className="card-link">{cardlink}</a>
                    </div>
                </div>
            </div>

            ))}


        </div>

        <div className='row'>

            {mydata.map((a)=>(
                
            <div className='col-md-3 mt-2'>
                <div className={`card ${a.back}`}>
                    <div className="card-body">
                        <h5 className="card-title">{a.cardtitle}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{a.cardsubtitle}</h6>
                        <p className="card-text">{a.carddis}</p>
                        <h1>{a.cardnumber}</h1>
                        <Link to={a.cardroute} className="card-link">{a.cardlink}</Link>
                        <a href={a.cardlink} target="_blank" className="card-link">{a.cardlink}</a>
                    </div>
                </div>
            </div>

            ))}


        </div>


    </div>
  )
}

export default Mycard