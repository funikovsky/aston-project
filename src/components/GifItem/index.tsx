interface Props {
  url: string;
}

export const GiftItem = ({ url }: Props) => {
  return (
    <div>
      <img src={url} />
    </div>
  );
};
