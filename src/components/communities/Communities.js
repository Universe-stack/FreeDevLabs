import React from 'react';
import './communities.scss';

import { useSelector } from "react-redux";

const Communities = () => {
    
    const community = useSelector((state)=>state.communities.communities);
    console.log(community);


    let data=[
      {
        id:1,
        title: "CI/CD with github actions"
      },
      {
        id:2,
        title: "CI/CD with github actions"
      },
      {
        id:3,
        title: "CI/CD with github actions"
      },
      {
        id:4,
        title: "CI/CD with github actions"
      }
    ]
  return (
    <div className='communities'> 
          <div className='communities_inner'>
                <h1>communities is &#x1F600; {community}</h1>

                <span className='webdev'>
                  <span className='h2'><h2> Web development</h2></span>
                  <table>
                      <thead>
                          <th>Order</th>
                          <th>Topic</th>
                      </thead>

                        <tbody>
                            {
                              data.map((item)=><tr className={item.id%2===0?"tr_even":"tr_odd"}><td>{item.id}</td><td className='td_desc'>{item.title}<a href='/google'>Link</a></td></tr>)
                            }
                        </tbody>
                  </table>

                </span>

                <span className='webdev'>
                  <span className='h2'><h2> Web development</h2></span>
                  <table>
                      <thead>
                          <th>Order</th>
                          <th>Topic</th>
                      </thead>

                        <tbody>
                            {
                              data.map((item)=><tr className={item.id%2===0?"tr_even":"tr_odd"}><td>{item.id}</td><td className='td_desc'>{item.title}<a href='/google'>Link</a></td></tr>)
                            }
                        </tbody>
                  </table>

                </span> 

                <span className='webdev'>
                  <span className='h2'><h2> Web development</h2></span>
                  <table>
                      <thead>
                          <th>Order</th>
                          <th>Topic</th>
                      </thead>

                        <tbody>
                            {
                              data.map((item)=><tr className={item.id%2===0?"tr_even":"tr_odd"}><td>{item.id}</td><td className='td_desc'>{item.title}<a href='/google'>Link</a></td></tr>)
                            }
                        </tbody>
                  </table>

                </span> 

                <span className='webdev'>
                  <span className='h2'><h2> Web development</h2></span>
                  <table>
                      <thead>
                          <th>Order</th>
                          <th>Topic</th>
                      </thead>

                        <tbody>
                            {
                              data.map((item)=><tr className={item.id%2===0?"tr_even":"tr_odd"}><td>{item.id}</td><td className='td_desc'>{item.title}<a href='/google'>Link</a></td></tr>)
                            }
                        </tbody>
                  </table>

                </span> 
        </div>

    
    </div>
  )
}

export default Communities;