import { useEffect, useState } from "react";
import { v4 } from "uuid";

export default function Dictionary() {
  const [word, setWord] = useState([""]);
  const [searchWord, setSearchWord] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    searchWord
      ? fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + searchWord)
          .then((response) => response.json())
          .then((data) => {
            if (data[0]) {
              setSearchResult((prevSearchResult) => {
                return data[0].meanings;
              });
            } else {
              setSearchResult([]);
            }
          })
          .catch((err) => console.error(err))
      : console.log(searchWord);
  }, [searchWord]);
  return (
    <>
      <form
        className="flex justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          setSearchWord(word);
        }}
      >
        <input
          className="border px-4 py-2 rounded-sm"
          type="text"
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
        <button type="submit" className="border px-4 py-2 rounded-sm">
          Search
        </button>
      </form>
      {
        <>
          <h1 className="flex justify-center">
            Here is the defination for {word}:
          </h1>
          {searchResult.length
            ? searchResult.map((meaning) => {
                return (
                  <>
                    <h4 className=" capitalize font-bold">
                      {meaning.partOfSpeech}
                    </h4>
                    <ul key={v4()} className="list-decimal p-2 list-inside">
                      {meaning.definitions.map((def) => {
                        return (
                          <>
                            <li key={v4()}>{def.definition}</li> <br />
                          </>
                        );
                      })}
                    </ul>
                  </>
                );
              })
            : "No Record Found"}
        </>
      }
    </>
  );
}
