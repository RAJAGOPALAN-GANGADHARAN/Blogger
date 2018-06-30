import React,{Component} from 'react';
import './login.css';
var cnt=1;
export default class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state={};
        setInterval(this.slider,10000);
    }
    slider()
    {
        console.log('YOLO');
        var root=document.getElementById('background');
        root.className='bg'+cnt;
        var render=document.getElementById('render');
        render.className='bg'+(cnt+1);
        cnt=(cnt<5)?cnt+1:1;
    }
    render()
    {
        return(
            <div id="render" className="bg1">
            <div id="background" className="bg1">
            <div id="container">
            <form action="">
                <input type="text" id="username" className="in"/>
                <input type="password" id="password" className="in"/>
                <input type="submit" value="SIGN IN" className="in"/>
                <span><a href="#">Forgot Password?</a></span>
            </form>
            </div>
            </div>
            </div>
        )
    }
}