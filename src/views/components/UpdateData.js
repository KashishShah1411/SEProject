/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom'
import emailjs from 'emailjs-com';
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table } from "reactstrap";
import {Button} from '@material-ui/core';
import db from '../../firebase';
import {
    CardFooter,
    CardText,
    FormGroup,
    Form,
    Input,
  } from "reactstrap";
function OrderConfirm({order,id1,id2,id3,stk}) {


    const [orders, setOrders] = useState([]);
    const [name, setName] = useState([]);
    const [price, setPrice] = useState([]);
    const [brand, setBrand] = useState([]);
    const [madeIn, setMadeIn] = useState([]);
    const [stock, setStock] = useState([]);
    const [quantity, setQuantity] = useState([]);
    useEffect(() => {
    // db.firestore().collection('PendingOrders').onSnapshot(snapshot => {
    //   setOrders(snapshot.docs.map(doc => ({id:doc.id ,Price:doc.data().Price,Brand:doc.data().Brand,Name:doc.data().Name,Status:doc.data().Status,Stock:doc.data().Stock})))
    // })
    console.log(Number(stk),Number(order.Stock))
  }, [stk]);
        // console.log(product)
        // console.log(orders)

// const updateOrders = (stock) => (e) => {
  const updateOrders = (e) => {

    e.preventDefault();
    // var fquant=0;
    // db.firestore().collection('Categories').doc(id1).collection('SubCategories').doc(id2).collection('Products').doc(order.id).get()
    // .then(snapshot => 
    //     {             
    //         // fquant = Number(snapshot.data().Stock) + Number(order.Stock)
    // //   console.log(fquant)
    //   setQuantity(snapshot.data().Stock)
    // //   console.log(snapshot.docs.map(doc => (doc.data().Sub)))
    //     })
    // console.log(Number(order.Stock),Number(quantity))
    // console.log(fquant)
        // var fquant = Number(order.Stock)+Number(quantity)
        console.log(Number(stk),Number(order.Stock))
    // db.firestore().collection('Categories').doc(`${id1}`).collection('SubCategories').doc(`${id2}`).collection('Products').
    // doc(order.id).set({
    //   Stock :  Number(stk)+Number(order.Stock),
    // },{merge : true})

    // db.firestore().collection('PendingOrders').doc(order.id).set({
    //     Status: false
    // },{merge : true})
}
  return (
    <>

            <td>{order.Name}</td>
            <td>{order.Brand}</td>
            <td>{order.Price}</td>
            <td>{order.Stock}</td>
                {/* {order.Status?<><td>pending</td>
            <td><Button  className="ml-1" type="submit"variant="contained" color="primary" onClick={updateOrders}>Order Received</Button></td></>
                :<><td>delivered</td>
            <td><Button  disabled className="ml-1" type="submit"variant="contained" color="secondary" onClick={updateOrders}>Order Received</Button></td></>} */}

    </>
  );
}

export default OrderConfirm;
