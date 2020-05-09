const React = require('react');
const Default = require('./Default.jsx')

class Index extends React.Component {
  render() {
    const posts = this.props.posts
    return (
        <Default>
            <nav>
                <a href="/shiver/new">Create a New Post</a>
            </nav>
            <div className="container">
                <ul>
                    {
                        posts.map((post, index) => {
                            return(
                                <div className="card" style={{width: 18+"rem"}}>
                                <div className="card-body">
                                  <h5 className="card-title">{post.title}</h5>
                                  <h6 className="card-subtitle mb-2 text-muted">{post.catagory}</h6>
                                  <p className="card-text">{post.summary}</p>
                                  <a href={`/shiver/${post._id}`}className="card-link">View Full Post</a>
                                  <a href="#" className="card-link">Username</a>
                                </div>
                              </div>
                            )
                        })
                    }
                </ul>
            </div>
        </Default>
    )    
  }
}

module.exports = Index;