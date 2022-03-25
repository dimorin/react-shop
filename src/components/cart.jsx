import React from 'react';
import { Table } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Cart = (props) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.reducer_cart);
    return (
        <div>      
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.quan? item.quan:1 }</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => {dispatch({type:'PLUS', payload:item.id})}}><FaPlus /></button>
                                        <button className="btn btn-primary" onClick={() => {dispatch({type:'MINUS', payload:item.id})}}><FaMinus /></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div> 
    )
};

export default Cart;