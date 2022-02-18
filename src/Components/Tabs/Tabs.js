import { useState } from "react";
import Tab from "./Tab/Tab";
import './Tabs.css';

export default function Tabs({ options = [] }) {
  const [activeTab, setActiveTab] = useState({ label: 'Tab1', active: '1' });
  const setTab = (tab) => () => {
    setActiveTab(tab);
  }
  return (
    <div className="tabs">
      {options.map((option) => (
        <Tab
          key={option.label}
          active={activeTab.value === option.value}
          onClick={setTab(option)}
        >
          {option.label}
        </Tab>
      ))}
    </div>
  )
}