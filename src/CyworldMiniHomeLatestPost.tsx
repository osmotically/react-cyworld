import React, { useState, useEffect } from 'react';

type FBPostInfo = { message: string, id: string };

function CyworldMiniHomeLatestPost() {
  const [posts, setposts] = useState<Array<FBPostInfo>>([]);
  useEffect(() => {
    if (posts.length === 0) {
      FB.api(
        '/me/posts',
        'get',
        { "fields": "message", "limit": "10" },
        function (
          response: {
            data: Array<FBPostInfo>,
            page: { next: string, previous: string },
          },
        ) {
          setposts(response?.data ?? []);
        }
      );
    }
  });
  const postMessages = posts.map(
    post => (<div key={post?.id}>{post?.message}</div>),
  );

  return (
    <>
      {postMessages.length === 0 ? 'Loading (replace this with a spinner' : postMessages}
    </>
  );
}

export default CyworldMiniHomeLatestPost;