const changeToggleChooseItem = (currentItems, chooseItemId) => (
  currentItems.map((item) => {
    if (item.id === chooseItemId) {
      return {
        ...item,
        showInfo: !item.showInfo,
      };
    }

    return item;
  })
);

export default changeToggleChooseItem;
