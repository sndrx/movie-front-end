import slice from "./reducers";

import * as moviesSelectors from "./selectors";
import * as moviesOperations from "./operations";
import * as moviesctions from "./actions";

export {
    moviesSelectors,
    moviesOperations,
    moviesctions,
};

export default slice.reducer;
