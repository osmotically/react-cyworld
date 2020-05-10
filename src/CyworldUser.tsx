import React, { useContext, useState } from 'react';
import { UserInfo } from './UserInfo';

function CyworldUser() {
    const [posts, setposts] = useState<Array<{ message: string, id: string }>>([]);
    const userInfo = useContext(UserInfo);
    if (userInfo === null) {
        return <div>Please Log In First!</div>
    }

    if (posts.length === 0) {
        FB.api(
            '/me/posts',
            'get',
            { "fields": "message", "limit": "10" },
            function (
                response: {
                    data: Array<{ message: string, id: string }>,
                    page: { next: string, previous: string },
                },
            ) {
                setposts(response?.data ?? []);
            }
        );
    }

    const postMessages = posts.map(
        post => (<div key={post?.id}>{post?.message}</div>),
    );

    return (
        <>
            <img src={String(userInfo?.picture?.data?.url)} alt="profile_image" />
            {userInfo?.name}
            {postMessages}
        </>
    );
}

export default CyworldUser;