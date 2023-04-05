export const getSearchResults = <T, >(searchValue: string, searchBy: keyof T, searchEntities: T[]) => {
  return searchEntities.filter(entity => {
    const propertyValue = entity[searchBy];

    searchValue = searchValue.toLowerCase();

    return (
      // It will check if value is string
      typeof propertyValue === 'string'
      // Transform this value to lower case and check if it includes searchValue
      && propertyValue.toLowerCase().includes(searchValue));
  });
};
