// REACT PROPS EXERCISE
// 6c.
import Bonus from "../bonus/Bonus";
// TWO DOTS TO GO UP TWICE!!! THAT's ALL I HAD WRONG.

// 1a., 3b., and 3d.
function Exercise({good="Great", bad="Not Great"}){ 
    // 2a.
    return (
        <div>
            {/* 3c. */}
            <h1>{good}</h1>
            <h1>{bad}</h1>
            <Bonus />
        </div>
    );
}

// 1b. 
export default Exercise;