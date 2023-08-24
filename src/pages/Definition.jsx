import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";

export default function Dictionary() {
  const search = useParams();
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search.search)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSearchResult(data);
      });
  }, []);
  return (
    <>
      <h1 className="text-xl capitalize font-bold">{search.search}</h1>
      {searchResult.length ? (
        searchResult.map((meaning) => {
          return (
            <>
              <ul key={v4()} className="list-decimal p-2 list-inside">
                {meaning.meanings.map((definitions) => {
                  return (
                    <>
                      <h4 className="capitalize font-bold">
                        {definitions.partOfSpeech}
                      </h4>
                      <ul>
                        {definitions.definitions.map((def) => {
                          return (
                            <>
                              <li key={v4()}>{def.definition}</li> <br />
                            </>
                          );
                        })}
                      </ul>
                    </>
                  );
                })}
              </ul>
            </>
          );
        })
      ) : (
        <>
          <div className="p-2">
            <h4 className="font-bold "> {searchResult.title}</h4>
            <p className="px-2">{searchResult.message}</p>
            <p className="px-2">{searchResult.resolution}</p>
          </div>
        </>
      )}
    </>
  );
}
