var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Gardners, PA">Gardners, PA</Link>
                </li>
                <li>
                    <Link to="/?location=Baton Rouge, LA">Baton Rouge, LA</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;