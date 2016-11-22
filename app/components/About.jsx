var React = require('react');
var {Link} = require('react-router');

var About = () => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is a Weather Application built with React. I built this for the Complete React 
            Web App Developer course.</p>
            <p>Powered By:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react/">React</a> - This was the javascript 
                    framework used.
                </li>
                <li>
                    <a href="http://foundation.zurb.com/">Foundation</a> - This is the CSS framework used.
                </li>
                <li>
                    <a href="http://openweathermap.org/">Open Weather Map</a> - I used Open Weather 
                    Map to search for weather data by city name.
                </li>
                <li>
                    <a href="https://github.com/halliej/react-weather">Project page on github</a> - My source 
                    code.
                </li>
            </ul>

        </div>
    )
};

module.exports = About;