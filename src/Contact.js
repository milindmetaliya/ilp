import React from 'react'
import { useContext } from 'react'
import { information } from './Context'


const Contact = () => {
      const { data } = useContext(information)
      console.log("nnnnnnn", data);
      return (
            <div>


                  {data.isAble === Boolean("yes") ?
                        <ul>
                              <li>
                                    {data.name}
                              </li>
                        </ul> : null}
                  {console.log("kkkkkk", data.isAble)}
            </div>
      )
}

export default Contact