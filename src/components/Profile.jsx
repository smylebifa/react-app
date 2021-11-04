import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>

            <div>
                <img src="https://avatars.mds.yandex.net/i?id=140ef19292aa3f720656a089832abd3e-4714015-images-thumbs&n=13&exp=1" alt="Logo" />
            </div>

            <div>
                ava + description
            </div>

            <div>
                My posts
                <div>
                    New post
                </div>

                <div className='posts'>
                    <div className='item'>
                        post 1
                    </div>

                    <div className='item'>
                        post 2
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Profile;