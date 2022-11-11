import React from 'react';
import { Link } from 'react-router-dom';
import datatestids from '../utils/dataTestIds';
import iconBike from '../imgs/iconBike.svg';
import iconExit from '../imgs/iconExit.svg';
import iconUser from '../imgs/iconUser.svg';

function NavBarAdm() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="flex px-10 py-4">
      <h1
        className="text-center md:text-4xl text-2xl
      text-[#404140] font-bold tracking-wider mr-[35px]"
      >
        <span className="text-[#f81127] md:text-4xl text-2xl">I</span>
        Drinks
      </h1>
      <nav className="flex items-center justify-between grow">
        <div className="flex">
          <Link
            to="/admin/manage"
            data-testid={ datatestids[12] }
            className={ `
              mr-8 bg-[#F81127] border w-[300px]
              items-center rounded-full py-2 flex justify-center text-white text-[20px]` }
          >
            <img className="mr-4" src={ iconBike } alt="iconBike" />
            GERENCIAR USUÁRIOS
          </Link>
        </div>

        <div className="flex text-[20px]">
          <Link className="mr-8 flex" data-testid={ datatestids[13] } to="#t">
            <img className="mr-2" src={ iconUser } alt="iconUser" />
            {user.name}
          </Link>
          <Link
            className="flex"
            data-testid={ datatestids[14] }
            to="/login"
            onClick={ () => { localStorage.removeItem('user'); } }
          >
            <img className="mr-1" src={ iconExit } alt="iconExit" />
            Sair
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBarAdm;
