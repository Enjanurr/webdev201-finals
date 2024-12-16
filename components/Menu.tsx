import React from 'react';
import Separator from './Separator';
import MenuItem from './MenuItem';
const menuItems = [
  {
    imgSrc: '/assets/menu/coffee-1.png',
    name: 'Expresso',
    description: 'Rich and bold shot of coffee',
    price: 3.3,
  },
  {
    imgSrc: '/assets/menu/coffee-2.png',
    name: 'Capuccino',
    description: 'Expresso with steamed milk and foam',
    price: 4.3,
  },
  {
    imgSrc: '/assets/menu/coffee-3.png',
    name: 'Latte',
    description: 'Expresso with steamed milk',
    price: 4.5,
  },
  {
    imgSrc: '/assets/menu/coffee-4.png',
    name: 'Americano',
    description: 'Expresso with hot water',
    price: 4.3,
  },
  {
    imgSrc: '/assets/menu/coffee-5.png',
    name: 'Mocha',
    description: 'Expresso with steamed milk and chocolate',
    price: 4.4,
  },
  {
    imgSrc: '/assets/menu/coffee-1.png',
    name: 'Machiato',
    description: 'Expresso with a dallop of foam',
    price: 5.3,
  },
  {
    imgSrc: '/assets/menu/coffee-2.png',
    name: 'Flat white',
    description: 'Expresso with microfoam milk',
    price: 4.3,
  },
  {
    imgSrc: '/assets/menu/coffee-3.png',
    name: 'Iced coffee',
    description: 'Chilled coffe over ice',
    price: 6.3,
  },
  {
    imgSrc: '/assets/menu/coffee-4.png',
    name: 'Affogato',
    description: 'Expresso shot over vanilla ice cream',
    price: 5.3,
  },
  {
    imgSrc: '/assets/menu/coffee-5.png',
    name: 'Irish coffee',
    description: 'Coffee with Irish whiskey and cream',
    price: 5.5,
  },
];
const Menu = () => {
  return (
    <section className="pt-12 pb-16 xl:pt-16 xl:pb-36">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-12 xl:mb-24">
          <h2 className="h2 text-center">Our Menu</h2>
          <div className="mb-4">
            <Separator bg="accent" />
          </div>
          <p className="text-center max-w-[620px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sed
            vero ex, consectetur ullam atque ipsum in eius optio. Hic.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-12 xl:gap-24">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
            {menuItems.map((item, index) => {
              const { name, description, price, imgSrc } = item;
              return (
                <MenuItem
                  name={name}
                  description={description}
                  price={price}
                  imgSrc={imgSrc}
                  key={index}
                />
              );
            })}
          </div>
          <button className="btn">View full menu</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
