import React, {useContext} from 'react'
import AuthContext from '../utils/AuthProvider'

function Articles({heading}){
    return(
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{heading}</h5>
            </div>
        </div>
    )
}


export default function Profile() {

    const {currentUser} = useContext(AuthContext)
    console.log(currentUser.posts[0])
  return (
    <main className="container mt-4">
    <div className="row justify-content-center">
        <div className="col-md-8">

            <div className="card mb-3">
                <div className="card-body">
                    <div className="media">
                        <img src="https://via.placeholder.com/64" className="mr-3" alt="Dummy Profile Avatar" />
                        <div className="media-body">
                            <h5 className="mt-0">{currentUser.username}</h5>
                            <p>Followers: {currentUser.following}</p>
                            <p>Follows: {currentUser.followers}</p>
                            <p>Articles: {currentUser.posts.length}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header">
                    <h3>Articles</h3>
                </div>
                <div className="card-body">
                    {currentUser.posts.map((e,i) => <Articles key={'Something+' + i} heading={e.heading} />)}
                </div>
            </div>
        </div>
    </div>
</main>
  )
}
