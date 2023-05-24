import React from 'react'
import Trash from '../../src/assets/Trash 1.png';
import Avatar from '../../src/assets/Avatar.png'
import Eye from '../../src/assets/Eye.png'

function Table_Thread() {
  return (
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
              <a href="#" className="btn" id='buttonlihat'>
                <img src={Eye} alt="Eye Logo" id='EyeLogo'/>
                 <p> Lihat <br /> Thread </p>
                </a>
                </td>
                <td>
                  <a href="#" className="btn" id='buttonhapus'>
                <img src={Trash} alt="Trash Logo" id='TrashLogo'/>
                <p> Hapus <br /> Thread </p>
                </a>
                </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table_Thread