const convertJSON = ({ type, obj }) => {
  if (type === 'jsonToObj') return JSON.parse(obj);
  else if (type === 'objToJson') return JSON.stringify(obj);
};

export default convertJSON;
