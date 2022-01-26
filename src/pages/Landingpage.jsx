import {Moviesgrid }from '../componets/Moviesgrid'
import Search from "../componets/Search"
import { useQuery } from "../Hooks/useQuery";
import {useDebounce} from "../Hooks/useDebounce";

export function Landingpage() {
    const query = useQuery();
    const search = query.get("search");

    const debouncedSearch = useDebounce(search, 300);
    return (
        <div>
            <Search />
            <Moviesgrid key={search}  search={debouncedSearch}/>
        </div>
    );
}

export default Landingpage
