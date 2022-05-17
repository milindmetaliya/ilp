import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { inaformation, information } from './Context'

const AboutUs = () => {

      const { allData } = useContext(information)
      console.log("zzzzzzzzzzzzz", allData);
      allData.sort((firstItem, secondItem) => firstItem.name.charCodeAt() - secondItem.name.charCodeAt())


      // lodash.sortBy(allData, (e) => {
      //       return e.name
      // });



      return (
            <><table>
                  <tr>
                        <th>name</th>
                        <th>
                              FirstName
                        </th>
                        <th>
                              LastName
                        </th>
                        <th>
                              Image
                        </th>
                  </tr>
                  {
                        allData.map((x) => (
                              <tr>
                                    <td>
                                          {x.name}
                                    </td>
                                    <td>
                                          {x.FirstName}
                                    </td>
                                    <td>
                                          {x.LastName}
                                    </td>
                                    <td>
                                          {x.onImageChange}
                                    </td>
                                    <td>
                                          {x.isAble}
                                    </td>
                                    <td>
                                          {x.isConform}
                                    </td>
                              </tr>
                        ))
                  }

            </table>
            </>
      )
}

export default AboutUs