import React, { useContext } from 'react'
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'
import { information } from './Context';


export const Thim = ({ open, hanadelClose, data, onChange, saveData }) => {
      // const { saveData } = useContext(information)

      const attechImage = (id) => {
            document.getElementById(id)?.click();
      };
      return (

            // <div></div>
            <>
                  {open === Boolean("true") &&
                        <ReactDialogBox


                              modalWidth='60%'
                              headerBackgroundColor='red'
                              headerTextColor='white'
                              headerHeight='65'
                              closeButtonColor='white'
                              bodyBackgroundColor='white'
                              bodyTextColor='black'
                              bodyHeight='200px'
                              headerText='Title'

                        >         <div>
                                    <input type="text" id='FirstName' placeholder='FirstName' value={data.FirstName} onChange={onChange} />
                                    <input type="text" id='LastName' placeholder='LaststName' value={data.LastName} onChange={onChange} />






                                    <input type="radio" id="male" name="abc" onChange={onChange} />
                                    <label for="age1">male</label>


                                    <input type="radio" id="female" name="abc" onChange={onChange} />
                                    <label for="age2">female</label>







                                    <select placeholder='Type' value={data.email} onChange={onChange}>
                                          <option value="volvo">Volvo</option>
                                          <option value="saab">Saab</option>
                                    </select>

                                    {/* <input type="file" src={data.image} value={data.onImageChange} onChange={onChange} /> */}
                                    <input type="file"
                                          id={`choose-file`}
                                          hidden
                                          src={data.image} onChange={onChange} />

                                    <button className="roboto" onClick={() => { attechImage(`choose-file`) }}>ADD PHOTO</button>
                                    <button onClick={() => { hanadelClose() }}>cancel</button>
                                    <button onClick={saveData}>Save</button>
                              </div>
                        </ReactDialogBox>
                  }
            </>

      )
}
