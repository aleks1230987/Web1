import { useState } from 'react';

const CheckTitle = ({ data }) => {
  const [activeTitle, setActiveTitle] = useState(null);

  const handleTitleClick = (title) => {
    setActiveTitle(activeTitle === title ? null : title);
  };

  return (
    <div className="checkTitle">
      {data.map((item, index) => {
        const title = Object.keys(item)[0];
        const content = item[title];
        
        return (
          <div key={index} className="checkTitle-item">
            <div className="checkTitle-title" onClick={() => handleTitleClick(title)}>
              {title}
            </div>
            {activeTitle === title && (
              <div className="checkTitle-content">
                {content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CheckTitle;