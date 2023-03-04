import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  url: string;
}

export const ImageContainer = ({ url }: Props) => {
  return (
    <div>
      <img src={url} />
    </div>
  );
};
