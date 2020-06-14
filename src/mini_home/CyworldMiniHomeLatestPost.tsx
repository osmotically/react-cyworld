import React, { useState, useEffect } from 'react';
import { Card, List, Tag } from 'antd';

type PostInfo = { message: string, type: string, id: string };

function CyworldMiniHomeLatestPost() {
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setposts] = useState<Array<PostInfo>>([]);
  useEffect(() => {
    setLoading(true);
    if (posts.length === 0) {
      FB.api(
        '/me/posts',
        'get',
        { "fields": "message, type", "limit": "10" },
        function (
          response: {
            data: Array<PostInfo>,
            page: { next: string, previous: string },
          },
        ) {
          setposts(response?.data ?? []);
        }
      );
    }
    setLoading(false);
  }, [posts]);

  // Put this in a seperate util js if needed
  function getTagColorByPostType(postType: String): String {
    switch (postType) {
      case 'status':
        return 'magenta';
      case 'link':
        return 'blue';
      case 'photo':
        return 'gold';
      case 'video':
        return 'purple';
      default:
        return 'cyan';
    }
  }

  return (
    <Card size="small" title="Updated news">
      <List
        size="small"
        loading={loading}
        bordered
        dataSource={posts}
        renderItem={post =>
          <List.Item key={post?.id}>
            <Tag color={String(getTagColorByPostType(post?.type))}>{post?.type}</Tag>
            {post?.message}
          </List.Item>
        }
      />
    </Card>
  );
}

export default CyworldMiniHomeLatestPost;