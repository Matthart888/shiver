const React = require('react')
const Default = require('./Default.jsx')

class Edit extends React.Component {
    render () {
        const {title, summary, catagory, post, _id} = this.props.post
        return (
            <Default>
                <h1>Edit {title}</h1>

                {/* <form action={`/shiver/${_id}?_method=PUT`} method="POST">
                    Title: <input type="text" name="title" defaultValue={title} /><br/>
                    Post Entry: <textarea name="post" defaultValue={post}/><br/>
                    
                    <input type="submit" name="" value="Submit Updated Post"/>
                </form> */}
                <form action={`/shiver/${_id}?_method=PUT`} method="POST">
                    <div className="form-group">
                        <label htmlFor="title">Post Title</label>
                        <input type="title" className="form-control" name="title" defaultValue={title}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="catagory">Select Catagory</label>
                        <select className="form-control" name="catagory" defaultValue={catagory}>
                        <option value="News">News</option>
                        <option value="Tips and Tricks">Tips and Tricks</option>
                        <option value="Guides">Guides</option>
                        <option value="Gamer Thoughts">Gamer Thoughts</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="summary">Post Summary</label>
                        <textarea className="form-control" name="summary" rows="3" placeholder="A Brief Summary of Your Post" defaultValue={summary}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="post">Full Content</label>
                        <textarea className="form-control" name="post" rows="5" placeholder="Your Content" defaultValue={post}></textarea>
                    </div>
                    <input type="submit" name="" value="Submit Updated Post"/>
                </form>
            </Default>
        )
    }
}

module.exports = Edit