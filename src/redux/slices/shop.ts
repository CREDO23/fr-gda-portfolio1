import {PayloadAction, createSlice} from '@reduxjs/toolkit'

interface Init {
    myShops : IShop[] | [],
    shops : IShop[] | [],
}
const initialState : Init = {
    myShops : [],
    shops : [],
}
