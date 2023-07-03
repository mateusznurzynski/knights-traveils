const Node = (position, connections = []) => {
  if (!position) {
    return false;
  }
  return {
    position: [...position],
    connections,
  };
};

export default Node;
