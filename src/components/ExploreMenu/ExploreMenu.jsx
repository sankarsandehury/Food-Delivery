import React from 'react'
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
      Select from a wide menu that offers a mouthwatering selection of foods.Our goal is to fulfil your cravings and improve your eating experience, one mouthwatering dish at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} className="explore-menu-list-item">
              <img className={category===item.menu_name?'active':''} src={item.menu_image} alt="item_image" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
