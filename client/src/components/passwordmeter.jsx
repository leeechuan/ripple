import React from 'react';

const PasswordStrengthMeter = ({ password }) => {



  const checkMinLength = (password) => password.length >= 8;
  const checkMinLowercase = (password) => /[a-z]/.test(password);
  const checkMinUppercase = (password) => /[A-Z]/.test(password);
  const checkMinNumber = (password) => /\d/.test(password);
  const checkMinSymbol = (password) => /[^a-zA-Z0-9]/.test(password);



  return (

    <div className="password-strength-meter text-default">
        <ul>
        
            <li className='flex items-center'>
            <i className={checkMinLength(password) ? 'fa fa-check' : 'fa fa-times'}></i>
            <div>Minimum length of 8</div>
            </li>


            <li className='flex items-center'>
            <i className={checkMinLowercase(password) ? 'fa fa-check' : 'fa fa-times'}></i>
            <div>Minimum one lowercase letter</div>
            </li>


            <li className='flex items-center'>
            <i className={checkMinUppercase(password) ? 'fa fa-check' : 'fa fa-times'}></i>
            <div>Minimum one uppercase letter</div>
            </li>


            <li className='flex items-center'>
            <i className={checkMinNumber(password) ? 'fa fa-check' : 'fa fa-times'}></i>
            <div>Minimum one number</div>
            </li>


            <li className='flex items-center'>
            <i className={checkMinSymbol(password) ? 'fa fa-check' : 'fa fa-times'}></i>
            <div>Minimum one symbol</div>
            </li>

        </ul>

  </div>
  );
  
};

export default PasswordStrengthMeter;