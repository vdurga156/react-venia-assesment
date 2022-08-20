import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "../../Style/Filter.scss";
const txtStyle = {
    fontSize: "16px",
    fontFamily: 'Muli',
    paddingRight: "10px",
    color: "inherit"
}
const chkboxsize = {
    width: "20px",
    height: "20px"
}
function Filter({ setCategory, selectedCategory }) {

    const [checked, setChecked] = useState([]);
    const handleClick = () => setChecked(!checked);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const { pathname } = location;
    const filterHandler = (checked, path) => {
        if (checked) {
            return navigate(path)
        }
        return null;
    }
    let arr = [];
    const handleOnChange = (e) => {
        console.log(e.target.value);
        if (e.target.checked)
            arr.push(e.target.value);
        else {
            arr.splice(checked.indexOf(e.target.value), 1)
        }
        console.log(arr);
    };


    return (

        <div className='filterone'>
            <div className='filter'>
                <h6 style={txtStyle}>Filters</h6>
            </div>
            <hr />
            <div className='attribute'>
                <h6 style={txtStyle}>Categories</h6>
                <input style={chkboxsize} type="checkbox" onChange={(e) => filterHandler(e.target.checked, "/jewellery")} checked={pathname == "/jewellery"} id="option" name="option" value="jewelery" />
                <label style={txtStyle}>Jewellery</label> <br />
                <input style={chkboxsize} type="checkbox" onChange={(e) => filterHandler(e.target.checked, "/electronics")} checked={pathname == "/electronics"} id="option" name="option" value="electronics" />
                <label style={txtStyle}>Electronics</label> <br />
                <input style={chkboxsize} type="checkbox" onChange={(e) => filterHandler(e.target.checked, "/men")} checked={pathname == "/men"} id="option" name="option" value="men's clothing" />
                <label style={txtStyle}>Men's Clothing</label> <br />
                <input style={chkboxsize} type="checkbox" onChange={(e) => filterHandler(e.target.checked, "/women")} checked={pathname == "/women"} id="option" name="option" value="women's clothing" />
                <label style={txtStyle}>Women's Clothing</label> <br />
                <hr />
            </div>
        </div>

    )
}

export default Filter