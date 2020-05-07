const iterAst = (ast) => {
  switch (ast.type) {
    case 'tagsList':
      return `${ast.body.map(iterAst).join('')}`;
    case 'tag':
      // eslint-disable-next-line no-case-declarations
      const attrsLine = Object.keys(ast.options).reduce((acc, key) => (
        `${acc} ${key}="${ast.options[key]}"`
      ), '');
      return `<${ast.name}${attrsLine}>${iterAst(ast.body)}</${ast.name}>`;
    default:
      return ast;
      // nothing;
  }
};

const iter = (data) => {
  if (data[0] instanceof Array) {
    return { type: 'tagsList', body: data.map(iter) };
  }

  let body;
  let options;
  if (data.length === 3) {
    [, options, body] = data;
  } else if (data.length === 2) {
    [, body] = data;
    options = [];
  }

  const processedBody = body instanceof Array ? iter(body) : body;

  return {
    type: 'tag', name: data[0], body: processedBody, options,
  };
};
// { type: tagList, body: [ { type: tag, name: <>, body: <>, options: {} ] }

export default {
  build(data) {
    const result = iter(data);
    return iterAst(result);
  },
};
