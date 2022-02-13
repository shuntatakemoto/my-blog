import base64url from 'base64url';

export const createOgImage = (baseImageUrl: string, title: string) => {
  const ogImageUrl = `${baseImageUrl}?w=1200&h=630&mark-y=80&blend64=${base64url(
    `https://assets.imgix.net/~text?txtsize=64&w=1120&txt-align=center,middle&txtfont=Hiragino%20Sans%20W6&txt-track=2&txt64=${base64url(
      title,
    )}`,
  )}&blend-mode=normal&blend-align=center,middle&blend-y=220`;

  return { ogImageUrl };
};
