import React, { useState, useEffect } from 'react';
import { Card, List } from 'antd';

type FBPostInfo = { message: string, id: string };

function CyworldMiniHomeLatestPost() {
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setposts] = useState<Array<FBPostInfo>>([]);
  useEffect(() => {
    setLoading(true);
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
    setLoading(false);
  }, [posts]);

  const postMessages = posts.map(
    post => String(post?.message),
  );

  return (
    <Card size="small" title="Latest Article(s)">
      <List
        size="small"
        loading={loading}
        bordered
        dataSource={postMessages}
        renderItem={message => <List.Item>{message}</List.Item>}
      />
    </Card>
  );
}

export default CyworldMiniHomeLatestPost;