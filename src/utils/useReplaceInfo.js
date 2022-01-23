import * as React from "react";

const useDataChange = (data) => {
  const [currentData, setCurrentData] = React.useState(data.overview);
  const [isChanging, setIsChanging] = React.useState(false);
  const [currentTab, setCurrentTab] = React.useState("overview");
  const prevTab = React.useRef("overview");
  const isTransitionend = React.useRef(true);
  const transitionDuration = 2000;
  const halfTransitionDuration = transitionDuration / 2;

  /**
   * Function to invoke changeContent() only when given conditions are met.
   * @param    {Event} event    Event from user click on element
   */
  const handleClick = (event) => {
    let currTab = event.target.dataset.type;
    if (!isTransitionend.current || prevTab.current === currTab) return false;

    changeContent(currTab);
  };

  /**
   * Function to change data.
   * @param    {String} currTab    Name of current tab
   */
  const changeContent = (currTab) => {
    prevTab.current = currTab;
    isTransitionend.current = false;
    setIsChanging(true);
    setCurrentTab(currTab);

    setTimeout(() => {
      isTransitionend.current = true;
      setIsChanging(false);
    }, transitionDuration);

    setTimeout(() => {
      setCurrentData(data[currTab]);
    }, halfTransitionDuration);
  };

  return [handleClick, currentData, currentTab, isChanging];
};

export default useDataChange;
