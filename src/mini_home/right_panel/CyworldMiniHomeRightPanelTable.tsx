import React, { useState, useEffect } from 'react';
import { Tag, Spin } from 'antd';

import styles from '../../Cyworld.module.css';
import getTagColorByPostType from '../../util/CyworldMiniUtil';

type PostUpdateInfo = { updated_time: string, type: string, id: string };

const LATEST_POST_TIME = 604800000; // 7 days

function CyworldMiniHomeRightPanelTable() {
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setposts] = useState<Array<PostUpdateInfo>>([]);
  useEffect(() => {
    setLoading(true);
    if (posts.length === 0) {
      FB.api(
        '/me/posts',
        'get',
        { "fields": "updated_time, type" },
        function (
          response: {
            data: Array<PostUpdateInfo>,
            page: { next: string, previous: string },
          },
        ) {
          setposts(response?.data ?? []);

        }
      );
    }
    setLoading(false);
  }, [posts]);

  const currentTime = new Date().getTime();
  const postTypes: { [key: string]: { new: number, total: number } } = {};
  posts.forEach(
    post => {
      const type = post?.type ?? 'N/A';
      const updatedTime = new Date(post?.updated_time ?? 0).getTime();
      const isUpToDate = (currentTime - LATEST_POST_TIME) < updatedTime;
      const newCount = postTypes?.[type]?.new ?? 0;
      const totalCount = postTypes?.[type]?.total ?? 0;
      postTypes[type] = { new: isUpToDate ? newCount + 1 : newCount, total: totalCount + 1 };
    }
  );

  const tableRows = Object.keys(postTypes).map(
    postType => (
      <td className={styles.homeRightPanelTableTd}>
        <span className={styles.homeRightPanelTableFont}>
          <Tag
            className={styles.homeRightPanelPostsListTag}
            color={String(getTagColorByPostType(postType))}
          >
            {postType}
          </Tag>{`${postTypes[postType].new}/${postTypes[postType].total}`}
        </span>
      </td>
    ),
  );
  const emptyCell = <td className={styles.homeRightPanelTableTd}></td>;

  // I'm the worst but dont want to set up a complex mapping just for 6 fixed cells
  return (
    <table className={styles.homeRightPanelTable}>
      <tr>
        {loading ? <Spin size="small" /> : tableRows?.[0] ?? emptyCell}
        {tableRows?.[1] ?? emptyCell}
      </tr>
      <tr>
        {tableRows?.[2] ?? emptyCell}
        {tableRows?.[3] ?? emptyCell}
      </tr>
      <tr>
        {tableRows?.[4] ?? emptyCell}
        {tableRows?.[5] ?? emptyCell}
      </tr>
    </table>
  );
}

export default CyworldMiniHomeRightPanelTable;