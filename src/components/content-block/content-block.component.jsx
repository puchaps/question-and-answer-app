import './content-block.styles.scss';

import ContentPreview from '../content-preview/content-preview.component';

const ContentBlock = () => {
  return (
    <div className="content-block">
      <ContentPreview/>
    </div>
  );
};

export default ContentBlock;