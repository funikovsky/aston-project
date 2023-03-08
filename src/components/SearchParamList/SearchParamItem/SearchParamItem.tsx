import { CustomLink } from '../../CustomLink/CustomLink';

interface Props {
  searchParamName: string;
}

export const SearchParamItem = ({ searchParamName }: Props) => {
  return <CustomLink href={`/history/${searchParamName}`}>{searchParamName}</CustomLink>;
};
