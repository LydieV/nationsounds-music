import React, { useState } from "react";
import PropTypes from "prop-types";

export const Tab = ({ title, onClick, active = false }) => {
  const onClickTab = e => {
    e.preventDefault(0);
    onClick(title);
  };

  return (
      <div>
        <li className={`${active ? "active" : ""} tab-item`} onClick={onClickTab}>
        {title}
      </li>
      </div>
      
  );
};

export default function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.title);

  const onClickTabItem = tab => setActiveTab(tab);

  return (
    <div>
      <div className="tabs">
        <ul className="tab-list">
          {children.map(tab => {
            const { title } = tab.props;

            return (
              <Tab
                key={title}
                title={title}
                onClick={onClickTabItem}
                active={title === activeTab ? true : false}
              />
            );
          })}
        </ul>

        <div className="tab-content">
          {children.map(tab => {
            if (tab.props.title !== activeTab) return undefined;

            return tab.props.children;
          })}
        </div>
      </div>
    </div>
  );
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired
};