import React,{Component} from 'react';
import './nav.css';
export default class NavBar extends Component
{
    render()
    {
        return(
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><input type="text" id="search"/><button type="submit" id="search_sub"><i class="fa fa-search"></i></button></li>
            <li className="dropdown">
                <a href="javascript:void(0)" className="dropbtn">Dropdown</a>
                <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </li>
            </ul>
        )
    }
}
