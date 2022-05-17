import { createContext, useState } from "react";



export const information = createContext();

// const notConstate = (props) => {
//       const [allData, setAllData] = useState([])
//       const [data, setData] = useState({
//             name: "",
//             FirstName: "",
//             LastName: "",
//             isAble: false,
//       })
//       const saveData = () => {
            // setOpen(false)
//             setData({
//                   name: "",
//                   FirstName: "",
//                   LastName: "",
//                   isAble: false,
//             })
//       }
//       return (
//             <information.Provider value={{ allData, setAllData, data, setData, saveData }}>
//                   {props.children}
//             </information.Provider>
//       )
// }