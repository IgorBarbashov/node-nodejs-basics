export const parseEnv = () => {
  const { stdout } = process;

  const result = Object.entries(process.env).reduce((acc, [name, value]) => {
    return name.startsWith('RSS_') ? `${acc}; ${name}=${value}` : `${acc}`;
  }, '');
  stdout.write(result.slice(2));
};
