import React from 'react'

type Themes = "dark" | 'light';

const useDarkMode = (): [Themes, Themes, React.Dispatch<React.SetStateAction<Themes>>] => {
  const [theme, setTheme] = React.useState<Themes>('dark');
  const colorTheme: Themes = (theme === 'dark') ? 'light' : 'dark';

  React.useEffect(() => {
    const root = document.documentElement as HTMLElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  return [colorTheme, theme, setTheme];
}

export default useDarkMode