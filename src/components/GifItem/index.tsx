interface Props {
  url: string;
}

export const GiftItem = ({ url }: Props): JSX.Element => {
  return (
    <div>
      <img src={url} />
    </div>
  );
};
