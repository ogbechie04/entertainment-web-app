function useSearch(data, searchTerm) {
  if (!searchTerm) {
    return data;
  }

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filtered;
}

export default useSearch;
