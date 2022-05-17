import { useContext, useState } from 'react'

import { information } from './Context';
import { Thim } from './Thim';

export default function Home() {





    const { data, setData, allData, setAllData } = useContext(information)
    const [open, setOpen] = useState(false)


    const onChange = (e) => {
        const _formData = { ...data }



        if (e.target.id === "LastName") {
            let a = data?.FirstName?.split('@')
            let b = a[1]?.split('.')
            _formData[e.target.id] = b[0]

        }
        else if (e.target.type === "checkbox") {
            _formData.isAble = false
            _formData.isConform = false
            _formData[e.target.id] = e.target.checked

            _formData["gender"] = e.target.id


        }

        else if (e.target.type === "radio") {
            _formData["capatin"] = e.target.id
            // _formData[e.target.id] = e.target.value
        }



        // else if (e.target.id === "isAbl") {
        //     _formData["isAbl"] = e.target.checked
        //     _formData["isAble"] = e.target.checked
        //     _formData["isConform"] = e.target.checked

        // }




        else if (e.target.id === "onImageChange") {

            _formData[e.target.id] = e.target.value
        }
        else {
            _formData[e.target.id] = e.target.value
        }
        console.log("nmmmmmmmmmmm", _formData);
        setData(_formData)
        // console.log(data);
    }

    const saveData = () => {
        const a = { ...data }
        delete a.isAble
        delete a.isConform
        setAllData([...allData, a])

        setOpen(false)


    }
    const addData = () => {
        setOpen(true)
    }
    const hanadelClose = () => {
        setOpen(false)
        setData("")
    }
    return (
        <>
            <div>
                <input type="text" placeholder='name' id='name' value={data.name} onChange={onChange} />
                <label>isAble:</label>
                <input type='checkbox' id='isAble' value='' checked={data.isAble} onChange={onChange} />
                <label>isConform:</label>
                <input type='checkbox' id='isConform' value='' checked={data.isConform} onChange={onChange} />


                {/* <input type='checkbox' id='isAbl' name='isAbl' value='' checked={data.isAbl} onChange={onChange} /> */}


                <button onClick={() => addData()}>Add</button>
            </div>

            <Thim
                open={open}
                hanadelClose={hanadelClose}
                onChange={onChange}
                data={data}
                saveData={saveData}
            />
        </>

    )
}

