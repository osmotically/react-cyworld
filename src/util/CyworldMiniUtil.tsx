const getTagColorByPostType = (postType: String): String => {
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
};

export default getTagColorByPostType;