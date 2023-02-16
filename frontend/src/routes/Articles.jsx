import React, {useEffect, useState} from 'react'
import {getAllPosts} from '../server/server'

function ArticlesCard({heading, content}){

    return(
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{heading}</h5>
                <p className="card-text">{content}</p>
            </div>
        </div>
    )
}

export default function Articles() {


    const [data, setData] = useState()

    useEffect(()=>{
        
        getAllPosts().then((res)=>{
            console.log(res.post)
            setData(res.post)
        })
    },[])


  return (
    <div className="container mt-4">
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className="card mb-3">
					<div className="card-header">
						<h3>Latest Articles</h3>
					</div>

					<div className="card-body">
						{data && data.map(e => <ArticlesCard {...e} />)}
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
