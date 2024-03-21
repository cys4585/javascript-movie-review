import generateSearchBox from "../common/generateSearchBox";

export type SearchType = (query: string) => void;

interface MovieSearchBoxProps {
  searchBoxSubmitHandler: SearchType;
}

class MovieSearchBox {
  private static PLACEHOLDER = "검색";

  props;
  $element;

  constructor(props: MovieSearchBoxProps) {
    this.props = props;

    this.$element = generateSearchBox({
      placeholder: MovieSearchBox.PLACEHOLDER,
      buttonText: MovieSearchBox.PLACEHOLDER,
      onSubmitHandler: this.searchByQuery.bind(this),
    });
  }

  private searchByQuery(e: Event) {
    e.preventDefault();

    if (e.target instanceof HTMLFormElement) {
      const query = e.target["query"].value;
      this.props.searchBoxSubmitHandler(query);
    }
  }
}

export default MovieSearchBox;
