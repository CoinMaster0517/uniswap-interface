import { Trans } from '@lingui/macro'
import searchIcon from 'assets/svg/search.svg'
import xIcon from 'assets/svg/x.svg'
import { useAtom } from 'jotai'
import styled from 'styled-components/macro'

import { MEDIUM_MEDIA_BREAKPOINT } from '../constants'
import { filterStringAtom } from '../state'
const ICON_SIZE = '20px'

const SearchBarContainer = styled.div`
  display: flex;
  flex: 1;
`
const SearchInput = styled.input`
  background: no-repeat scroll 7px 7px;
  background-image: url(${searchIcon});
  background-size: 20px 20px;
  background-position: 12px center;
  background-color: ${({ theme }) => theme.backgroundSurface};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.backgroundOutline};
  height: 100%;
  width: min(300px, 100%);
  font-size: 16px;
  padding-left: 40px;
  color: ${({ theme }) => theme.textSecondary};

  :hover {
    background-color: ${({ theme }) => theme.backgroundModule};
  }

  :focus {
    outline: none;
    background-color: ${({ theme }) => theme.backgroundSurface};
    border-color: ${({ theme }) => theme.accentActionSoft};
  }

  ::placeholder {
    color: ${({ theme }) => theme.textTertiary};
  }
  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
    height: ${ICON_SIZE};
    width: ${ICON_SIZE};
    background-image: url(${xIcon});
    margin-right: 10px;
    background-size: ${ICON_SIZE} ${ICON_SIZE};
    cursor: pointer;
  }

  @media only screen and (max-width: ${MEDIUM_MEDIA_BREAKPOINT}) {
    width: 100%;
  }
`

export default function SearchBar() {
  const [filterString, setFilterString] = useAtom(filterStringAtom)
  return (
    <SearchBarContainer>
      <Trans
        render={({ translation }) => (
          <SearchInput
            type="search"
            placeholder={`${translation}`}
            id="searchBar"
            autoComplete="off"
            value={filterString}
            onChange={({ target: { value } }) => setFilterString(value)}
          />
        )}
      >
        Filter tokens
      </Trans>
    </SearchBarContainer>
  )
}
