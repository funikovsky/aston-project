import { CustomLink } from '../../CustomLink/CustomLink';

interface Props {
  searchParamName: string;
  dateOfSearch: string;
}

export const SearchParamItem = ({ searchParamName, dateOfSearch }: Props) => {
  return (
    <CustomLink href={`/history/${searchParamName}`}>
      {searchParamName}: {dateOfSearch}
    </CustomLink>
  );
};
