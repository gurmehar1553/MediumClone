import React from 'react'

function MainContent(){

    function handleSub(){
        alert('Coming Soon....')
    }
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8">
                    <h2 className="mb-4">Welcome to My Website</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <div className="col-md-4">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Subscribe to Our Newsletter</h5>
                        <p className="card-text">Stay updated with our latest news and offers by subscribing to our newsletter.</p>
                        <form>
                        <div className="form-group">
                            <label htmlFor="emailInput">Email address</label>
                            <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <button onClick={handleSub} type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Home() {
  return (
    <main>
        <MainContent />
    </main>
  )
}
