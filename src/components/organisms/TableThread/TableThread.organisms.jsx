import React from 'react'
import Information from '../../../assets/Information.svg'
import { DeleteButton, ViewButton } from '../../atoms'
import Avatar from '../../../assets/Avatar.svg'
import { LaporanThread, SearchBar } from '../../molecules'

function TableThread() {
  return (
    <div>
      <div className='flex'>
          <h3>Manage Thread</h3>
         <img src={Information} alt="" className=''/>
        </div>
      <LaporanThread/>
      <SearchBar/>
    <div className='flex justify-center mt-3'>
         <table>
        <tbody>
          <tr>
            <td className='pr-[15px]'>
              <img src={Avatar} alt="Avatar Kampus" id='Avatar Kampus' />
            </td>
            <td className='pr-[810px]'>
              <h4>10 Universitas Terbaik Di Indonesia</h4>
              <h5>Lorem Ipsum</h5>
            </td>
            <td className='pr-[20px]'>
                <ViewButton/>
                </td>
                <td className='pr-[20px]'>
                <DeleteButton/>
                </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default TableThread