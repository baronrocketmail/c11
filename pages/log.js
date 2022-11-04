import {myFont} from "../app/myFont";
import React from "react";
import Links from "../app/(components)/Links";
import "../app/globals.css";
import fetch from 'node-fetch';
import {
  DataGridPremium,
  GridToolbar,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from '@mui/x-data-grid-premium';
import Box from '@mui/material/Box';




export async function getStaticProps(){

    const unpaid = await fetch("https://undefxx.com/api/payments/unpaid").then(x => x.json())
    const logData = await fetch("https://undefxx.com/api/payments/log").then(x => x.json())

    return{
        props: {unpaid, logData},
        revalidate: 1
    }
}


export default function Log(props){
    let links = [{label: "<---", href: "/"}, {label: "", href: "/"}]

    for(let elem in props.unpaid) {
        links.push({label: "", href: '/'})
    }
    links.push({label: "...", href: '/'})

    let rows = []

    let columns = []

    for (let elem in rows){

    }


    return(
            <div className={myFont.className}>
                <Links links = {links}/>
                <Box className={"dataGrid"} sx ={{height: 465, width: 800 }}>
                    <DataGridPremium rows ={[]} columns ={[]} components={{ Toolbar: GridToolbar }} />
                </Box>
            </div>
    )
}