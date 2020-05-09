const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html>
                <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
                <link rel="stylesheet" href="/style.css"/>
                </head>
                <body>
                    <div className="container">
                        <header>
                            <h1>Shiver</h1>
                            <h2>Your place for all things gaming</h2>
                        </header>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="navbar-header">
                                <a href="/shiver" className="navbar-brand">Shiver</a>
                            </div>
                            <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-primary" type="submit">Search</button>
                            </form>
                            <div>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <a href="/shiver/news">News</a>
                                        </li>
                                        <li className="nav-item active">
                                            <a href="/shiver/guides">Guides</a>
                                        </li>
                                        <li className="nav-item active">
                                            <a href="/shiver/tipsandtricks">Tips and Tricks</a>
                                        </li>
                                        <li className="nav-item active">
                                            <a href="/shiver/gamerthoughts">Gamer Thoughts</a>
                                        </li>
                                        <li className="nav-item active">
                                            <a href="#">Sign In</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="container">
                            {this.props.children}
                        </div> 
                    </div>
                </body>
            </html>
        );
    };
};

module.exports = Default;