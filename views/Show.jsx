const React = require('react');
const Default = require('./Default.jsx')

class Show extends React.Component{
    render() {
        const {title, catagory, summary, post, _id} = this.props.post
        return (
            <Default>
                <h1>{title}</h1>
                <h3>{catagory}</h3>
                <h3>{summary}</h3>
                <p>{post}</p>
                
                <a href={`/shiver/${_id}/edit`}>Edit</a>
                <form action={`/shiver/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete Post"/>
                </form>
                
            </Default>
        )
    }
}

module.exports = Show;