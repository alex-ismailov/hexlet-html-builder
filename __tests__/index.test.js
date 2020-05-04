import HexletHtmlBuilder from '../src/index';

describe('htmlBuilder', () => {
  test('build', () => {
    const data = [
      ['meta', [
        ['title', 'hello, hexlet!'],
      ]],
      ['body', [
        ['h1', 'html builder example', { class: 'header' }],
      ]],
    ];

    const result = HexletHtmlBuilder.build(data);
    const expected = `<meta><title>hello, hexlet!</title></meta>
    <body><h1 class='header'>html builder example</h1></body>`;

    expect(result).toBe(expected);
  });
});
