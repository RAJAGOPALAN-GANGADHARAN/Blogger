import React,{Component} from 'react';
import './login.css';
var cnt=1;
export default class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.handleName=this.handleName.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.validate=this.validate.bind(this);
        this.state={name:'',password:''};
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
    handleName(event)
    {
        this.setState({name:event.target.value});
    }
    handlePassword(event)
    {
        this.setState({password:event.target.value});
    }
    validate(event)
    {
        event.preventDefault();
        fetch('http://192.168.1.7/blog_backend/users/views.php',{
            method:'GET',
            mode:'no-cors',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            //body:JSON.stringify(this.state)
        })
      .then((responseJson) => {
        console.log(responseJson.json())
      }).catch((error) => {
        console.error(error);
      })
        console.log(this.state.name,this.state.password);
    }
    render()
    {
        return(
            <div id="render" className="bg1">
            <div id="background" className="bg1">
            <div id="container">
            <form onSubmit={this.validate}>
                <input type="text" id="username" className="in" placeholder="Username" onChange={this.handleName}/>
                <input type="password" id="password" className="in" placeholder="Password" onChange={this.handlePassword}/>
                <input type="submit" value="SIGN IN" className="in"/>
                <span><a href="#">Forgot Password?</a></span>
            </form>
            </div>
            </div>
            </div>
        )
    }
}