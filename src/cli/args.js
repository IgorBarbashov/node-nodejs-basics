export const parseArgs = () => {
  const { argv, stdout } = process;
  const args = argv.slice(2);

  const result = args.reduce((acc, el, i) => {
    return i % 2 === 0 ? `${acc}, ${el.slice(2)} is ` : `${acc}${el}`;
  }, '');
  stdout.write(result.slice(2));
};
