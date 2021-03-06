import React, { useState, useEffect } from 'react';
import { Tag, Skeleton } from 'antd';

import styles from '../../Cyworld.module.css';
import getTagColorByPostType from '../../util/CyworldMiniUtil';

type PostInfo = { message: string, type: string, id: string };

function CyworldMiniHomeRightPanelPosts() {
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setposts] = useState<Array<PostInfo>>([]);
  useEffect(() => {
    setLoading(true);
    if (posts.length === 0) {
      FB.api(
        '/me/posts',
        'get',
        { "fields": "message, type", "limit": "4" },
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

  const postList = posts.map(
    post =>
      <li style={{ marginBottom: '5px' }}>
        <Tag
          className={styles.homeRightPanelPostsListTag}
          color={String(getTagColorByPostType(post?.type))}
        >
          {post?.type}
        </Tag>
        {post?.message}
      </li>
  );

  return (
    <div style={{ width: '50%' }}>
      <span className={styles.homeRightPanelPostsTitle}>Updated news</span>
      <span className={styles.homeRightPanelPostsSubtitle}>TODAY HISTORY</span>
      <div className={styles.homeRightPanelPostsDivider} />
      {loading ?
        <Skeleton /> :
        <ul className={styles.homeRightPanelPostsList}>
          {postList}
        </ul>
      }
    </div>
  );
}

export default CyworldMiniHomeRightPanelPosts;