export const changeToggleChoosedItem = (currentItems, choosedItemId) => {
  return currentItems.map( item => {
    if (item.id === choosedItemId) {
      return {
        ...item,
        showInfo: !item.showInfo
      };
    };

    return item;
  });
};