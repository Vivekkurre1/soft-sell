export type Theme = {
  name: string;
  id: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
};

export const themes: Theme[] = [
  {
    name: 'Default Blue',
    id: 'default',
    colors: {
      primary: 'blue',
      secondary: 'teal',
      accent: 'indigo',
    },
  },
  {
    name: 'Forest Green',
    id: 'forest',
    colors: {
      primary: 'emerald',
      secondary: 'green',
      accent: 'lime',
    },
  },
  {
    name: 'Royal Purple',
    id: 'royal',
    colors: {
      primary: 'purple',
      secondary: 'violet',
      accent: 'fuchsia',
    },
  },
  {
    name: 'Sunset Orange',
    id: 'sunset',
    colors: {
      primary: 'orange',
      secondary: 'amber',
      accent: 'red',
    },
  },
];