import { Search as SearchIcon } from "@/Assets/Search"
import { color } from "@/Styles"
import { useState } from "react"
import styled from "styled-components"

interface SearchProps {
  placeholder?: string
}

const Search = ({ placeholder }: SearchProps) => {

  const [search, setSearch] = useState<string>('')

  return (
    <SearchContainer>
      <Input
        value={search}
        placeholder={placeholder}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconWrap>
        <SearchIcon
          size={18}
          color={color.gray[500]}
        />
      </IconWrap>
    </SearchContainer>
  )
}

export default Search

const SearchContainer = styled.div`
position: relative;
width: 100%;
`

const Input = styled.input`
width: 100%;
padding: 8px 12px;
border: none;
border-radius: 8px;
background-color: ${color.gray[100]};
`

const IconWrap = styled.div`
position: absolute;
top: 58%;
right: 12px;
transform: translateY(-50%);
pointer-events: none;
`