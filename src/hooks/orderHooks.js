import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrderList
} from '../actions/home'


export default function useOrderHooks () {

    const dispatch = useDispatch()
    const state = useSelector(state => state.handleOrderList)

    const [loading, setLoading] = useState(false)

    const getOrder = () => {
        dispatch(getOrderList()) // 触发 dispatch 1
    }

    return {
        list: state.orderList,
        loading,
        getOrder
    }
}