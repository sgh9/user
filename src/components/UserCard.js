import React from 'react';
import userAvatar from '../assests/user.png';
import nameIcon from '../assests/user-03-svgrepo-com.svg';
import cityIcon from '../assests/pointer-svgrepo-com.svg';
import emailIcon from '../assests/email-1573-svgrepo-com.svg';
import closeIcon from '../assests/close-square-svgrepo-com.svg';

const UserCard = ({ user, closeUser, activeUsers }) => {
    const { name, email, address } = user;
    const { city } = address;

    return (
        <div className='user'>
            {
                activeUsers > 3 && (
                    <button className='close-btn' onClick={()=> closeUser(user.id)}>
                        <img src={closeIcon} alt={"ADD"} width={"100%"}/>
                    </button>
                )
            }


            <div className="user__header">
                <img src={userAvatar} alt={user} className='user__avathar'/>
            </div>
            <div className="user__body">
                    <h3 className='user__name'>{name}</h3>

                    <div className='list'>
                        <img src={emailIcon} alt={user} width={25}/>
                        <p>
                        {email}
                        </p>
                     
                    </div>
            </div>
            <div className="user__footer">
                <div  className='list'>
                    <img src={cityIcon} alt={user} width={25}/>
                    <p>
                        {city}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserCard;